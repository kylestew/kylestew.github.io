/**
 * Clamps value `x` to given closed interval.
 *
 * @param x - value to clamp
 * @param min - lower bound
 * @param max - upper bound
 */
const clamp = (x, min, max) => (x < min ? min : x > max ? max : x);
/**
 * Clamps value `x` to closed [0 .. ∞] interval.
 *
 * @param x
 */
const clamp0 = (x) => (x > 0 ? x : 0);
/**
 * Clamps value `x` to closed [0 .. 1] interval.
 *
 * @param x
 */
const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
/**
 * Clamps value `x` to closed [-1 .. 1] interval.
 *
 * @param x
 */
const clamp11 = (x) => (x < -1 ? -1 : x > 1 ? 1 : x);
/**
 * Clamps value `x` to closed [0 .. 0.5] interval.
 *
 * @param x
 */
const clamp05 = (x) => (x < 0 ? 0 : x > 0.5 ? 0.5 : x);
/**
 * Folds `x` back inside closed [min..max] interval. Also see
 * {@link wrapOnce}.
 *
 * @param x -
 * @param min -
 * @param max -
 */
const wrap = (x, min, max) => {
    if (min === max)
        return min;
    if (x > max) {
        const d = max - min;
        x -= d;
        if (x > max)
            x -= d * (((x - min) / d) | 0);
    }
    else if (x < min) {
        const d = max - min;
        x += d;
        if (x < min)
            x += d * (((min - x) / d + 1) | 0);
    }
    return x;
};
/**
 * Like {@link wrap}, but optimized for cases where `x` is guaranteed to
 * be in `[min - d, max + d]` interval, where `d = max - min`. Result
 * will be in closed `[min..max]` interval.
 *
 * @param x -
 * @param min -
 * @param max -
 */
const wrapOnce = (x, min, max) => x < min ? x - min + max : x > max ? x - max + min : x;
/**
 * Similar to {@link wrapOnce} for [0..1] interval.
 *
 * @param x -
 */
const wrap01 = (x) => (x < 0 ? x + 1 : x > 1 ? x - 1 : x);
/**
 * Similar to {@link wrapOnce} for [-1..1] interval.
 *
 * @param x -
 */
const wrap11 = (x) => (x < -1 ? x + 2 : x > 1 ? x - 2 : x);
const min2id = (a, b) => (a <= b ? 0 : 1);
const min3id = (a, b, c) => a <= b ? (a <= c ? 0 : 2) : b <= c ? 1 : 2;
const min4id = (a, b, c, d) => a <= b
    ? a <= c
        ? a <= d
            ? 0
            : 3
        : c <= d
            ? 2
            : 3
    : b <= c
        ? b <= d
            ? 1
            : 3
        : c <= d
            ? 2
            : 3;
const max2id = (a, b) => (a >= b ? 0 : 1);
const max3id = (a, b, c) => a >= b ? (a >= c ? 0 : 2) : b >= c ? 1 : 2;
const max4id = (a, b, c, d) => a >= b
    ? a >= c
        ? a >= d
            ? 0
            : 3
        : c >= d
            ? 2
            : 3
    : b >= c
        ? b >= d
            ? 1
            : 3
        : c >= d
            ? 2
            : 3;
/**
 * Returns the non-zero minimum value of the given `a`, `b` args.
 *
 * @param a
 * @param b
 */
const minNonZero2 = (a, b) => a !== 0 ? (b !== 0 ? Math.min(a, b) : a) : b;
/**
 * Returns the non-zero minimum value of the given `a`, `b`, `c` args.
 *
 * @param a
 * @param b
 * @param c
 */
const minNonZero3 = (a, b, c) => minNonZero2(minNonZero2(a, b), c);
/**
 * See `smax()`.
 *
 * @param a -
 * @param b -
 * @param k - smooth exponent (MUST be > 0)
 */
const smin = (a, b, k) => smax(a, b, -k);
/**
 * Smooth maximum. Note: Result values will be slightly larger than max
 * value near max(a,b) + eps due to exponential decay. Higher `k` values
 * reduce the error, but also reduce the smoothing. Recommended k=16.
 *
 * {@link https://en.wikipedia.org/wiki/Smooth_maximum}
 *
 * @param a -
 * @param b -
 * @param k - smooth exponent (MUST be > 0)
 */
const smax = (a, b, k) => {
    const ea = Math.exp(a * k);
    const eb = Math.exp(b * k);
    return (a * ea + b * eb) / (ea + eb);
};
/**
 * Same as `smin(smax(x, min, k), max, k)`.
 *
 * @param x -
 * @param min -
 * @param max -
 * @param k -
 */
const sclamp = (x, min, max, k) => smin(smax(x, min, k), max, k);
const absMin = (a, b) => (Math.abs(a) < Math.abs(b) ? a : b);
const absMax = (a, b) => (Math.abs(a) > Math.abs(b) ? a : b);
/**
 * If `abs(x) > abs(e)`, recursively mirrors `x` back into `[-e .. +e]`
 * interval at respective positive/negative boundary.
 *
 * @remarks
 * References:
 * - https://www.desmos.com/calculator/lkyf2ag3ta
 * - https://www.musicdsp.org/en/latest/Effects/203-fold-back-distortion.html
 *
 * @param e - threshold (> 0)
 * @param x - input value
 */
const foldback = (e, x) => x < -e || x > e ? Math.abs(Math.abs((x - e) % (4 * e)) - 2 * e) - e : x;
/**
 * Returns true iff `x` is in closed interval `[min .. max]`
 *
 * @param x -
 * @param min -
 * @param max -
 */
const inRange = (x, min, max) => x >= min && x <= max;
/**
 * Returns true iff `x` is in open interval `(min .. max)`
 *
 * @param x -
 * @param min -
 * @param max -
 */
const inOpenRange = (x, min, max) => x > min && x < max;

export { clamp as a, minNonZero3 as b, clamp01 as c, clamp11 as d, clamp0 as e, clamp05 as f, wrapOnce as g, wrap01 as h, inRange as i, wrap11 as j, min2id as k, min3id as l, minNonZero2 as m, min4id as n, max2id as o, max3id as p, max4id as q, smax as r, smin as s, sclamp as t, absMin as u, absMax as v, wrap as w, foldback as x, inOpenRange as y };
