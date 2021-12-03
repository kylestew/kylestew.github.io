import { i as illegalArgs } from './illegal-arguments-2af523c3.js';
import { e as divN, c as add, d as cross2 } from './divn-48ef128e.js';
import { e as empty, a as distSq } from './empty-f956d7b3.js';
import { b as closestT } from './line-33765adb.js';
import { s as sign } from './abs-15ac99f2.js';
import { E as EPS } from './api-8453d590.js';
import { c as clamp01 } from './interval-fde8b87f.js';
import { s as signedArea2, a as clockwise2 } from './clockwise-757eff92.js';
import { a as mixN } from './mixn-930ba9a4.js';
import { v as vop } from './emit-4620adbe.js';
import { i as isFunction } from './is-function-b13d3e65.js';
import { r as repeat, l as last, s as scan, m as mapcat } from './scan-c7864370.js';
import { t as transduce, b as reducer, p as push } from './zip-907b97a6.js';

const centroid = (pts, out) => {
    const num = pts.length;
    !num && illegalArgs("no points");
    !out && (out = empty(pts[0]));
    for (let i = num; i-- > 0;) {
        add(out, out, pts[i]);
    }
    return divN(out, out, num);
};

/**
 * Interprets given points as closed 2D polygon and computes its signed
 * area. If result is negative, the polygon is clockwise.
 *
 * @param pts - points
 */
const polyArea2 = (pts) => {
    const n = pts.length - 1;
    if (n < 2)
        return 0;
    let res = 0;
    let a = pts[n];
    let b = pts[0];
    for (let i = 0; i <= n; a = b, b = pts[++i]) {
        res += cross2(a, b);
    }
    return res / 2;
};

const pointInSegment = (p, a, b, eps = EPS) => {
    const t = closestT(p, a, b);
    return t !== undefined
        ? distSq(p, mixN([], a, b, clamp01(t))) < eps * eps
        : false;
};
const pointInCircle = (p, pos, r) => distSq(pos, p) <= r * r;
const classifyPointInCircle = (p, pos, r, eps = EPS) => sign(r * r - distSq(pos, p), eps);
const pointInTriangle2 = (p, a, b, c) => {
    const s = clockwise2(a, b, c) ? 1 : -1;
    return (s * signedArea2(a, c, p) >= 0 &&
        s * signedArea2(b, a, p) >= 0 &&
        s * signedArea2(c, b, p) >= 0);
};
const classifyPointInTriangle2 = (p, a, b, c, eps = EPS) => {
    const s = clockwise2(a, b, c) ? 1 : -1;
    return sign(Math.min(s * signedArea2(a, c, p), s * signedArea2(b, a, p), s * signedArea2(c, b, p)), eps);
};
const pointInPolygon2 = (p, pts) => {
    const n = pts.length - 1;
    const px = p[0];
    const py = p[1];
    let a = pts[n];
    let b = pts[0];
    let inside = 0;
    for (let i = 0; i <= n; a = b, b = pts[++i]) {
        inside = classifyPointPolyPair(px, py, a[0], a[1], b[0], b[1], inside);
    }
    return inside;
};
const classifyPointPolyPair = (px, py, ax, ay, bx, by, inside) => ((ay < py && by >= py) || (by < py && ay >= py)) && (ax <= px || bx <= px)
    ? inside ^ (ax + ((py - ay) / (by - ay)) * (bx - ax) < px ? 1 : 0)
    : inside;
const pointInBox = vop(0);
const pointInRect = pointInBox.add(2, ([x, y], pos, size) => x >= pos[0] &&
    x <= pos[0] + size[0] &&
    y >= pos[1] &&
    y <= pos[1] + size[1]);
const pointInAABB = pointInBox.add(3, ([x, y, z], pos, size) => x >= pos[0] &&
    x <= pos[0] + size[0] &&
    y >= pos[1] &&
    y <= pos[1] + size[1] &&
    z >= pos[2] &&
    z <= pos[2] + size[2]);
pointInBox.default((p, boxMin, boxSize) => {
    for (let i = p.length; i-- > 0;) {
        const x = p[i];
        const y = boxMin[i];
        if (x < y || x > y + boxSize[i])
            return false;
    }
    return true;
});
const pointInCenteredBox = vop(0);
const pointInCenteredRect = pointInCenteredBox.add(2, ([x, y], pos, size) => x >= pos[0] - size[0] &&
    x <= pos[0] + size[0] &&
    y >= pos[1] - size[1] &&
    y <= pos[1] + size[1]);
const pointInCenteredAABB = pointInCenteredBox.add(3, ([x, y, z], pos, size) => x >= pos[0] - size[0] &&
    x <= pos[0] + size[0] &&
    y >= pos[1] - size[1] &&
    y <= pos[1] + size[1] &&
    z >= pos[2] - size[2] &&
    z <= pos[2] + size[2]);
pointInCenteredBox.default((p, boxCenter, boxExtent) => {
    for (let i = p.length; i-- > 0;) {
        const x = p[i];
        const y = boxCenter[i];
        const z = boxExtent[i];
        if (x < y - z || x > y + z)
            return false;
    }
    return true;
});

function tessellate(...args) {
    return transduce(scan(reducer(() => [args[0]], (acc, fn) => transduce(mapcat(fn), push(), acc))), last(), isFunction(args[1]) ? repeat(args[1], args[2] || 1) : args[1]);
}

export { classifyPointInCircle as a, classifyPointInTriangle2 as b, centroid as c, pointInPolygon2 as d, pointInAABB as e, pointInCircle as f, pointInSegment as g, pointInRect as h, pointInTriangle2 as i, polyArea2 as p, tessellate as t };
