import { i as implementsFunction } from './is-iterable-2e1d7abd.js';
import { s as set } from './magsq-9dc23acb.js';
import { E as EPS } from './api-8453d590.js';
import { e as eqDelta$1 } from './eqdelta-099a6304.js';
import { v as vop, g as compileHOF } from './emit-4620adbe.js';
import { a as distSq, d as distSq2, b as distSq3, c as distSq4 } from './empty-f956d7b3.js';

const copy = (v) => implementsFunction(v, "copy") ? v.copy() : set([], v);
const copyVectors = (pts) => pts.map(copy);

const $ = (dim) => eqDelta.add(dim, compileHOF(dim, [eqDelta$1, EPS], ([a, b]) => `eq(${a},${b},eps)`, "eq,_eps", "a,b,eps=_eps", "a,b", "", "&&", "return a.length === b.length && ", ";"));
/**
 * Checks given vectors for componentwise equality, taking tolerance
 * `eps` (default: {@link @thi.ng/math#EPS}) into account.
 *
 * @param a
 * @param b
 * @param eps
 */
const eqDelta = vop();
eqDelta.default((v1, v2, eps = EPS) => {
    if (implementsFunction(v1, "eqDelta")) {
        return v1.eqDelta(v2, eps);
    }
    if (implementsFunction(v2, "eqDelta")) {
        return v2.eqDelta(v1, eps);
    }
    return eqDeltaS(v1, v2, v1.length, eps);
});
const eqDelta2 = $(2);
const eqDelta3 = $(3);
const eqDelta4 = $(4);
/**
 * Checks given strided vectors for componentwise equality, taking
 * tolerance `eps` (default: {@link @thi.ng/math#EPS}) into account.
 *
 * @param a - first vector
 * @param b - second vector
 * @param n - number of elements
 * @param eps - tolerance
 * @param ia - start index a
 * @param ib - start index b
 * @param sa - stride a
 * @param sb - stride b
 */
const eqDeltaS = (a, b, n, eps = EPS, ia = 0, ib = 0, sa = 1, sb = 1) => {
    for (; n > 0; n--, ia += sa, ib += sb) {
        if (!eqDelta$1(a[ia], b[ib], eps)) {
            return false;
        }
    }
    return true;
};
const eqDeltaArray = (a, b, eps = EPS) => {
    if (a === b)
        return true;
    if (a.length !== b.length)
        return false;
    for (let i = a.length; i-- > 0;) {
        if (!eqDelta(a[i], b[i], eps)) {
            return false;
        }
    }
    return true;
};
const isInArray = (p, pts, eps = EPS) => {
    for (let i = pts.length; i-- > 0;) {
        if (eqDelta(p, pts[i], eps)) {
            return true;
        }
    }
    return false;
};

const dist = (a, b) => Math.sqrt(distSq(a, b));
const dist2 = (a, b) => Math.sqrt(distSq2(a, b));
const dist3 = (a, b) => Math.sqrt(distSq3(a, b));
const dist4 = (a, b) => Math.sqrt(distSq4(a, b));

export { copy as a, eqDelta as b, copyVectors as c, dist as d, eqDelta2 as e, eqDelta3 as f, eqDelta4 as g, eqDeltaS as h, isInArray as i, dist2 as j, dist3 as k, dist4 as l, eqDeltaArray as m };
