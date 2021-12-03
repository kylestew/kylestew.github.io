import { d as defMathOp, a as defMathOpN } from './emit-4620adbe.js';

const [add, add2, add3, add4] = defMathOp("+");

const setC2 = (out, x, y) => (!out && (out = []), (out[0] = x), (out[1] = y), out);
const setC3 = (out, x, y, z) => (!out && (out = []), (out[0] = x), (out[1] = y), (out[2] = z), out);
const setC4 = (out, x, y, z, w) => (!out && (out = []),
    (out[0] = x),
    (out[1] = y),
    (out[2] = z),
    (out[3] = w),
    out);
const setC6 = (out, a, b, c, d, e, f) => (!out && (out = []),
    (out[0] = a),
    (out[1] = b),
    (out[2] = c),
    (out[3] = d),
    (out[4] = e),
    (out[5] = f),
    out);
const setC = (out, ...xs) => {
    !out && (out = []);
    for (let i = 0, n = xs.length; i < n; i++) {
        out[i] = xs[i];
    }
    return out;
};

const cross2 = (a, b) => a[0] * b[1] - a[1] * b[0];
const cross3 = (out, a, b) => setC3(out || a, a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]);

const [divN, divN2, divN3, divN4] = defMathOpN("/");

export { add3 as a, add2 as b, add as c, cross2 as d, divN as e, setC3 as f, setC2 as g, cross3 as h, setC6 as i, setC as j, add4 as k, divN4 as l, divN2 as m, divN3 as n, setC4 as s };
