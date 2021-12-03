import { m as memoizeJ, r as repeat, f as float } from '../common/float-2b4c018a.js';
export { Z as Z2, b as Z3, c as Z4, f as float, a as floatFixedWidth, p as padLeft, r as repeat } from '../common/float-2b4c018a.js';
import { a as U32, b as U16 } from '../common/entities-43fd3ff3.js';
export { A as ALPHA, g as ALPHA_NUM, h as B16, i as B32, B as B8, D as DIGITS, E as ENTITIES, c as ENTITIES_REV, H as HEX, L as LOWER, P as PUNCTUATION, R as RE_ENTITIES, d as RE_ENTITIES_REV, b as U16, U as U24, a as U32, k as U64, j as U8, f as UPPER, W as WS, l as charRange, e as escapeEntities, p as percent, r as radix, u as unescapeEntities } from '../common/entities-43fd3ff3.js';
import { i as illegalArgs } from '../common/illegal-arguments-2af523c3.js';
import { m as memoize1 } from '../common/memoize1-b400b78f.js';
import { u as uuid$1 } from '../common/index-1bd2c425.js';
import '../common/deferror-480a42fb.js';

/**
 * UTF-8 Byte Order Mark character
 * https://en.wikipedia.org/wiki/Byte_order_mark
 */
const BOM = "\ufeff";

const RE = /\x1b\[[0-9;]+m/g;
/**
 * Removes all ANSI control sequences from given string.
 *
 * @example
 * ```ts
 * stripAnsi("\x1B[32mhello\x1B[0m \x1B[91mworld\x1B[0m!"");
 * // 'hello world!'
 * ```
 *
 * @param x
 */
const stripAnsi = (x) => x.replace(RE, "");
/**
 * Returns true iff `x` contains ANSI control sequences.
 *
 * @param x
 */
const isAnsi = (x) => /\x1b\[[0-9;]+m/i.test(x);
/**
 * Returns true iff `x` starts w/ an ANSI control sequence.
 *
 * @param x
 */
const isAnsiStart = (x) => /^\x1b\[[0-9;]+m/i.test(x);
/**
 * Returns true iff `x` ends w/ an ANSI control sequence.
 *
 * @param x
 */
const isAnsiEnd = (x) => /\x1b\[[0-9;]+m$/i.test(x);
/**
 * Returns length of `x` excluding any ANSI control sequences (via
 * {@link stripAnsi}).
 *
 * @param x
 */
const lengthAnsi = (x) => stripAnsi(x).length;

/**
 * Uppercase string formatter.
 *
 * @param x - string to transform
 */
const upper = (x) => x.toUpperCase();
/**
 * Lowercase string formatter.
 *
 * @param x - string to transform
 */
const lower = (x) => x.toLowerCase();
/**
 * String formatter which capitalizes first character.
 *
 * @param x - string to transform
 */
const capitalize = (x) => x[0].toUpperCase() + x.substr(1);
/**
 * Converts a CamelCase string into kebab case, with optional custom
 * delimiter (`-` by default).
 *
 * @example
 * ```ts
 * kebab("FooBar23Baz");
 * // "foo-bar23-baz"
 * ```
 *
 * @param x -
 * @param delim -
 */
const kebab = (x, delim = "-") => lower(x.replace(
// TC39
// /(?<=[a-z0-9\u00e0-\u00fd])(?=[A-Z\u00c0-\u00dd])/g,
// (_, i) => (i ? delim : "")
/([a-z0-9\u00e0-\u00fd])([A-Z\u00c0-\u00dd])/g, (_, a, b) => a + delim + b));
/**
 * Short for {@link kebab} using `_` as delimiter.
 *
 * @param x -
 */
const snake = (x) => kebab(x, "_");
/**
 * Uppercase version of {@link snake}.
 *
 * @param x
 */
const upperSnake = (x) => snake(x).toUpperCase();
/**
 * Converts a kebab-case or snake_case string into CamelCase. Uses `-`
 * as default delimiter.
 *
 * @param x -
 * @param delim -
 */
const camel = (x, delim = "-") => lower(x).replace(new RegExp(`\\${delim}+(\\w)`, "g"), (_, c) => upper(c));

const truncate = memoizeJ((n, suffix = "") => (x) => x.length > n ? x.substr(0, n - suffix.length) + suffix : x);
/**
 * Alias for {@link truncate}
 */
const truncateRight = truncate;

/**
 * Returns stringer which pads given input with `ch` (default: space) on
 * both sides and returns fixed width string of given `lineWidth`.
 * Returns string of only pad characters for any `null` or `undefined`
 * values. If the string version of an input is > `lineWidth`, no
 * centering is performed, but the string will be truncated to
 * `lineWidth`.
 *
 * Note: The padding string can contain multiple characters.
 *
 * @example
 * ```ts
 * center(20, "<>")(wrap(" ")("thi.ng"))
 * // "<><><> thi.ng <><><>"
 * ```
 *
 * @param lineWidth - target length
 * @param pad - pad character(s)
 */
const center = memoizeJ((n, pad = " ") => {
    const buf = repeat(String(pad), n);
    return (x) => {
        if (x == null)
            return buf;
        x = x.toString();
        const r = (n - x.length) / 2;
        return x.length < n
            ? buf.substr(0, r) +
                x +
                buf.substr(0, r + ((n & 1) === (x.length & 1) ? 0 : 1))
            : truncate(n)(x);
    };
});

const currency = memoizeJ((sym, pre = true, prec = 2) => {
    const ff = (x) => x.toFixed(prec);
    return pre ? (x) => sym + ff(x) : (x) => ff(x) + sym;
});
const chf = currency("CHF ");
const eur = currency("€");
const gbp = currency("£");
const usd = currency("$");
const yen = currency("¥");

/**
 * Takes a string, linear index position and optional line split delimiter (or
 * regexp, default: "\n"). Computes and returns position of index as cursor
 * coords tuple: `[line, column]`
 *
 * @remarks
 * By default the returned coords are 1-based, but can be configured via
 * optional `offset` arg (also in `[line,column]` order).
 *
 * @example
 * ```ts
 * computeCursorPos("thi.ng\numbrella", 10);
 * // [ 2, 4 ]
 *
 * // w/ custom offset
 * computeCursorPos("thi.ng\numbrella", 10, "\n", [11, 1]);
 * // [ 12, 4 ]
 * ```
 *
 * @param str -
 * @param pos -
 * @param delim -
 * @param offset -
 */
const computeCursorPos = (str, pos, delim = "\n", offset = [1, 1]) => {
    if (!str.length)
        return [1, 1];
    pos = Math.min(Math.max(0, pos), str.length);
    const lines = str.split(delim);
    const n = lines.length;
    for (let i = 0; i < n; i++) {
        const l = lines[i];
        if (pos <= l.length)
            return [i + offset[0], pos + offset[1]];
        pos -= l.length + 1;
    }
    return [n + offset[0] - 1, offset[1]];
};

const ESCAPES = {
    0: "\0",
    b: "\b",
    t: "\t",
    r: "\r",
    v: "\v",
    f: "\f",
    n: "\n",
    "'": "'",
    '"': '"',
    "\\": "\\",
};
const ESCAPES_REV = {
    0: "0",
    8: "b",
    9: "t",
    10: "n",
    11: "v",
    12: "f",
    13: "r",
    33: "'",
    34: '"',
    92: "\\",
};
/**
 * Escapes all non-ASCII characters (and well-known 0x0x control chars) using
 * backslash escape sequences.
 *
 * @remarks
 * - Well-known low-ASCII control chars will be escaped using simple `\`, e.g.
 *   0x0a => `\n`
 * - Non-BMP chars will be escaped using `\Uxxxxxxxx`
 * - Chars outside 0x20 - 0x7e range will be escaped using `\uxxxxx`
 *
 * @param src
 */
const escape = (src) => src
    .replace(/[\0\b\t\n\v\f\r'"\\]/g, (x) => `\\${ESCAPES_REV[x.charCodeAt(0)]}`)
    .replace(/[\ud800-\udfff]{2}/g, (x) => `\\U${U32(x.codePointAt(0))}`)
    .replace(/[^\u0020-\u007e]/g, (x) => `\\u${U16(x.charCodeAt(0))}`);
/**
 * Replaces `\uxxxx` UTF-16 escapes, full `\Uxxxxxxxx` UTF-32 codepoint escapes
 * and other well-known backslash escape sequences (see {@link ESCAPES}) with
 * the characters they represent.
 *
 * @remarks
 * Any unknown named escape sequences (e.g. `\1`) will remain as is.
 *
 * - https://en.wikipedia.org/wiki/UTF-16#Code_points_from_U+010000_to_U+10FFFF
 * - https://www.unicode.org/charts/
 * - https://www.branah.com/unicode-converter
 *
 * @example
 * ```ts
 * unescape("\\ud83d\\ude0e \\U0001f60e")
 * // '😎'
 * ```
 *
 * @param src
 */
const unescape = (src) => src
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, id) => String.fromCharCode(parseInt(id, 16)))
    .replace(/\\U([0-9a-fA-F]{8})/g, (_, id) => String.fromCodePoint(parseInt(id, 16)))
    .replace(/\\([0btnvfr'"\\])/g, (_, id) => ESCAPES[id]);

const format = (fmt, ...args) => {
    const acc = [];
    for (let i = 0, j = 0, n = fmt.length; i < n; i++) {
        const f = fmt[i];
        const t = typeof f;
        acc.push(t === "function" ? f(args[j++]) : t === "object" ? f[args[j++]] : f);
    }
    return acc.join("");
};
/**
 * HOF version of {@link format}.
 *
 * @param fmt
 */
const defFormat = (fmt) => (...args) => format(fmt, ...args);
/**
 * Helper for {@link format} which ignores argument and always returns
 * an empty string.
 *
 * @param _
 */
const ignore = (_) => "";
/**
 * Helper for {@link format} which coerces `x` to a string.
 *
 * @param x
 */
const str = (x) => String(x);

/**
 * Formats given value `x` as Fortran style Hollerith string.
 *
 * @example
 * ```ts
 * hstr("abc")  // "3Habc"
 * hstr(123.45) // "6H123.45"
 * hstr("")     // "0H"
 * hstr(null)   // ""
 * ```
 *
 * {@link https://en.wikipedia.org/wiki/Hollerith_constant}
 *
 * @param x -
 */
const hstr = (x) => x != null ? ((x = x.toString()), `${x.length}H${x}`) : "";

/**
 * Takes an array of string parts and returns a new string of each part's
 * initial character. The `mode` arg can be used to customize result casing
 * (default: uppercase). If `mode` is null, the original casing will be kept.
 *
 * @example
 * ```ts
 * initials(["alicia", "bella", "carerra"]);
 * // "ABC"
 *
 * initials("shader-ast-GLSL".split("-"))
 * // "SAG"
 *
 * initials("Ludwig van Beethoven".split(" "), null)
 * // "LvB"
 * ```
 *
 * @param parts
 * @param mode
 */
const initials = (parts, mode = "u") => {
    const res = parts.map((x) => x[0]).join("");
    return mode === "u"
        ? res.toUpperCase()
        : mode === "l"
            ? res.toLowerCase()
            : res;
};

const int = (x) => String(Math.trunc(x));
const intLocale = memoizeJ((locale) => (x) => Math.trunc(x).toLocaleString(locale));

const TPL = /\{(\d+)\}/g;
const TPL_K = /\{([a-z0-9_.-]+)\}/gi;
/**
 * Takes a string template with embedded `{number}` style terms and any
 * number of args. Replaces numbered terms with their respective args
 * given.
 *
 * @example
 * ```ts
 * interpolate("let {0}: {2} = {1};", "a", 42, "number")
 * // "let a: number = 42;"
 * ```
 *
 * @param src
 * @param args
 */
const interpolate = (src, ...args) => args.length > 0
    ? src.replace(TPL, (_, id) => String(args[parseInt(id, 10)]))
    : src;
/**
 * Similar to {@link interpolate}, but uses alphanumeric placeholders in the
 * template string and an object of values for the stated keys.
 *
 * @example
 * ```ts
 * interpolateKeys(
 *   "let {id}: {type} = {val};",
 *   { id: "a", type: "number", val: 42 }
 * )
 * // "let a: number = 42;"
 * ```
 *
 * @param src
 * @param keys
 */
const interpolateKeys = (src, keys) => src.replace(TPL_K, (_, id) => keys[id] != undefined
    ? String(keys[id])
    : illegalArgs(`missing key: ${id}`));

/**
 * Higher-order version of `Array.join()`. Takes separator string `sep`
 * and returns function which accepts an array and joins all elements w/
 * separator into a result string.
 *
 * @example
 * ```ts
 * const slashes = join("/");
 *
 * slashes([1, 2, 3]);
 * // "1/2/3"
 *
 * const formatOBJFace = partial(
 *   format, ["f ", slashes, " ", slashes, " ", slashes]
 * );
 *
 * formatOBJFace([1, 2], [3, 4], [5, 6]);
 * // "f 1/2 3/4 5/6"
 * ```
 */
const join = memoize1((sep) => (x) => x.join(sep));

/**
 * @param n - target length
 * @param ch - pad character(s)
 */
const padRight = memoizeJ((n, ch = " ") => {
    const buf = repeat(String(ch), n);
    return (x, len) => {
        if (x == null)
            return buf;
        x = x.toString();
        len = len !== undefined ? len : x.length;
        return len < n ? x + buf.substr(len) : x;
    };
});

const maybeParseInt = (x, defaultVal = 0, radix = 10) => {
    const n = parseInt(x, radix);
    return isNaN(n) ? defaultVal : n;
};
const maybeParseFloat = (x, defaultVal = 0) => {
    const n = parseFloat(x);
    return isNaN(n) ? defaultVal : n;
};

/**
 * Returns a ruler-like string of given `width`, using `a` character for major
 * ticks and `b` for minor ticks.
 *
 * @example
 * ```ts
 * console.log(ruler(40))
 * // |''''|''''|''''|''''|''''|''''|''''|''''
 *
 * console.log(ruler(40, 8, "!", "."))
 * // !.......!.......!.......!.......!.......
 * ```
 *
 * @param width
 * @param major
 * @param a
 * @param b
 */
const ruler = (width, major = 5, a = "|", b = "'") => repeat(a + repeat(b, major - 1), Math.ceil(width / major)).substr(0, width);
/**
 * Returns a grid of given `cols` x `rows` as string, each cell of size `w` x
 * `h`. The optional `chars` can be used to customize the grid.
 *
 * @example
 * ```ts
 * console.log(grid(3, 3, 4, 2));
 * // +---+---+---+
 * // |   |   |   |
 * // +---+---+---+
 * // |   |   |   |
 * // +---+---+---+
 * // |   |   |   |
 * // +---+---+---+
 *
 * console.log(grid(3, 3, 4, 2, "*_/"));
 * // *___*___*___*
 * // /   /   /   /
 * // *___*___*___*
 * // /   /   /   /
 * // *___*___*___*
 * // /   /   /   /
 * // *___*___*___*
 *
 * console.log(grid(3, 2, 3, 3, "+  #"));
 * // +  +  +
 * //  ## ##
 * //  ## ##
 * // +  +  +
 * //  ## ##
 * //  ## ##
 * // +  +  +
 * ```
 *
 * @param cols
 * @param rows
 * @param w
 * @param h
 * @param chars
 */
const grid = (cols, rows, w, h, [a, b, c, d] = "+-| ") => {
    const major = ruler(cols * w, w, a, b) + a + "\n";
    const minor = ruler(cols * w, w, c, d) + c + "\n";
    return repeat(major + repeat(minor, h - 1), rows) + major;
};

const src = "àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;";
const dest = "aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------";
const re = new RegExp(src.split("").join("|"), "g");
/**
 * Based on:
 * {@link https://medium.com/@matthagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1}
 *
 * @example
 * ```ts
 * slugify("Me, myself (& ëye)!")
 * // "me-myself-and-eye"
 * ```
 *
 * @param str -
 */
const slugify = (str) => {
    return str
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(re, (c) => dest[src.indexOf(c)])
        .replace(/&+/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-{2,}/g, "-")
        .replace(/(^-+)|(-+$)/g, "");
};
/**
 * Similar to {@link slugify}, however uses GitHub's anchor naming rules
 * for headings in markdown files (AFAICT).
 *
 * @example
 * ```ts
 * slugifyGH("Me, myself (& ëye)!")
 * // "me-myself--ëye"
 * ```
 *
 * @param str
 */
const slugifyGH = (str) => {
    return (str
        .toLowerCase()
        // remove all punctuations:
        // - ascii
        // - https://www.unicode.org/charts/PDF/U2000.pdf (general)
        // - https://www.unicode.org/charts/PDF/U2700.pdf (dingbats)
        // - https://www.unicode.org/charts/PDF/U2E00.pdf (supplemental)
        .replace(/[!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~\u0000-\u001f\u2000-\u206f\u2700-\u27bf\u2e00-\u2e7f]/g, "")
        .replace(/\s/g, "-"));
};

/**
 * Forms a new strings which inserts given `insert` string into `src`
 * string at `from` position and appends remaining `src` chars from
 * original `to` position. If `from` and `to` are equal (`to` by default
 * is), the operation is a pure insertion. If not, then some chars from
 * `src` will be removed in the new string. If either position is
 * negative, it'll be considered relative to the end of the `src`.
 *
 * @param src -
 * @param insert -
 * @param from -
 * @param to -
 */
const splice = (src, insert, from, to = from) => {
    if (from < 0) {
        from += src.length;
    }
    if (to < 0) {
        to += src.length;
    }
    if (from > to) {
        illegalArgs("'from' index must be <= 'to'");
    }
    to = Math.max(to, 0);
    return from <= 0
        ? insert + src.substr(to)
        : from >= src.length
            ? src + insert
            : src.substr(0, from) + insert + src.substr(to);
};

/**
 * Iterator version of `String.prototype.split()`. Yields iterable of substrings
 * of `src`, delimited by given regexp (default: unix & windows linebreaks).
 *
 * @remarks
 * Use this function to avoid creating an entire full copy of the original
 * source string, e.g. when only single-token or line-based accesses are needed.
 * This function is ~2x faster for large strings (benchmarked with 8MB & 16MB
 * inputs), with dramatically lower memory consumption.
 *
 * @param src
 * @param delim
 * @param includeDelim
 */
function* split(src, delim = /\r?\n/g, includeDelim = false) {
    let i = 0;
    const n = src.length;
    const include = ~~includeDelim;
    const re = typeof delim === "string" ? new RegExp(delim, "g") : delim;
    for (; i < n;) {
        const m = re.exec(src);
        if (!m) {
            yield src.substring(i);
            return;
        }
        const len = m[0].length;
        yield src.substring(i, m.index + include * len);
        i = m.index + len;
    }
}

/**
 * Higher order version of `JSON.stringify()` with the option to treat strings
 * and numbers differently. If `all` is `false` (default), strings and numbers
 * are simply converted using `String(x)`. If `indent` is given, it will be used
 * for `JSON.stringify(x, null, indent)`
 *
 * @param all
 * @param indent
 */
const stringify = (all = false, indent) => (x) => all || (typeof x !== "string" && typeof x !== "number")
    ? JSON.stringify(x, null, indent)
    : String(x);

const nextTab = (x, tabSize) => Math.floor((x + tabSize) / tabSize) * tabSize;
/**
 * Multi-line version of {@link tabsToSpacesLine}.
 *
 * @example
 * ```ts
 * console.log(
 *   tabsToSpaces("0\t1\t2", 10)
 *   + "\n" +
 *   tabsToSpaces("0\t45\t890\t\t6\t0")
 *   + "\n" +
 *   tabsToSpaces("^\t^\t^\t^\t^\t^")
 * );
 * // 0         1         2
 * // 0   45  890     6   0
 * // ^   ^   ^   ^   ^   ^
 * ```
 *
 * @param src
 * @param tabSize
 */
const tabsToSpaces = (src, tabSize = 4) => src
    .split(/\r?\n/g)
    .map((line) => tabsToSpacesLine(line, tabSize))
    .join("\n");
/**
 * Takes a single line string and converts all tab characters to spaces, using
 * given `tabSize`.
 *
 * @param line
 * @param tabSize
 */
const tabsToSpacesLine = (line, tabSize = 4) => {
    let res = "";
    let words = line.split(/\t/g);
    let n = words.length - 1;
    for (let i = 0; i < n; i++) {
        const w = words[i];
        res += w;
        res += repeat(" ", nextTab(res.length, tabSize) - res.length);
    }
    res += words[n];
    return res;
};
/**
 * Multi-line version of {@link spacesToTabsLine}.
 *
 * @param src
 * @param tabSize
 */
const spacesToTabs = (src, tabSize = 4) => src
    .split(/\r?\n/g)
    .map((line) => spacesToTabsLine(line, tabSize))
    .join("\n");
/**
 * Takes a single line string and converts all tab characters to spaces, using
 * given `tabSize`. Inverse op of {@link tabsToSpacesLine}.
 *
 * @param line
 * @param tabSize
 */
const spacesToTabsLine = (line, tabSize = 4) => {
    const re = /\s{2,}/g;
    let i = 0;
    let res = "";
    let m;
    while ((m = re.exec(line))) {
        const numSpaces = m[0].length;
        res += line.substring(i, m.index);
        i = m.index;
        const end = m.index + numSpaces;
        while (i < end) {
            const j = nextTab(i, tabSize);
            if (j <= end) {
                res += "\t";
                i = j;
            }
            else {
                res += repeat(" ", end - i);
                i = end;
            }
        }
        i = end;
    }
    return res + line.substr(i);
};

/**
 * Higher order trim function (both sides) with support for user defined
 * trimmable characters (default: whitespace only).
 *
 * @example
 * ```ts
 * trim()("  Hello   ")
 * // "Hello"
 *
 * trim(" -+")("-+-+- Hello -+-+-")
 * // "Hello"
 * ```
 *
 * @param chars -
 */
const trim = memoize1((chars = " \t\n\r") => {
    chars = `(${chars
        .split("")
        .map((x) => `\\${x}`)
        .join("|")})`;
    const re = new RegExp(`(^${chars}+)|(${chars}+$)`, "g");
    return (x) => x.replace(re, "");
});

const truncateLeft = memoizeJ((n, prefix = "") => (x) => x.length > n
    ? prefix + x.substr(x.length - n + prefix.length)
    : x);

const units = memoizeJ((exp, base, prec = 2) => {
    const groups = exp
        .map((x) => [
        x[0],
        x[2] != null ? x[2] : prec,
        x[1],
    ])
        .sort((a, b) => a[0] - b[0]);
    return (x) => {
        if (x === 0) {
            return `0${base}`;
        }
        const absX = Math.abs(x);
        for (let i = groups.length; i-- > 0;) {
            const g = groups[i];
            if (absX >= g[0] || i === 0) {
                return (x / g[0]).toFixed(g[1]) + g[2];
            }
        }
        return "";
    };
});
const KB = 1024;
const bits = units([
    [1, " bits", 0],
    [KB, " Kb"],
    [KB ** 2, " Mb"],
    [KB ** 3, " Gb"],
], " bits", 2);
const bytes = units([
    [1, " bytes", 0],
    [KB, " KB"],
    [KB ** 2, " MB"],
    [KB ** 3, " GB"],
    [KB ** 4, " TB"],
    [KB ** 5, " PB"],
], " bytes", 2);
const seconds = units([
    [1e-12, " ps"],
    [1e-9, " ns"],
    [1e-6, " µs"],
    [1e-3, " ms"],
    [1, " secs"],
    [60, " mins"],
    [60 * 60, " hours"],
    [24 * 60 * 60, " days"],
], " secs", 3);
const meters = units([
    [1e-12, " pm"],
    [1e-9, " nm"],
    [1e-6, " µm"],
    [1e-3, " mm"],
    [1e-2, " cm"],
    [1, " m"],
    [1e3, " km"],
], " m", 2);
const grams = units([
    [1e-12, " pg"],
    [1e-9, " ng"],
    [1e-6, " µg"],
    [1e-3, " mg"],
    [1, " g"],
    [1e3, " kg"],
    [1e6, " t"],
    [1e9, " kt"],
    [1e12, " Mt"],
], " g", 2);

/**
 * Same as {@link @thi.ng/hex#uuid}. Returns UUID formatted string of given byte
 * array from optional start index `i` (default: 0). Array must have min. length
 * 16.
 *
 * @remarks
 * Use {@link @thi.ng/random#uuid} to also generate an UUID from scratch (rather
 * than just format one).
 *
 * @param id -
 * @param i -
 */
const uuid = uuid$1;

/**
 * Higher order formatter for n-D vectors, with each element formatted using
 * `prec` and using optional delimiter and pre/postfixes.
 *
 * @size - vector size (optimized for size 1-4)
 * @prec - precision (see {@link float}) or existing number formatter
 * @delim - delimiter (default: `,`)
 * @pre - prefix (default: `[`)
 * @post - prefix (default: `]`)
 */
const vector = memoizeJ((size, prec = 3, d = ",", pre = "[", post = "]") => {
    const f = typeof prec === "number" ? float(prec) : prec;
    switch (size) {
        case 1:
            return (v) => `${pre}${f(v[0])}${post}`;
        case 2:
            return (v) => `${pre}${f(v[0])}${d}${f(v[1])}${post}`;
        case 3:
            return (v) => `${pre}${f(v[0])}${d}${f(v[1])}${d}${f(v[2])}${post}`;
        case 4:
            return (v) => `${pre}${f(v[0])}${d}${f(v[1])}${d}${f(v[2])}${d}${f(v[3])}${post}`;
        default:
            return (v) => {
                const res = [];
                for (let i = 0; i < v.length; i++) {
                    res.push(f(v[i]));
                }
                return `${pre}${res.join(d)}${post}`;
            };
    }
});

/**
 * Returns a {@link Stringer} which wrap inputs with given `pad` string on
 * both sides.
 */
const wrap = memoizeJ((pad) => (x) => pad + x + pad);

/**
 * Internal representation of a single line (for word wrapping purposes). A thin
 * wrapper of individual word and the _logical_ line length (rather than the
 * actualy string width).
 *
 * @internal
 */
class Line {
    constructor(word, n) {
        this.n = 0;
        this.w = [];
        word != null && this.add(word, n);
    }
    add(word, n = word.length) {
        this.w.push(word);
        this.n += n + ~~(this.n > 0);
        return this;
    }
    toString() {
        return this.w.join(" ");
    }
}
/**
 * (Default) wordwrap word splitting strategy for plain text.
 */
const SPLIT_PLAIN = {
    length: (x) => x.length,
    split: (_, max) => max,
};
/**
 * Wordwrap word splitting strategy for text containing ANSI control sequences.
 */
const SPLIT_ANSI = {
    length: lengthAnsi,
    split: (x, max) => {
        const re = /\x1b\[[0-9;]+m/g;
        let i = max;
        let match;
        while ((match = re.exec(x))) {
            if (match.index >= max)
                break;
            const n = match[0].length;
            i += n;
            max += n;
        }
        return i;
    },
};
/**
 * Attempts to append given word to current line or else creates a new line.
 *
 * @internal
 */
const append = (acc, word, wordLen, width) => {
    const curr = acc[acc.length - 1];
    curr && width - curr.n > wordLen
        ? curr.add(word, wordLen)
        : acc.push(new Line(word, wordLen));
};
/**
 * Depending on wrap mode (hard/soft), splits too long words into multiple lines
 * and appends them to `acc`.
 *
 * @remarks
 * Splitting uses the provided {@link IWordSplit} impl (or, if missing,
 * {@link SPLIT_PLAIN}). If the current start line only has less than
 * {@link WordWrapOpts.min} chars available and the word is longer than that, it
 * will be placed into a new line (thus minimizing legibility issues).
 *
 * @param word
 * @param opts
 * @param offset
 * @param acc
 *
 * @internal
 */
const wrapWord = (word, { width, min, hard, splitter }, offset = 0, acc = []) => {
    let len = splitter.length(word);
    let free = width - offset;
    // don't start word in current line if only
    // a few chars left...
    if (free < min && free < len) {
        free = width;
    }
    // (maybe) hardwrap long word
    while (hard && len > free) {
        const split = splitter.split(word, free);
        const chunk = word.substr(0, split);
        append(acc, chunk, free, width);
        word = word.substr(split);
        free = width;
        len = splitter.length(word);
    }
    append(acc, word, len, width);
    return acc;
};
/**
 * Wordwraps a single-`line` string using provided options. Returns array of
 * {@link Line} objects, which can simply be `.join("\n")`ed to convert back
 * into text.
 *
 * @see {@link wordWrap} for main user facing alternative.
 *
 * @param line
 * @param opts
 * @param acc
 *
 * @internal
 */
const wordWrapLine = (line, opts, acc = []) => {
    if (!line.length) {
        acc.push(new Line());
        return acc;
    }
    const $opts = {
        width: 80,
        min: 4,
        hard: false,
        splitter: SPLIT_PLAIN,
        ...opts,
    };
    for (let word of split(line, opts.delimWord || /\s/g)) {
        const curr = acc[acc.length - 1];
        wrapWord(word, $opts, curr && curr.n > 0 ? curr.n + 1 : 0, acc);
    }
    return acc;
};
/**
 * Wordwraps a multi-`line` string using provided options. Returns array of
 * {@link Line} objects, which can simply be `.join("\n")`ed to convert back
 * into text.
 *
 * @see {@link wordWrap} for main user facing alternative.
 *
 * @param lines
 * @param opts
 */
const wordWrapLines = (lines, opts) => {
    let acc = [];
    for (let line of split(lines, opts.delimLine)) {
        acc = acc.concat(wordWrapLine(line, opts));
    }
    return acc;
};
/**
 * Same as {@link wordWrapLines}, but returns wordwrapped result as string. See
 * {@link WordWrapOpts} for options.
 *
 * @param str
 * @param opts
 */
const wordWrap = (str, opts) => wordWrapLines(str, opts).join("\n");

export { BOM, ESCAPES, ESCAPES_REV, SPLIT_ANSI, SPLIT_PLAIN, bits, bytes, camel, capitalize, center, chf, computeCursorPos, currency, defFormat, escape, eur, format, gbp, grams, grid, hstr, ignore, initials, int, intLocale, interpolate, interpolateKeys, isAnsi, isAnsiEnd, isAnsiStart, join, kebab, lengthAnsi, lower, maybeParseFloat, maybeParseInt, meters, padRight, ruler, seconds, slugify, slugifyGH, snake, spacesToTabs, spacesToTabsLine, splice, split, str, stringify, stripAnsi, tabsToSpaces, tabsToSpacesLine, trim, truncate, truncateLeft, truncateRight, unescape, units, upper, upperSnake, usd, uuid, vector, wordWrap, wordWrapLine, wordWrapLines, wrap, yen };
