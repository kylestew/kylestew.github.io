import { h as cross3, g as setC2, f as setC3, s as setC4, i as setC6, j as setC } from './divn-48ef128e.js';
import { e as dot3 } from './magsq-9dc23acb.js';
import { n as normalize, m as mag } from './normalize-238b0958.js';
import { E as EPS } from './api-8453d590.js';
import { k as dotS2, e as dotS3, l as dotS4 } from './addn-a6cb9da5.js';
import { v as vop } from './emit-4620adbe.js';
import { i as isNumber } from './is-number-dd4646bb.js';

/**
 * Computes a quaternion representing the rotation `theta` around
 * `axis`.
 *
 * @param axis -
 * @param theta -
 */
const quatFromAxisAngle = (axis, theta) => {
    theta *= 0.5;
    return normalize([0, 0, 0, Math.cos(theta)], axis, Math.sin(theta));
};
/**
 * Decomposes quaternion into `[axis, theta]` tuple.
 *
 * @param quat -
 */
const quatToAxisAngle = (quat) => {
    const n = normalize([], quat);
    const w = n[3];
    const m = Math.sqrt(1 - w * w);
    const theta = 2 * Math.acos(w);
    return m > EPS
        ? [[n[0] / m, n[1] / m, n[2] / m], theta]
        : [[n[0], n[1], n[2]], theta];
};

/**
 * Returns quaternion describing the rotation from direction vector
 * `from` -> `to`. If `normalize` is true (default), first normalizes
 * the vectors (not modifying original).
 *
 * @param from -
 * @param to -
 * @param normalize -
 */
const alignmentQuat = (from, to, normalize$1 = true) => {
    if (normalize$1) {
        from = normalize([], from);
        to = normalize([], to);
    }
    const axis = cross3([], from, to);
    return quatFromAxisAngle(axis, Math.atan2(mag(axis), dot3(from, to)));
};

/**
 * Matrix-vector multiplication. Supports in-place modification, i.e. if
 * `out === v`.
 *
 * @param out -
 * @param m -
 * @param v -
 */
const mulV = vop(1);
/**
 * Multiplies 2x2 matrix `m` with 2D vector `v`. Supports in-place
 * modification, i.e. if `out === v`.
 *
 * @param out -
 * @param m -
 * @param v -
 */
const mulV22 = mulV.add(4, (out, m, v) => setC2(out || v, dotS2(m, v, 0, 0, 2), dotS2(m, v, 1, 0, 2)));
/**
 * Multiplies 2x3 matrix `m` with 2D vector `v`. Supports in-place
 * modification, i.e. if `out === v`.
 *
 * @param out -
 * @param m -
 * @param v -
 */
const mulV23 = mulV.add(6, (out, m, v) => setC2(out || v, dotS2(m, v, 0, 0, 2) + m[4], dotS2(m, v, 1, 0, 2) + m[5]));
/**
 * Multiplies 3x3 matrix `m` with 3D vector `v`. Supports in-place
 * modification, i.e. if `out === v`.
 *
 * @param out -
 * @param m -
 * @param v -
 */
const mulV33 = mulV.add(9, (out, m, v) => setC3(out || v, dotS3(m, v, 0, 0, 3), dotS3(m, v, 1, 0, 3), dotS3(m, v, 2, 0, 3)));
/**
 * Multiplies 4x4 matrix `m` with 4D vector `v`. Supports in-place
 * modification, i.e. if `out === v`.
 *
 * @param out -
 * @param m -
 * @param v -
 */
const mulV44 = mulV.add(16, (out, m, v) => setC4(out || v, dotS4(m, v, 0, 0, 4), dotS4(m, v, 1, 0, 4), dotS4(m, v, 2, 0, 4), dotS4(m, v, 3, 0, 4)));
/**
 * Multiplies 4x4 matrix `m` with 3D vector `v` and assumes initial
 * `w=1`, i.e. the vector is interpreted as `[x,y,z,1]`. After
 * transformation applies perspective divide of the resulting XYZ
 * components. Returns `undefined` if the computed perspective divisor
 * is zero (and would cause `NaN` results).
 *
 * @param out -
 * @param m -
 * @param v -
 */
const mulV344 = (out, m, v) => {
    const w = dotS3(m, v, 3, 0, 4) + m[15];
    return w !== 0
        ? setC3(out || v, (dotS3(m, v, 0, 0, 4) + m[12]) / w, (dotS3(m, v, 1, 0, 4) + m[13]) / w, (dotS3(m, v, 2, 0, 4) + m[14]) / w)
        : undefined;
};
/**
 * Multiplies quaternion `q` with 3D vector `v`. Returns transformed
 * vector or modifies in-place if `out` is null or `v`.
 *
 * @param out -
 * @param q -
 * @param v -
 */
const mulVQ = (out, q, v) => {
    const { 0: px, 1: py, 2: pz } = v;
    const { 0: qx, 1: qy, 2: qz, 3: qw } = q;
    const ix = qw * px + qy * pz - qz * py;
    const iy = qw * py + qz * px - qx * pz;
    const iz = qw * pz + qx * py - qy * px;
    const iw = -qx * px - qy * py - qz * pz;
    return setC3(out || v, ix * qw + iw * -qx + iy * -qz - iz * -qy, iy * qw + iw * -qy + iz * -qx - ix * -qz, iz * qw + iw * -qz + ix * -qy - iy * -qx);
};

/**
 * Multi-method. Performs matrix-matrix multiplication. If `out` is not
 * given, writes result in `a`.
 *
 * @param out -
 * @param a -
 * @param b -
 */
const mulM = vop(1);
/**
 * 2x2 matrix-matrix multiplication. If `out` is not given, writes
 * result in `a`.
 *
 * @param out -
 * @param a -
 * @param b -
 */
const mulM22 = mulM.add(4, (out, a, b) => setC4(out || a, dotS2(a, b, 0, 0, 2), dotS2(a, b, 1, 0, 2), dotS2(a, b, 0, 2, 2), dotS2(a, b, 1, 2, 2)));
/**
 * 2x3 matrix-matrix multiplication. If `out` is not given, writes
 * result in `a`.
 *
 * @param out -
 * @param a -
 * @param b -
 */
const mulM23 = mulM.add(6, (out, a, b) => setC6(out || a, dotS2(a, b, 0, 0, 2), dotS2(a, b, 1, 0, 2), dotS2(a, b, 0, 2, 2), dotS2(a, b, 1, 2, 2), dotS2(a, b, 0, 4, 2) + a[4], dotS2(a, b, 1, 4, 2) + a[5]));
/**
 * 3x3 matrix-matrix multiplication. If `out` is not given, writes
 * result in `a`.
 *
 * @param out -
 * @param a -
 * @param b -
 */
const mulM33 = mulM.add(9, (out, a, b) => setC(out || a, dotS3(a, b, 0, 0, 3), dotS3(a, b, 1, 0, 3), dotS3(a, b, 2, 0, 3), dotS3(a, b, 0, 3, 3), dotS3(a, b, 1, 3, 3), dotS3(a, b, 2, 3, 3), dotS3(a, b, 0, 6, 3), dotS3(a, b, 1, 6, 3), dotS3(a, b, 2, 6, 3)));
/**
 * 4x4 matrix-matrix multiplication. If `out` is not given, writes
 * result in `a`.
 *
 * @param out -
 * @param a -
 * @param b -
 */
const mulM44 = mulM.add(16, (out, a, b) => setC(out || a, dotS4(a, b, 0, 0, 4), dotS4(a, b, 1, 0, 4), dotS4(a, b, 2, 0, 4), dotS4(a, b, 3, 0, 4), dotS4(a, b, 0, 4, 4), dotS4(a, b, 1, 4, 4), dotS4(a, b, 2, 4, 4), dotS4(a, b, 3, 4, 4), dotS4(a, b, 0, 8, 4), dotS4(a, b, 1, 8, 4), dotS4(a, b, 2, 8, 4), dotS4(a, b, 3, 8, 4), dotS4(a, b, 0, 12, 4), dotS4(a, b, 1, 12, 4), dotS4(a, b, 2, 12, 4), dotS4(a, b, 3, 12, 4)));

/**
 * Concatenates / multiplies given matrices in left-to-right order. A
 * minimum of 2 input matrices must be given. If `out` is null, writes
 * result into `a`.
 *
 * @param out -
 * @param a -
 * @param b -
 * @param xs -
 */
const concat = (out, a, b, ...xs) => xs.reduce((acc, x) => mulM(acc, acc, x), mulM(out, a, b));

/**
 * Computes 2x2 matrix scale matrix and writes result to `out`. If `s`
 * is a number, scaling will be uniform.
 *
 * @param m -
 * @param s -
 */
const scale22 = (m, s) => ((s = isNumber(s) ? [s, s] : s), setC4(m || [], s[0], 0, 0, s[1]));
/**
 * Computes 2x3 matrix scale matrix and writes result to `out`. If `s`
 * is a number, scaling will be uniform.
 *
 * @param m -
 * @param s -
 */
const scale23 = (m, s) => ((s = isNumber(s) ? [s, s] : s), setC6(m || [], s[0], 0, 0, s[1], 0, 0));
/**
 * Computes 3x3 matrix scale matrix and writes result to `out`. If `s`
 * is a number, scaling will be uniform.
 *
 * @param m -
 * @param s -
 */
const scale33 = (m, s) => ((s = isNumber(s) ? [s, s, s] : s),
    setC(m || [], s[0], 0, 0, 0, s[1], 0, 0, 0, s[2]));
/**
 * Computes 4x4 matrix scale matrix and writes result to `out`. If `s`
 * is a number, scaling will be uniform.
 *
 * @param m -
 * @param s -
 */
const scale44 = (m, s) => ((s = isNumber(s) ? [s, s, s] : s),
    setC(m || [], 
    // x
    s[0], 0, 0, 0, 
    // y
    0, s[1], 0, 0, 
    // z
    0, 0, s[2], 0, 
    // w
    0, 0, 0, s[3] !== undefined ? s[3] : 1));

/**
 * Constructs a 2x3 translation matrix.
 *
 * @param out -
 * @param v -
 */
const translation23 = (m, v) => setC6(m || [], 1, 0, 0, 1, v[0], v[1]);
/**
 * Constructs a 4x4 translation matrix.
 *
 * @param out -
 * @param v -
 */
const translation44 = (m, v) => setC(m || [], 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, v[0], v[1], v[2], 1);

export { alignmentQuat as a, mulV344 as b, mulV as c, concat as d, scale44 as e, translation44 as f, scale22 as g, scale33 as h, mulV23 as i, mulV44 as j, mulM44 as k, mulM23 as l, mulVQ as m, mulM as n, mulM22 as o, mulM33 as p, quatFromAxisAngle as q, mulV22 as r, scale23 as s, translation23 as t, mulV33 as u, quatToAxisAngle as v };
