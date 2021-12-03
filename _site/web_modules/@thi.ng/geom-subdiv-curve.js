import { w as wrapSides } from '../common/wrap-sides-cdd50232.js';
import { c as addW2, d as addW3, e as addW5, a as addmN } from '../common/addw-db4076c6.js';
import { a as mixN } from '../common/mixn-930ba9a4.js';
export { s as subdivide } from '../common/subdivide-db17f9e7.js';
import '../common/zip-907b97a6.js';
import '../common/illegal-arity-0f06cc40.js';
import '../common/deferror-480a42fb.js';
import '../common/is-iterable-2e1d7abd.js';
import '../common/api-4427ff26.js';
import '../common/is-arraylike-29dbc151.js';
import '../common/ensure-array-22c314b7.js';
import '../common/is-array-a7fa88fb.js';
import '../common/illegal-arguments-2af523c3.js';
import '../common/interval-fde8b87f.js';
import '../common/emit-4620adbe.js';
import '../common/unsupported-bfdbf30c.js';
import '../common/maddn-71d670d5.js';
import '../common/muln-2f111deb.js';
import '../common/mapcat-indexed-ba34747a.js';

/**
 * HOF subdiv kernel function for computing 2 split points from 2 source
 * points, using weighted summation (thi.ng/vectors/addW2)
 *
 * @param u - split coeffs
 * @param v - split coeffs
 */
const kernel2 = ([ua, ub], [va, vb]) => ([a, b]) => [addW2([], a, b, ua, ub), addW2([], a, b, va, vb)];
/**
 * HOF subdiv kernel function for computing 2 split points from 3 source
 * points, using weighted summation (thi.ng/vectors/addW3)
 *
 * @param u - split coeffs
 * @param v - split coeffs
 */
const kernel3 = ([ua, ub, uc], [va, vb, vc]) => ([a, b, c]) => [addW3([], a, b, c, ua, ub, uc), addW3([], a, b, c, va, vb, vc)];
/**
 * HOF subdiv kernel function for computing 2 split points from 5 source
 * points, using weighted summation (thi.ng/vectors/addW5)
 *
 * @param u - split coeffs
 * @param v - split coeffs
 */
const kernel5 = ([ua, ub, uc, ud, ue], [va, vb, vc, vd, ve]) => ([a, b, c, d, e]) => [
    addW5([], a, b, c, d, e, ua, ub, uc, ud, ue),
    addW5([], a, b, c, d, e, va, vb, vc, vd, ve),
];

const MIDP = ([a, b]) => [a, addmN([], a, b, 0.5)];
const THIRDS = ([a, b]) => [
    a,
    mixN([], a, b, 1 / 3),
    mixN([], a, b, 2 / 3),
];
const wrap2 = (pts) => wrapSides(pts, 0, 1);
const wrap3 = (pts) => wrapSides(pts, 1, 1);
const subdivWith = (fn) => (pts, i, n) => i < n - 2 ? fn(pts) : [...fn(pts), pts[1]];
/**
 * Splits each curve / line segment into halves at midpoint. Version for
 * open curves.
 */
const SUBDIV_MID_OPEN = {
    fn: subdivWith(MIDP),
    size: 2,
};
/**
 * Splits each curve / line segment into halves at midpoint. Version for
 * closed curves.
 */
const SUBDIV_MID_CLOSED = {
    fn: MIDP,
    pre: wrap2,
    size: 2,
};
/**
 * Splits each curve / line segment into 3 parts at 1/3 and 2/3. Version for
 * open curves.
 */
const SUBDIV_THIRDS_OPEN = {
    fn: subdivWith(THIRDS),
    size: 2,
};
/**
 * Splits each curve / line segment into 3 parts at 1/3 and 2/3. Version for
 * open curves.
 */
const SUBDIV_THIRDS_CLOSED = {
    fn: THIRDS,
    pre: wrap2,
    size: 2,
};
const CHAIKIN_FIRST = kernel3([1 / 2, 1 / 2, 0], [0, 3 / 4, 1 / 4]);
const CHAIKIN_MAIN = kernel3([1 / 4, 3 / 4, 0], [0, 3 / 4, 1 / 4]);
const CHAIKIN_LAST = kernel3([1 / 4, 3 / 4, 0], [0, 1 / 2, 1 / 2]);
/**
 * Chaikin subdivision scheme for open curves.
 */
const SUBDIV_CHAIKIN_OPEN = {
    fn: (pts, i, n) => i == 0
        ? [pts[0], ...CHAIKIN_FIRST(pts)]
        : i === n - 3
            ? [...CHAIKIN_LAST(pts), pts[2]]
            : CHAIKIN_MAIN(pts),
    size: 3,
};
/**
 * Chaikin subdivision scheme for closed curves.
 */
const SUBDIV_CHAIKIN_CLOSED = {
    fn: CHAIKIN_MAIN,
    pre: wrap3,
    size: 3,
};
const CUBIC_MAIN = kernel3([1 / 8, 3 / 4, 1 / 8], [0, 1 / 2, 1 / 2]);
/**
 * Cubic bezier subdivision scheme for closed curves.
 */
const SUBDIV_CUBIC_CLOSED = {
    fn: CUBIC_MAIN,
    pre: wrap3,
    size: 3,
};

export { SUBDIV_CHAIKIN_CLOSED, SUBDIV_CHAIKIN_OPEN, SUBDIV_CUBIC_CLOSED, SUBDIV_MID_CLOSED, SUBDIV_MID_OPEN, SUBDIV_THIRDS_CLOSED, SUBDIV_THIRDS_OPEN, kernel2, kernel3, kernel5 };
