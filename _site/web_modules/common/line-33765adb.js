import { e as empty, a as distSq } from './empty-f956d7b3.js';
import { g as dot, f as sub, h as magSq, s as set } from './magsq-9dc23acb.js';
import { a as mixN } from './mixn-930ba9a4.js';

/**
 * Computes the parametric distance `t` of point `p` projected onto line
 * `a` -> `b`, relative to `a`. I.e. the projection of `p` can then be
 * computed like so:
 *
 * @example
 * ```ts
 * mixN([], a, b, closestT(p, a, b))
 * ```
 *
 * If the return value is outside the closed [0,1] interval, the
 * projected point lies outside the line segment. Returns `undefined` if
 * `a` and `b` are coincident.
 *
 * - {@link closestPointLine}
 * - {@link closestPointSegment}
 *
 * @param p - query point
 * @param a - line point A
 * @param b - line point B
 */
const closestT = (p, a, b) => {
    const d = sub([], b, a);
    const l = magSq(d);
    return l > 1e-6 ? dot(sub([], p, a), d) / l : undefined;
};
/**
 * Returns closest point to `p` on line segment `a` -> `b`. By default,
 * if the result point lies outside the segment, returns a copy of the
 * closest end point. The result is written to the optional `out` vector
 * (or if omitted, a new one is created).
 *
 * If `insideOnly` is true, only returns the closest point iff it
 * actually is inside the segment. The behavior of this configurable via
 * the optional `eps` arg and by default includes both end points. This
 * function uses {@link closestT} to compute the parametric position of the
 * result point and determine if it lies within the line segment. If
 * `eps > 0`, the end points `a` and `b` will be excluded from the
 * match, effectively shortening the valid line segment from both ends,
 * i.e. the valid interval of the parametric position will be
 * [eps,1-eps]. If the result lies outside this interval, the function
 * returns `undefined`. Likewise, if `a` and `b` are coincident.
 *
 * @param p - query point
 * @param a - line point A
 * @param b - line point B
 * @param out - result
 * @param eps - epsilon value
 */
const closestPointSegment = (p, a, b, out, insideOnly = false, eps = 0) => {
    const t = closestT(p, a, b);
    if (t !== undefined && (!insideOnly || (t >= eps && t <= 1 - eps))) {
        out = out || empty(p);
        return t <= 0 ? set(out, a) : t >= 1 ? set(out, b) : mixN(out, a, b, t);
    }
};
const closestPointPolyline = (p, pts, closed = false, out = []) => {
    if (!pts.length)
        return;
    const tmp = [];
    const n = pts.length - 1;
    let minD = Infinity, i, j;
    if (closed) {
        i = n;
        j = 0;
    }
    else {
        i = 0;
        j = 1;
    }
    for (; j <= n; i = j, j++) {
        if (closestPointSegment(p, pts[i], pts[j], tmp)) {
            const d = distSq(p, tmp);
            if (d < minD) {
                minD = d;
                set(out, tmp);
            }
        }
    }
    return minD < Infinity ? out : undefined;
};
/**
 * Returns the index of the start point containing the segment in the
 * polyline array `points` farthest away from `p` with regards to the
 * line segment `a` to `b`. `points` is only checked between indices
 * `from` and `to` (not including the latter).
 *
 * @param a - line point A
 * @param b - line point B
 * @param points - points
 * @param from - start search index
 * @param to - end search index
 */
const farthestPointSegment = (a, b, points, from = 0, to = points.length) => {
    let maxD = -1;
    let maxIdx = -1;
    const tmp = empty(a);
    for (let i = from; i < to; i++) {
        const p = points[i];
        const d = distSq(p, closestPointSegment(p, a, b, tmp) || a);
        if (d > maxD) {
            maxD = d;
            maxIdx = i;
        }
    }
    return [maxIdx, Math.sqrt(maxD)];
};

export { closestPointPolyline as a, closestT as b, closestPointSegment as c, farthestPointSegment as f };
