import { s as sign } from './abs-15ac99f2.js';
import { E as EPS } from './api-8453d590.js';

/**
 * Returns 2x the signed area of the 2D triangle defined by the given points.
 *
 * @remarks
 * This is a useful classifier for many geometry processing tasks. In addition
 * to the triangle area, the result can also be interpreted as follows:
 *
 * - `> 0`: points are ordered counterclockwise
 * - `< 0`: points are ordered clockwise
 * - `0`: points are co-linear
 *
 * Functionally same as: `cross2(sub2([], b, a), sub2([], c, a))`
 *
 * - {@link corner2}
 * - {@link clockwise2}
 * - {@link cross2}
 *
 * @param a -
 * @param b -
 * @param c -
 */
const signedArea2 = (a, b, c) => {
    const ax = a[0];
    const ay = a[1];
    return (b[0] - ax) * (c[1] - ay) - (c[0] - ax) * (b[1] - ay);
};
/**
 * Same as {@link signedArea2}, but expects individual vector component args,
 * instead of vectors.
 *
 * @param ax -
 * @param ay -
 * @param bx -
 * @param by -
 * @param cx -
 * @param cy -
 */
const signedAreaC2 = (ax, ay, bx, by, cx, cy) => (bx - ax) * (cy - ay) - (cx - ax) * (by - ay);

/**
 * Syntax sugar for `sign(signedArea2(a, b, c))`.
 *
 * - {@link @thi.ng/math#sign}
 * - {@link signedArea2}
 *
 * @param a -
 * @param b -
 * @param c -
 * @param eps - zero tolerance for sign computation
 */
const corner2 = (a, b, c, eps = EPS) => sign(signedArea2(a, b, c), eps);
/**
 * Returns true, if the triangle `a`, `b`, `c` is in clockwise order,
 * i.e. if `corner2(a,b,c)` returned -1.
 *
 * @param a -
 * @param b -
 * @param c -
 * @param eps -
 */
const clockwise2 = (a, b, c, eps = EPS) => corner2(a, b, c, eps) < 0;

export { clockwise2 as a, signedAreaC2 as b, corner2 as c, signedArea2 as s };
