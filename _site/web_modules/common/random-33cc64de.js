import { s as set, g as dot, f as sub, c as sub3 } from './magsq-9dc23acb.js';
import { b as defOp, F as FN2, j as defFnOp, k as ARGS_VN, l as FN_N, m as ARGS_VVN, n as MATH2_N, v as vop, o as ARGS_VVV, p as MATH2, q as defHofOp, r as NEW_OUT_A } from './emit-4620adbe.js';
import { a as absInnerAngle, b as atan2Abs, c as cossin } from './angle-a4c18f3e.js';
import { d as cross2, g as setC2, f as setC3, h as cross3 } from './divn-48ef128e.js';
import { m as mag, n as normalize } from './normalize-238b0958.js';
import { H as HALF_PI, P as PI } from './api-8453d590.js';
import { a as addmN, b as addW4, d as addW3 } from './addw-db4076c6.js';
import { m as mixN2 } from './mixn-930ba9a4.js';
import { b as ZERO2, Z as ZERO3 } from './addn-a6cb9da5.js';
import { m as maddN2, a as maddN, b as maddN3 } from './maddn-71d670d5.js';
import { a as mixBilinear$1 } from './mix-6c45be6a.js';
import { n as normal } from './normal-dfbd2421.js';
import { S as SYSTEM } from './system-8e2a0898.js';

const _rotate = (u, v) => (out, a, theta) => {
    out ? out !== a && set(out, a) : (out = a);
    const s = Math.sin(theta);
    const c = Math.cos(theta);
    const x = a[u];
    const y = a[v];
    out[u] = x * c - y * s;
    out[v] = x * s + y * c;
    return out;
};
const rotateX = _rotate(1, 2);
const rotateY = _rotate(2, 0);
const rotateZ = _rotate(0, 1);
/**
 * Alias for {@link rotateZ} (e.g. for 2D use cases)
 */
const rotate = rotateZ;

const [max, max2, max3, max4] = defOp(FN2("Math.max"));

const [min, min2, min3, min4] = defOp(FN2("Math.min"));

const [abs, abs2, abs3, abs4] = defFnOp("Math.abs");

const angleRatio = (a, b) => dot(a, b) / (mag(a) * mag(b));
const angleBetween2 = (a, b, absInner = false) => {
    const t = Math.atan2(cross2(a, b), dot(a, b));
    return absInner ? absInnerAngle(t) : t;
};
const angleBetween3 = (a, b, normalize = true, absInner = false) => {
    const t = normalize ? Math.acos(angleRatio(a, b)) : Math.acos(dot(a, b));
    return absInner ? absInnerAngle(t) : t;
};

const [powN, powN2, powN3, powN4] = defOp(FN_N("Math.pow"), ARGS_VN);

/**
 * Returns `out = (a - b) * n`.
 */
const [submN, submN2, submN3, submN4] = defOp(MATH2_N("-", "*"), ARGS_VVN);

/**
 * Computes direction vector `a` -> `b`, normalized to length `n`
 * (default 1).
 *
 * @param a -
 * @param b -
 * @param n -
 */
const direction = (out, a, b, n = 1) => normalize(null, sub(out || a, b, a), n);

/**
 * Returns orientation angle (in radians) of vector `a` in XY plane.
 *
 * @param a -
 */
const headingXY = (a) => atan2Abs(a[1], a[0]);
/**
 * Returns orientation angle (in radians) of vector `a` in XZ plane.
 *
 * @param a -
 */
const headingXZ = (a) => atan2Abs(a[2], a[0]);
/**
 * Returns orientation angle (in radians) of vector `a` in ZY plane.
 *
 * @param a -
 */
const headingYZ = (a) => atan2Abs(a[2], a[1]);
/**
 * Same as {@link headingXY}
 */
const heading = headingXY;

/**
 * 2D only. Produces a perpendicular vector to `v`, i.e. `[-y,x]`.
 * Assumes positive Y-up.
 *
 * @param out -
 * @param v -
 */
const perpendicularCCW = (out, a) => setC2(out || a, -a[1], a[0]);
/**
 * 2D only. Produces a clockwise perpendicular vector to `v`, i.e.
 * `[y,-x]`. Assumes positive Y-up.
 *
 * @param out -
 * @param v -
 */
const perpendicularCW = (out, a) => setC2(out || a, a[1], -a[0]);

const bisect2 = (a, b) => {
    const theta = (headingXY(a) + headingXY(b)) / 2;
    return theta <= HALF_PI ? theta : PI - theta;
};
/**
 * Returns normalized bisector vector for point `b` in the triangle `a`
 * -> `b` -> `c`. If `out` is null, creates a new result vector. The `n`
 * arg can be used to scale the result vector to given length (default:
 * 1).
 *
 * @param out -
 * @param a -
 * @param b -
 * @param c -
 * @param n -
 */
const cornerBisector = (out, a, b, c, n = 1) => (!out && (out = []),
    normalize(out, addmN(out, normalize(out, sub(out, a, b)), normalize(null, sub([], c, b)), 0.5), n));
/**
 * 2D version of {@link cornerBisector} which doesn't always bisect the
 * smaller/inside angle, but also doesn't suffer sign/orientation
 * flipping of returned bisector vector.
 *
 * @remarks
 * Instead, the direction of the result is dependent on the orientation
 * of the input triangle. If `a`, `b`, `c` are in CW order, the result
 * will point away from the triangle's centroid. If CCW, the result will
 * point towards the inside.
 *
 * @param out -
 * @param a -
 * @param b -
 * @param c -
 * @param n -
 */
const cornerBisector2 = (out, a, b, c, n = 1) => (!out && (out = []),
    perpendicularCCW(out, normalize(out, mixN2(out, direction(out, a, b), direction([], b, c), 0.5), n)));

const cos = Math.cos;
const sin = Math.sin;
/**
 * Converts polar vector `v` to cartesian coordinates and adds optional
 * `offset`. See {@link polar} for reverse operation. If `out` is null,
 * modifies `v` in place.
 *
 * @param out -
 * @param v -
 * @param offset -
 */
const cartesian = vop(1);
/**
 * Converts 2D polar vector `v` to cartesian coordinates and adds
 * optional `offset`. See {@link polar} for reverse operation. If `out` is
 * null, modifies `v` in place.
 *
 * @param out -
 * @param v -
 * @param offset -
 */
const cartesian2 = cartesian.add(2, (out, a, b = ZERO2) => maddN2(out || a, cossin(a[1]), a[0], b));
/**
 * Converts 3D polar vector `v` to cartesian coordinates and adds
 * optional `offset`. See {@link polar} for reverse operation. If `out` is
 * null, modifies `v` in place.
 *
 * @param out -
 * @param v -
 * @param offset -
 */
const cartesian3 = cartesian.add(3, (out, a, b = ZERO3) => {
    const r = a[0];
    const theta = a[1];
    const phi = a[2];
    const ct = cos(theta);
    return setC3(out || a, r * ct * cos(phi) + b[0], r * ct * sin(phi) + b[1], r * sin(theta) + b[2]);
});

/**
 * Vector version of {@link @thi.ng/math#mixCubic}.
 *
 * @param out - result
 * @param a -
 * @param b -
 * @param c -
 * @param d -
 * @param t - interpolation coeff [0..1]
 */
const mixCubic = (out, a, b, c, d, t) => {
    const s = 1 - t;
    const s2 = s * s;
    const t2 = t * t;
    return addW4(out, a, b, c, d, s2 * s, 3 * s2 * t, 3 * t2 * s, t2 * t);
};

/**
 * Vector version of {@link @thi.ng/math#mixQuadratic}.
 *
 * @param out - result
 * @param a -
 * @param b -
 * @param c -
 * @param t - interpolation coeff [0..1]
 */
const mixQuadratic = (out, a, b, c, t) => {
    const s = 1 - t;
    return addW3(out, a, b, c, s * s, 2 * s * t, t * t);
};

/**
 * Returns `out = a * b + c`.
 *
 * - {@link addm}
 * - {@link maddN}
 *
 * @param out -
 * @param a -
 * @param b -
 * @param c -
 */
const [madd, madd2, madd3, madd4] = defOp(MATH2("*", "+"), ARGS_VVV);

/**
 * Produces a vector which is perpendicular/normal to the plane spanned
 * by given 3 input vectors. If `normalize` is true (default), the
 * result vector will be normalized.
 *
 * @example
 * ```ts
 * orthoNormal3([], [0, 0, 0], [1, 0, 0], [0, 1, 0])
 * // [0, 0, 1]
 * ```
 *
 * @param out -
 * @param a -
 * @param b -
 * @param c -
 * @param normalize -
 */
const orthoNormal3 = (out, a, b, c, doNormalize = true) => {
    out = cross3(null, sub3(out || a, b, a), sub3([], c, a));
    return doNormalize ? normalize(out, out) : out;
};

const [mixBilinear, mixBilinear2, mixBilinear3, mixBilinear4] = defHofOp(mixBilinear$1, ([o, a, b, c, d]) => `${o}=op(${a},${b},${c},${d},u,v);`, "o,a,b,c,d,u,v");

/**
 * Computes 2D normal by rotating direction vector `a` -> `b`, 90 deg
 * counterclockwise, normalized to length `n` (default: 1). If `out` is
 * null, creates new vector.
 *
 * @param out -
 * @param a -
 * @param b -
 * @param n -
 */
const normalCCW = (out, a, b, n = 1) => perpendicularCCW(null, direction(out || [], a, b, n));
/**
 * Computes 2D normal by rotating direction vector `a` -> `b`, 90 deg
 * clockwise, normalized to length `n` (default: 1). If `out` is null,
 * creates new vector.
 *
 * @param out -
 * @param a -
 * @param b -
 * @param n -
 */
const normalCW = (out, a, b, n = 1) => perpendicularCW(null, direction(out || [], a, b, n));

/**
 * Calculates the nD point laying on ray at given distance. `rayDir` MUST be
 * normalized.
 *
 * @param out -
 * @param rayOrigin -
 * @param rayDir -
 * @param dist -
 */
const pointOnRay = (out, rayOrigin, rayDir, dist) => maddN(out, rayDir, dist, rayOrigin);
/**
 * 2D version of {@link pointOnRay}.
 *
 * @param out -
 * @param rayOrigin -
 * @param rayDir -
 * @param dist -
 */
const pointOnRay2 = (out, rayOrigin, rayDir, dist) => maddN2(out, rayDir, dist, rayOrigin);
/**
 * 3D version of {@link pointOnRay}.
 *
 * @param out -
 * @param rayOrigin -
 * @param rayDir -
 * @param dist -
 */
const pointOnRay3 = (out, rayOrigin, rayDir, dist) => maddN3(out, rayDir, dist, rayOrigin);

/**
 * Sets `v` to random vector, with each component in interval `[n..m)`. If no
 * `rnd` instance is given, uses {@link @thi.ng/random#SYSTEM}, i.e.
 * `Math.random`. Creates new vector if `v` is null.
 *
 * @remarks
 * The non-fixed sized version of this function can ONLY be used if `v` is given
 * and initialized to the desired size/length.
 *
 * @param v -
 * @param n - default -1
 * @param m - default 1
 * @param rnd -
 */
const [random, random2, random3, random4] = defHofOp(SYSTEM, ([a]) => `${a}=rnd.minmax(n,m);`, "a,n=-1,m=1,rnd=op", "a", "a", 0, NEW_OUT_A);
/**
 * Sets `v` to random vector, with each component drawn from given random
 * distribution function (default: gaussian/normal distribution) and scaled to
 * `n` (default: 1). Creates new vector if `v` is null.
 *
 * @remarks
 * The non-fixed sized version of this function can ONLY be used if `v` is given
 * and initialized to the desired size/length.
 *
 * References:
 * - https://docs.thi.ng/umbrella/random/#random-distributions
 * - https://docs.thi.ng/umbrella/random/modules.html#normal
 *
 * @param v -
 * @param rnd -
 * @param n - default 1
 */
const [randomDistrib, randomDistrib2, randomDistrib3, randomDistrib4] = defHofOp(normal, ([a]) => `${a}=rnd()*n;`, "a,rnd=op(),n=1", "a", "a", 0, NEW_OUT_A);
const $norm = (random) => (v, n = 1, rnd = SYSTEM) => normalize(null, random(v, -1, 1, rnd), n);
const $normDist = (random) => (v, rnd, n = 1) => normalize(null, random(v, rnd), n);
/**
 * Sets `v` to a random vector (using {@link random}), normalized to length `n`
 * (default: 1). If no `rnd` instance is given, uses
 * {@link @thi.ng/random#SYSTEM}, i.e. `Math.random`.
 *
 * @remarks
 * The non-fixed sized version of this function can ONLY be used if `v` is given
 * and initialized to the desired size/length.
 *
 * @param v -
 * @param n -
 * @param rnd -
 */
const randNorm = $norm(random);
const randNorm2 = $norm(random2);
const randNorm3 = $norm(random3);
const randNorm4 = $norm(random4);
/**
 * Similar to {@link randNorm} but wraps {@link randomDistrib} which draws
 * samples from given distribution function (default: gaussian/normal
 * distribution).
 *
 * @remarks
 * The non-fixed sized version of this function can ONLY be used if `v` is given
 * and initialized to the desired size/length.
 */
const randNormDistrib = $normDist(randomDistrib);
const randNormDistrib2 = $normDist(randomDistrib2);
const randNormDistrib3 = $normDist(randomDistrib3);
const randNormDistrib4 = $normDist(randomDistrib4);
/**
 * Sets `out` to random vector with each component in the semi-open
 * interval defined by [min,max).
 *
 * @param out -
 * @param min -
 * @param max -
 * @param rnd -
 */
const [randMinMax, randMinMax2, randMinMax3, randMinMax4] = defHofOp(SYSTEM, ([o, a, b]) => `${o}=rnd.minmax(${a},${b});`, "o,a,b,rnd=op", "o,a,b");

export { random as $, randMinMax as A, randNorm as B, abs as C, abs3 as D, abs4 as E, angleRatio as F, angleBetween3 as G, bisect2 as H, cornerBisector2 as I, cartesian as J, cartesian3 as K, headingXY as L, headingXZ as M, headingYZ as N, heading as O, madd3 as P, madd4 as Q, max4 as R, min4 as S, mixBilinear2 as T, mixBilinear3 as U, mixBilinear4 as V, normalCCW as W, pointOnRay as X, powN as Y, powN3 as Z, powN4 as _, min3 as a, random2 as a0, random3 as a1, random4 as a2, randomDistrib as a3, randomDistrib2 as a4, randomDistrib3 as a5, randomDistrib4 as a6, randNorm2 as a7, randNorm3 as a8, randNorm4 as a9, randNormDistrib as aa, randNormDistrib2 as ab, randNormDistrib3 as ac, randNormDistrib4 as ad, randMinMax2 as ae, randMinMax3 as af, randMinMax4 as ag, rotateX as ah, rotateY as ai, rotate as aj, submN3 as ak, submN4 as al, abs2 as b, angleBetween2 as c, direction as d, perpendicularCW as e, cornerBisector as f, mixCubic as g, mixQuadratic as h, cartesian2 as i, madd2 as j, max2 as k, min2 as l, max3 as m, perpendicularCCW as n, orthoNormal3 as o, powN2 as p, min as q, rotateZ as r, submN2 as s, max as t, submN as u, mixBilinear as v, madd as w, normalCW as x, pointOnRay2 as y, pointOnRay3 as z };
