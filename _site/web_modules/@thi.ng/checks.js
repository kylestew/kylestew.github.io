export { h as hasCrypto } from '../common/has-crypto-86fd03f1.js';
import { i as isFunction } from '../common/is-function-b13d3e65.js';
export { i as isFunction } from '../common/is-function-b13d3e65.js';
import { i as implementsFunction } from '../common/is-iterable-2e1d7abd.js';
export { i as implementsFunction, a as isIterable } from '../common/is-iterable-2e1d7abd.js';
import { i as isArray } from '../common/is-array-a7fa88fb.js';
export { i as isArray } from '../common/is-array-a7fa88fb.js';
export { i as isArrayLike } from '../common/is-arraylike-29dbc151.js';
import { i as isString } from '../common/is-not-string-iterable-3777e99a.js';
export { a as isNotStringAndIterable, i as isString } from '../common/is-not-string-iterable-3777e99a.js';
import { p as process } from '../common/_node-resolve:empty-5550de3c.js';
export { i as isNumber } from '../common/is-number-dd4646bb.js';
export { i as isPlainObject } from '../common/is-plain-object-24968a48.js';

const existsAndNotNull = (x) => x != null;

const exists = (t) => t !== undefined;

const hasBigInt = () => typeof BigInt === "function";

const hasMaxLength = (len, x) => x != null && x.length <= len;

const hasMinLength = (len, x) => x != null && x.length >= len;

const hasPerformance = () => typeof performance !== "undefined" && isFunction(performance.now);

const hasWASM = () => (typeof window !== "undefined" &&
    typeof window["WebAssembly"] !== "undefined") ||
    (typeof global !== "undefined" &&
        typeof global["WebAssembly"] !== "undefined");

const hasWebGL = () => {
    try {
        document.createElement("canvas").getContext("webgl");
        return true;
    }
    catch (e) {
        return false;
    }
};

const hasWebSocket = () => typeof WebSocket !== "undefined";

const isAlpha = (x) => /^[a-z]+$/i.test(x);
const isAlphaNum = (x) => /^[a-z0-9]+$/i.test(x);
const isNumeric = (x) => /^[0-9]+$/.test(x);

/**
 * Returns true iff all chars are in ASCII range [0x00 .. 0x7f]
 *
 * @param x
 */
const isASCII = (x) => /^[\x00-\x7f]+$/.test(x);
/**
 * Returns true iff all chars are in printable ASCII range [0x20 .. 0x7e]
 *
 * @param x
 */
const isPrintableASCII = (x) => /^[\x20-\x7e]+$/.test(x);

const isAsyncIterable = (x) => x != null && typeof x[Symbol.asyncIterator] === "function";

const isBlob = (x) => x instanceof Blob;

const isBoolean = (x) => typeof x === "boolean";

const isChrome = () => typeof window !== "undefined" && !!window["chrome"];

const isDataURL = (x) => /^data:.+\/(.+);base64,/.test(x);

const isDate = (x) => x instanceof Date;

const isEven = (x) => x % 2 === 0;

const isFalse = (x) => x === false;

const isFile = (x) => x instanceof File;

const isFirefox = () => typeof window !== "undefined" && !!window["InstallTrigger"];

const RE = /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;
const isFloatString = (x) => x.length > 0 && RE.test(x);

const isHex = (x) => /^[a-f0-9]+$/i.test(x);

const RE$1 = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;
const isHexColor = (x) => isString(x) && RE$1.test(x);

const isIE = () => typeof document !== "undefined" &&
    (typeof document["documentMode"] !== "undefined" ||
        navigator.userAgent.indexOf("MSIE") > 0);

const isInRange = (min, max, x) => x >= min && x <= max;

const isInt32 = (x) => typeof x === "number" && (x | 0) === x;

const RE$2 = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
const isIntString = (x) => RE$2.test(x);

const isMap = (x) => x instanceof Map;

const isMobile = () => typeof navigator !== "undefined" &&
    /mobile|tablet|ip(ad|hone|od)|android|silk|crios/i.test(navigator.userAgent);

const isNaN = (x) => x !== x;

const isNegative = (x) => typeof x === "number" && x < 0;

/**
 * Checks if x is null or undefined.
 *
 */
const isNil = (x) => x == null;

const isNode = () => typeof process === "object" &&
    typeof process.versions === "object" &&
    typeof process.versions.node !== "undefined";

const isNull = (x) => x === null;

/**
 * Returns true if given string contains only digits, and optionally, a sign
 * prefix.
 *
 * @param x
 */
const isNumericInt = (x) => /^[-+]?\d+$/.test(x);
/**
 * Returns true if given string only contains an integer or floating point
 * number, optionally in scientific notiation (e.g. `-123.45e-6`).
 *
 * @param x
 */
const isNumericFloat = (x) => /^[-+]?\d*\.?\d+(e[-+]?\d+)?$/i.test(x);

const isObject = (x) => x !== null && typeof x === "object";

const isOdd = (x) => x % 2 !== 0;

const isPositive = (x) => typeof x === "number" && x > 0;

/**
 * Returns true if `x` is a string, number or boolean.
 *
 * @param x
 */
const isPrimitive = (x) => {
    const t = typeof x;
    return t === "string" || t === "number" || t === "boolean";
};

const isPromise = (x) => x instanceof Promise;

const isPromiseLike = (x) => x instanceof Promise ||
    (implementsFunction(x, "then") && implementsFunction(x, "catch"));

const ILLEGAL_KEYS = new Set(["__proto__", "prototype", "constructor"]);
/**
 * Returns true, if given `x` is an illegal object key as per
 * {@link ILLEGAL_KEYS}.
 *
 * @see {@link isProtoPath} for more details
 *
 * @param x
 */
const isIllegalKey = (x) => ILLEGAL_KEYS.has(x);
/**
 * Returns true if given `path` contains any {@link ILLEGAL_KEYS}, i.e. could be
 * used to poison the prototype chain of an object.
 *
 * @remarks
 * If given an array, each item is considered a single sub-path property and
 * will be checked as is. If given a string it will be split using "." as
 * delimiter and each item checked as is (same way array paths are handled).
 *
 * Original discussion here, implementation updated to be more encompassing:
 * https://github.com/thi-ng/umbrella/pull/273
 *
 * @param path
 */
const isProtoPath = (path) => isArray(path)
    ? path.some(isIllegalKey)
    : isString(path)
        ? path.indexOf(".") !== -1
            ? path.split(".").some(isIllegalKey)
            : isIllegalKey(path)
        : false;

const isRegExp = (x) => x instanceof RegExp;

const isSafari = () => typeof navigator !== "undefined" &&
    /Safari/.test(navigator.userAgent) &&
    !isChrome();

const isSet = (x) => x instanceof Set;

const isSymbol = (x) => typeof x === "symbol";

const isTransferable = (x) => x instanceof ArrayBuffer ||
    (typeof SharedArrayBuffer !== "undefined" &&
        x instanceof SharedArrayBuffer) ||
    (typeof MessagePort !== "undefined" && x instanceof MessagePort);

const isTrue = (x) => x === true;

const isTypedArray = (x) => x &&
    (x instanceof Float32Array ||
        x instanceof Float64Array ||
        x instanceof Uint32Array ||
        x instanceof Int32Array ||
        x instanceof Uint8Array ||
        x instanceof Int8Array ||
        x instanceof Uint16Array ||
        x instanceof Int16Array ||
        x instanceof Uint8ClampedArray);

const isUint32 = (x) => typeof x === "number" && x >>> 0 === x;

const isUndefined = (x) => x === undefined;

const RE$3 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const isUUID = (x) => RE$3.test(x);

const RE$4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const isUUIDv4 = (x) => RE$4.test(x);

const isZero = (x) => x === 0;

export { exists, existsAndNotNull, hasBigInt, hasMaxLength, hasMinLength, hasPerformance, hasWASM, hasWebGL, hasWebSocket, isASCII, isAlpha, isAlphaNum, isAsyncIterable, isBlob, isBoolean, isChrome, isDataURL, isDate, isEven, isFalse, isFile, isFirefox, isFloatString, isHex, isHexColor, isIE, isIllegalKey, isInRange, isInt32, isIntString, isMap, isMobile, isNaN, isNegative, isNil, isNode, isNull, isNumeric, isNumericFloat, isNumericInt, isObject, isOdd, isPositive, isPrimitive, isPrintableASCII, isPromise, isPromiseLike, isProtoPath, isRegExp, isSafari, isSet, isSymbol, isTransferable, isTrue, isTypedArray, isUUID, isUUIDv4, isUint32, isUndefined, isZero };
