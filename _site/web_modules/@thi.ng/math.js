import { E as EPS } from '../common/api-8453d590.js';
export { D as DEG2RAD, E as EPS, H as HALF_PI, I as INV_HALF_PI, d as INV_PI, e as INV_TAU, f as PHI, P as PI, Q as QUARTER_PI, R as RAD2DEG, k as SIXTH, c as SIXTH_PI, g as SQRT2, S as SQRT2_2, h as SQRT2_3, a as SQRT3, T as TAU, i as THIRD, b as THIRD_PI, j as TWO_THIRD } from '../common/api-8453d590.js';
export { a as absDiff, s as sign } from '../common/abs-15ac99f2.js';
export { a as absInnerAngle, d as absTheta, e as angleDist, b as atan2Abs, c as cossin, i as cot, g as csc, f as deg, j as fastCos, k as fastSin, l as loc, n as normCos, q as quadrant, r as rad, h as sec, s as sincos } from '../common/angle-a4c18f3e.js';
import { e as eqDelta } from '../common/eqdelta-099a6304.js';
export { e as eqDelta, a as eqDeltaScaled } from '../common/eqdelta-099a6304.js';
export { a as fit, f as fit01, c as fit10, d as fit11, b as fitClamped, n as norm } from '../common/fit-abff9224.js';
export { v as absMax, u as absMin, a as clamp, e as clamp0, c as clamp01, f as clamp05, d as clamp11, x as foldback, y as inOpenRange, i as inRange, o as max2id, p as max3id, q as max4id, k as min2id, l as min3id, n as min4id, m as minNonZero2, b as minNonZero3, t as sclamp, r as smax, s as smin, w as wrap, h as wrap01, j as wrap11, g as wrapOnce } from '../common/interval-fde8b87f.js';
export { c as copysign, e as exp2, i as expStep, f as fdim, a as fma, b as fmod, d as frexp, l as ldexp, r as remainder, g as smoothStep, h as smootherStep, s as step } from '../common/step-bd929d01.js';
export { m as minError } from '../common/min-error-2de893da.js';
export { p as bounce, j as circular, n as cosine, v as cubicPulse, o as decimated, q as ease, D as expFactor, s as gain, E as gaussian, r as impulse, k as invCircular, y as lanczos, l as lens, b as mix, g as mixBicubic, a as mixBilinear, m as mixCubic, e as mixCubicHermite, f as mixCubicHermiteFromPoints, d as mixHermite, c as mixQuadratic, u as parabola, C as schlick, z as sigmoid, A as sigmoid01, B as sigmoid11, w as sinc, x as sincNormalized, t as tangentCardinal, h as tangentDiff3, i as tween } from '../common/mix-6c45be6a.js';
import { s as safeDiv } from '../common/safe-div-fded9333.js';
export { c as ceilTo, b as floorTo, f as fract, m as mod, r as roundEps, a as roundTo, s as safeDiv, t as trunc } from '../common/safe-div-fded9333.js';

/**
 * Returns true if line A rises up over B.
 *
 * @example
 * ```ts
 * b1  a2
 *   \/
 *   /\
 * a1  b2
 * ```
 *
 * @param a1 -
 * @param a2 -
 * @param b1 -
 * @param b2 -
 */
const isCrossOver = (a1, a2, b1, b2) => a1 < b1 && a2 > b2;
/**
 * Returns true if line A rises up over B.
 *
 * @example
 * ```ts
 * a1  b2
 *   \/
 *   /\
 * b1  a2
 * ```
 *
 * @param a1 -
 * @param a2 -
 * @param b1 -
 * @param b2 -
 */
const isCrossUnder = (a1, a2, b1, b2) => a1 > b1 && a2 < b2;
/**
 * Returns {@link Crossing} classifier indicating the relationship of line A
 * to line B. The optional epsilon value is used to determine if both
 * lines are considered equal or flat.
 *
 * - {@link isCrossOver}
 * - {@link isCrossUnder}
 * - {@link Crossing}
 *
 * @param a1 -
 * @param a2 -
 * @param b1 -
 * @param b2 -
 * @param eps -
 */
const classifyCrossing = (a1, a2, b1, b2, eps = EPS) => eqDelta(a1, b1, eps) && eqDelta(a2, b2, eps)
    ? eqDelta(a1, b2, eps)
        ? "flat"
        : "equal"
    : isCrossOver(a1, a2, b1, b2)
        ? "over"
        : isCrossUnder(a1, a2, b1, b2)
            ? "under"
            : "other";

/**
 * Returns true if `b` is a local minima, i.e. iff a > b and b < c.
 *
 * @param a -
 * @param b -
 * @param c -
 */
const isMinima = (a, b, c) => a > b && b < c;
/**
 * Returns true if `b` is a local maxima, i.e. iff a < b and b > c.
 *
 * @param a -
 * @param b -
 * @param c -
 */
const isMaxima = (a, b, c) => a < b && b > c;
const index = (pred, values, from = 0, to = values.length) => {
    to--;
    for (let i = from + 1; i < to; i++) {
        if (pred(values[i - 1], values[i], values[i + 1])) {
            return i;
        }
    }
    return -1;
};
/**
 * Returns index of the first local & internal minima found in given
 * `values` array, or -1 if no such minima exists. The search range can
 * be optionally defined via semi-open [from, to) index interval.
 *
 * @param values -
 * @param from -
 * @param to -
 */
const minimaIndex = (values, from = 0, to = values.length) => index(isMinima, values, from, to);
/**
 * Returns index of the first local & internal maxima found in given
 * `values` array, or -1 if no such maxima exists. The search range can
 * be optionally defined via semi-open [from, to) index interval.
 *
 * @param values -
 * @param from -
 * @param to -
 */
const maximaIndex = (values, from = 0, to = values.length) => index(isMaxima, values, from, to);
function* indices(fn, vals, from = 0, to = vals.length) {
    while (from < to) {
        const i = fn(vals, from, to);
        if (i < 0)
            return;
        yield i;
        from = i + 1;
    }
}
/**
 * Returns an iterator yielding all minima indices in given `values`
 * array. The search range can be optionally defined via semi-open
 * [from, to) index interval.
 *
 * @param values -
 * @param from -
 * @param to -
 */
const minimaIndices = (values, from = 0, to = values.length) => indices(minimaIndex, values, from, to);
/**
 * Returns an iterator yielding all maxima indices in given `values`
 * array. The search range can be optionally defined via semi-open
 * [from, to) index interval.
 *
 * @param values -
 * @param from -
 * @param to -
 */
const maximaIndices = (values, from = 0, to = values.length) => indices(minimaIndex, values, from, to);

const M8 = 0xff;
const M16 = 0xffff;
const signExtend8 = (a) => ((a &= M8), a & 0x80 ? a | ~M8 : a);
const signExtend16 = (a) => ((a &= M16), a & 0x8000 ? a | ~M16 : a);
const addi8 = (a, b) => signExtend8((a | 0) + (b | 0));
const divi8 = (a, b) => signExtend8((a | 0) / (b | 0));
const muli8 = (a, b) => signExtend8((a | 0) * (b | 0));
const subi8 = (a, b) => signExtend8((a | 0) - (b | 0));
const andi8 = (a, b) => signExtend8((a | 0) & (b | 0));
const ori8 = (a, b) => signExtend8(a | 0 | (b | 0));
const xori8 = (a, b) => signExtend8((a | 0) ^ (b | 0));
const noti8 = (a) => signExtend8(~a);
const lshifti8 = (a, b) => signExtend8((a | 0) << (b | 0));
const rshifti8 = (a, b) => signExtend8((a | 0) >> (b | 0));
const addi16 = (a, b) => signExtend16((a | 0) + (b | 0));
const divi16 = (a, b) => signExtend16((a | 0) / (b | 0));
const muli16 = (a, b) => signExtend16((a | 0) * (b | 0));
const subi16 = (a, b) => signExtend16((a | 0) - (b | 0));
const andi16 = (a, b) => signExtend16((a | 0) & (b | 0));
const ori16 = (a, b) => signExtend16(a | 0 | (b | 0));
const xori16 = (a, b) => signExtend16((a | 0) ^ (b | 0));
const noti16 = (a) => signExtend16(~a);
const lshifti16 = (a, b) => signExtend16((a | 0) << (b | 0));
const rshifti16 = (a, b) => signExtend16((a | 0) >> (b | 0));
const addi32 = (a, b) => ((a | 0) + (b | 0)) | 0;
const divi32 = (a, b) => ((a | 0) / (b | 0)) | 0;
const muli32 = (a, b) => ((a | 0) * (b | 0)) | 0;
const subi32 = (a, b) => ((a | 0) - (b | 0)) | 0;
const andi32 = (a, b) => (a | 0) & (b | 0);
const ori32 = (a, b) => a | 0 | (b | 0);
const xori32 = (a, b) => (a | 0) ^ (b | 0);
const lshifti32 = (a, b) => (a | 0) << (b | 0);
const rshifti32 = (a, b) => (a | 0) >> (b | 0);
const noti32 = (a) => ~a;
const addu8 = (a, b) => ((a & M8) + (b & M8)) & M8;
const divu8 = (a, b) => ((a & M8) / (b & M8)) & M8;
const mulu8 = (a, b) => ((a & M8) * (b & M8)) & M8;
const subu8 = (a, b) => ((a & M8) - (b & M8)) & M8;
const andu8 = (a, b) => a & M8 & (b & M8) & M8;
const oru8 = (a, b) => ((a & M8) | (b & M8)) & M8;
const xoru8 = (a, b) => ((a & M8) ^ (b & M8)) & M8;
const notu8 = (a) => ~a & M8;
const lshiftu8 = (a, b) => ((a & M8) << (b & M8)) & M8;
const rshiftu8 = (a, b) => ((a & M8) >>> (b & M8)) & M8;
const addu16 = (a, b) => ((a & M16) + (b & M16)) & M16;
const divu16 = (a, b) => ((a & M16) / (b & M16)) & M16;
const mulu16 = (a, b) => ((a & M16) * (b & M16)) & M16;
const subu16 = (a, b) => ((a & M16) - (b & M16)) & M16;
const andu16 = (a, b) => a & M16 & (b & M16) & M16;
const oru16 = (a, b) => ((a & M16) | (b & M16)) & M16;
const xoru16 = (a, b) => ((a & M16) ^ (b & M16)) & M16;
const notu16 = (a) => ~a & M16;
const lshiftu16 = (a, b) => ((a & M16) << (b & M16)) & M16;
const rshiftu16 = (a, b) => ((a & M16) >>> (b & M16)) & M16;
const addu32 = (a, b) => ((a >>> 0) + (b >>> 0)) >>> 0;
const divu32 = (a, b) => ((a >>> 0) / (b >>> 0)) >>> 0;
const mulu32 = (a, b) => ((a >>> 0) * (b >>> 0)) >>> 0;
const subu32 = (a, b) => ((a >>> 0) - (b >>> 0)) >>> 0;
const andu32 = (a, b) => ((a >>> 0) & (b >>> 0)) >>> 0;
const oru32 = (a, b) => ((a >>> 0) | (b >>> 0)) >>> 0;
const xoru32 = (a, b) => ((a >>> 0) ^ (b >>> 0)) >>> 0;
const notu32 = (a) => ~a >>> 0;
const lshiftu32 = (a, b) => ((a >>> 0) << (b >>> 0)) >>> 0;
const rshiftu32 = (a, b) => ((a >>> 0) >>> (b >>> 0)) >>> 0;

const simplifyRatio = (num, denom) => {
    let e1 = Math.abs(num);
    let e2 = Math.abs(denom);
    while (true) {
        if (e1 < e2) {
            const t = e1;
            e1 = e2;
            e2 = t;
        }
        const r = e1 % e2;
        if (r) {
            e1 = r;
        }
        else {
            return [num / e2, denom / e2];
        }
    }
};

/**
 * Produces a new function which computes derivative of the given
 * single-arg function. The extra optional arg `eps` is used to
 * define the step width for computing derived values:
 *
 * `f'(x) = (f(x + eps) - f(x)) / eps`
 *
 * The original function is assumed to be fully differentiable
 * in the interval the returned function is going to be used.
 * No validity checks of any form are done.
 *
 * {@link https://en.wikipedia.org/wiki/Derivative#Continuity_and_differentiability}
 *
 * @param fn -
 * @param eps -
 */
const derivative = (f, eps = EPS) => (x) => (f(x + eps) - f(x)) / eps;
/**
 * Computes solution for linear equation: `ax + b = 0`.
 *
 * Note: Returns 0 iff `a == 0`
 *
 * @param a - slope
 * @param b - constant offset
 */
const solveLinear = (a, b) => safeDiv(-b, a);
/**
 * Computes solutions for quadratic equation: `ax^2 + bx + c = 0`.
 * Returns array of real solutions.
 * Note: `a` MUST NOT be zero. If the quadratic term is missing,
 * use {@link solveLinear} instead.
 *
 * - {@link https://en.wikipedia.org/wiki/Quadratic_function}
 * - {@link https://en.wikipedia.org/wiki/Quadratic_equation}
 *
 * @param a - quadratic coefficient
 * @param b - linear coefficient
 * @param c - constant offset
 * @param eps - tolerance to determine multiple roots
 */
const solveQuadratic = (a, b, c, eps = 1e-9) => {
    const d = 2 * a;
    let r = b * b - 4 * a * c;
    return r < 0
        ? []
        : r < eps
            ? [-b / d]
            : ((r = Math.sqrt(r)), [(-b - r) / d, (-b + r) / d]);
};
/**
 * Computes solutions for quadratic equation: `ax^3 + bx^2 + c*x + d = 0`.
 * Returns array of solutions, both real & imaginary.
 * Note: `a` MUST NOT be zero. If the cubic term is missing (i.e. zero),
 * use {@link solveQuadratic} or {@link solveLinear} instead.
 *
 * {@link https://en.wikipedia.org/wiki/Cubic_function}
 *
 * @param a - cubic coefficient
 * @param b - quadratic coefficient
 * @param c - linear coefficient
 * @param d - constant offset
 * @param eps - tolerance to determine multiple roots
 */
const solveCubic = (a, b, c, d, eps = 1e-9) => {
    const aa = a * a;
    const bb = b * b;
    const ba3 = b / (3 * a);
    const p = (3 * a * c - bb) / (3 * aa);
    const q = (2 * bb * b - 9 * a * b * c + 27 * aa * d) / (27 * aa * a);
    if (Math.abs(p) < eps) {
        return [Math.cbrt(-q) - ba3];
    }
    else if (Math.abs(q) < eps) {
        return p < 0
            ? [-Math.sqrt(-p) - ba3, -ba3, Math.sqrt(-p) - ba3]
            : [-ba3];
    }
    else {
        const denom = (q * q) / 4 + (p * p * p) / 27;
        if (Math.abs(denom) < eps) {
            return [(-1.5 * q) / p - ba3, (3 * q) / p - ba3];
        }
        else if (denom > 0) {
            const u = Math.cbrt(-q / 2 - Math.sqrt(denom));
            return [u - p / (3 * u) - ba3];
        }
        else {
            const u = 2 * Math.sqrt(-p / 3), t = Math.acos((3 * q) / p / u) / 3, k = (2 * Math.PI) / 3;
            return [
                u * Math.cos(t) - ba3,
                u * Math.cos(t - k) - ba3,
                u * Math.cos(t - 2 * k) - ba3,
            ];
        }
    }
};

export { addi16, addi32, addi8, addu16, addu32, addu8, andi16, andi32, andi8, andu16, andu32, andu8, classifyCrossing, derivative, divi16, divi32, divi8, divu16, divu32, divu8, isCrossOver, isCrossUnder, isMaxima, isMinima, lshifti16, lshifti32, lshifti8, lshiftu16, lshiftu32, lshiftu8, maximaIndex, maximaIndices, minimaIndex, minimaIndices, muli16, muli32, muli8, mulu16, mulu32, mulu8, noti16, noti32, noti8, notu16, notu32, notu8, ori16, ori32, ori8, oru16, oru32, oru8, rshifti16, rshifti32, rshifti8, rshiftu16, rshiftu32, rshiftu8, signExtend16, signExtend8, simplifyRatio, solveCubic, solveLinear, solveQuadratic, subi16, subi32, subi8, subu16, subu32, subu8, xori16, xori32, xori8, xoru16, xoru32, xoru8 };
