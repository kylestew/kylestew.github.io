import { y as defOpS, N as NEW_OUT, i as SARGS_V, S as SET, v as vop } from './emit-4620adbe.js';
import { a as add } from './add-9f59e136.js';
import { r as reduce } from './zip-907b97a6.js';
import { g as setC2, f as setC3, s as setC4, i as setC6, j as setC } from './divn-48ef128e.js';

const [setS, setS2, setS3, setS4] = defOpS(SET, "o,a", SARGS_V, "o,a", "o", NEW_OUT);

/**
 * Returns component sum of vector `v`.
 *
 * @param v -
 */
const sum = vop();
sum.default((v) => reduce(add(), v));
const sum2 = sum.add(2, (a) => a[0] + a[1]);
const sum3 = sum.add(3, (a) => a[0] + a[1] + a[2]);
const sum4 = sum.add(4, (a) => a[0] + a[1] + a[2] + a[3]);

/**
 * Returns pairwise product sum of given components.
 *
 * @param a -
 * @param b -
 * @param c -
 * @param d -
 */
const dotC4 = (a, b, c, d) => a * b + c * d;
/**
 * Returns pairwise product sum of given components.
 *
 * @param a -
 * @param b -
 * @param c -
 * @param d -
 * @param e -
 * @param f -
 */
const dotC6 = (a, b, c, d, e, f) => a * b + c * d + e * f;
/**
 * Returns pairwise product sum of given components.
 *
 * @param a -
 * @param b -
 * @param c -
 * @param d -
 * @param e -
 * @param f -
 * @param g -
 * @param h -
 */
const dotC8 = (a, b, c, d, e, f, g, h) => a * b + c * d + e * f + g * h;

const fromHomogeneous = vop(1);
const fromHomogeneous3 = fromHomogeneous.add(3, (out, [x, y, w]) => setC2(out || [], x / w, y / w));
const fromHomogeneous4 = fromHomogeneous.add(4, (out, [x, y, z, w]) => setC3(out || [], x / w, y / w, z / w));

/**
 * Sets `out` to `[a.x, a.y, b.x, b.y]`
 *
 * @param out -
 * @param a -
 * @param b -
 */
const setVV4 = (out, a, b) => setC4(out, a[0], a[1], b[0], b[1]);
/**
 * Sets `out` to `[a.x, a.y, b.x, b.y, c.x, c.y]`
 *
 * @param out -
 * @param a -
 * @param b -
 * @param c -
 */
const setVV6 = (out, a, b, c) => setC6(out, a[0], a[1], b[0], b[1], c[0], c[1]);
/**
 * Sets `out` to:
 * `[a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z]`
 *
 * @param out -
 * @param a -
 * @param b -
 * @param c -
 */
const setVV9 = (out, a, b, c) => setC(out, a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
/**
 * Sets `out` to concatenation of `a`, `b`, `c`, `d`:
 *
 * @example
 * ```ts
 * [a.x, a.y, a.z, a.w, b.x, b.y, b.z, b.w,
 *  c.x, c.y, c.z, c.w, d.x, d.y, d.z, d.w]
 * ```
 *
 * @param out -
 * @param a -
 * @param b -
 * @param c -
 */
const setVV16 = (out, a, b, c, d) => setC(out, a[0], a[1], a[2], a[3], b[0], b[1], b[2], b[3], c[0], c[1], c[2], c[3], d[0], d[1], d[2], d[3]);

export { setS3 as a, setS4 as b, dotC6 as c, dotC4 as d, setVV4 as e, setVV6 as f, setVV9 as g, setVV16 as h, fromHomogeneous4 as i, sum as j, setS as k, dotC8 as l, fromHomogeneous as m, fromHomogeneous3 as n, sum2 as o, sum3 as p, sum4 as q, setS2 as s };
