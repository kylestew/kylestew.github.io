import { E as EPS } from './api-8453d590.js';

/**
 * Similar to {@link fmod}, {@link remainder}. Returns `a - b * floor(a / b)`
 * (same as GLSL `mod(a, b)`)
 *
 * @remarks
 * **Caution:** Due to the introduction of libc math functions in v4.0.0 and the
 * resulting name/behavior clashes between the modulo logic in JS, C & GLSL,
 * this function previously _was_ called `fmod`, but going forward has been
 * renamed to align w/ its GLSL version and exhibits a different behavior to the
 * current {@link fmod} function.
 *
 * https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/mod.xhtml
 *
 * @param a -
 * @param b -
 */
const mod = (a, b) => a - b * Math.floor(a / b);
const fract = (x) => x - Math.floor(x);
const trunc = (x) => (x < 0 ? Math.ceil(x) : Math.floor(x));
const roundTo = (x, prec = 1) => Math.round(x / prec) * prec;
const floorTo = (x, prec = 1) => Math.floor(x / prec) * prec;
const ceilTo = (x, prec = 1) => Math.ceil(x / prec) * prec;
/**
 * Only rounds `x` to nearest int if `fract(x)` <= `eps` or >= `1-eps`.
 *
 * @param x -
 * @param eps -
 */
const roundEps = (x, eps = EPS) => {
    const f = fract(x);
    return f <= eps || f >= 1 - eps ? Math.round(x) : x;
};

/**
 * Returns `a` divided by `b` or zero if `b = 0`.
 *
 * @param a
 * @param b
 */
const safeDiv = (a, b) => (b !== 0 ? a / b : 0);

export { roundTo as a, floorTo as b, ceilTo as c, fract as f, mod as m, roundEps as r, safeDiv as s, trunc as t };
