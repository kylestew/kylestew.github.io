import { i as isPlainObject } from './is-plain-object-24968a48.js';
import { D as DEFAULT_SAMPLES } from './sample-d7a90011.js';
import { b as eqDelta, d as dist, c as copyVectors } from './dist-d1b6a469.js';
import { a as closestPointPolyline, c as closestPointSegment, b as closestT, f as farthestPointSegment } from './line-33765adb.js';
import { f as fit01 } from './fit-abff9224.js';
import { a as distSq } from './empty-f956d7b3.js';
import { a as mixN } from './mixn-930ba9a4.js';
import { n as normalize } from './normalize-238b0958.js';
import { s as set, f as sub } from './magsq-9dc23acb.js';
import { E as EPS } from './api-8453d590.js';

class Sampler {
    constructor(points, closed = false) {
        if (closed) {
            this.points = points.slice();
            this.points.push(points[0]);
        }
        else {
            this.points = points;
        }
        this.buildIndex();
    }
    totalLength() {
        const idx = this.index;
        return idx ? idx[idx.length - 1] : 0;
    }
    pointAt(t) {
        const pts = this.points;
        const n = pts.length - 1;
        if (n < 0) {
            return;
        }
        if (n === 0 || t <= 0) {
            return pts[0];
        }
        if (t >= 1) {
            return pts[n];
        }
        const idx = this.index;
        const t0 = t * idx[n];
        for (let i = 1; i <= n; i++) {
            if (idx[i] >= t0) {
                return mixN([], pts[i - 1], pts[i], (t0 - idx[i - 1]) / (idx[i] - idx[i - 1]));
            }
        }
    }
    closestPoint(p) {
        return closestPointPolyline(p, this.points);
    }
    closestT(p) {
        const { index, points } = this;
        const tmp = [];
        const closest = [];
        let minD = Infinity;
        let minI = -1;
        for (let i = 0, n = index.length - 1; i < n; i++) {
            if (closestPointSegment(p, points[i], points[i + 1], tmp)) {
                const d = distSq(p, tmp);
                if (d < minD) {
                    minD = d;
                    minI = i;
                    set(closest, tmp);
                }
            }
        }
        return minI >= 0
            ? fit01(closestT(p, points[minI], points[minI + 1]) || 0, index[minI], index[minI + 1]) / this.totalLength()
            : undefined;
    }
    segmentAt(t) {
        let i = this.indexAt(t);
        if (i === undefined) {
            return;
        }
        i = Math.max(1, i);
        return [this.points[i - 1], this.points[i]];
    }
    tangentAt(t, n = 1) {
        const seg = this.segmentAt(t);
        return seg ? normalize(null, sub([], seg[1], seg[0]), n) : undefined;
    }
    splitAt(t) {
        if (t <= 0 || t >= 1) {
            return [this.points];
        }
        const p = this.pointAt(t);
        if (!p)
            return;
        const i = Math.max(1, this.indexAt(t));
        const head = this.points.slice(0, i);
        const tail = this.points.slice(i);
        if (!eqDelta(head[i - 1], p)) {
            head.push(p);
        }
        if (!eqDelta(tail[0], p)) {
            tail.unshift(p);
        }
        return [head, tail];
    }
    splitNear(p) {
        const t = this.closestT(p);
        return t !== undefined ? this.splitAt(t) : undefined;
    }
    indexAt(t) {
        const pts = this.points;
        const n = pts.length - 1;
        if (n < 0) {
            return;
        }
        if (n === 0 || t <= 0) {
            return 0;
        }
        if (t >= 1) {
            return n;
        }
        const idx = this.index;
        const t0 = t * idx[n];
        for (let i = 1; i <= n; i++) {
            if (idx[i] >= t0) {
                return i;
            }
        }
    }
    sampleUniform(dist, includeLast = false, result = []) {
        const { index, points } = this;
        const total = this.totalLength();
        const delta = dist / total;
        const n = index.length;
        for (let t = 0, i = 1; t < 1; t += delta) {
            const ct = t * total;
            while (ct >= index[i] && i < n) {
                i++;
            }
            if (i >= n)
                break;
            const p = index[i - 1];
            result.push(mixN([], points[i - 1], points[i], (ct - p) / (index[i] - p)));
        }
        if (includeLast) {
            result.push(set([], points[points.length - 1]));
        }
        return result;
    }
    sampleFixedNum(num, includeLast = false, result) {
        return this.sampleUniform(this.totalLength() / num, includeLast, result);
    }
    buildIndex() {
        const idx = [0];
        const pts = this.points;
        const n = pts.length;
        for (let i = 0, j = 1; j < n; i = j, j++) {
            idx[j] = idx[i] + dist(pts[i], pts[j]);
        }
        this.index = idx;
    }
}

const resample = (pts, opts, closed = false, copy = false) => {
    if (opts !== undefined) {
        const sampler = new Sampler(pts, closed);
        return isPlainObject(opts)
            ? closed
                ? opts.dist
                    ? sampler.sampleUniform(opts.dist, opts.last)
                    : sampler.sampleFixedNum(opts.num || DEFAULT_SAMPLES, opts.last)
                : opts.dist
                    ? sampler.sampleUniform(opts.dist, opts.last !== false)
                    : sampler.sampleFixedNum(opts.num || DEFAULT_SAMPLES, opts.last !== false)
            : sampler.sampleFixedNum(opts || DEFAULT_SAMPLES, !closed);
    }
    return copy ? copyVectors(pts) : pts;
};

/**
 * {@link https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm}
 *
 * @param pts - points
 * @param eps - simplify threshold
 * @param closed - true, if closed shape (polygon)
 */
const simplify = (pts, eps = 0, closed = false) => {
    let num = pts.length;
    const visited = [];
    if (num <= 2)
        return pts.slice();
    if (closed && !eqDelta(pts[0], pts[num - 1], EPS)) {
        pts = pts.slice();
        pts.push(pts[0]);
        num++;
    }
    const $ = (from, to) => {
        visited[from] = visited[to] = true;
        if (to <= from + 1) {
            return;
        }
        const [maxIdx, maxD] = farthestPointSegment(pts[from], pts[to], pts, from + 1, to);
        if (maxIdx < 0 || maxD <= eps) {
            return;
        }
        $(from, maxIdx);
        $(maxIdx, to);
    };
    $(0, num - 1);
    const res = [];
    for (let i = 0, n = closed ? num - 1 : num; i < n; i++) {
        visited[i] && res.push(pts[i]);
    }
    return res;
};

export { Sampler as S, resample as r, simplify as s };
