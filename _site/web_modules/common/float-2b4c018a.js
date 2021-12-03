function memoizeJ(fn, cache) {
    !cache && (cache = {});
    return (...args) => {
        const key = JSON.stringify(args);
        if (key !== undefined) {
            return key in cache
                ? cache[key]
                : (cache[key] = fn.apply(null, args));
        }
        return fn.apply(null, args);
    };
}

/**
 * @param ch - character
 * @param n - repeat count
 */
const repeat = memoizeJ((ch, n) => ch.repeat(n));

/**
 * @param n - target length
 * @param ch - pad character(s)
 */
const padLeft = memoizeJ((n, ch = " ") => {
    const buf = repeat(String(ch), n);
    return (x, len) => {
        if (x == null)
            return buf;
        x = x.toString();
        len = len !== undefined ? len : x.length;
        return len < n ? buf.substr(len) + x : x;
    };
});
/**
 * Zero-padded 2 digit formatter.
 */
const Z2 = padLeft(2, "0");
/**
 * Zero-padded 3 digit formatter.
 */
const Z3 = padLeft(3, "0");
/**
 * Zero-padded 4 digit formatter.
 */
const Z4 = padLeft(4, "0");

/**
 * Returns {@link Stringer} which formats numbers to given precision. If
 * `special` is true, then exceptional handling for:
 *
 * - NaN => "NaN"
 * - Infinity => "+/-∞"
 *
 * @param len - number of fractional digits
 * @param special - true, if special handling for NaN/Infinity values
 */
const float = memoizeJ((prec, special = false) => special
    ? (x) => nanOrInf(x) || x.toFixed(prec)
    : (x) => x.toFixed(prec));
/**
 * Similar to `float`, returns {@link Stringer} which formats numbers to given
 * character width & precision. Uses scientific notation if needed.
 *
 * Default precision: 3 fractional digits
 */
const floatFixedWidth = memoizeJ((width, prec = 3) => {
    const l = width - prec - 1;
    const pl = Math.pow(10, l);
    const pln = -Math.pow(10, l - 1);
    const pr = Math.pow(10, -(prec - 1));
    const pad = padLeft(width);
    return (x) => {
        const ax = Math.abs(x);
        return pad(nanOrInf(x) ||
            (x === 0
                ? "0"
                : ax < pr || ax >= pl
                    ? exp(x, width)
                    : x.toFixed(prec - (x < pln ? 1 : 0))));
    };
});
const exp = (x, w) => x.toExponential(Math.max(w -
    4 -
    (Math.log(Math.abs(x)) / Math.LN10 >= 10 ? 2 : 1) -
    (x < 0 ? 1 : 0), 0));
const nanOrInf = (x) => isNaN(x)
    ? "NaN"
    : x === Infinity
        ? "+∞"
        : x === -Infinity
            ? "-∞"
            : undefined;

export { Z2 as Z, floatFixedWidth as a, Z3 as b, Z4 as c, float as f, memoizeJ as m, padLeft as p, repeat as r };
