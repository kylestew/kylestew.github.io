import { equiv } from '../@thi.ng/equiv.js';
import { a as assert } from './assert-dcb272c2.js';
import { S as SYSTEM } from './system-8e2a0898.js';

const compare = (a, b) => {
    if (a === b) {
        return 0;
    }
    if (a == null) {
        return b == null ? 0 : -1;
    }
    if (b == null) {
        return a == null ? 0 : 1;
    }
    if (typeof a.compare === "function") {
        return a.compare(b);
    }
    if (typeof b.compare === "function") {
        return -b.compare(a);
    }
    return a < b ? -1 : a > b ? 1 : 0;
};

/**
 * Numeric comparator (ascending order)
 *
 * @param a -
 * @param b -
 */
const compareNumAsc = (a, b) => a - b;

/**
 * Returns the supposed index of `x` in pre-sorted array-like collection
 * `buf`.
 *
 * @remarks
 * If `x` can't be found, returns `-index-1`, representing the negative
 * of the index, were `x` to be inserted into `buf`. E.g if the return
 * value is -3, `x` would appear/insert at index 2.
 *
 * The optional `key` function is used to obtain the actual sort value
 * of `x` and each array item (default: identity).
 *
 * The optional `cmp` comparator (default:
 * {@link @thi.ng/compare#compare}) is then used to identify the index
 * of `x`. The sort order of `buf` MUST be compatible with that of
 * `cmp`.
 *
 * @example
 * ```ts
 * binarySearch([2, 4, 6], 5);
 * // -3
 * ```
 *
 * @param buf - array
 * @param x - search value
 * @param key - key function
 * @param cmp - comparator
 * @param low - min index
 * @param high - max index
 */
const binarySearch = (buf, x, key = (x) => x, cmp = compare, low = 0, high = buf.length - 1) => {
    const kx = key(x);
    while (low <= high) {
        const mid = (low + high) >>> 1;
        const c = cmp(key(buf[mid]), kx);
        if (c < 0) {
            low = mid + 1;
        }
        else if (c > 0) {
            high = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -low - 1;
};
/**
 * Similar to {@link binarySearch}, but optimized for numeric arrays and
 * supporting custom comparators (default:
 * {@link @thi.ng/compare#compareNumAsc}).
 *
 * @param buf - array
 * @param x - search value
 * @param cmp - comparator
 * @param low - min index
 * @param high - max index
 */
const binarySearchNumeric = (buf, x, cmp = compareNumAsc, low = 0, high = buf.length - 1) => {
    while (low <= high) {
        const mid = (low + high) >>> 1;
        const c = cmp(buf[mid], x);
        if (c < 0) {
            low = mid + 1;
        }
        else if (c > 0) {
            high = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -low - 1;
};
const binarySearch2 = (buf, x) => {
    let idx = buf[1] <= x ? 1 : 0;
    return buf[idx] === x ? idx : buf[0] < x ? -idx - 2 : -1;
};
/**
 * Non-recursive, optimized binary search for fixed size numeric arrays of 4
 * values. Returns index of `x` or `-index-1` if not found.
 *
 * @param buf
 * @param x
 */
const binarySearch4 = (buf, x) => {
    let idx = buf[2] <= x ? 2 : 0;
    idx |= buf[idx + 1] <= x ? 1 : 0;
    return buf[idx] === x ? idx : buf[0] < x ? -idx - 2 : -1;
};
/**
 * Non-recursive, optimized binary search for fixed size numeric arrays of 8
 * values. Returns index of `x` or `-index-1` if not found.
 *
 * @param buf
 * @param x
 */
const binarySearch8 = (buf, x) => {
    let idx = buf[4] <= x ? 4 : 0;
    idx |= buf[idx + 2] <= x ? 2 : 0;
    idx |= buf[idx + 1] <= x ? 1 : 0;
    return buf[idx] === x ? idx : buf[0] < x ? -idx - 2 : -1;
};
/**
 * Non-recursive, optimized binary search for fixed size numeric arrays of 16
 * values. Returns index of `x` or `-index-1` if not found.
 *
 * @param buf
 * @param x
 */
const binarySearch16 = (buf, x) => {
    let idx = buf[8] <= x ? 8 : 0;
    idx |= buf[idx + 4] <= x ? 4 : 0;
    idx |= buf[idx + 2] <= x ? 2 : 0;
    idx |= buf[idx + 1] <= x ? 1 : 0;
    return buf[idx] === x ? idx : buf[0] < x ? -idx - 2 : -1;
};
/**
 * Non-recursive, optimized binary search for fixed size numeric arrays of 32
 * values. Returns index of `x` or `-index-1` if not found.
 *
 * @param buf
 * @param x
 */
const binarySearch32 = (buf, x) => {
    let idx = buf[16] <= x ? 16 : 0;
    idx |= buf[idx + 4] <= x ? 8 : 0;
    idx |= buf[idx + 4] <= x ? 4 : 0;
    idx |= buf[idx + 2] <= x ? 2 : 0;
    idx |= buf[idx + 1] <= x ? 1 : 0;
    return buf[idx] === x ? idx : buf[0] < x ? -idx - 2 : -1;
};
/**
 * {@link binarySearch} result index classifier for predecessor queries.
 * Returns index of last item less than search value or -1 if no such
 * values exist.
 *
 * @example
 * ```ts
 * bsLT(binarySearch([10, 20, 30, 40], 25))
 * // 1
 * ```
 *
 * @param i - binarySearch result index
 */
const bsLT = (i) => (i < 0 ? -i - 2 : i - 1);
/**
 * Similar to {@link bsLT}, but for less-than-equals queries.
 *
 * @param i - binarySearch result index
 */
const bsLE = (i) => (i < 0 ? -i - 2 : i);
/**
 * {@link binarySearch} result index classifier for successor queries.
 * Returns index of first item greater than search value or -1 if no
 * such values exist.
 *
 * @example
 * ```ts
 * src = [10, 20, 30, 40];
 *
 * bsGT(binarySearch(src, 25), src.length)
 * // 2
 *
 * bsGT(binarySearch(src, 40), src.length)
 * // -1
 * ```
 *
 * @param i - binarySearch result index
 * @param n - array length
 */
const bsGT = (i, n) => ((i = i < 0 ? -i - 1 : i + 1), i < n ? i : -1);
/**
 * Similar to {@link bsGT}, but for greater-than-equals queries.
 *
 * @param i - binarySearch result index
 * @param n - array length
 */
const bsGE = (i, n) => ((i = i < 0 ? -i - 1 : i), i < n ? i : -1);
/**
 * {@link binarySearch} result index classifier for equals queries.
 * Merely syntax sugar, casting any non-found result indices to -1.
 *
 * @param i - binarySearch result index
 */
const bsEQ = (i) => (i < 0 ? -1 : i);

/**
 * Performs a fuzzy search of `query` in `domain` and returns `true` if
 * successful.
 *
 * @remarks
 * The optional `equiv` predicate can be used to customize item equality
 * checking. Uses {@link @thi.ng/equiv#equiv} by default.
 *
 * Adapted and generalized from:
 * {@link https://github.com/bevacqua/fufuzzyzzysearch} (MIT)
 *
 * {@link @thi.ng/transducers#(filterFuzzy:1)}
 *
 * @param domain - array
 * @param query - search value
 * @param equiv - equivalence predicate
 */
const fuzzyMatch = (domain, query, equiv$1 = equiv) => {
    const nd = domain.length;
    const nq = query.length;
    if (nq > nd) {
        return false;
    }
    if (nq === nd) {
        return equiv$1(query, domain);
    }
    next: for (let i = 0, j = 0; i < nq; i++) {
        const q = query[i];
        while (j < nd) {
            if (equiv$1(domain[j++], q)) {
                continue next;
            }
        }
        return false;
    }
    return true;
};

/**
 * Shuffles the items in the given index range of array `buf` using
 * Fisher-yates and optional `rnd` PRNG.
 *
 * @remarks
 * If neither `start` / `end` are given, the entire array will be
 * shuffled. Mutates original array.
 *
 * See {@link @thi.ng/random#IRandom}
 *
 * @param buf - array
 * @param n - num items
 * @param rnd - PRNG
 */
const shuffleRange = (buf, start = 0, end = buf.length, rnd = SYSTEM) => {
    assert(start >= 0 && end >= start && end <= buf.length, `illegal range ${start}..${end}`);
    let n = end - start;
    const l = n;
    if (l > 1) {
        while (n-- > 0) {
            const a = (start + rnd.float(l)) | 0;
            const b = (start + rnd.float(l)) | 0;
            const t = buf[a];
            buf[a] = buf[b];
            buf[b] = t;
        }
    }
    return buf;
};
/**
 * Applies {@link shuffleRange} to the given array. If `n` is given,
 * only the first `n` items are shuffled. Mutates original array.
 *
 * {@link shuffleRange}
 *
 * @param buf - array
 * @param n - num items
 * @param rnd - PRNG
 */
const shuffle = (buf, n = buf.length, rnd = SYSTEM) => shuffleRange(buf, 0, n, rnd);

/**
 * Returns optimized function to immutably select, repeat, reshape and /
 * or reorder array / object values in the specified index order.
 *
 * @remarks
 * Fast paths for up to 8 indices are provided, before a loop based
 * approach is used.
 *
 * @example
 * ```ts
 * swizzle([0, 0, 0])([1, 2, 3, 4])    // [ 1, 1, 1 ]
 * swizzle([1, 1, 3, 3])([1, 2, 3, 4]) // [ 2, 2, 4, 4 ]
 * swizzle([2, 0])([1, 2, 3])          // [ 3, 1 ]
 * ```
 *
 * @example
 * Objects can be used as input to the generated function, but the
 * result will always be in array form.

 * ```ts
 * swizzle(["a", "c", "b"])({a: 1, b: 2, c: 3}) // [ 1, 3, 2 ]
 * ```
 *
 * @param order - indices
 */
const swizzle = (order) => {
    const [a, b, c, d, e, f, g, h] = order;
    switch (order.length) {
        case 0:
            return () => [];
        case 1:
            return (x) => [x[a]];
        case 2:
            return (x) => [x[a], x[b]];
        case 3:
            return (x) => [x[a], x[b], x[c]];
        case 4:
            return (x) => [x[a], x[b], x[c], x[d]];
        case 5:
            return (x) => [x[a], x[b], x[c], x[d], x[e]];
        case 6:
            return (x) => [x[a], x[b], x[c], x[d], x[e], x[f]];
        case 7:
            return (x) => [x[a], x[b], x[c], x[d], x[e], x[f], x[g]];
        case 8:
            return (x) => [x[a], x[b], x[c], x[d], x[e], x[f], x[g], x[h]];
        default:
            return (x) => {
                const res = [];
                for (let i = order.length; i-- > 0;) {
                    res[i] = x[order[i]];
                }
                return res;
            };
    }
};

export { binarySearchNumeric as a, binarySearch as b, compare as c, binarySearch2 as d, binarySearch4 as e, binarySearch8 as f, binarySearch16 as g, binarySearch32 as h, bsLT as i, bsLE as j, bsGT as k, bsGE as l, bsEQ as m, fuzzyMatch as n, shuffle as o, swizzle as p, shuffleRange as s };
