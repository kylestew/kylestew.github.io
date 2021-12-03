import { v as vop, c as compileG, e as compile, b as defOp, t as SET_N } from './emit-4620adbe.js';
import { i as implementsFunction } from './is-iterable-2e1d7abd.js';

const tpl = ([a, b]) => `t=${a}-${b};s+=t*t;`;
const pre = "let t,s=0;";
const $ = (dim) => distSq.add(dim, compile(dim, tpl, "a,b", undefined, "s", "", pre));
const distSq = vop();
distSq.default(compileG(tpl, "a,b", undefined, "s", pre));
const distSq2 = $(2);
const distSq3 = $(3);
const distSq4 = $(4);

const [setN, setN2, setN3, setN4] = defOp(SET_N, "a,n", "a", "a", 0, "");
const zero = (a) => setN(a, 0);
const one = (a) => setN(a, 1);
const zeroes = (n) => new Array(n).fill(0);
const ones = (n) => new Array(n).fill(1);

const empty = (v) => implementsFunction(v, "empty") ? v.empty() : zeroes(v.length);

export { distSq as a, distSq3 as b, distSq4 as c, distSq2 as d, empty as e, zero as f, setN2 as g, setN3 as h, setN4 as i, ones as j, one as o, setN as s, zeroes as z };
