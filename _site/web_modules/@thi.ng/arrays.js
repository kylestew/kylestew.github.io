import { c as compare } from '../common/swizzle-2b402509.js';
export { b as binarySearch, g as binarySearch16, d as binarySearch2, h as binarySearch32, e as binarySearch4, f as binarySearch8, a as binarySearchNumeric, m as bsEQ, l as bsGE, k as bsGT, j as bsLE, i as bsLT, n as fuzzyMatch, o as shuffle, s as shuffleRange, p as swizzle } from '../common/swizzle-2b402509.js';
import { equiv } from './equiv.js';
export { e as ensureArray, a as ensureArrayLike, b as ensureIterable } from '../common/ensure-array-22c314b7.js';
export { f as first, p as peek } from '../common/peek-ecc8cd73.js';
import { i as isFunction } from '../common/is-function-b13d3e65.js';
import { a as assert } from '../common/assert-dcb272c2.js';
import '../common/system-8e2a0898.js';
import '../common/is-array-a7fa88fb.js';
import '../common/is-arraylike-29dbc151.js';
import '../common/illegal-arguments-2af523c3.js';
import '../common/deferror-480a42fb.js';
import '../common/_node-resolve:empty-5550de3c.js';

/**
 * Splits array at given index (default: floor(src.length/2)) and returns tuple of [lhs, rhs].
 *
 * @param src
 * @param i
 */
const bisect = (src, i = src.length >>> 1) => [
    src.slice(0, i),
    src.slice(i),
];
/**
 * Similar to {@link bisect}, but first finds split index via provided
 * predicate. The item for which the predicate first returns a truthy result,
 * will be the first item in the RHS array. If the predicate never succeeds, the
 * function returns `[src, []]`, i.e. all items will remain in the LHS.
 *
 * @param src
 * @param pred
 */
const bisectWith = (src, pred) => {
    const i = src.findIndex(pred);
    return i >= 0 ? bisect(src, i) : [src, []];
};

/**
 * Returns true if the last items of `buf` are the same items as in
 * `needle`.
 *
 * @remarks
 * This means `buf` should have at least the same length as `needle` for
 * this to be true.
 *
 * By default, uses {@link @thi.ng/equiv#equiv} for equality checking.
 *
 * {@link startsWith}
 *
 * @param buf - array
 * @param needle - search values (array)
 * @param equiv - equivalence predicate
 */
const endsWith = (buf, needle, equiv$1 = equiv) => {
    let i = buf.length;
    let j = needle.length;
    if (i < j)
        return false;
    while ((--i, j-- > 0 && equiv$1(buf[i], needle[j]))) { }
    return j < 0;
};

/**
 * Similar to `Array.find()`, but uses {@link @thi.ng/equiv#equiv} as
 * default predicate.
 *
 * @param buf - array
 * @param x - search value
 * @param equiv - equivalence predicate
 */
const find = (buf, x, equiv$1 = equiv) => {
    const i = findIndex(buf, x, equiv$1);
    return i !== -1 ? buf[i] : undefined;
};
/**
 * Similar to `Array.findIndex()`, but uses {@link @thi.ng/equiv#equiv}
 * as default predicate.
 *
 * @param buf - array
 * @param x - search value
 * @param equiv - equivalence predicate
 */
const findIndex = (buf, x, equiv$1 = equiv) => {
    for (let i = buf.length; i-- > 0;) {
        if (equiv$1(x, buf[i]))
            return i;
    }
    return -1;
};

/**
 * Fills given array with values in [start .. end) interval from `index`
 * and with optional `step` size.
 *
 * @remarks
 * `start` and `end` default to 0 and array length, `step` defaults to 1
 * or -1 (depending on range). Returns array.
 *
 * @example
 * ```ts
 * fillRange(new Array(5))
 * // [ 0, 1, 2, 3, 4 ]
 *
 * fillRange(fillRange([], 0, 10, 20, 2), 5, 20, 8, -2)
 * // [ 10, 12, 14, 16, 18, 20, 18, 16, 14, 12, 10 ]
 * ```
 *
 * @param buf -
 * @param index -
 * @param start -
 * @param end -
 * @param step -
 */
const fillRange = (buf, index = 0, start = 0, end = buf.length, step = end > start ? 1 : -1) => {
    if (step > 0) {
        for (; start < end; start += step)
            buf[index++] = start;
    }
    else {
        for (; start > end; start += step)
            buf[index++] = start;
    }
    return buf;
};

/**
 * Returns true if the given array and its elements in the selected
 * index range (entire array, by default) are in the order defined by
 * the given comparator ({@link @thi.ng/compare#compare} by default).
 *
 * @remarks
 * Always returns true, if effective index range (or array length) has
 * less than two elements. No bounds checking.
 *
 * @example
 * ```ts
 * isSorted([3, 2, 1])
 * // false
 *
 * // w/ custom comparator
 * isSorted([3, 2, 1], (a, b) => b - a)
 * // true
 * ```
 *
 * @param arr - array
 * @param cmp - comparator
 * @param start - start index
 * @param end - end index
 */
const isSorted = (arr, cmp = compare, start = 0, end = arr.length) => {
    let prev = arr[start];
    while (++start < end) {
        const curr = arr[start];
        if (cmp(prev, curr) > 0)
            return false;
        prev = curr;
    }
    return true;
};

/**
 * Inserts `x` into `buf` at index `i` and ensures that array length doesn't
 * grow beyond max `k` items (default: unbounded).
 *
 * @remarks
 * The function will have no effect iff `i<0` or `i>=k` or `k<1`. If
 * `buf.length` is larger than `k`, only the index range [i..k) will be
 * modified.
 *
 * In benchmarking with 4, 8, 16, 32, 64 element arrays, this function is
 * consistently 7-16x faster than `Array.prototype.copyWithin()` and 1.5-2x
 * faster than `Array.prototype.splice()` (for sizes < ~32). See
 * `/bench/insert.ts`
 *
 * @param buf
 * @param x
 * @param i
 * @param k
 */
const insert = (buf, x, i, k = Infinity) => i < 0 || i >= k || k < 1 ? buf : insertUnsafe(buf, x, i, k);
/**
 * Same as {@link insert} but without any bounds/index checks.
 *
 * @param buf
 * @param x
 * @param i
 * @param k
 */
const insertUnsafe = (buf, x, i, k = Infinity) => {
    let j = buf.length < k ? buf.length + 1 : k;
    for (; --j > i;)
        buf[j] = buf[j - 1];
    buf[i] = x;
    return buf;
};

/**
 * Appends `max` items (default: all) from `src` iterable to `dest` array.
 * Returns `dest`.
 *
 * @param dest
 * @param src
 * @param max
 */
const into = (dest, src, max = Infinity) => {
    for (let x of src) {
        if (--max < 0)
            break;
        dest.push(x);
    }
    return dest;
};

/**
 * Returns iterator of nullable array w/ optional index range support
 * and/or reverse iteration order. The default range covers the entire
 * array.
 *
 * @remarks
 * If `start` > `end`, yields values in reverse order. No bounds
 * checking is performed.
 *
 * @param buf - array or null
 * @param start - start index
 * @param end - end index (excluded)
 */
function* arrayIterator(buf, start = 0, end) {
    if (!buf)
        return;
    start = start;
    end === undefined && (end = buf.length);
    const step = start <= end ? 1 : -1;
    for (; start !== end; start += step) {
        yield buf[start];
    }
}

const eqStrict = (a, b) => a === b;
/**
 * Computes Levenshtein distance w/ optionally given `maxDist` (for
 * early termination, default: ∞) and equality predicate (default:
 * `===`). Returns 0 if both `a` and `b` are equal (based on predicate).
 * Returns `Infinity` if actual distance > `maxDist`.
 *
 * @remarks
 *
 * Based on:
 * - https://en.wikipedia.org/wiki/Levenshtein_distance
 * - https://en.wikipedia.org/wiki/Wagner%E2%80%93Fischer_algorithm
 * - https://github.com/gustf/js-levenshtein/blob/develop/index.js
 *
 * @example
 * ```ts
 * levenshtein([1, 2, 3, 4, 5], [1, 2, 4, 3, 5]);
 * // 2
 *
 * levenshtein(
 *   [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
 *   [{ id: 4 }, { id: 5 }, { id: 3 }, { id: 1 }, { id: 2 }],
 *   // max dist
 *   2,
 *   // predicate
 *   (a, b) => a.id === b.id
 * )
 * // Infinity
 * ```
 *
 * @param a -
 * @param b -
 * @param maxDist -
 * @param equiv -
 */
const levenshtein = (a, b, maxDist = Infinity, equiv = eqStrict) => {
    if (a === b) {
        return 0;
    }
    if (a.length > b.length) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    let la = a.length;
    let lb = b.length;
    while (la > 0 && equiv(a[~-la], b[~-lb])) {
        la--;
        lb--;
    }
    let offset = 0;
    while (offset < la && equiv(a[offset], b[offset])) {
        offset++;
    }
    la -= offset;
    lb -= offset;
    if (la === 0 || lb < 3) {
        return lb;
    }
    let x = 0;
    let y;
    let minDist;
    let d0;
    let d1;
    let d2;
    let d3;
    let dd;
    let dy;
    let ay;
    let bx0;
    let bx1;
    let bx2;
    let bx3;
    const _min = (d0, d1, d2, bx, ay) => {
        return d0 < d1 || d2 < d1
            ? d0 > d2
                ? d2 + 1
                : d0 + 1
            : equiv(ay, bx)
                ? d1
                : d1 + 1;
    };
    const vector = [];
    for (y = 0; y < la; y++) {
        vector.push(y + 1, a[offset + y]);
    }
    const len = vector.length - 1;
    const lb3 = lb - 3;
    for (; x < lb3;) {
        bx0 = b[offset + (d0 = x)];
        bx1 = b[offset + (d1 = x + 1)];
        bx2 = b[offset + (d2 = x + 2)];
        bx3 = b[offset + (d3 = x + 3)];
        dd = x += 4;
        minDist = Infinity;
        for (y = 0; y < len; y += 2) {
            dy = vector[y];
            ay = vector[y + 1];
            d0 = _min(dy, d0, d1, bx0, ay);
            d1 = _min(d0, d1, d2, bx1, ay);
            d2 = _min(d1, d2, d3, bx2, ay);
            dd = _min(d2, d3, dd, bx3, ay);
            dd < minDist && (minDist = dd);
            vector[y] = dd;
            d3 = d2;
            d2 = d1;
            d1 = d0;
            d0 = dy;
        }
        if (minDist > maxDist)
            return Infinity;
    }
    for (; x < lb;) {
        bx0 = b[offset + (d0 = x)];
        dd = ++x;
        minDist = Infinity;
        for (y = 0; y < len; y += 2) {
            dy = vector[y];
            vector[y] = dd = _min(dy, d0, dd, bx0, vector[y + 1]);
            dd < minDist && (minDist = dd);
            d0 = dy;
        }
        if (minDist > maxDist)
            return Infinity;
    }
    return dd;
};
/**
 * Normalized version of {@link levenshtein}, i.e. the actual L-dist
 * divided by the length of the longest input (or `Infinity` if actual
 * distance > `maxDist`).
 *
 * @param a -
 * @param b -
 * @param maxDist -
 * @param equiv -
 */
const normalizedLevenshtein = (a, b, maxDist = Infinity, equiv = eqStrict) => {
    const n = Math.max(a.length, b.length);
    return n > 0 ? levenshtein(a, b, maxDist, equiv) / n : 0;
};

/**
 * Swaps values at index `x`/`y` in given array.
 *
 * @param arr - array
 * @param x - first index
 * @param y - other index
 */
const swap = (arr, x, y) => {
    const t = arr[x];
    arr[x] = arr[y];
    arr[y] = t;
};
/**
 * Higher-order version of {@link swap} for swapping elements in
 * multiple arrays at once and hence useful for sorting multiple arrays
 * based on a single criteria.
 *
 * @remarks
 * The returned function takes the same args as `swap`, and when called
 * swaps 2 elements in the array given to that function AND in the
 * arrays given to {@link multiSwap} itself. Provides fast routes for up to 3
 * extra arrays, then falls back to a loop-based approach.
 *
 * {@link (quickSort:1)}
 *
 * @example
 * ```ts
 * a = [2, 1];
 * b = [20, 10];
 * c = [40, 30];
 *
 * ms = multiSwap(b, c);
 * ms(a, 0, 1);
 *
 * // a: [1, 2]
 * // b: [10, 20]
 * // c: [30, 40]
 * ```
 *
 * @param xs - arrays to swap in later
 */
const multiSwap = (...xs) => {
    const [b, c, d] = xs;
    const n = xs.length;
    switch (n) {
        case 0:
            return swap;
        case 1:
            return (a, x, y) => {
                swap(a, x, y);
                swap(b, x, y);
            };
        case 2:
            return (a, x, y) => {
                swap(a, x, y);
                swap(b, x, y);
                swap(c, x, y);
            };
        case 3:
            return (a, x, y) => {
                swap(a, x, y);
                swap(b, x, y);
                swap(c, x, y);
                swap(d, x, y);
            };
        default:
            return (a, x, y) => {
                swap(a, x, y);
                for (let i = n; i-- > 0;)
                    swap(xs[i], x, y);
            };
    }
};

// prettier-ignore
function quickSort(arr, _cmp = compare, _swap = swap, start = 0, end = arr.length - 1) {
    if (start < end) {
        const pivot = arr[start + ((end - start) >> 1)];
        let s = start - 1;
        let e = end + 1;
        while (true) {
            do {
                s++;
            } while (_cmp(arr[s], pivot) < 0);
            do {
                e--;
            } while (_cmp(arr[e], pivot) > 0);
            if (s >= e)
                break;
            _swap(arr, s, e);
        }
        quickSort(arr, _cmp, _swap, start, e);
        quickSort(arr, _cmp, _swap, e + 1, end);
    }
    return arr;
}

/**
 * Takes a `src` array and `key` array of function to provide the sort key of
 * each item. If a function, it will be first applied to pre-compute a new array
 * of all sort keys. Then uses {@link quickSort} to sort `src` array, based on
 * the ordering of cached keys and the optionally given comparator. Returns
 * `src`.
 *
 * @remarks
 * This function is primarily intended for use cases where an array needs to be
 * sorted based on the item order of another array, or where sort keys are
 * derived from non-trivial computations and need to be cached, rather than be
 * re-evaluated multiple times from within a comparator.
 *
 * @example
 * ```ts
 * // sort by length in descending order
 * sortByCachedKey(["a","bbbb","ccc","dd"], (x) => x.length, (a, b) => b - a);
 * // [ 'bbbb', 'ccc', 'dd', 'a' ]
 *
 * sortByCachedKey(["a", "b", "c", "d"], [3, 2, 1, 0])
 * // [ 'd', 'c', 'b', 'a' ]
 * ```
 *
 * @param src
 * @param key
 * @param cmp
 */
const sortByCachedKey = (src, key, cmp = compare) => {
    const keys = isFunction(key) ? src.map(key) : key;
    assert(keys.length === src.length, `keys.length != src.length`);
    quickSort(keys, cmp, multiSwap(src));
    return src;
};

/**
 * Returns true if the first items of `buf` are the same items as in
 * `needle`.
 *
 * @remarks
 * This means `buf` should have at least the same length as `needle` for
 * this to be true.
 *
 * By default, uses {@link @thi.ng/equiv#equiv} for equality checking.
 *
 * {@link endsWith}
 *
 * @param buf - array
 * @param needle - search value
 * @param equiv - equivalence predicate
 */
const startsWith = (buf, needle, equiv$1 = equiv) => {
    let i = buf.length;
    let j = needle.length;
    if (i < j)
        return false;
    while (-j >= 0 && equiv$1(buf[j], needle[j])) { }
    return j < 0;
};

export { arrayIterator, bisect, bisectWith, endsWith, fillRange, find, findIndex, insert, insertUnsafe, into, isSorted, levenshtein, multiSwap, normalizedLevenshtein, quickSort, sortByCachedKey, startsWith, swap };
