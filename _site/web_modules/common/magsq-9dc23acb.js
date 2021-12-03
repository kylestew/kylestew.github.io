import { b as defOp, N as NEW_OUT, S as SET, d as defMathOp, v as vop, c as compileG, D as DOT_G, e as compile, f as DOT } from './emit-4620adbe.js';

const [set, set2, set3, set4] = defOp(SET, "o,a", undefined, "o", 1, NEW_OUT);

const [sub, sub2, sub3, sub4] = defMathOp("-");

const $ = (dim) => dot.add(dim, compile(dim, DOT, "a,b", undefined, "", "+", "return ", ";"));
const dot = vop();
dot.default(compileG(DOT_G, "a,b", undefined, "s", "let s=0;"));
const dot2 = $(2);
const dot3 = $(3);
const dot4 = $(4);

const $$1 = (dim) => magSq.add(dim, compile(dim, ([a]) => `${a}*${a}`, "a", "a", "", "+", "return ", ";"));
const magSq = vop();
magSq.default(compileG(([a]) => `sum+=${a}*${a};`, "a", undefined, "sum", "let sum=0;"));
const magSq2 = $$1(2);
const magSq3 = $$1(3);
const magSq4 = $$1(4);

export { set2 as a, set3 as b, sub3 as c, sub2 as d, dot3 as e, sub as f, dot as g, magSq as h, set4 as i, magSq4 as j, dot4 as k, dot2 as l, magSq2 as m, sub4 as n, magSq3 as o, set as s };
