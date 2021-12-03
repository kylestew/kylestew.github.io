import { c as clamp01 } from './interval-fde8b87f.js';

/**
 * Returns a value with the magnitude of `x` and the sign of `y`.
 *
 * @param x
 * @param y
 */
const copysign = (x, y) => Math.sign(y) * Math.abs(x);
/**
 * Returns `2^x`.
 *
 * @param x
 */
const exp2 = (x) => 2 ** x;
/**
 * Returns the positive difference between `x` and `y`, i.e. `x - y` iff `x > y`,
 * otherwise zero.
 *
 * @param x
 * @param y
 */
const fdim = (x, y) => Math.max(x - y, 0);
/**
 * Returns `x * y + z`.
 *
 * @param x
 * @param y
 * @param z
 */
const fma = (x, y, z) => x * y + z;
/**
 * Similar to {@link mod}, {@link remainder}. Returns `x - y * trunc(x / y)`,
 * i.e. essentially the same as JS `%` operator. Result will always have the
 * sign of `x`.
 *
 * @remarks
 * **Caution:** Due to the introduction of libc math functions in v4.0.0 and the
 * resulting name/behavior clashes between the modulo logic in JS, C & GLSL, the
 * previous `fmod` function has been renamed to {@link mod} to align w/ its GLSL
 * version and now exhibits a different behavior to this current {@link fmod}
 * function.
 *
 * Reference: https://www.cplusplus.com/reference/cmath/fmod/
 *
 * @param x
 * @param y
 */
const fmod = (x, y) => x % y;
//export const fmod: FnN2 = (x, y) => x - y * Math.trunc(x / y);
/**
 * Inverse op of {@link ldexp}. Breaks the number `x` into its binary
 * significand (a floating point with an abs value in `[0.5,1.0)` interval and
 * an integral exponent for 2, such that: `x = significand * 2^exp`. Returns
 * tuple of `[sig, exp]`.
 *
 * @remarks
 * - If `x` is zero, both parts (significand and exponent) are zero.
 * - If `x` is negative, the significand returned by this function is negative.
 *
 * Based on:
 * https://github.com/locutusjs/locutus/blob/master/src/c/math/frexp.js
 *
 * @param x
 */
const frexp = (x) => {
    if (x === 0 || !isFinite(x))
        return [x, 0];
    const abs = Math.abs(x);
    let exp = Math.max(-1023, Math.floor(Math.log2(abs)) + 1);
    let y = abs * 2 ** -exp;
    while (y < 0.5) {
        y *= 2;
        exp--;
    }
    while (y >= 1) {
        y *= 0.5;
        exp++;
    }
    return [x < 0 ? -y : y, exp];
};
/**
 * Inverse op of {@link frexp}. Returns `x * 2^exp`
 *
 * @param x
 * @param exp
 */
const ldexp = (x, exp) => x * 2 ** exp;
/**
 * Similar to {@link fmod}, {@link mod}. Returns `x - y * round(x / y)`.
 *
 * @remarks
 * https://www.cplusplus.com/reference/cmath/remainder/
 *
 * @param x
 * @param y
 */
const remainder = (x, y) => x - y * Math.round(x / y);

/**
 * Step/threshold function.
 *
 * @param edge - threshold
 * @param x - test value
 * @returns 0, if `x < e`, else 1
 */
const step = (edge, x) => (x < edge ? 0 : 1);
/**
 * GLSL-style smoothStep threshold function.
 *
 * @param edge - lower threshold
 * @param edge2 - upper threshold
 * @param x - test value
 * @returns 0, if `x < edge1`, 1 if `x > edge2`, else S-curve polynomial interpolation
 */
const smoothStep = (edge, edge2, x) => {
    x = clamp01((x - edge) / (edge2 - edge));
    return (3 - 2 * x) * x * x;
};
/**
 * Similar to {@link smoothStep} but using different, higher degree polynomial.
 *
 * @param edge -
 * @param edge2 -
 * @param x -
 */
const smootherStep = (edge, edge2, x) => {
    x = clamp01((x - edge) / (edge2 - edge));
    return x * x * x * (x * (x * 6 - 15) + 10);
};
/**
 * Exponential ramp with variable shape
 *
 * @remarks
 * Example configurations:
 *
 * - S-curve: k=8, n=4
 * - Step near 1.0: k=8, n=20
 * - Pulse: k=0.005, n=-10
 * - Ease-in: k=0.5, n=0.25
 *
 * Interactive graph: https://www.desmos.com/calculator/gcnuyppycz
 *
 * @param k -
 * @param n -
 * @param x -
 */
const expStep = (k, n, x) => 1 - Math.exp(-k * Math.pow(x, n));

export { fma as a, fmod as b, copysign as c, frexp as d, exp2 as e, fdim as f, smoothStep as g, smootherStep as h, expStep as i, ldexp as l, remainder as r, step as s };
