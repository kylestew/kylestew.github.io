import { b as defOp, m as ARGS_VVN, n as MATH2_N } from './emit-4620adbe.js';
import { a as maddN } from './maddn-71d670d5.js';
import { a as mulN } from './muln-2f111deb.js';

/**
 * Returns `out = (a + b) * n`.
 */
const [addmN, addmN2, addmN3, addmN4] = defOp(MATH2_N("+", "*"), ARGS_VVN);

const addW2 = (out, a, b, wa, wb) => (!out && (out = a), maddN(out, b, wb, mulN(out, a, wa)));
const addW3 = (out, a, b, c, wa, wb, wc) => (!out && (out = a), maddN(out, c, wc, maddN(out, b, wb, mulN(out, a, wa))));
const addW4 = (out, a, b, c, d, wa, wb, wc, wd) => (!out && (out = a),
    maddN(out, d, wd, maddN(out, c, wc, maddN(out, b, wb, mulN(out, a, wa)))));
const addW5 = (out, a, b, c, d, e, wa, wb, wc, wd, we) => (!out && (out = a),
    maddN(out, e, we, maddN(out, d, wd, maddN(out, c, wc, maddN(out, b, wb, mulN(out, a, wa))))));

export { addmN as a, addW4 as b, addW2 as c, addW3 as d, addW5 as e, addmN2 as f, addmN3 as g, addmN4 as h };
