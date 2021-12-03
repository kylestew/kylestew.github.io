import { d as defMathOp, a as defMathOpN, e as compile, i as SARGS_V, f as DOT } from './emit-4620adbe.js';
import { a as mulN } from './muln-2f111deb.js';

const [mul, mul2, mul3, mul4] = defMathOp("*");

const mi = -Infinity;
const mx = Infinity;
const MIN2 = Object.freeze([mi, mi]);
const MAX2 = Object.freeze([mx, mx]);
const ONE2 = Object.freeze([1, 1]);
const ZERO2 = Object.freeze([0, 0]);
const X2 = Object.freeze([1, 0]);
const Y2 = Object.freeze([0, 1]);
const MIN3 = Object.freeze([mi, mi, mi]);
const MAX3 = Object.freeze([mx, mx, mx]);
const ONE3 = Object.freeze([1, 1, 1]);
const ZERO3 = Object.freeze([0, 0, 0]);
const X3 = Object.freeze([1, 0, 0]);
const Y3 = Object.freeze([0, 1, 0]);
const Z3 = Object.freeze([0, 0, 1]);
const MIN4 = Object.freeze([mi, mi, mi, mi]);
const MAX4 = Object.freeze([mx, mx, mx, mx]);
const ONE4 = Object.freeze([1, 1, 1, 1]);
const ZERO4 = Object.freeze([0, 0, 0, 0]);
const X4 = Object.freeze([1, 0, 0, 0]);
const Y4 = Object.freeze([0, 1, 0, 0]);
const Z4 = Object.freeze([0, 0, 1, 0]);
const W4 = Object.freeze([0, 0, 0, 1]);

const [subN, subN2, subN3, subN4] = defMathOpN("-");

const [div, div2, div3, div4] = defMathOp("/");

const neg = (out, v) => mulN(out, v, -1);

const dotS = (a, b, n, ia = 0, ib = 0, sa = 1, sb = 1) => {
    let sum = 0;
    for (; n-- > 0; ia += sa, ib += sb)
        sum += a[ia] * b[ib];
    return sum;
};
const $ = (dim) => compile(dim, DOT, `o,a,${SARGS_V}`, "o,a", "", "+", "return ", ";", true);
const dotS2 = $(2);
const dotS3 = $(3);
const dotS4 = $(4);

const [addN, addN2, addN3, addN4] = defMathOpN("+");

export { Y4 as A, Z4 as B, MIN4 as C, MAX4 as D, ZERO4 as E, ONE4 as F, dotS as G, addN3 as H, div3 as I, mul3 as J, MAX2 as M, ONE2 as O, W4 as W, X2 as X, Y3 as Y, ZERO3 as Z, Z3 as a, ZERO2 as b, subN2 as c, div2 as d, dotS3 as e, MIN2 as f, MIN3 as g, MAX3 as h, div as i, addN2 as j, dotS2 as k, dotS4 as l, mul2 as m, neg as n, addN as o, addN4 as p, div4 as q, mul as r, subN3 as s, mul4 as t, X3 as u, subN as v, subN4 as w, Y2 as x, ONE3 as y, X4 as z };
