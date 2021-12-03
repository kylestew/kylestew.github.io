import { e as compile, A as ARGS_VV, u as MATH, k as ARGS_VN, w as MATH_N, x as DEFAULT_OUT, v as vop, S as SET } from '../common/emit-4620adbe.js';
import { c as add$1, k as add4, s as setC4, e as divN$1, l as divN4, j as setC, i as setC6, h as cross3, g as setC2, f as setC3 } from '../common/divn-48ef128e.js';
import { o as addN$1, p as addN4, i as div$1, q as div4, r as mul$1, t as mul4, k as dotS2, e as dotS3, l as dotS4, u as X3, Y as Y3, a as Z3, Z as ZERO3, n as neg, v as subN$1, w as subN4 } from '../common/addn-a6cb9da5.js';
import { g as scale22, s as scale23, h as scale33, e as scale44, i as mulV23, j as mulV44, b as mulV344, q as quatFromAxisAngle, d as concat, t as translation23, f as translation44, k as mulM44, l as mulM23 } from '../common/translation-e758206b.js';
export { a as alignmentQuat, d as concat, n as mulM, o as mulM22, l as mulM23, p as mulM33, k as mulM44, c as mulV, r as mulV22, i as mulV23, u as mulV33, b as mulV344, j as mulV44, m as mulVQ, q as quatFromAxisAngle, v as quatToAxisAngle, g as scale22, s as scale23, h as scale33, e as scale44, t as translation23, f as translation44 } from '../common/translation-e758206b.js';
import { s as setS2, a as setS3, b as setS4, d as dotC4, c as dotC6, e as setVV4, f as setVV6, g as setVV9, h as setVV16, i as fromHomogeneous4, j as sum } from '../common/setvv-fdfc7fab.js';
import { D as DEG2RAD, E as EPS } from '../common/api-8453d590.js';
import { s as set$1, i as set4, j as magSq4, c as sub3, e as dot3, k as dot4, l as dot2, f as sub$1, n as sub4 } from '../common/magsq-9dc23acb.js';
import { n as normalize } from '../common/normalize-238b0958.js';
import { c as maddN4 } from '../common/maddn-71d670d5.js';
import { c as mulN4, a as mulN$1 } from '../common/muln-2f111deb.js';
import { e as eqDelta } from '../common/eqdelta-099a6304.js';
import { s as sincos } from '../common/angle-a4c18f3e.js';
import '../common/zip-907b97a6.js';
import '../common/illegal-arity-0f06cc40.js';
import '../common/deferror-480a42fb.js';
import '../common/is-iterable-2e1d7abd.js';
import '../common/api-4427ff26.js';
import '../common/is-arraylike-29dbc151.js';
import '../common/unsupported-bfdbf30c.js';
import '../common/is-number-dd4646bb.js';
import '../common/add-9f59e136.js';

const IDENT22 = Object.freeze([1, 0, 0, 1]);
const IDENT23 = Object.freeze([1, 0, 0, 1, 0, 0]);
//prettier-ignore
const IDENT33 = Object.freeze([
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
]);
//prettier-ignore
const IDENT44 = Object.freeze([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
]);

const DEFAULT_SIZES = [6, 9, 16];
const defMath = (fn, op, sizes = DEFAULT_SIZES) => sizes.map((n) => fn.add(n, compile(n, MATH(op), ARGS_VV, undefined, "o", "", DEFAULT_OUT)));
const defMathN = (fn, op, sizes = DEFAULT_SIZES) => sizes.map((n) => fn.add(n, compile(n, MATH_N(op), ARGS_VN, "o,a", "o", "", DEFAULT_OUT)));

/**
 * Componentwise matrix addition. If `out` is not given, writes result
 * in `a`. Both input matrices MUST be of same size.
 *
 * out = a + b
 *
 * @param out -
 * @param a -
 * @param b -
 */
const add = add$1;
const add22 = add4;
const [add23, add33, add44] = defMath(add, "+");

/**
 * Adds single scalar componentwise to matrix. If `out` is not given,
 * writes result in `mat`.
 *
 * out = mat + n
 *
 * @param out -
 * @param mat -
 * @param n -
 */
const addN = addN$1;
const addN22 = addN4;
const [addN23, addN33, addN44] = defMathN(addN, "+");

/**
 * Extracts column vector from given matrix and writes result to `out`.
 * If `out` is null, creates new vector.
 *
 * @param out -
 * @param mat -
 * @param column -
 */
const column = vop(1);
const column22 = column.add(4, (out, m, n) => setS2(out, m, 0, n * 2));
const column23 = column.add(6, column22);
const column33 = column.add(9, (out, m, n) => setS3(out, m, 0, n * 3));
const column44 = column.add(16, (out, m, n) => setS4(out, m, 0, n * 4));

const conjugateQ = (out, a) => setC4(out || a, -a[0], -a[1], -a[2], a[3]);

const dp4 = dotC4;
const dp6 = dotC6;
const det22 = (m) => dp4(m[0], m[3], -m[1], m[2]);
const det23 = det22;
const det33 = (m) => {
    const [m00, m01, m02, m10, m11, m12, m20, m21, m22] = m;
    const d01 = dp4(m22, m11, -m12, m21);
    const d11 = dp4(m12, m20, -m22, m10);
    const d21 = dp4(m21, m10, -m11, m20);
    return dp6(m00, d01, m01, d11, m02, d21);
};
const detCoeffs44 = (m) => {
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33,] = m;
    return [
        dp4(m00, m11, -m01, m10),
        dp4(m00, m12, -m02, m10),
        dp4(m00, m13, -m03, m10),
        dp4(m01, m12, -m02, m11),
        dp4(m01, m13, -m03, m11),
        dp4(m02, m13, -m03, m12),
        dp4(m20, m31, -m21, m30),
        dp4(m20, m32, -m22, m30),
        dp4(m20, m33, -m23, m30),
        dp4(m21, m32, -m22, m31),
        dp4(m21, m33, -m23, m31),
        dp4(m22, m33, -m23, m32),
    ];
};
const det44FromCoeffs = (d) => dp6(d[0], d[11], -d[1], d[10], d[2], d[9]) +
    dp6(d[3], d[8], -d[4], d[7], d[5], d[6]);
const det44 = (m) => det44FromCoeffs(detCoeffs44(m));

/**
 * Extracts matrix diagonal into `out`.
 *
 * @param out -
 * @param mat -
 */
const diag = vop(1);
const diag22 = diag.add(4, (out, m) => setS2(out, m, 0, 0, 1, 3));
const diag23 = diag.add(6, diag22);
const diag33 = diag.add(9, (out, m) => setS3(out, m, 0, 0, 1, 4));
const diag44 = diag.add(16, (out, m) => setS4(out, m, 0, 0, 1, 5));

/**
 * Componentwise matrix division. If `out` is not given, writes result
 * in `a`. Both input matrices MUST be of same size.
 *
 * out = a / b
 *
 * @param out -
 * @param a -
 * @param b -
 */
const div = div$1;
const div22 = div4;
const [div23, div33, div44] = defMath(div, "/");

/**
 * Componentwise matrix division by single scalar. If `out` is not
 * given, writes result in `mat`.
 *
 * out = mat / n
 *
 * @param out -
 * @param mat -
 * @param n -
 */
const divN = divN$1;
const divN22 = divN4;
const [divN23, divN33, divN44] = defMathN(divN, "/");

/**
 * Constructs a 4x4 matrix representing the given view frustum. Creates
 * new matrix if `out` is `null`.
 *
 * @param out -
 * @param left -
 * @param right -
 * @param bottom -
 * @param top -
 * @param near -
 * @param far -
 */
const frustum = (out, left, right, bottom, top, near, far) => {
    const dx = 1 / (right - left);
    const dy = 1 / (top - bottom);
    const dz = 1 / (far - near);
    return setC(out || [], near * 2 * dx, 0, 0, 0, 0, near * 2 * dy, 0, 0, (right + left) * dx, (top + bottom) * dy, -(far + near) * dz, -1, 0, 0, -(far * near * 2) * dz, 0);
};
const frustumBounds = (fovy, aspect, near, far) => {
    const top = near * Math.tan((fovy * DEG2RAD) / 2);
    const right = top * aspect;
    return {
        left: -right,
        right,
        bottom: -top,
        top,
        near,
        far,
    };
};

const $ = (dim) => set$1.add(dim, compile(dim, SET, "o,a"));
const set = set$1;
const set22 = set4;
const set23 = $(6);
const set33 = $(9);
const set44 = $(16);

/**
 * Writes identity matrix into given matrix.
 */
const identity = vop();
const identity22 = identity.add(4, (m) => set(m, IDENT22));
const identity23 = identity.add(6, (m) => set(m, IDENT23));
const identity33 = identity.add(9, (m) => set(m, IDENT33));
const identity44 = identity.add(16, (m) => set(m, IDENT44));

const dp4$1 = dotC4;
const dp6$1 = dotC6;
/**
 * Matrix inversion. Returns `undefined` if matrix is not invertible.
 * Mutates `mat` if `out` is `null`.
 *
 * @param out -
 * @param mat -
 */
const invert = vop(1);
const invert22 = invert.add(4, (out, m) => {
    const [m00, m01, m10, m11] = m;
    let det = dp4$1(m00, m11, -m01, m10);
    if (det === 0)
        return;
    det = 1.0 / det;
    return setC4(out || m, m11 * det, -m01 * det, -m10 * det, m00 * det);
});
const invert23 = invert.add(6, (out, m) => {
    const [m00, m01, m10, m11, m20, m21] = m;
    let det = dp4$1(m00, m11, -m01, m10);
    if (det === 0)
        return;
    det = 1.0 / det;
    return setC6(out || m, m11 * det, -m01 * det, -m10 * det, m00 * det, dp4$1(m10, m21, -m11, m20) * det, dp4$1(m01, m20, -m00, m21) * det);
});
const invert33 = invert.add(9, (out, m) => {
    const [m00, m01, m02, m10, m11, m12, m20, m21, m22] = m;
    const d01 = dp4$1(m22, m11, -m12, m21);
    const d11 = dp4$1(m12, m20, -m22, m10);
    const d21 = dp4$1(m21, m10, -m11, m20);
    let det = dp6$1(m00, d01, m01, d11, m02, d21);
    if (det === 0)
        return;
    det = 1.0 / det;
    return setC(out || m, d01 * det, dp4$1(-m22, m01, m02, m21) * det, dp4$1(m12, m01, -m02, m11) * det, d11 * det, dp4$1(m22, m00, -m02, m20) * det, dp4$1(-m12, m00, m02, m10) * det, d21 * det, dp4$1(-m21, m00, m01, m20) * det, dp4$1(m11, m00, -m01, m10) * det);
});
const invert44 = invert.add(16, (out, m) => {
    const coeffs = detCoeffs44(m);
    let det = det44FromCoeffs(coeffs);
    if (det === 0)
        return;
    det = 1.0 / det;
    const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33,] = m;
    const [d00, d01, d02, d03, d04, d05, d06, d07, d08, d09, d10, d11] = coeffs;
    return setC(out || m, dp6$1(m11, d11, -m12, d10, m13, d09) * det, dp6$1(-m01, d11, m02, d10, -m03, d09) * det, dp6$1(m31, d05, -m32, d04, m33, d03) * det, dp6$1(-m21, d05, m22, d04, -m23, d03) * det, dp6$1(-m10, d11, m12, d08, -m13, d07) * det, dp6$1(m00, d11, -m02, d08, m03, d07) * det, dp6$1(-m30, d05, m32, d02, -m33, d01) * det, dp6$1(m20, d05, -m22, d02, m23, d01) * det, dp6$1(m10, d10, -m11, d08, m13, d06) * det, dp6$1(-m00, d10, m01, d08, -m03, d06) * det, dp6$1(m30, d04, -m31, d02, m33, d00) * det, dp6$1(-m20, d04, m21, d02, -m23, d00) * det, dp6$1(-m10, d09, m11, d07, -m12, d06) * det, dp6$1(m00, d09, -m01, d07, m02, d06) * det, dp6$1(-m30, d03, m31, d01, -m32, d00) * det, dp6$1(m20, d03, -m21, d01, m22, d00) * det);
});
const invertQ = (out, a) => {
    let d = magSq4(a);
    d = d > 0 ? -1 / d : 0;
    return setC4(out || a, a[0] * d, a[1] * d, a[2] * d, a[3] * -d);
};

/**
 * Constructs a 4x4 camera matrix for given `eye` position, look-at
 * `target` (both in world space) and normalized `up` vector. Creates
 * new matrix if `out` is `null`.
 *
 * @param out -
 * @param eye -
 * @param target -
 * @param up -
 */
const lookAt = (out, eye, target, up) => {
    const z = normalize(null, sub3([], eye, target));
    const x = normalize(null, cross3([], up, z));
    const y = normalize(null, cross3([], z, x));
    return setC(out || [], x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, -dot3(eye, x), -dot3(eye, y), -dot3(eye, z), 1);
};

/**
 * Converts 2x2 to 2x3 matrix and writes result to `out`. Creates new
 * matrix if `out` is `null`.
 *
 * @param out -
 * @param m22 -
 */
const mat22to23 = (out, m22) => (!out && (out = []), set4(out, m22), (out[4] = out[5] = 0), out);

/**
 * Converts 2x3 to 2x2 matrix and writes result to `out`. Creates new
 * matrix if `out` is `null`.
 *
 * @param out -
 * @param m23 -
 */
const mat23to22 = (out, m23) => set4(out || [], m23);

/**
 * Converts 2x3 to 4x4 matrix and writes result to `out`. Creates new
 * matrix if `out` is `null`.
 *
 * @param out -
 * @param m23 -
 */
const mat23to44 = (out, m23) => setC(out || [], 
// x
m23[0], m23[1], 0, 0, 
// y
m23[2], m23[3], 0, 0, 
// z
0, 0, 1, 0, 
// w
m23[4], m23[5], 0, 1);

/**
 * Converts 3x3 to 4x4 matrix and writes result to `out`. Creates new
 * matrix if `out` is `null`.
 *
 * @param out -
 * @param m33 -
 */
const mat33to44 = (out, m33) => setC(out || [], 
// x
m33[0], m33[1], m33[2], 0, 
// y
m33[3], m33[4], m33[5], 0, 
// z
m33[6], m33[7], m33[8], 0, 
// w
0, 0, 0, 1);

/**
 * Converts 4x4 to 3x3 matrix and writes result to `out`. Creates new
 * matrix if `out` is `null`.
 *
 * @param out -
 * @param m44 -
 */
const mat44to33 = (out, m44) => (!out && (out = []),
    setS3(out, m44),
    setS3(out, m44, 3, 4),
    setS3(out, m44, 6, 8));

const mat22n = (out, n) => scale22(out, n);
const mat23n = (out, n) => scale23(out, n);
const mat33n = (out, n) => scale33(out, n);
const mat44n = (out, n) => scale44(out, [n, n, n, n]);

/**
 * Initializes 2x2 matrix from 2D column vectors.
 *
 * @param out -
 * @param x -
 * @param y -
 */
const mat22v = setVV4;
/**
 * Initializes 2x3 matrix (affine transform) from 2D column vectors.
 *
 * @param out -
 * @param x -
 * @param y -
 * @param translate -
 */
const mat23v = setVV6;
/**
 * Initializes 3x3 matrix from 3D column vectors.
 *
 * @param out -
 * @param x -
 * @param y -
 * @param z -
 */
const mat33v = setVV9;
/**
 * Initializes 4x4 matrix from 4D column vectors.
 *
 * @param out -
 * @param x -
 * @param y -
 * @param z -
 * @param w -
 */
const mat44v = setVV16;

/**
 * Interpolates quaternion `a` to `b` by given amount `t` [0...1], using
 * SLERP. Writes result to `out`. The optional `eps` (default 1e-3) is
 * used to switch to linear interpolation if the angular difference is
 * very small.
 *
 * @param out -
 * @param a -
 * @param b -
 * @param t -
 * @param eps -
 */
const mixQ = (out, a, b, t, eps = 1e-3) => {
    const d = dot4(a, b);
    if (Math.abs(d) < 1.0) {
        const theta = Math.acos(d);
        const stheta = Math.sqrt(1 - d * d);
        let u, v;
        if (Math.abs(stheta) < eps) {
            u = v = 0.5;
        }
        else {
            u = Math.sin(theta * (1 - t)) / stheta;
            v = Math.sin(theta * t) / stheta;
        }
        !out && (out = a);
        return maddN4(out, b, v, mulN4(out, a, u));
    }
    return a !== out ? set4(out, a) : out;
};

/**
 * Componentwise matrix multiplication. Use {@link mulM} or
 * {@link concat} for actual matrix-matrix multiplication/concatenation.
 * If `out` is not given, writes result in `a`. Both input matrices MUST
 * be of same size.
 *
 * out = a * b
 *
 * @param out -
 * @param a -
 * @param b -
 */
const mul = mul$1;
const mul22 = mul4;
const [mul23, mul33, mul44] = defMath(mul, "*");

/**
 * Multiplies matrix componentwise with single scalar. If `out` is not
 * given, writes result in `mat`.
 *
 * out = mat * n
 *
 * @param out -
 * @param mat -
 * @param n -
 */
const mulN = mulN$1;
const mulN22 = mulN4;
const [mulN23, mulN33, mulN44] = defMathN(mulN, "*");

/**
 * Performs quaternion multiplication of `a` and `b` and writes result
 * to `out`. If `out` is null, writes result into `a`.
 *
 * @param out -
 * @param a -
 * @param b -
 */
const mulQ = (out, a, b) => {
    const { 0: ax, 1: ay, 2: az, 3: aw } = a;
    const { 0: bx, 1: by, 2: bz, 3: bw } = b;
    return setC4(out || a, ax * bw + aw * bx + ay * bz - az * by, ay * bw + aw * by + az * bx - ax * bz, az * bw + aw * bz + ax * by - ay * bx, aw * bw - ax * bx - ay * by - az * bz);
};

/**
 * Same as:
 *
 * @example
 * ```ts
 * out[0] = dot(v, column(m, 0))
 * out[1] = dot(v, column(m, 1))
 * ```
 *
 * @param out -
 * @param v -
 * @param m -
 */
const mulVM22 = (out, v, m) => setC2(out, dot2(v, m), dotS2(v, m, 0, 2));
const mulVM23 = mulVM22;
/**
 * Same as:
 *
 * @example
 * ```ts
 * out[0] = dot(v, column(m, 0))
 * out[1] = dot(v, column(m, 1))
 * out[2] = dot(v, column(m, 2))
 * ```
 *
 * @param out -
 * @param v -
 * @param m -
 */
const mulVM33 = (out, v, m) => setC3(out, dot3(v, m), dotS3(v, m, 0, 3), dotS3(v, m, 0, 6));
/**
 * Same as:
 *
 * @example
 * ```ts
 * out[0] = dot(v, column(m, 0))
 * out[1] = dot(v, column(m, 1))
 * out[2] = dot(v, column(m, 2))
 * out[3] = dot(v, column(m, 3))
 * ```
 *
 * @param out -
 * @param v -
 * @param m -
 */
const mulVM44 = (out, v, m) => setC4(out, dot4(v, m), dotS4(v, m, 0, 4), dotS4(v, m, 0, 8), dotS4(v, m, 0, 12));

/**
 * Writes transposition of 2x2 matrix `m` to `out`. Creates new matrix
 * if `out` is `null`
 *
 * @param out -
 * @param m -
 */
const transpose22 = (out, m) => setC4(out || [], m[0], m[2], m[1], m[3]);
/**
 * Writes transposition of 3x3 matrix `m` to `out`. Creates new matrix
 * if `out` is `null`
 *
 * @param out -
 * @param m -
 */
const transpose33 = (out, m) => setC(out || [], m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]);
/**
 * Writes transposition of 4x4 matrix `m` to `out`. Creates new matrix
 * if `out` is `null`
 *
 * @param out -
 * @param m -
 */
const transpose44 = (out, m) => setC(out || [], m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]);

/**
 * Converts given 4x4 matrix to a 3x3 normal matrix, i.e. the transposed
 * inverse of its upper-left 3x3 region. If `out` is null a new result
 * matrix will be created. Returns `undefined` if matrix inversion
 * failed.
 *
 * @param out -
 * @param m -
 */
const normal33 = (out, m) => {
    out = invert33(null, mat44to33(out, m));
    return out ? transpose33(null, out) : undefined;
};
/**
 * Converts given 4x4 matrix to a 4x4 matrix normal matrix, i.e. the
 * transposed inverse. Writes results to `m` if `out` is null. Returns
 * `undefined` if matrix inversion failed.
 *
 * @param out -
 * @param m -
 */
const normal44 = (out, m) => {
    out = invert44(out, m);
    return out ? transpose44(null, out) : undefined;
};

/**
 * Creates a 4x4 matrix orthographic projection matrix and writes result
 * to `out`.
 *
 * @param out -
 * @param left -
 * @param right -
 * @param bottom -
 * @param top -
 * @param near -
 * @param far -
 */
const ortho = (out, left, right, bottom, top, near, far) => {
    const dx = 1 / (right - left);
    const dy = 1 / (top - bottom);
    const dz = 1 / (far - near);
    return setC(out || [], 2 * dx, 0, 0, 0, 0, 2 * dy, 0, 0, 0, 0, -2 * dz, 0, -(left + right) * dx, -(top + bottom) * dy, -(far + near) * dz, 1);
};

/**
 * Returns true, if given square matrix of size `n` is orthagonal, i.e.
 * check if `A * AT = I`.
 *
 * {@link https://en.wikipedia.org/wiki/Orthogonal_matrix}
 *
 * @param m -
 * @param n -
 * @param eps -
 */
const isOrthagonal = (m, n, eps = EPS) => {
    for (let i = 0; i < n; i++) {
        const ii = i * n;
        for (let j = 0; j < n; j++) {
            const jj = j * n;
            let acc = 0;
            for (let k = 0; k < n; k++) {
                acc += m[ii + k] * m[jj + k];
            }
            if ((i == j && !eqDelta(acc, 1, eps)) ||
                (i != j && !eqDelta(acc, 0, eps))) {
                return false;
            }
        }
    }
    return true;
};

/**
 * Computes outer/tensor product of vectors `u` and `v`. Returns square
 * matrix of same dimensions as vectors, e.g. 3x3 matrix for 3D vectors.
 *
 * {@link https://en.wikipedia.org/wiki/Outer_product}
 */
const outerProduct = vop(1);
const outerProduct2 = outerProduct.add(2, (out, [ux, uy], [vx, vy]) => setC4(out || [], ux * vx, uy * vx, ux * vy, uy * vy));
const outerProduct3 = outerProduct.add(3, (out, [ux, uy, uz], [vx, vy, vz]) => setC(out || [], ux * vx, uy * vx, uz * vx, ux * vy, uy * vy, uz * vy, ux * vz, uy * vz, uz * vz));
const outerProduct4 = outerProduct.add(4, (out, [ux, uy, uz, uw], [vx, vy, vz, vw]) => setC(out || [], ux * vx, uy * vx, uz * vx, uw * vx, ux * vy, uy * vy, uz * vy, uw * vy, ux * vz, uy * vz, uz * vz, uw * vz, ux * vw, uy * vw, uz * vw, uw * vw));

/**
 * Creates a 4x4 matrix perspective projection matrix and writes result
 * to `out`.
 *
 * @param out -
 * @param fov -
 * @param aspect -
 * @param near -
 * @param far -
 */
const perspective = (out, fov, aspect, near, far) => {
    const f = frustumBounds(fov, aspect, near, far);
    return frustum(out, f.left, f.right, f.bottom, f.top, f.near, f.far);
};

/**
 * Transforms given point `p` (4D, homogeneous coordinates) with 4x4
 * matrix `mvp`, applies perspective divide and then transforms XY
 * components with 2x3 matrix `view` matrix. Returns 3D vector. The
 * result Z component can be used for depth sorting.
 *
 * @param out -
 * @param mvp - 4x4 matrix
 * @param view - 2x3 matrix
 * @param p -
 */
const project = (out, mvp, view, p) => (!out && (out = []),
    mulV23(out, view, fromHomogeneous4(out, mulV44([], mvp, p))));
/**
 * Same as {@link project}, but slightly faster and more convenient for
 * the most common use case of projecting a 3D input point (assumes
 * `w=1` for its homogeneous coordinate, i.e. `[x,y,z,1]`). Returns
 * `undefined` if the computed perspective divisor is zero (and would
 * cause in `NaN` results).
 *
 * @param out -
 * @param mvp - 4x4 matrix
 * @param view - 2x3 matrix
 * @param p -
 */
const project3 = (out, mvp, view, p) => {
    !out && (out = []);
    const q = mulV344(out, mvp, p);
    return q ? mulV23(q, view, q) : undefined;
};
/**
 * Reverse operation of {@link project3}. If `invert` is true (default:
 * false), both `mvp` and `view` matrices will be inverted first
 * (non-destructively), else they're both assumed to be inverted
 * already.
 *
 * @param out -
 * @param mvp - 4x4 matrix
 * @param view - 2x3 matrix
 * @param p -
 * @param invert -
 */
const unproject = (out, mvp, view, p, doInvert = false) => {
    if (doInvert) {
        const _mvp = invert44([], mvp);
        const _view = invert23([], view);
        if (!_mvp || !_view)
            return;
        mvp = _mvp;
        view = _view;
    }
    return mulV344(out, mvp, mulV23([0, 0, p[2] * 2 - 1], view, p));
};

const axisOrder = {
    xyz: [X3, Y3, Z3],
    yxz: [Y3, X3, Z3],
    xzy: [X3, Z3, Y3],
    zxy: [Z3, X3, Y3],
    yzx: [Y3, Z3, X3],
    zyx: [Z3, Y3, X3],
};
/**
 * Constructs a quaternion from given rotation angles in specified
 * `order`.
 *
 * @param order -
 * @param a -
 * @param b -
 * @param c -
 */
const quatFromEuler = (order, a, b, c) => {
    const [aa, ab, ac] = axisOrder[order];
    return mulQ(null, mulQ([], quatFromAxisAngle(aa, a), quatFromAxisAngle(ab, b)), quatFromAxisAngle(ac, c));
};

/**
 * Converts quaternion into 3x3 matrix and writes result to `out`.
 *
 * @param out -
 * @param q -
 */
const quatToMat33 = (out, q) => {
    const [x, y, z, w] = q;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;
    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    return setC(out || [], 1 - yy - zz, xy + wz, xz - wy, xy - wz, 1 - xx - zz, yz + wx, xz + wy, yz - wx, 1 - xx - yy);
};

/**
 * Converts quaternion into 4x4 matrix with optional 3D translation offset `t`,
 * then writes result to `out`.
 *
 * @param out -
 * @param q -
 */
const quatToMat44 = (out, a, t = ZERO3) => {
    const [x, y, z, w] = a;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const xy = x * y2;
    const xz = x * z2;
    const yy = y * y2;
    const yz = y * z2;
    const zz = z * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    return setC(out || [], 1 - yy - zz, xy + wz, xz - wy, 0, xy - wz, 1 - xx - zz, yz + wx, 0, xz + wy, yz - wx, 1 - xx - yy, 0, t[0], t[1], t[2], 1);
};

/**
 * Constructs a 3x3 matrix representing a rotation of `theta` around
 * `axis` and writes result to `out`. If `normalize` is true (default
 * false), non-destructively first normalizes axis vector.
 *
 * @param out -
 * @param axis -
 * @param theta -
 * @param normalize -
 */
const rotationAroundAxis33 = (out, axis, theta, normalize$1 = false) => {
    const [x, y, z] = normalize$1 ? normalize([], axis) : axis;
    const [s, c] = sincos(theta);
    const t = 1 - c;
    const xs = x * s;
    const ys = y * s;
    const zs = z * s;
    const xt = x * t;
    const yt = y * t;
    const zt = z * t;
    return setC(out || [], x * xt + c, y * xt + zs, z * xt - ys, x * yt - zs, y * yt + c, z * yt + xs, x * zt + ys, y * zt - xs, z * zt + c);
};
/**
 * Constructs a 4x4 matrix representing a rotation of `theta` around
 * `axis` and writes result to `out`. If `normalize` is true (default
 * false), non-destructively first normalizes axis vector.
 *
 * @param out -
 * @param axis -
 * @param theta -
 * @param normalize -
 */
const rotationAroundAxis44 = (out, axis, theta, normalize = false) => mat33to44(out, rotationAroundAxis33([], axis, theta, normalize));

/**
 * Constructs a 2x2 matrix rotation matrix for given `theta`.
 *
 * @param out -
 * @param theta -
 */
const rotation22 = (out, theta) => {
    const [s, c] = sincos(theta);
    return setC4(out || [], c, s, -s, c);
};
/**
 * Constructs a 2x3 matrix rotation matrix for given `theta`.
 *
 * @param out -
 * @param theta -
 */
const rotation23 = (out, theta) => {
    const [s, c] = sincos(theta);
    return setC6(out || [], c, s, -s, c, 0, 0);
};
/**
 * Constructs a 3x3 matrix X rotation matrix for given `theta`.
 *
 * @param out -
 * @param theta -
 */
const rotationX33 = (out, theta) => {
    const [s, c] = sincos(theta);
    return setC(out || [], 1, 0, 0, 0, c, s, 0, -s, c);
};
/**
 * Constructs a 3x3 matrix Y rotation matrix for given `theta`.
 *
 * @param out -
 * @param theta -
 */
const rotationY33 = (out, theta) => {
    const [s, c] = sincos(theta);
    return setC(out || [], c, 0, -s, 0, 1, 0, s, 0, c);
};
/**
 * Constructs a 3x3 matrix Z rotation matrix for given `theta`.
 *
 * @param out -
 * @param theta -
 */
const rotationZ33 = (out, theta) => {
    const [s, c] = sincos(theta);
    return setC(out || [], c, s, 0, -s, c, 0, 0, 0, 1);
};
/**
 * Constructs a 4x4 matrix X rotation matrix for given `theta`.
 *
 * @param out -
 * @param theta -
 */
const rotationX44 = (out, theta) => {
    const [s, c] = sincos(theta);
    return setC(out || [], 1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1);
};
/**
 * Constructs a 4x4 matrix Y rotation matrix for given `theta`.
 *
 * @param out -
 * @param theta -
 */
const rotationY44 = (out, theta) => {
    const [s, c] = sincos(theta);
    return setC(out || [], c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
};
/**
 * Constructs a 4x4 matrix Z rotation matrix for given `theta`.
 *
 * @param out -
 * @param theta -
 */
const rotationZ44 = (out, theta) => {
    const [s, c] = sincos(theta);
    return setC(out || [], c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
};

/**
 * Extracts row vector from given matrix and writes result to `out`. If
 * `out` is null, creates new vector.
 *
 * @param out -
 * @param mat -
 * @param column -
 */
const row = vop(1);
const row22 = row.add(4, (out, m, n) => setS2(out, m, 0, n, 1, 2));
const row23 = row.add(6, (out, m, n) => setS3(out, m, 0, n, 1, 2));
const row33 = row.add(9, (out, m, n) => setS3(out, m, 0, n, 1, 3));
const row44 = row.add(16, (out, m, n) => setS4(out, m, 0, n, 1, 4));

/**
 * Computes a 2x3 matrix representing a scale operation with origin `p`
 * and writes result to `out`.
 *
 * @param out -
 * @param m -
 */
const scaleWithCenter23 = (m, p, s) => concat(m, translation23([], p), scale23([], s), translation23([], neg([], p)));
/**
 * Computes a 4x4 matrix representing a scale operation with origin `p`
 * and writes result to `out`.
 *
 * @param out -
 * @param m -
 */
const scaleWithCenter44 = (m, p, s) => concat(m, translation44([], p), scale44([], s), translation44([], neg([], p)));

const $$1 = (f) => (i) => (m, x) => (!m && (m = []), f(m), (m[i] = x), m);
const $22 = $$1(identity22);
const $23 = $$1(identity23);
const $33 = $$1(identity33);
const $44 = $$1(identity44);
// https://stackoverflow.com/a/13211288/294515
const shearX22 = $22(2);
const shearY22 = $22(1);
const shearX23 = $23(2);
const shearY23 = $23(1);
const shearXY33 = $33(3);
const shearXZ33 = $33(6);
const shearYX33 = $33(1);
const shearYZ33 = $33(7);
const shearZX33 = $33(2);
const shearZY33 = $33(5);
const shearXY44 = $44(4);
const shearXZ44 = $44(8);
const shearYX44 = $44(1);
const shearYZ44 = $44(9);
const shearZX44 = $44(2);
const shearZY44 = $44(6);

const $$2 = (f) => (m, theta) => f(m, Math.tan(theta));
const skewX22 = $$2(shearX22);
const skewY22 = $$2(shearY22);
const skewX23 = $$2(shearX23);
const skewY23 = $$2(shearY23);
const skewXY33 = $$2(shearXY33);
const skewXZ33 = $$2(shearXZ33);
const skewYX33 = $$2(shearYX33);
const skewYZ33 = $$2(shearYZ33);
const skewZX33 = $$2(shearZX33);
const skewZY33 = $$2(shearZY33);
const skewXY44 = $$2(shearXY44);
const skewXZ44 = $$2(shearXZ44);
const skewYX44 = $$2(shearYX44);
const skewYZ44 = $$2(shearYZ44);
const skewZX44 = $$2(shearZX44);
const skewZY44 = $$2(shearZY44);

/**
 * Componentwise matrix subtraction. If `out` is not given, writes
 * result in `a`. Both input matrices MUST be of same size.
 *
 * out = a - b
 *
 * @param out -
 * @param a -
 * @param b -
 */
const sub = sub$1;
const sub22 = sub4;
const [sub23, sub33, sub44] = defMath(sub, "-");

/**
 * Componentwise scalar subtraction. If `out` is not given, writes
 * result in `mat`.
 *
 * out = mat - n
 *
 * @param out -
 * @param mat -
 * @param n -
 */
const subN = subN$1;
const subN22 = subN4;
const [subN23, subN33, subN44] = defMathN(subN, "-");

/**
 * Returns matrix trace of `m`, i.e. component sum of `diag(m)`.
 *
 * @param m -
 */
const trace = (m) => sum(diag([], m));

/**
 * Creates 2x3 TRS transformation matrix from given translation vector,
 * rotation angle and scale factor/vector.
 *
 * @param out -
 * @param translate -
 * @param rotation -
 * @param scale -
 */
const transform23 = (out, translate, rotation, scale) => concat(out, translation23([], translate), rotation23([], rotation), scale23([], scale));
/**
 * Creates 4x4 TRS transformation matrix from given translation vector,
 * rotation angles (given as 3D vector) and scale factor/vector.
 * Internally, uses a quaternion for constructing the rotation matrix
 * part. The quaternion is created via {@link quatFromEuler} with ZYX
 * ordering.
 *
 * @param out -
 * @param translate -
 * @param rotation -
 * @param scale -
 */
const transform44 = (out, translate, rotation, scale) => mulM44(out, quatToMat44(out, quatFromEuler("zyx", rotation[2], rotation[1], rotation[0]), translate), scale44([], scale));

/**
 * Produces a 2x3 viewport matrix to transform projected coordinates to
 * screen space.
 *
 * @param out -
 * @param left -
 * @param right -
 * @param bottom -
 * @param top -
 */
const viewport = (out, left, right, bottom, top) => {
    const x = (left + right) / 2;
    const y = (bottom + top) / 2;
    const w = (right - left) / 2;
    const h = (top - bottom) / 2;
    return mulM23(null, translation23(out, [x, y]), scale23([], [w, h]));
};

export { IDENT22, IDENT23, IDENT33, IDENT44, add, add22, add23, add33, add44, addN, addN22, addN23, addN33, addN44, column, column22, column23, column33, column44, conjugateQ, defMath, defMathN, det22, det23, det33, det44, det44FromCoeffs, detCoeffs44, diag, diag22, diag23, diag33, diag44, div, div22, div23, div33, div44, divN, divN22, divN23, divN33, divN44, frustum, frustumBounds, identity, identity22, identity23, identity33, identity44, invert, invert22, invert23, invert33, invert44, invertQ, isOrthagonal, lookAt, mat22n, mat22to23, mat22v, mat23n, mat23to22, mat23to44, mat23v, mat33n, mat33to44, mat33v, mat44n, mat44to33, mat44v, mixQ, mul, mul22, mul23, mul33, mul44, mulN, mulN22, mulN23, mulN33, mulN44, mulQ, mulVM22, mulVM23, mulVM33, mulVM44, normal33, normal44, ortho, outerProduct, outerProduct2, outerProduct3, outerProduct4, perspective, project, project3, quatFromEuler, quatToMat33, quatToMat44, rotation22, rotation23, rotationAroundAxis33, rotationAroundAxis44, rotationX33, rotationX44, rotationY33, rotationY44, rotationZ33, rotationZ44, row, row22, row23, row33, row44, scaleWithCenter23, scaleWithCenter44, set, set22, set23, set33, set44, shearX22, shearX23, shearXY33, shearXY44, shearXZ33, shearXZ44, shearY22, shearY23, shearYX33, shearYX44, shearYZ33, shearYZ44, shearZX33, shearZX44, shearZY33, shearZY44, skewX22, skewX23, skewXY33, skewXY44, skewXZ33, skewXZ44, skewY22, skewY23, skewYX33, skewYX44, skewYZ33, skewYZ44, skewZX33, skewZX44, skewZY33, skewZY44, sub, sub22, sub23, sub33, sub44, subN, subN22, subN23, subN33, subN44, trace, transform23, transform44, transpose22, transpose33, transpose44, unproject, viewport };
