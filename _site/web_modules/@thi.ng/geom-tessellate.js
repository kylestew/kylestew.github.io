import { p as polyArea2, i as pointInTriangle2, c as centroid } from '../common/tessellate-8bab73cd.js';
export { t as tessellate } from '../common/tessellate-8bab73cd.js';
import { j as range, t as transduce, p as push, c as comp, z as zip, m as map } from '../common/zip-907b97a6.js';
import { s as signedArea2 } from '../common/clockwise-757eff92.js';
import { m as mapcat } from '../common/scan-c7864370.js';
import { w as wrapSides, p as partition } from '../common/wrap-sides-cdd50232.js';
import { a as mixN } from '../common/mixn-930ba9a4.js';
import '../common/illegal-arguments-2af523c3.js';
import '../common/deferror-480a42fb.js';
import '../common/divn-48ef128e.js';
import '../common/emit-4620adbe.js';
import '../common/unsupported-bfdbf30c.js';
import '../common/empty-f956d7b3.js';
import '../common/is-iterable-2e1d7abd.js';
import '../common/line-33765adb.js';
import '../common/magsq-9dc23acb.js';
import '../common/abs-15ac99f2.js';
import '../common/api-8453d590.js';
import '../common/interval-fde8b87f.js';
import '../common/is-function-b13d3e65.js';
import '../common/illegal-arity-0f06cc40.js';
import '../common/api-4427ff26.js';
import '../common/is-arraylike-29dbc151.js';
import '../common/ensure-array-22c314b7.js';
import '../common/is-array-a7fa88fb.js';

const snip = (points, u, v, w, n, ids) => {
    const a = points[ids[u]];
    const b = points[ids[v]];
    const c = points[ids[w]];
    if (signedArea2(a, b, c) > 0) {
        for (let i = 0; i < n; i++) {
            if (i !== u && i !== v && i !== w) {
                if (pointInTriangle2(points[ids[i]], a, b, c)) {
                    return;
                }
            }
        }
        return [a, b, c];
    }
};
/**
 * Tessellator for simple 2D polygons.
 *
 * @param points - polygon vertices
 */
const earCut2 = (points) => {
    const tris = [];
    let n = points.length;
    const ids = [...(polyArea2(points) > 0 ? range(n) : range(n - 1, -1, -1))];
    let count = 2 * n - 1;
    let v = n - 1, u, w, t;
    while (count > 0 && n > 2) {
        u = n <= v ? 0 : v;
        v = u + 1;
        v = n <= v ? 0 : v;
        w = v + 1;
        w = n <= w ? 0 : w;
        t = snip(points, u, v, w, n, ids);
        if (t !== undefined) {
            tris.push(t);
            ids.splice(v, 1);
            n--;
            count = 2 * n;
        }
        else {
            count--;
        }
    }
    return tris;
};

const edgeSplit = (points) => {
    const c = centroid(points);
    return transduce(comp(partition(2, 1), mapcat(([a, b]) => {
        const m = mixN([], a, b, 0.5);
        return [
            [a, m, c],
            [m, b, c],
        ];
    })), push(), wrapSides(points, 0, 1));
};

const tesselInset = (inset = 0.5, keepInterior = false) => (points) => {
    const c = centroid(points);
    const inner = points.map((p) => mixN([], p, c, inset));
    return transduce(comp(partition(2, 1), map(([[a, b], [c, d]]) => [a, b, d, c])), push(), keepInterior ? [inner] : [], wrapSides([...zip(points, inner)], 0, 1));
};

const quadFan = (points) => {
    const p = centroid(points);
    return transduce(comp(partition(3, 1), map(([a, b, c]) => [mixN([], a, b, 0.5), b, mixN([], b, c, 0.5), p])), push(), wrapSides(points));
};

const rimTris = (points) => {
    const edgeCentroids = transduce(comp(partition(2, 1), map((e) => mixN([], e[0], e[1], 0.5))), push(), wrapSides(points, 0, 1));
    return transduce(comp(partition(2, 1), map((t) => [t[0][0], t[1][1], t[1][0]])), push(), [edgeCentroids], wrapSides([...zip(edgeCentroids, points)], 1, 0));
};

const triFan = (points) => {
    const c = centroid(points);
    return transduce(comp(partition(2, 1), map(([a, b]) => [a, b, c])), push(), wrapSides(points, 0, 1));
};

export { earCut2, edgeSplit, quadFan, rimTris, tesselInset, triFan };
