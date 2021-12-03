import { b as defOp, A as ARGS_VV, h as ARGS_VNV, M as MATH2A_N } from './emit-4620adbe.js';

/**
 * Returns `out = a * n + b`.
 *
 * @param out - vec
 * @param a - vec
 * @param n - scalar
 * @param b - vec
 */
const [maddN, maddN2, maddN3, maddN4] = defOp(MATH2A_N("*", "+"), ARGS_VNV, ARGS_VV);

export { maddN as a, maddN3 as b, maddN4 as c, maddN2 as m };
