import { U as U8$1, a as U16$1, b as U24$1, c as U32$1, d as U64HL } from './index-1bd2c425.js';
import { m as memoizeJ, r as repeat } from './float-2b4c018a.js';

/**
 * Yields iterator of characters [`from`..`to`] (inclusive). Uses
 * reverse ordering if `to` < `from`.
 *
 * @param from -
 * @param to -
 */
function* charRange(from, to) {
    let i = typeof from === "string" ? from.charCodeAt(0) : from;
    const end = typeof to === "string" ? to.charCodeAt(0) : to;
    if (i <= end) {
        for (; i <= end; i++) {
            yield String.fromCharCode(i);
        }
    }
    else {
        for (; i >= end; i--) {
            yield String.fromCharCode(i);
        }
    }
}

const defGroup = (...xs) => {
    const acc = {};
    for (let range of xs) {
        for (let c of range) {
            acc[c] = true;
        }
    }
    return Object.freeze(acc);
};
/**
 * Object with whitespace characters as keys and their values set to
 * true. All others undefined.
 */
const WS = Object.freeze({
    "\t": true,
    "\n": true,
    "\v": true,
    "\f": true,
    "\r": true,
    " ": true,
});
/**
 * Object with 0-9 characters as keys and their values set to true. All
 * others undefined.
 */
const DIGITS = defGroup(charRange("0", "9"));
/**
 * Object with hex digit characters (upper & lower case versions) as
 * keys and their values set to true. All others undefined.
 */
const HEX = defGroup(charRange("0", "9"), charRange("A", "F"), charRange("a", "f"));
/**
 * Object with ASCII lowercase characters as keys and their values set
 * to true. All others undefined.
 */
const LOWER = defGroup(charRange("a", "z"));
/**
 * Object with ASCII uppercase characters as keys and their values set
 * to true. All others undefined.
 */
const UPPER = defGroup(charRange("A", "Z"));
/**
 * Combination of {@link UPPER} and {@link LOWER}.
 */
const ALPHA = Object.freeze({ ...UPPER, ...LOWER });
/**
 * Combination of {@link ALPHA} and {@link DIGITS} and '_'.
 */
const ALPHA_NUM = Object.freeze({
    ...ALPHA,
    ...DIGITS,
    _: true,
});
/**
 * Object with ASCII punctuation characters as keys and their values set
 * to true. All others undefined.
 */
const PUNCTUATION = defGroup(charRange("!", "/"), charRange(":", "@"), charRange("[", "`"), charRange("{", "~"));

/**
 * Returns {@link Stringer} which formats given fractions as percentage (e.g.
 * `0.1234 => 12.34%`).
 *
 * @param prec - number of fractional digits (default: 0)
 */
const percent = (prec = 0) => (x) => (x * 100).toFixed(prec) + "%";

/**
 * Returns a {@link Stringer} which formats given numbers to `radix`, `len` and
 * with optional prefix (not included in `len`).
 *
 * @remarks
 * Only bases 2 - 36 are supported, due to native `Number.toString()`
 * limitations.
 *
 * @param radix -
 * @param len -
 * @param prefix -
 */
const radix = memoizeJ((radix, n, prefix = "") => {
    const buf = repeat("0", n);
    return (x) => {
        x = (x >>> 0).toString(radix);
        return prefix + (x.length < n ? buf.substr(x.length) + x : x);
    };
});
/**
 * 8bit binary conversion preset.
 */
const B8 = radix(2, 8);
/**
 * 16bit binary conversion preset.
 */
const B16 = radix(2, 16);
/**
 * 32bit binary conversion preset.
 */
const B32 = radix(2, 32);
/**
 * 8bit hex conversion preset.
 * Assumes unsigned inputs.
 */
const U8 = U8$1;
/**
 * 16bit hex conversion preset.
 * Assumes unsigned inputs.
 */
const U16 = U16$1;
/**
 * 24bit hex conversion preset.
 * Assumes unsigned inputs.
 */
const U24 = U24$1;
/**
 * 32bit hex conversion preset.
 * Assumes unsigned inputs.
 */
const U32 = U32$1;
/**
 * 64bit hex conversion preset (2x 32bit ints)
 * Assumes unsigned inputs.
 */
const U64 = U64HL;

const ENTITIES = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
    "—": "&mdash;",
    "–": "&ndash;",
    "…": "&hellip;",
    "¢": "&cent;",
    "€": "&euro;",
    "£": "&pound;",
    "§": "&sect;",
    "©": "&copy;",
    "®": "&reg;",
    "™": "&trade;",
    "\xa0": "&nbsp;",
};
const RE_ENTITIES = new RegExp(`[${Object.keys(ENTITIES).join("")}]`, "g");
const ENTITIES_REV = Object.entries(ENTITIES).reduce((acc, [k, v]) => ((acc[v] = k), acc), {});
const RE_ENTITIES_REV = new RegExp(`(${Object.keys(ENTITIES_REV).join("|")})`, "g");
const $esc = (re, index) => (src) => src.replace(re, (x) => index[x]);
const escapeEntities = $esc(RE_ENTITIES, ENTITIES);
const unescapeEntities = $esc(RE_ENTITIES_REV, ENTITIES_REV);

export { ALPHA as A, B8 as B, DIGITS as D, ENTITIES as E, HEX as H, LOWER as L, PUNCTUATION as P, RE_ENTITIES as R, U24 as U, WS as W, U32 as a, U16 as b, ENTITIES_REV as c, RE_ENTITIES_REV as d, escapeEntities as e, UPPER as f, ALPHA_NUM as g, B16 as h, B32 as i, U8 as j, U64 as k, charRange as l, percent as p, radix as r, unescapeEntities as u };
