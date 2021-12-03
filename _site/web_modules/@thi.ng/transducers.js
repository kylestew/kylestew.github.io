import { t as transduce, k as ensureTransducer, p as push, d as isReduced, u as unreduced, l as reduced, r as reduce, b as reducer, $ as $$reduce, i as iterator1, f as compR, _ as __iter, e as ensureReduced, j as range, z as zip, m as map, a as iterator, g as mapIndexed, c as comp, h as take, s as str } from '../common/zip-907b97a6.js';
export { $ as $$reduce, q as Range, R as Reduced, _ as __iter, c as comp, f as compR, e as ensureReduced, k as ensureTransducer, d as isReduced, a as iterator, i as iterator1, m as map, g as mapIndexed, p as push, j as range, r as reduce, n as reduceRight, l as reduced, b as reducer, s as str, h as take, t as transduce, o as transduceRight, u as unreduced, z as zip } from '../common/zip-907b97a6.js';
import { N as NO_OP, S as SEMAPHORE } from '../common/api-4427ff26.js';
import { i as isFunction } from '../common/is-function-b13d3e65.js';
import { _ as __mathop, a as add } from '../common/add-9f59e136.js';
export { a as add } from '../common/add-9f59e136.js';
import { m as mapcat, r as repeat } from '../common/scan-c7864370.js';
export { l as last, m as mapcat, r as repeat, s as scan } from '../common/scan-c7864370.js';
import { c as compare, n as fuzzyMatch, o as shuffle, b as binarySearch, p as swizzle$1 } from '../common/swizzle-2b402509.js';
import { a as isIterable } from '../common/is-iterable-2e1d7abd.js';
import { p as partition } from '../common/wrap-sides-cdd50232.js';
export { c as cat, p as partition, w as wrapSides } from '../common/wrap-sides-cdd50232.js';
import { i as illegalArgs } from '../common/illegal-arguments-2af523c3.js';
import { i as illegalArity } from '../common/illegal-arity-0f06cc40.js';
import { e as clamp0 } from '../common/interval-fde8b87f.js';
import { f as filter, n as normRange } from '../common/filter-b113f58f.js';
export { c as cycle, f as filter, n as normRange, a as normRange2d, b as normRange3d } from '../common/filter-b113f58f.js';
import { i as isString, a as isNotStringAndIterable } from '../common/is-not-string-iterable-3777e99a.js';
import { d as mixHermite, b as mix } from '../common/mix-6c45be6a.js';
export { m as mapcatIndexed } from '../common/mapcat-indexed-ba34747a.js';
import { i as isArray } from '../common/is-array-a7fa88fb.js';
import { i as illegalState } from '../common/illegal-state-3552b3b2.js';
import { p as peek$1 } from '../common/peek-ecc8cd73.js';
import { S as SYSTEM } from '../common/system-8e2a0898.js';
import { d as deref } from '../common/deref-7136a142.js';
import { e as ensureArray, b as ensureIterable, a as ensureArrayLike } from '../common/ensure-array-22c314b7.js';
import { w as weightedRandom } from '../common/weighted-random-0faee244.js';
import '../common/is-arraylike-29dbc151.js';
import './equiv.js';
import '../common/assert-dcb272c2.js';
import '../common/_node-resolve:empty-5550de3c.js';
import '../common/deferror-480a42fb.js';
import '../common/api-8453d590.js';

const NO_OP_REDUCER = [NO_OP, NO_OP, NO_OP];
function run(tx, ...args) {
    if (args.length === 1) {
        transduce(tx, NO_OP_REDUCER, args[0]);
    }
    else {
        const fx = args[0];
        transduce(tx, [NO_OP, NO_OP, (_, x) => fx(x)], args[1]);
    }
}

/**
 * Single-step transducer execution wrapper.
 * Returns array if transducer produces multiple results
 * and undefined if there was no output. Else returns single
 * result value.
 *
 * @remarks
 * Likewise, once a transducer has produced a final / reduced
 * value, all further invocations of the stepper function will
 * return undefined.
 *
 * @example
 * ```ts
 * // single result
 * step(map(x => x * 10))(1);
 * // 10
 *
 * // multiple results
 * step(mapcat(x => [x, x + 1, x + 2]))(1)
 * // [ 1, 2, 3 ]
 *
 * // no result
 * f = step(filter((x) => !(x & 1)))
 * f(1); // undefined
 * f(2); // 2
 *
 * // reduced value termination
 * f = step(take(2));
 * f(1); // 1
 * f(1); // 1
 * f(1); // undefined
 * f(1); // undefined
 * ```
 *
 * @param tx -
 */
const step = (tx) => {
    const { 1: complete, 2: reduce } = ensureTransducer(tx)(push());
    let done = false;
    return (x) => {
        if (!done) {
            let acc = reduce([], x);
            done = isReduced(acc);
            if (done) {
                acc = complete(acc.deref());
            }
            return acc.length === 1 ? acc[0] : acc.length > 0 ? acc : undefined;
        }
    };
};

/**
 * Higher-order deep object transformer used by {@link (mapDeep:1)}.
 * Accepts a nested `spec` array reflecting same key structure as the
 * object to be mapped, but with functions or sub-specs as their values.
 * Returns a new function, which when called, recursively applies nested
 * transformers in post-order traversal (child transformers are run
 * first) and returns the result of the root transformer.
 *
 * @remarks
 * The transform specs are given as arrays in this format:
 *
 * ```ts
 * [tx-function, { key1: [tx-function, {...}], key2: tx-fn }]
 * ```
 *
 * If a key in the spec has no further sub maps, its transform function
 * can be given directly without having to wrap it into the usual array
 * structure.
 *
 * @example
 * ```ts
 * // source object to be transformed
 * src = {
 *    meta: {
 *      author: { name: "Alice", email: "a@b.com" },
 *      date: 1041510896000
 *    },
 *    type: "post",
 *    title: "Hello world",
 *    body: "Ratione necessitatibus doloremque itaque."
 * };
 *
 * // deep transformation spec
 * spec = [
 *    // root transform (called last)
 *    ({type, meta, title, body}) => ["div", {class: type}, title, meta, body],
 *    // object of transform sub-specs
 *    {
 *      meta: [
 *        ({author, date}) => ["div.meta", author, `(${date})`],
 *        {
 *          author: ({email, name}) => ["a", {href: `mailto:${email}`}, name],
 *          date: (d) => new Date(d).toLocaleString()
 *        }
 *      ],
 *      title: (title) => ["h1", title]
 *    }
 * ];
 *
 * // build transformer & apply to src
 * deepTransform(spec)(src);
 *
 * // [ "div",
 * //   { class: "article" },
 * //   [ "h1", "Hello world" ],
 * //   [ "div.meta",
 * //     [ "a", { href: "mailto:a@.b.com" }, "Alice" ],
 * //     "./2/2003, 12:34:56 PM)" ],
 * //   "Ratione necessitatibus doloremque itaque." ]
 * ```
 *
 * @param spec - transformation spec
 */
const deepTransform = (spec) => {
    if (isFunction(spec)) {
        return spec;
    }
    const mapfns = Object.keys(spec[1] || {}).reduce((acc, k) => ((acc[k] = deepTransform(spec[1][k])), acc), {});
    return (x) => {
        const res = { ...x };
        for (let k in mapfns) {
            res[k] = mapfns[k](res[k]);
        }
        return spec[0](res);
    };
};

function juxtR(...rs) {
    let [a, b, c] = rs;
    const n = rs.length;
    switch (n) {
        case 1: {
            const r = a[2];
            return [
                () => [a[0]()],
                (acc) => [a[1](acc[0])],
                (acc, x) => {
                    const aa1 = r(acc[0], x);
                    if (isReduced(aa1)) {
                        return reduced([unreduced(aa1)]);
                    }
                    return [aa1];
                },
            ];
        }
        case 2: {
            const ra = a[2];
            const rb = b[2];
            return [
                () => [a[0](), b[0]()],
                (acc) => [a[1](acc[0]), b[1](acc[1])],
                (acc, x) => {
                    const aa1 = ra(acc[0], x);
                    const aa2 = rb(acc[1], x);
                    if (isReduced(aa1) || isReduced(aa2)) {
                        return reduced([unreduced(aa1), unreduced(aa2)]);
                    }
                    return [aa1, aa2];
                },
            ];
        }
        case 3: {
            const ra = a[2];
            const rb = b[2];
            const rc = c[2];
            return [
                () => [a[0](), b[0](), c[0]()],
                (acc) => [a[1](acc[0]), b[1](acc[1]), c[1](acc[2])],
                (acc, x) => {
                    const aa1 = ra(acc[0], x);
                    const aa2 = rb(acc[1], x);
                    const aa3 = rc(acc[2], x);
                    if (isReduced(aa1) || isReduced(aa2) || isReduced(aa3)) {
                        return reduced([
                            unreduced(aa1),
                            unreduced(aa2),
                            unreduced(aa3),
                        ]);
                    }
                    return [aa1, aa2, aa3];
                },
            ];
        }
        default:
            return [
                () => rs.map((r) => r[0]()),
                (acc) => rs.map((r, i) => r[1](acc[i])),
                (acc, x) => {
                    let done = false;
                    const res = [];
                    for (let i = 0; i < n; i++) {
                        let a = rs[i][2](acc[i], x);
                        if (isReduced(a)) {
                            done = true;
                            a = unreduced(a);
                        }
                        res[i] = a;
                    }
                    return done ? reduced(res) : res;
                },
            ];
    }
}

/**
 * Returns function accepting a single index arg used to
 * lookup value in given array. No bounds checks are done.
 *
 * @example
 * ```ts
 * [...map(lookup1d([10, 20, 30]), [2,0,1])]
 * // [ 30, 10, 20 ]
 * ```
 *
 * @param src - source data
 */
const lookup1d = (src) => (i) => src[i];
/**
 * Returns function accepting a single `[x, y]` index tuple, used to
 * lookup value in given array. Useful for transducers processing 2D
 * data.
 *
 * @remarks
 * The source data MUST be in row major linearized format, i.e. 1D
 * representation of 2D data (pixel buffer). No bounds checks are done.
 *
 * @example
 * ```ts
 * [...map(lookup2d([...range(9)], 3), range2d(2, -1, 0, 3))]
 * // [ 2, 1, 0, 5, 4, 3, 8, 7, 6 ]
 * ```
 *
 * @param src - source data
 * @param width - number of items along X (columns)
 */
const lookup2d = (src, width) => (i) => src[i[0] + i[1] * width];
/**
 * Same as {@link lookup2d}, but for 3D data. The index ordering of the
 * source data MUST be in Z, Y, X order (i.e. a stack of row major 2D slices).
 * No bounds checks are done.
 *
 * @param src - source data
 * @param width - number of items along X (columns)
 * @param height - number of items along Y (rows)
 */
const lookup3d = (src, width, height) => {
    const stridez = width * height;
    return (i) => src[i[0] + i[1] * width + i[2] * stridez];
};

/**
 * Higher order helper function for {@link rename} transducer. Takes an object
 * of key mappings and returns function applying these mapping/renames.
 *
 * @param kmap
 */
const renamer = (kmap) => {
    const ks = Object.keys(kmap);
    const [a2, b2, c2] = ks;
    const [a1, b1, c1] = ks.map((k) => kmap[k]);
    switch (ks.length) {
        case 3:
            return (x) => {
                const res = {};
                let v;
                (v = x[c1]), v !== undefined && (res[c2] = v);
                (v = x[b1]), v !== undefined && (res[b2] = v);
                (v = x[a1]), v !== undefined && (res[a2] = v);
                return res;
            };
        case 2:
            return (x) => {
                const res = {};
                let v;
                (v = x[b1]), v !== undefined && (res[b2] = v);
                (v = x[a1]), v !== undefined && (res[a2] = v);
                return res;
            };
        case 1:
            return (x) => {
                const res = {};
                let v = x[a1];
                v !== undefined && (res[a2] = v);
                return res;
            };
        default:
            return (x) => {
                let k, v;
                const res = {};
                for (let i = ks.length - 1; i >= 0; i--) {
                    (k = ks[i]),
                        (v = x[kmap[k]]),
                        v !== undefined && (res[k] = v);
                }
                return res;
            };
    }
};

const keySelector = (keys) => renamer(keys.reduce((acc, x) => ((acc[x] = x), acc), {}));

function assocMap(xs) {
    return xs
        ? reduce(assocMap(), xs)
        : reducer(() => new Map(), (acc, [k, v]) => acc.set(k, v));
}

function assocObj(xs) {
    return xs
        ? reduce(assocObj(), xs)
        : reducer(() => ({}), (acc, [k, v]) => ((acc[k] = v), acc));
}

function autoObj(prefix, xs) {
    let id = 0;
    return xs
        ? reduce(autoObj(prefix), xs)
        : reducer(() => ({}), (acc, v) => ((acc[prefix + id++] = v), acc));
}

function conj(xs) {
    return xs
        ? reduce(conj(), xs)
        : reducer(() => new Set(), (acc, x) => acc.add(x));
}

function count(...args) {
    const res = $$reduce(count, args);
    if (res !== undefined) {
        return res;
    }
    let offset = args[0] || 0;
    let step = args[1] || 1;
    return reducer(() => offset, (acc, _) => acc + step);
}

function div(init, xs) {
    return xs
        ? reduce(div(init), xs)
        : reducer(() => init, (acc, x) => acc / x);
}

function every(...args) {
    const res = $$reduce(every, args);
    if (res !== undefined) {
        return res;
    }
    const pred = args[0];
    return reducer(() => true, pred
        ? (acc, x) => (pred(x) ? acc : reduced(false))
        : (acc, x) => (x ? acc : reduced(false)));
}

function fill(...args) {
    const res = $$reduce(fill, args);
    if (res !== undefined) {
        return res;
    }
    let start = args[0] || 0;
    return reducer(() => [], (acc, x) => ((acc[start++] = x), acc));
}
function fillN(...args) {
    return fill(...args);
}

const identity = (x) => x;

/**
 * Shared helper function for `groupBy*` reducers
 *
 * @param opts -
 *
 * @internal
 */
const __groupByOpts = (opts) => ({
    key: (x) => x,
    group: push(),
    ...opts,
});

function groupByMap(...args) {
    const res = $$reduce(groupByMap, args);
    if (res !== undefined) {
        return res;
    }
    const opts = __groupByOpts(args[0]);
    const [init, complete, reduce] = opts.group;
    return [
        () => new Map(),
        (acc) => {
            for (let k of acc.keys()) {
                acc.set(k, complete(acc.get(k)));
            }
            return acc;
        },
        (acc, x) => {
            const k = opts.key(x);
            return acc.set(k, acc.has(k)
                ? reduce(acc.get(k), x)
                : reduce(init(), x));
        },
    ];
}

function frequencies(...args) {
    return ($$reduce(frequencies, args) ||
        groupByMap({ key: args[0] || identity, group: count() }));
}

function groupByObj(...args) {
    const res = $$reduce(groupByObj, args);
    if (res) {
        return res;
    }
    const opts = __groupByOpts(args[0]);
    const [_init, complete, _reduce] = opts.group;
    return [
        () => ({}),
        (acc) => {
            for (let k in acc) {
                acc[k] = complete(acc[k]);
            }
            return acc;
        },
        (acc, x) => {
            const k = opts.key(x);
            acc[k] = acc[k]
                ? _reduce(acc[k], x)
                : _reduce(_init(), x);
            return acc;
        },
    ];
}

const branchPred = (key, b, l, r) => (x) => key(x) & b ? r : l;
/**
 * Creates a bottom-up, unbalanced binary tree of desired depth and
 * choice of data structures. Any value can be indexed, as long as a
 * numeric representation (key) can be obtained. This numeric key is
 * produced by the supplied `key` function. IMPORTANT: the returned
 * values MUST be unsigned and less than the provided bit length (i.e.
 * `0 .. (2^bits) - 1` range).
 *
 * By default the tree is constructed using plain objects for branches,
 * with left branches stored as "l" and right ones as "r". The original
 * values are stored at the lowest tree level using a customizable
 * nested reducer. By default leaves are collected in arrays (using the
 * {@link (push:1)} reducer), but any suitable reducer can be used (e.g.
 * {@link (conj:1)} to collect values into sets).
 *
 * Index by lowest 4-bits of ID value:
 *
 * @example
 * ```ts
 * tree = reduce(
 *   groupBinary(4, x => x.id & 0xf),
 *   [{id: 3}, {id: 8}, {id: 15}, {id: 0}]
 * )
 *
 * tree.l.l.l.l
 * // [ { id: 0 } ]
 * tree.r.r.r.r
 * // [ { id: 15 } ]
 * tree.l.l.r.r
 * // [ { id: 3 } ]
 * ```
 *
 * Collecting as array:
 *
 * @example
 * ```ts
 * tree = reduce(
 *   groupBinary(4, identity, ()=>[], push(), 0, 1),
 *   [1,2,3,4,5,6,7]
 * )
 *
 * tree[0][1][0][1] // 0101 == 5 in binary
 * // [ 5 ]
 *
 * tree[0][1][1]    // 011* == branch
 * // [ [ 6 ], [ 7 ] ]
 * ```
 *
 * Using {@link (frequencies:1)} as leaf reducer:
 *
 * @example
 * ```ts
 * tree = reduce(
 *   groupBinary(3, (x: string) => x.length, null, frequencies()),
 *   "aa bbb dddd ccccc bbb eeee fff".split(" ")
 * )
 * // [ [ undefined,
 * //     [ Map { 'aa' => 1 },
 * //       Map { 'bbb' => 2, 'fff' => 1 } ] ],
 * //   [ [ Map { 'dddd' => 1, 'eeee' => 1 },
 * //       Map { 'ccccc' => 1 } ] ] ]
 *
 * tree[0][1][1]
 * // Map { 'bbb' => 2, 'fff' => 1 }
 * ```
 *
 * @param bits - index range (always from 0)
 * @param key - key function
 * @param branch - function to create a new branch container (object or
 * array)
 * @param leaf - reducer for leaf collection
 * @param left - key for storing left branches (e.g. `0` for arrays)
 * @param right - key for storing right branches (e.g. `1` for arrays)
 */
const groupBinary = (bits, key, branch, leaf, left = "l", right = "r") => {
    const init = branch || (() => ({}));
    let rfn = groupByObj({
        key: branchPred(key, 1, left, right),
        group: leaf || push(),
    });
    for (let i = 2, maxIndex = 1 << bits; i < maxIndex; i <<= 1) {
        rfn = groupByObj({
            key: branchPred(key, i, left, right),
            group: [init, rfn[1], rfn[2]],
        });
    }
    return [init, rfn[1], rfn[2]];
};

function max(xs) {
    return xs
        ? reduce(max(), xs)
        : reducer(() => -Infinity, (acc, x) => Math.max(acc, x));
}

function maxCompare(...args) {
    const res = $$reduce(maxCompare, args);
    if (res !== undefined) {
        return res;
    }
    const init = args[0];
    const cmp = args[1] || compare;
    return reducer(init, (acc, x) => (cmp(acc, x) >= 0 ? acc : x));
}

function maxMag(xs) {
    return xs
        ? reduce(maxMag(), xs)
        : reducer(() => 0, (acc, x) => (Math.abs(x) > Math.abs(acc) ? x : acc));
}

function mean(xs) {
    let n = 1;
    return xs
        ? reduce(mean(), xs)
        : [
            () => (n = 0),
            (acc) => (n > 1 ? acc / n : acc),
            (acc, x) => (n++, acc + x),
        ];
}

function min(xs) {
    return xs
        ? reduce(min(), xs)
        : reducer(() => Infinity, (acc, x) => Math.min(acc, x));
}

function minCompare(...args) {
    const res = $$reduce(minCompare, args);
    if (res !== undefined) {
        return res;
    }
    const init = args[0];
    const cmp = args[1] || compare;
    return reducer(init, (acc, x) => (cmp(acc, x) <= 0 ? acc : x));
}

function minMag(xs) {
    return xs
        ? reduce(minMag(), xs)
        : reducer(() => Infinity, (acc, x) => (Math.abs(x) < Math.abs(acc) ? x : acc));
}

/**
 * Returns a reducer which computes both the min and max values of given inputs.
 * If the input source is empty the final result will be `[-∞,∞]`.
 */
const minMax = () => juxtR(min(), max());

function mul(...args) {
    return __mathop(mul, (acc, x) => acc * x, 1, args);
}

function normCount(...args) {
    const res = $$reduce(normCount, args);
    if (res !== undefined) {
        return res;
    }
    const norm = args[0];
    return [() => 0, (acc) => acc / norm, (acc) => acc + 1];
}

function normFrequencies(...args) {
    return ($$reduce(normFrequencies, args) ||
        groupByMap({
            key: args[1] || identity,
            group: normCount(args[0]),
        }));
}

function normFrequenciesAuto(...args) {
    const res = $$reduce(normFrequenciesAuto, args);
    if (res !== undefined) {
        return res;
    }
    const [init, complete, reduce] = frequencies(...args);
    let norm = 0;
    return [
        init,
        (acc) => {
            acc = complete(acc);
            for (let p of acc) {
                acc.set(p[0], p[1] / norm);
            }
            return acc;
        },
        (acc, x) => (norm++, reduce(acc, x)),
    ];
}

const pushCopy = () => reducer(() => [], (acc, x) => ((acc = acc.slice()).push(x), acc));

function pushSort(cmp = compare, xs) {
    return xs
        ? [...xs].sort(cmp)
        : [
            () => [],
            (acc) => acc.sort(cmp),
            (acc, x) => (acc.push(x), acc),
        ];
}

function reductions(rfn, xs) {
    const [init, complete, _reduce] = rfn;
    return xs
        ? reduce(reductions(rfn), xs)
        : [
            () => [init()],
            (acc) => ((acc[acc.length - 1] = complete(acc[acc.length - 1])), acc),
            (acc, x) => {
                const res = _reduce(acc[acc.length - 1], x);
                if (isReduced(res)) {
                    acc.push(res.deref());
                    return reduced(acc);
                }
                acc.push(res);
                return acc;
            },
        ];
}

function some(...args) {
    const res = $$reduce(some, args);
    if (res !== undefined) {
        return res;
    }
    const pred = args[0];
    return reducer(() => false, pred
        ? (acc, x) => (pred(x) ? reduced(true) : acc)
        : (acc, x) => (x ? reduced(true) : acc));
}

function sub(...args) {
    return __mathop(sub, (acc, x) => acc - x, 0, args);
}

function benchmark(src) {
    return isIterable(src)
        ? iterator1(benchmark(), src)
        : (rfn) => {
            const r = rfn[2];
            let prev = Date.now();
            return compR(rfn, (acc, _) => {
                const t = Date.now();
                const x = t - prev;
                prev = t;
                return r(acc, x);
            });
        };
}

function converge(...args) {
    return (__iter(converge, args) ||
        ((rfn) => {
            const r = rfn[2];
            const pred = args[0];
            let prev = SEMAPHORE;
            let done = false;
            return compR(rfn, (acc, x) => {
                if (done || (prev !== SEMAPHORE && pred(prev, x))) {
                    done = true;
                    return ensureReduced(r(acc, x));
                }
                prev = x;
                return r(acc, x);
            });
        }));
}

function* range2d(...args) {
    let fromX, toX, stepX;
    let fromY, toY, stepY;
    switch (args.length) {
        case 6:
            stepX = args[4];
            stepY = args[5];
        case 4:
            [fromX, toX, fromY, toY] = args;
            break;
        case 2:
            [toX, toY] = args;
            fromX = fromY = 0;
            break;
        default:
            illegalArity(args.length);
    }
    const rx = range(fromX, toX, stepX);
    for (let y of range(fromY, toY, stepY)) {
        for (let x of rx) {
            yield [x, y];
        }
    }
}

const buildKernel1d = (weights, w) => {
    const w2 = w >> 1;
    return [...zip(weights, range(-w2, w2 + 1))];
};
const buildKernel2d = (weights, w, h = w) => {
    const w2 = w >> 1;
    const h2 = h >> 1;
    return [...zip(weights, range2d(-w2, w2 + 1, -h2, h2 + 1))];
};
const kernelLookup1d = (src, x, width, wrap, border) => wrap
    ? ({ 0: w, 1: ox }) => {
        const xx = x < -ox ? width + ox : x >= width - ox ? ox - 1 : x + ox;
        return w * src[xx];
    }
    : ({ 0: w, 1: ox }) => {
        return x < -ox || x >= width - ox ? border : w * src[x + ox];
    };
const kernelLookup2d = (src, x, y, width, height, wrap, border) => wrap
    ? ({ 0: w, 1: { 0: ox, 1: oy } }) => {
        const xx = x < -ox ? width + ox : x >= width - ox ? ox - 1 : x + ox;
        const yy = y < -oy ? height + oy : y >= height - oy ? oy - 1 : y + oy;
        return w * src[yy * width + xx];
    }
    : ({ 0: w, 1: { 0: ox, 1: oy } }) => {
        return x < -ox || y < -oy || x >= width - ox || y >= height - oy
            ? border
            : w * src[(y + oy) * width + x + ox];
    };
const kernelError = () => illegalArgs(`no kernel or kernel config`);
function convolve1d(opts, indices) {
    if (indices) {
        return iterator1(convolve1d(opts), indices);
    }
    const { src, width } = opts;
    const wrap = opts.wrap !== false;
    const border = opts.border || 0;
    const rfn = opts.reduce || add;
    let kernel = opts.kernel;
    if (!kernel) {
        !(opts.weights && opts.kwidth) && kernelError();
        kernel = buildKernel1d(opts.weights, opts.kwidth);
    }
    return map((p) => transduce(map(kernelLookup1d(src, p, width, wrap, border)), rfn(), kernel));
}
function convolve2d(opts, indices) {
    if (indices) {
        return iterator1(convolve2d(opts), indices);
    }
    const { src, width, height } = opts;
    const wrap = opts.wrap !== false;
    const border = opts.border || 0;
    const rfn = opts.reduce || add;
    let kernel = opts.kernel;
    if (!kernel) {
        !(opts.weights && opts.kwidth && opts.kheight) && kernelError();
        kernel = buildKernel2d(opts.weights, opts.kwidth, opts.kheight);
    }
    return map((p) => transduce(map(kernelLookup2d(src, p[0], p[1], width, height, wrap, border)), rfn(), kernel));
}

function dedupe(...args) {
    return (__iter(dedupe, args) ||
        ((rfn) => {
            const r = rfn[2];
            const equiv = args[0];
            let prev = SEMAPHORE;
            return compR(rfn, equiv
                ? (acc, x) => {
                    acc =
                        prev !== SEMAPHORE && equiv(prev, x)
                            ? acc
                            : r(acc, x);
                    prev = x;
                    return acc;
                }
                : (acc, x) => {
                    acc = prev === x ? acc : r(acc, x);
                    prev = x;
                    return acc;
                });
        }));
}

const delayed = (x, t) => new Promise((resolve) => setTimeout(() => resolve(x), t));

/**
 * Yields transducer which wraps incoming values in promises, which each
 * resolve after specified delay time (in ms).
 *
 * @remarks
 * Only to be used in async contexts and NOT with {@link (transduce:1)}
 * directly.
 *
 * @param t -
 */
const delayed$1 = (t) => map((x) => delayed(x, t));

function distinct(...args) {
    return (__iter(distinct, args) ||
        ((rfn) => {
            const r = rfn[2];
            const opts = (args[0] || {});
            const key = opts.key;
            const seen = (opts.cache || (() => new Set()))();
            return compR(rfn, key
                ? (acc, x) => {
                    const k = key(x);
                    return !seen.has(k) ? (seen.add(k), r(acc, x)) : acc;
                }
                : (acc, x) => !seen.has(x) ? (seen.add(x), r(acc, x)) : acc);
        }));
}

function throttle(pred, src) {
    return isIterable(src)
        ? iterator1(throttle(pred), src)
        : (rfn) => {
            const r = rfn[2];
            const _pred = pred();
            return compR(rfn, (acc, x) => (_pred(x) ? r(acc, x) : acc));
        };
}

function dropNth(n, src) {
    if (isIterable(src)) {
        return iterator1(dropNth(n), src);
    }
    n = clamp0(n - 1);
    return throttle(() => {
        let skip = n;
        return () => (skip-- > 0 ? true : ((skip = n), false));
    });
}

function dropWhile(...args) {
    return (__iter(dropWhile, args) ||
        ((rfn) => {
            const r = rfn[2];
            const pred = args[0];
            let ok = true;
            return compR(rfn, (acc, x) => (ok = ok && pred(x)) ? acc : r(acc, x));
        }));
}

function drop(n, src) {
    return isIterable(src)
        ? iterator1(drop(n), src)
        : (rfn) => {
            const r = rfn[2];
            let m = n;
            return compR(rfn, (acc, x) => m > 0 ? (m--, acc) : r(acc, x));
        };
}

function duplicate(n = 1, src) {
    return isIterable(src)
        ? iterator(duplicate(n), src)
        : (rfn) => {
            const r = rfn[2];
            return compR(rfn, (acc, x) => {
                for (let i = n; i >= 0 && !isReduced(acc); i--) {
                    acc = r(acc, x);
                }
                return acc;
            });
        };
}

function filterFuzzy(...args) {
    const iter = args.length > 1 && __iter(filterFuzzy, args);
    if (iter) {
        return iter;
    }
    const query = args[0];
    const { key, equiv } = (args[1] || {});
    return filter((x) => fuzzyMatch(key != null ? key(x) : x, query, equiv));
}

function flattenWith(fn, src) {
    return isIterable(src)
        ? iterator(flattenWith(fn), isString(src) ? [src] : src)
        : (rfn) => {
            const reduce = rfn[2];
            const flatten = (acc, x) => {
                const xx = fn(x);
                if (xx) {
                    for (let y of xx) {
                        acc = flatten(acc, y);
                        if (isReduced(acc)) {
                            break;
                        }
                    }
                    return acc;
                }
                return reduce(acc, x);
            };
            return compR(rfn, flatten);
        };
}

function flatten(src) {
    return flattenWith((x) => (isNotStringAndIterable(x) ? x : undefined), src);
}

function indexed(...args) {
    const iter = __iter(indexed, args);
    if (iter) {
        return iter;
    }
    const from = args[0] || 0;
    return mapIndexed((i, x) => [from + i, x]);
}

function interleave(sep, src) {
    return isIterable(src)
        ? iterator(interleave(sep), src)
        : (rfn) => {
            const r = rfn[2];
            const _sep = typeof sep === "function" ? sep : () => sep;
            return compR(rfn, (acc, x) => {
                acc = r(acc, _sep());
                return isReduced(acc) ? acc : r(acc, x);
            });
        };
}

function interpolate(fn, window, n, src) {
    return isIterable(src)
        ? iterator(interpolate(fn, window, n), src)
        : comp(partition(window, 1), mapcat((chunk) => map((t) => fn(chunk, t), normRange(n, false))));
}

function interpolateHermite(n, src) {
    return interpolate((chunk, t) => mixHermite(...chunk, t), 4, n, src);
}

function interpolateLinear(n, src) {
    return interpolate((chunk, t) => mix(...chunk, t), 2, n, src);
}

function interpose(sep, src) {
    return isIterable(src)
        ? iterator(interpose(sep), src)
        : (rfn) => {
            const r = rfn[2];
            const _sep = typeof sep === "function" ? sep : () => sep;
            let first = true;
            return compR(rfn, (acc, x) => {
                if (first) {
                    first = false;
                    return r(acc, x);
                }
                acc = r(acc, _sep());
                return isReduced(acc) ? acc : r(acc, x);
            });
        };
}

function keep(...args) {
    return (__iter(keep, args) ||
        ((rfn) => {
            const r = rfn[2];
            const pred = args[0] || identity;
            return compR(rfn, (acc, x) => pred(x) != null ? r(acc, x) : acc);
        }));
}

function labeled(id, src) {
    return isIterable(src)
        ? iterator1(labeled(id), src)
        : map(isFunction(id) ? (x) => [id(x), x] : (x) => [id, x]);
}

function mapDeep(spec, src) {
    return isIterable(src)
        ? iterator1(mapDeep(spec), src)
        : map(deepTransform(spec));
}

function mapKeys(...args) {
    const iter = __iter(mapKeys, args);
    if (iter) {
        return iter;
    }
    const keys = args[0];
    const copy = args[1] !== false;
    return map((x) => {
        const res = copy ? Object.assign({}, x) : x;
        for (let k in keys) {
            res[k] = keys[k](x[k], x);
        }
        return res;
    });
}

function mapNth(...args) {
    const iter = __iter(mapNth, args);
    if (iter) {
        return iter;
    }
    let n = args[0] - 1;
    let offset;
    let fn;
    if (typeof args[1] === "number") {
        offset = args[1];
        fn = args[2];
    }
    else {
        fn = args[1];
        offset = 0;
    }
    return (rfn) => {
        const r = rfn[2];
        let skip = 0, off = offset;
        return compR(rfn, (acc, x) => {
            if (off === 0) {
                if (skip === 0) {
                    skip = n;
                    return r(acc, fn(x));
                }
                skip--;
            }
            else {
                off--;
            }
            return r(acc, x);
        });
    };
}

function mapVals(...args) {
    const iter = __iter(mapVals, args);
    if (iter) {
        return iter;
    }
    const fn = args[0];
    const copy = args[1] !== false;
    return map((x) => {
        const res = copy ? {} : x;
        for (let k in x) {
            res[k] = fn(x[k]);
        }
        return res;
    });
}

function matchFirst(pred, src) {
    return isIterable(src)
        ? [...iterator1(matchFirst(pred), src)][0]
        : comp(filter(pred), take(1));
}

/**
 * Helper HOF yielding a buffer drain completion function for some
 * transducers.
 *
 * @param buf -
 * @param complete -
 * @param reduce -
 *
 * @internal
 */
const __drain = (buf, complete, reduce) => (acc) => {
    while (buf.length && !isReduced(acc)) {
        acc = reduce(acc, buf.shift());
    }
    return complete(acc);
};

function takeLast(n, src) {
    return isIterable(src)
        ? iterator(takeLast(n), src)
        : ([init, complete, reduce]) => {
            const buf = [];
            return [
                init,
                __drain(buf, complete, reduce),
                (acc, x) => {
                    if (buf.length === n) {
                        buf.shift();
                    }
                    buf.push(x);
                    return acc;
                },
            ];
        };
}

function matchLast(pred, src) {
    return isIterable(src)
        ? [...iterator(matchLast(pred), src)][0]
        : comp(filter(pred), takeLast(1));
}

function movingAverage(period, src) {
    return isIterable(src)
        ? iterator1(movingAverage(period), src)
        : (rfn) => {
            period |= 0;
            period < 2 && illegalArgs("period must be >= 2");
            const reduce = rfn[2];
            const window = [];
            let sum = 0;
            return compR(rfn, (acc, x) => {
                const n = window.push(x);
                sum += x;
                n > period && (sum -= window.shift());
                return n >= period ? reduce(acc, sum / period) : acc;
            });
        };
}

/**
 * Helper function to inject default {@link SortOpts}.
 *
 * @param opts -
 *
 * @internal
 */
const __sortOpts = (opts) => ({
    key: (x) => x,
    compare,
    ...opts,
});

function movingMedian(...args) {
    const iter = __iter(movingMedian, args);
    if (iter) {
        return iter;
    }
    const { key, compare } = __sortOpts(args[1]);
    const n = args[0];
    const m = n >> 1;
    return comp(partition(n, 1, true), map((window) => window.slice().sort((a, b) => compare(key(a), key(b)))[m]));
}

function juxt(...fns) {
    const [a, b, c, d, e, f, g, h] = fns;
    switch (fns.length) {
        case 1:
            return (x) => [a(x)];
        case 2:
            return (x) => [a(x), b(x)];
        case 3:
            return (x) => [a(x), b(x), c(x)];
        case 4:
            return (x) => [a(x), b(x), c(x), d(x)];
        case 5:
            return (x) => [a(x), b(x), c(x), d(x), e(x)];
        case 6:
            return (x) => [a(x), b(x), c(x), d(x), e(x), f(x)];
        case 7:
            return (x) => [a(x), b(x), c(x), d(x), e(x), f(x), g(x)];
        case 8:
            return (x) => [a(x), b(x), c(x), d(x), e(x), f(x), g(x), h(x)];
        default:
            return (x) => {
                let res = new Array(fns.length);
                for (let i = fns.length; i-- > 0;) {
                    res[i] = fns[i](x);
                }
                return res;
            };
    }
}

function multiplex(...args) {
    return map(juxt.apply(null, args.map(step)));
}

function rename(...args) {
    const iter = args.length > 2 && __iter(rename, args);
    if (iter) {
        return iter;
    }
    let kmap = args[0];
    if (isArray(kmap)) {
        kmap = kmap.reduce((acc, k, i) => ((acc[k] = i), acc), {});
    }
    if (args[1]) {
        const ks = Object.keys(kmap);
        return map((y) => transduce(comp(map((k) => [k, y[kmap[k]]]), filter((x) => x[1] !== undefined)), args[1], ks));
    }
    else {
        return map(renamer(kmap));
    }
}

function multiplexObj(...args) {
    const iter = __iter(multiplexObj, args);
    if (iter) {
        return iter;
    }
    const [xforms, rfn] = args;
    const ks = Object.keys(xforms);
    return comp(multiplex.apply(null, ks.map((k) => xforms[k])), rename(ks, rfn));
}

/**
 * No-op / pass-through transducer, essentially the same as:
 * `map((x) => x)`, but faster. Useful for testing and / or to keep
 * existing values in a {@link (multiplex:1)} tuple lane.
 */
const noop = () => (rfn) => rfn;

function padLast(n, fill, src) {
    return isIterable(src)
        ? iterator(padLast(n, fill), src)
        : ([init, complete, reduce]) => {
            let m = 0;
            return [
                init,
                (acc) => {
                    let rem = m % n;
                    if (rem > 0) {
                        while (++rem <= n && !isReduced(acc)) {
                            acc = reduce(acc, fill);
                        }
                    }
                    return complete(acc);
                },
                (acc, x) => (m++, reduce(acc, x)),
            ];
        };
}

function page(...args) {
    return (__iter(page, args) ||
        comp(drop(args[0] * (args[1] || 10)), take(args[1] || 10)));
}

function partitionBy(...args) {
    return (__iter(partitionBy, args, iterator) ||
        (([init, complete, reduce]) => {
            const fn = args[0];
            const f = args[1] === true ? fn() : fn;
            let prev = SEMAPHORE;
            let chunk;
            return [
                init,
                (acc) => {
                    if (chunk && chunk.length) {
                        acc = reduce(acc, chunk);
                        chunk = null;
                    }
                    return complete(acc);
                },
                (acc, x) => {
                    const curr = f(x);
                    if (prev === SEMAPHORE) {
                        prev = curr;
                        chunk = [x];
                    }
                    else if (curr === prev) {
                        chunk.push(x);
                    }
                    else {
                        chunk && (acc = reduce(acc, chunk));
                        chunk = isReduced(acc) ? null : [x];
                        prev = curr;
                    }
                    return acc;
                },
            ];
        }));
}

function partitionOf(sizes, src) {
    return isIterable(src)
        ? iterator(partitionOf(sizes), src)
        : partitionBy(() => {
            let i = 0, j = 0;
            return () => {
                if (i++ === sizes[j]) {
                    i = 1;
                    j = (j + 1) % sizes.length;
                }
                return j;
            };
        }, true);
}

function partitionSort(...args) {
    const iter = __iter(partitionSort, args, iterator);
    if (iter) {
        return iter;
    }
    const { key, compare } = __sortOpts(args[1]);
    return comp(partition(args[0], true), mapcat((window) => window.slice().sort((a, b) => compare(key(a), key(b)))));
}

function partitionSync(...args) {
    const iter = __iter(partitionSync, args, iterator);
    if (iter)
        return iter;
    const { key, mergeOnly, reset, all, backPressure } = {
        key: identity,
        mergeOnly: false,
        reset: true,
        all: true,
        backPressure: 0,
        ...args[1],
    };
    const requiredKeys = isArray(args[0])
        ? new Set(args[0])
        : args[0];
    const currKeys = new Set();
    const cache = new Map();
    let curr = {};
    const xform = ([init, complete, reduce]) => {
        let first = true;
        if (mergeOnly || backPressure < 1) {
            return [
                init,
                (acc) => {
                    if ((reset && all && currKeys.size > 0) ||
                        (!reset && first)) {
                        acc = reduce(acc, curr);
                        curr = {};
                        currKeys.clear();
                        first = false;
                    }
                    return complete(acc);
                },
                (acc, x) => {
                    const k = key(x);
                    if (requiredKeys.has(k)) {
                        curr[k] = x;
                        currKeys.add(k);
                        if (mergeOnly ||
                            requiredInputs(requiredKeys, currKeys)) {
                            acc = reduce(acc, curr);
                            first = false;
                            if (reset) {
                                curr = {};
                                currKeys.clear();
                            }
                            else {
                                curr = { ...curr };
                            }
                        }
                    }
                    return acc;
                },
            ];
        }
        else {
            // with backpressure / caching...
            return [
                init,
                (acc) => {
                    if (all && currKeys.size > 0) {
                        acc = reduce(acc, collect(cache, currKeys));
                        cache.clear();
                        currKeys.clear();
                    }
                    return complete(acc);
                },
                (acc, x) => {
                    const k = key(x);
                    if (requiredKeys.has(k)) {
                        let slot = cache.get(k);
                        !slot && cache.set(k, (slot = []));
                        slot.length >= backPressure &&
                            illegalState(`max back pressure (${backPressure}) exceeded for input: ${String(k)}`);
                        slot.push(x);
                        currKeys.add(k);
                        while (requiredInputs(requiredKeys, currKeys)) {
                            acc = reduce(acc, collect(cache, currKeys));
                            first = false;
                            if (isReduced(acc))
                                break;
                        }
                    }
                    return acc;
                },
            ];
        }
    };
    xform.keys = () => requiredKeys;
    xform.clear = () => {
        cache.clear();
        requiredKeys.clear();
        currKeys.clear();
        curr = {};
    };
    xform.add = (id) => {
        requiredKeys.add(id);
    };
    xform.delete = (id, clean = true) => {
        cache.delete(id);
        requiredKeys.delete(id);
        if (clean) {
            currKeys.delete(id);
            delete curr[id];
        }
    };
    return xform;
}
const requiredInputs = (required, curr) => {
    if (curr.size < required.size)
        return false;
    for (let id of required) {
        if (!curr.has(id))
            return false;
    }
    return true;
};
const collect = (cache, currKeys) => {
    const curr = {};
    for (let id of currKeys) {
        const slot = cache.get(id);
        curr[id] = slot.shift();
        !slot.length && currKeys.delete(id);
    }
    return curr;
};

function partitionTime(period, src) {
    return isIterable(src)
        ? iterator(partitionTime(period), src)
        : partitionBy(() => {
            let last = 0;
            return () => {
                const t = Date.now();
                t - last >= period && (last = t);
                return last;
            };
        }, true);
}

function partitionWhen(...args) {
    return (__iter(partitionWhen, args, iterator) ||
        (([init, complete, reduce]) => {
            const pred = args[0];
            const f = args[1] === true ? pred() : pred;
            let chunk;
            return [
                init,
                (acc) => {
                    if (chunk && chunk.length) {
                        acc = reduce(acc, chunk);
                        chunk = null;
                    }
                    return complete(acc);
                },
                (acc, x) => {
                    if (f(x)) {
                        chunk && (acc = reduce(acc, chunk));
                        chunk = isReduced(acc) ? null : [x];
                    }
                    else {
                        chunk ? chunk.push(x) : (chunk = [x]);
                    }
                    return acc;
                },
            ];
        }));
}

function peek(src) {
    return map(peek$1, src);
}

function pluck(key, src) {
    return isIterable(src)
        ? iterator1(pluck(key), src)
        : map((x) => x[key]);
}

function rechunk(...args) {
    const iter = __iter(rechunk, args, iterator);
    if (iter)
        return iter;
    return ([init, complete, reduce]) => {
        let buf = "";
        const re = args[0] || /\r?\n/;
        return [
            init,
            (acc) => {
                if (buf)
                    acc = reduce(acc, buf);
                return complete(acc);
            },
            (acc, chunk) => {
                buf += chunk;
                const res = buf.split(re);
                if (res.length > 1) {
                    buf = res.pop();
                    for (let l of res) {
                        acc = reduce(acc, l);
                        if (isReduced(acc)) {
                            buf = "";
                            break;
                        }
                    }
                }
                return acc;
            },
        ];
    };
}

function sample(...args) {
    const iter = __iter(sample, args);
    if (iter) {
        return iter;
    }
    const prob = args[0];
    const rnd = args[1] || SYSTEM;
    return (rfn) => {
        const r = rfn[2];
        return compR(rfn, (acc, x) => rnd.float() < prob ? r(acc, x) : acc);
    };
}

function selectKeys(keys, src) {
    return isIterable(src)
        ? iterator1(selectKeys(keys), src)
        : map(keySelector(keys));
}

/**
 * Helper transducer. Applies given `fn` to each input value, presumably
 * for side effects. Discards function's result and yields original
 * inputs.
 *
 * @param fn - side effect
 */
const sideEffect = (fn) => map((x) => (fn(x), x));

function slidingWindow(...args) {
    const iter = __iter(slidingWindow, args);
    if (iter)
        return iter;
    const size = args[0];
    const partial = args[1] !== false;
    return (rfn) => {
        const reduce = rfn[2];
        let buf = [];
        return compR(rfn, (acc, x) => {
            buf.push(x);
            const _size = deref(size);
            if (partial || buf.length >= _size) {
                acc = reduce(acc, buf);
                buf = buf.slice(buf.length >= _size ? 1 : 0, _size);
            }
            return acc;
        });
    };
}

function streamShuffle(...args) {
    return (__iter(streamShuffle, args, iterator) ||
        (([init, complete, reduce]) => {
            const n = args[0];
            const maxSwaps = args[1] || n;
            const buf = [];
            return [
                init,
                (acc) => {
                    while (buf.length && !isReduced(acc)) {
                        shuffle(buf, maxSwaps);
                        acc = reduce(acc, buf.shift());
                    }
                    acc = complete(acc);
                    return acc;
                },
                (acc, x) => {
                    buf.push(x);
                    shuffle(buf, maxSwaps);
                    if (buf.length === n) {
                        acc = reduce(acc, buf.shift());
                    }
                    return acc;
                },
            ];
        }));
}

function streamSort(...args) {
    const iter = __iter(streamSort, args, iterator);
    if (iter) {
        return iter;
    }
    const { key, compare } = __sortOpts(args[1]);
    const n = args[0];
    return ([init, complete, reduce]) => {
        const buf = [];
        return [
            init,
            __drain(buf, complete, reduce),
            (acc, x) => {
                const idx = binarySearch(buf, x, key, compare);
                buf.splice(idx < 0 ? -(idx + 1) : idx, 0, x);
                if (buf.length === n) {
                    acc = reduce(acc, buf.shift());
                }
                return acc;
            },
        ];
    };
}

function struct(fields, src) {
    return isIterable(src)
        ? iterator(struct(fields), src)
        : comp(partitionOf(fields.map((f) => f[1])), partition(fields.length), rename(fields.map((f) => f[0])), mapKeys(fields.reduce((acc, f) => (f[2] ? ((acc[f[0]] = f[2]), acc) : acc), {}), false));
}

function swizzle(order, src) {
    return isIterable(src)
        ? iterator1(swizzle(order), src)
        : map(swizzle$1(order));
}

function takeNth(n, src) {
    if (isIterable(src)) {
        return iterator1(takeNth(n), src);
    }
    n = clamp0(n - 1);
    return throttle(() => {
        let skip = 0;
        return () => (skip === 0 ? ((skip = n), true) : (skip--, false));
    });
}

function takeWhile(...args) {
    return (__iter(takeWhile, args) ||
        ((rfn) => {
            const r = rfn[2];
            const pred = args[0];
            let ok = true;
            return compR(rfn, (acc, x) => (ok = ok && pred(x)) ? r(acc, x) : reduced(acc));
        }));
}

function throttleTime(delay, src) {
    return isIterable(src)
        ? iterator1(throttleTime(delay), src)
        : throttle(() => {
            let last = 0;
            return () => {
                const t = Date.now();
                return t - last >= delay ? ((last = t), true) : false;
            };
        });
}

function toggle(on, off, initial = false, src) {
    return isIterable(src)
        ? iterator1(toggle(on, off, initial), src)
        : ([init, complete, reduce]) => {
            let state = initial;
            return [
                init,
                complete,
                (acc) => reduce(acc, (state = !state) ? on : off),
            ];
        };
}

const trace = (prefix = "") => sideEffect((x) => console.log(prefix, x));

function wordWrap(...args) {
    const iter = __iter(wordWrap, args, iterator);
    if (iter) {
        return iter;
    }
    const lineLength = args[0];
    const { delim, always } = {
        delim: 1,
        always: true,
        ...args[1],
    };
    return partitionBy(() => {
        let n = 0;
        let flag = false;
        return (w) => {
            n += w.length + delim;
            if (n > lineLength + (always ? 0 : delim)) {
                flag = !flag;
                n = w.length + delim;
            }
            return flag;
        };
    }, true);
}

/**
 * Helper function / generator to (re)provide given iterable in iterator
 * form.
 *
 * @param src -
 */
function* asIterable(src) {
    yield* src;
}

/**
 * Iterator yielding return values of given single-arg function `fn` (called
 * with `i`, current iteration count). If `n` is given, only that many values
 * will be produced, else the iterator is infinite.
 *
 * @example
 * ```ts
 * [...repeatedly(() => Math.floor(Math.random() * 10), 5)]
 * // [7, 0, 9, 3, 1]
 *
 * [...repeatedly((i) => i, 5)]
 * // [0, 1, 2, 3, 4]
 * ```
 *
 * @param fn - value producer
 * @param n - num values (default: ∞)
 */
function* repeatedly(fn, n = Infinity) {
    for (let i = 0; i < n; i++) {
        yield fn(i);
    }
}

/**
 * Returns an infinite iterator of random choices and their (optional)
 * weights. If `weights` is given, it must have at least the same size
 * as `choices`. If omitted, each choice will have same probability.
 *
 * @example
 * ```ts
 * transduce(take(1000), frequencies(), choices("abcd", [1, 0.5, 0.25, 0.125]))
 * // Map { 'c' => 132, 'a' => 545, 'b' => 251, 'd' => 72 }
 * ```
 *
 * {@link @thi.ng/random#weightedRandom}
 *
 * @param choices -
 * @param weights -
 */
const choices = (choices, weights, rnd = SYSTEM) => repeatedly(weights
    ? weightedRandom(ensureArray(choices), weights, rnd)
    : () => choices[rnd.float(choices.length) | 0]);

/**
 * Yields iterator producing concatenation of given iterables.
 * Undefined & null inputs are silently ignored, however any
 * such values produced or contained in an input will remain.
 *
 * @example
 * ```ts
 * [...concat([1, 2, 3], null, [4, 5])]
 * // [ 1, 2, 3, 4, 5 ]
 *
 * [...concat([1, 2, 3, undefined], null, [4, 5])]
 * // [ 1, 2, 3, undefined, 4, 5 ]
 * ```
 *
 * @param xs -
 */
function* concat(...xs) {
    for (let x of xs) {
        x != null && (yield* ensureIterable(x));
    }
}

/**
 * Iterator producing an exponential curve (with adjustable curvature)
 * between `start` and `end` values over `num` steps. This is the
 * exponential equivalent of {@link line}.
 *
 * @remarks
 * Since `start` is the first value emitted, the `end` value is only
 * reached in the `num+1`th step.
 *
 * The curvature can be controlled via the logarithmic `rate` param.
 * Recommended range [0.0001 - 10000] (curved -> linear). Default: 0.1
 *
 * Similar functionality (w/ more options) is availble here:
 * {@link @thi.ng/dsp#curve}.
 *
 * @example
 * ```ts
 * [...curve(50, 100, 10, 2)]
 * // [
 * //   50,
 * //   73.193,
 * //   85.649,
 * //   92.339,
 * //   95.932,
 * //   97.861,
 * //   98.897,
 * //   99.454,
 * //   99.753,
 * //   99.913,
 * //   100
 * // ]
 * ```
 *
 * @param start -
 * @param end -
 * @param steps -
 * @param falloff -
 */
function* curve(start, end, steps = 10, rate = 0.1) {
    const c = Math.exp(-Math.log((Math.abs(end - start) + rate) / rate) / steps);
    const offset = (start < end ? end + rate : end - rate) * (1 - c);
    steps > 0 && (yield start);
    for (let x = start; steps-- > 0;) {
        yield (x = offset + x * c);
    }
}

function dup(x) {
    return isString(x)
        ? x + x
        : isArray(x)
            ? x.concat(x)
            : ((x = ensureArray(x)), concat(x, x));
}

/**
 * Yields iterator of given iterable which repeats the first and/or last
 * value(s) `numLeft`/`numRight` times (default: 1).
 *
 * @remarks
 * By default both sides are repeated, but can be adjusted by setting
 * either of them to zero. `numRight` defaults to same value as
 * `numLeft`.
 *
 * @example
 * ```ts
 * [...extendSides([1, 2, 3])]
 * // [ 1,  1, 2, 3,  3]
 *
 * [...extendSides([1, 2, 3], 3)]
 * // [ 1, 1, 1,  1, 2, 3,  3, 3, 3 ]
 *
 * [...extendSides([1, 2, 3], 0, 3)]
 * // [ 1, 2, 3,  3, 3, 3 ]
 * ```
 *
 * - {@link padSides}
 * - {@link wrapSides}
 *
 * @param src -
 * @param numLeft -
 * @param numRight -
 */
function* extendSides(src, numLeft = 1, numRight = numLeft) {
    let prev = SEMAPHORE;
    for (let x of src) {
        if (numLeft > 0 && prev === SEMAPHORE) {
            yield* repeat(x, numLeft);
            numLeft = 0;
        }
        yield x;
        prev = x;
    }
    if (numRight > 0 && prev !== SEMAPHORE) {
        yield* repeat(prev, numRight);
    }
}

/**
 * Yields an infinite iterator of the inductive sequence:
 *
 * `f(x+1) = f(f(x))`
 *
 * @remarks
 * The first value emitted always is `seed` itself, then f(seed),
 * f(f(seed, i)) etc. The given function is called with the current
 * iteration counter as 2nd arg (starting w/ i=1).
 *
 * @example
 * ```ts
 * [...iterate((x) => x * 2, 1, 5)]
 * // [ 1, 2, 4, 8, 16 ]
 *
 * [...iterate((x, i) => x * 10 + i, 0, 8)]
 * // [ 0, 1, 12, 123, 1234, 12345, 123456, 1234567 ]
 * ```
 *
 * @param fn -
 * @param seed -
 * @param num -
 */
function* iterate(fn, seed, num = Infinity) {
    for (let i = 1; i <= num; i++) {
        yield seed;
        seed = fn(seed, i);
    }
}

/**
 * Iterator yielding key-value pairs of given object's own properties
 * and their values. Same as `zip(keys(x), vals(x))`.
 *
 * @remarks
 * - {@link vals}
 * - {@link (zip:1)}
 *
 * @example
 * ```ts
 * [...pairs({ a: 1, b: 2 })]
 * // [['a', 1], ['b', 2]]
 * ```
 *
 *
 * @param x -
 */
function* pairs(x) {
    for (let k in x) {
        if (x.hasOwnProperty(k)) {
            yield [k, x[k]];
        }
    }
}

function* permutations(...src) {
    const n = src.length - 1;
    if (n < 0) {
        return;
    }
    const step = new Array(n + 1).fill(0);
    const realized = src.map(ensureArrayLike);
    const total = realized.reduce((acc, x) => acc * x.length, 1);
    for (let i = 0; i < total; i++) {
        const tuple = [];
        for (let j = n; j >= 0; j--) {
            const r = realized[j];
            let s = step[j];
            if (s === r.length) {
                step[j] = s = 0;
                j > 0 && step[j - 1]++;
            }
            tuple[j] = r[s];
        }
        step[n]++;
        yield tuple;
    }
}
/**
 * Iterator yielding the Cartesian Product for `n` items of `m` values
 * each.
 *
 * @remarks
 * If `m` is not given, defaults to value of `n`. The range of `m` is
 * `0..m-1`. The optional `offsets` array can be used to define start
 * values for each dimension.
 *
 * @example
 * ```ts
 * [...permutationsN(2)]
 * // [ [0, 0], [0, 1], [1, 0], [1, 1] ]
 *
 * [...permutationsN(2, 3)]
 * // [ [0, 0], [0, 1], [0, 2],
 * //   [1, 0], [1, 1], [1, 2],
 * //   [2, 0], [2, 1], [2, 2] ]
 *
 * [...permutationsN(2, 2, [10, 20])]
 * // [ [ 10, 20 ], [ 10, 21 ], [ 11, 20 ], [ 11, 21 ] ]
 * ```
 *
 * @param n -
 * @param m -
 * @param offsets -
 */
const permutationsN = (n, m = n, offsets) => {
    if (offsets && offsets.length < n) {
        illegalArgs(`insufficient offsets, got ${offsets.length}, needed ${n}`);
    }
    const seqs = [];
    while (n-- > 0) {
        const o = offsets ? offsets[n] : 0;
        seqs[n] = range(o, o + m);
    }
    return permutations.apply(null, seqs);
};

/**
 * Similar to {@link permutations}, however takes an object with each
 * key specifying an array of its possible values. Yields an iterable of
 * objects of all value permutations.
 *
 * @remarks
 * The resulting object type will be derived from the value types in the
 * given `spec` object.
 *
 * The order of resulting permutations is not guaranteed and depending
 * on the VM's iteration behavior of `Object.keys()`.
 *
 * @example
 * ```ts
 * [...keyPermutations({ a: [1, 2], b: [true, false], c: ["X", "Y"] })]
 * // [
 * //   { a: 1, b: true, c: 'X' },
 * //   { a: 1, b: true, c: 'Y' },
 * //   { a: 1, b: false, c: 'X' },
 * //   { a: 1, b: false, c: 'Y' },
 * //   { a: 2, b: true, c: 'X' },
 * //   { a: 2, b: true, c: 'Y' },
 * //   { a: 2, b: false, c: 'X' },
 * //   { a: 2, b: false, c: 'Y' }
 * // ]
 * ```
 *
 * @param spec - permutation spec object
 */
const keyPermutations = (spec) => (map((x) => assocObj(partition(2, x)), permutations(...mapcat(([k, v]) => [[k], v], pairs(spec)))));

/**
 * Iterator which yields all names of given object's own properties
 * (Similar to `Object.keys()`).
 *
 * @remarks
 * See also:
 * - {@link pairs}
 * - {@link vals}
 *
 * @param x -
 */
function* keys(x) {
    for (let k in x) {
        if (x.hasOwnProperty(k)) {
            yield k;
        }
    }
}

/**
 * Iterator yielding `steps` + 1 interpolated values on a line in the
 * closed `[start .. end]` interval.
 *
 * @remarks
 * This is similar to {@link range}, but potentially provides more
 * precise values (by avoiding the accumulation of floating point errors
 * during iteration).
 *
 * Similar functionality (w/ more options) is availble here:
 * {@link @thi.ng/dsp#line}.
 *
 * @example
 * ```ts
 * [...line(50, 100, 10)]
 * // [
 * //    50, 55, 60, 65, 70,
 * //    75, 80, 85, 90, 95,
 * //   100
 * // ]
 * ```
 *
 * @param start -
 * @param end -
 * @param steps -
 */
const line = (start, end, steps = 10) => {
    const delta = end - start;
    return map((t) => start + delta * t, normRange(steps));
};

/**
 * Returns iterator of `src` padded with value `x`, repeated
 * `numLeft`/`numRight` times (default: 1). By default both sides are
 * padded, but can be adjusted by setting either of them to zero.
 * `numRight` defaults to same value as `numLeft`.
 *
 * @example
 * Essentially, syntax sugar for:
 *
 * ```ts
 * // default
 * concat(repeat(x, numLeft), src, repeat(x, numRight))
 *
 * // left only
 * concat(repeat(x, numLeft), src)
 *
 * // right only
 * concat(src, repeat(x, numRight))
 * ```
 *
 * - {@link extendSides}
 * - {@link wrapSides}
 *
 * @param src -
 * @param x -
 * @param numLeft -
 * @param numRight -
 */
const padSides = (src, x, numLeft = 1, numRight = numLeft) => numLeft > 0
    ? numRight > 0
        ? concat(repeat(x, numLeft), src, repeat(x, numRight))
        : concat(repeat(x, numLeft), src)
    : numRight > 0
        ? concat(src, repeat(x, numRight))
        : concat(src);

/**
 * Yields iterator which consumes input and yield its values in reverse
 * order. Important: Input MUST be finite.
 *
 * @example
 * ```ts
 * [...tx.reverse("hello world")]
 * // [ "d", "l", "r", "o", "w", " ", "o", "l", "l", "e", "h" ]
 * ```
 *
 * @param input -
 */
function* reverse(input) {
    const _input = ensureArray(input);
    let n = _input.length;
    while (n-- > 0) {
        yield _input[n];
    }
}

function palindrome(x) {
    return isString(x)
        ? str("", concat([x], reverse(x)))
        : isArray(x)
            ? x.concat(x.slice().reverse())
            : ((x = ensureArray(x)), concat(x, reverse(x)));
}

function* range3d(...args) {
    let fromX, toX, stepX;
    let fromY, toY, stepY;
    let fromZ, toZ, stepZ;
    switch (args.length) {
        case 9:
            stepX = args[6];
            stepY = args[7];
            stepZ = args[8];
        case 6:
            [fromX, toX, fromY, toY, fromZ, toZ] = args;
            break;
        case 3:
            [toX, toY, toZ] = args;
            fromX = fromY = fromZ = 0;
            break;
        default:
            illegalArity(args.length);
    }
    const rx = range(fromX, toX, stepX);
    const ry = range(fromY, toY, stepY);
    for (let z of range(fromZ, toZ, stepZ)) {
        for (let y of ry) {
            for (let x of rx) {
                yield [x, y, z];
            }
        }
    }
}

/**
 * If called with one vector, yields an iterator for the n-dimensional
 * interval: `[[0, 0,...] .. [x, y,...])`. If called with two vectors,
 * the first vector defines the inclusive interval start and the 2nd
 * vector the exclusive interval end. Each dimension can also contain
 * negative values.
 *
 * @example
 * ```ts
 * [...rangeNd([2])]
 * // [ [ 0 ], [ 1 ] ]
 *
 * [...rangeNd([2, -2])]
 * // [ [ 0, 0 ], [ 0, -1 ], [ 1, 0 ], [ 1, -1 ] ]
 *
 * [...rangeNd([-1,2], [1,3])]
 * // [ [ -1, 2 ], [ -1, 3 ], [ 0, 2 ], [ 0, 3 ] ]
 *
 * [...rangeNd([2, 2, 2])]
 * // [
 * //   [ 0, 0, 0 ],
 * //   [ 0, 0, 1 ],
 * //   [ 0, 1, 0 ],
 * //   [ 0, 1, 1 ],
 * //   [ 1, 0, 0 ],
 * //   [ 1, 0, 1 ],
 * //   [ 1, 1, 0 ],
 * //   [ 1, 1, 1 ]
 * // ]
 * ```
 *
 * @param vec
 */
const rangeNd = (min, max) => permutations.apply(null, ((max
    ? [...map(([a, b]) => range(a, b), zip(min, max))]
    : [...map(range, min)])));

/**
 * Syntax sugar for `Object.keys(x).sort()` with support for custom
 * comparator (default: {@link @thi.ng/compare#compare}) and yielding
 * iterator of sorted keys.
 *
 * @param x -
 * @param cmp -
 */
function* sortedKeys(x, cmp = compare) {
    yield* Object.keys(x).sort(cmp);
}

/**
 * Yields an iterator of all `src` values, followed by the same values
 * in reverse order. Efficiently builds the reversed order via an
 * internal linked list.
 *
 * @example
 * ```ts
 * [...symmetric([1, 2, 3])]
 * // [ 1, 2, 3, 3, 2, 1 ]
 * ```
 *
 * @param src -
 */
function* symmetric(src) {
    let head = undefined;
    for (let x of src) {
        head = { x, n: head };
        yield x;
    }
    while (head) {
        yield head.x;
        head = head.n;
    }
}

/**
 * Keyframe based interpolator. Yields a sequence of `num+1` equally
 * spaced, tweened values from given keyframe tuples (`stops`).
 * Keyframes are defined as `[time, value]` tuples. Only values in the
 * closed `[min..max]` time interval will be computed.
 *
 * @remarks
 * Interpolation happens in two stages: First the given `init` function
 * is called to transform/prepare pairs of consecutive keyframes into a
 * single interval (user defined). Then, to produce each tweened value
 * calls `mix` with the currently active interval and interpolation time
 * value `t` (re-normalized and relative to current interval). The
 * iterator yields results of these `mix()` function calls.
 *
 * Depending on the overall `num`ber of samples requested and the
 * distance between keyframes, some keyframes MIGHT be skipped. E.g. if
 * requesting 10 samples within [0,1], the interval between two
 * successive keyframes at 0.12 and 0.19 would be skipped entirely,
 * since samples will only be taken at multiples of `1/num` (i.e. 0.0,
 * 0.1, 0.2... in this example).
 *
 * The given keyframe times can lie outside the `min`/`max` range and
 * also don't need to cover the range fully. In the latter case, tweened
 * values before the first or after the last keyframe will yield the
 * value of the first/last keyframe. If only a single keyframe is given
 * in total, all `num` yielded samples will be that keyframe's
 * transformed value.
 *
 * @example
 * ```ts
 * [...tween({
 *   num: 10,
 *   min: 0,
 *   max: 100,
 *   init: (a, b) => [a, b],
 *   mix: ([a, b], t) => Math.floor(a + (b - a) * t),
 *   stops: [[20, 100], [50, 200], [80, 0]]
 * })]
 * // [ 100, 100, 100, 133, 166, 200, 133, 66, 0, 0, 0 ]
 * ```
 *
 * Using easing functions (e.g. via {@link @thi.ng/math# | @thi.ng/math}),
 * non-linear interpolation within each keyframe interval can be achieved:
 *
 * @example
 * ```ts
 * import { mix, smoothStep } from "@thi.ng/math"
 *
 * [...tween({
 *   num: 10,
 *   min: 0,
 *   max: 100,
 *   init: (a, b) => [a, b],
 *   mix: ([a, b], t) => Math.floor(mix(a, b, smoothStep(0.1, 0.9, t))),
 *   stops: [[20, 100], [50, 200], [80, 0]]
 * })]
 * // [ 100, 100, 100, 120, 179, 200, 158, 41, 0, 0, 0 ]
 * ```
 *
 * - {@link TweenOpts}
 * - {@link (interpolate:1)}
 * - {@link (interpolateHermite:1)}
 * - {@link (interpolateLinear:1)}
 *
 * @param opts -
 */
function* tween(opts) {
    const { min, max, num, init, mix, stops } = opts;
    const easing = opts.easing || ((x) => x);
    let l = stops.length;
    if (l < 1)
        return;
    if (l === 1) {
        yield* repeat(mix(init(stops[0][1], stops[0][1]), 0), num);
    }
    stops.sort((a, b) => a[0] - b[0]);
    stops[l - 1][0] < max && stops.push([max, stops[l - 1][1]]);
    stops[0][0] > min && stops.unshift([min, stops[0][1]]);
    const range = max - min;
    let start = stops[0][0];
    let end = stops[1][0];
    let delta = end - start;
    let interval = init(stops[0][1], stops[1][1]);
    let i = 1;
    l = stops.length;
    for (let t of normRange(num)) {
        t = min + range * t;
        if (t > end) {
            while (i < l && t > stops[i][0])
                i++;
            start = stops[i - 1][0];
            end = stops[i][0];
            delta = end - start;
            interval = init(stops[i - 1][1], stops[i][1]);
        }
        yield mix(interval, easing(delta !== 0 ? (t - start) / delta : 0));
    }
}

/**
 * Iterator which yields all values of given object's own properties
 * (Similar to `Object.values()`).
 *
 * @remarks
 * See also:
 * - {@link keys}
 * - {@link pairs}
 *
 * @param x -
 */
function* vals(x) {
    for (let k in x) {
        if (x.hasOwnProperty(k)) {
            yield x[k];
        }
    }
}

export { asIterable, assocMap, assocObj, autoObj, benchmark, buildKernel1d, buildKernel2d, choices, concat, conj, converge, convolve1d, convolve2d, count, curve, dedupe, deepTransform, delayed$1 as delayed, distinct, div, drop, dropNth, dropWhile, dup, duplicate, every, extendSides, fill, fillN, filterFuzzy, flatten, flattenWith, frequencies, groupBinary, groupByMap, groupByObj, indexed, interleave, interpolate, interpolateHermite, interpolateLinear, interpose, iterate, juxtR, keep, keyPermutations, keySelector, keys, labeled, line, lookup1d, lookup2d, lookup3d, mapDeep, mapKeys, mapNth, mapVals, matchFirst, matchLast, max, maxCompare, maxMag, mean, min, minCompare, minMag, minMax, movingAverage, movingMedian, mul, multiplex, multiplexObj, noop, normCount, normFrequencies, normFrequenciesAuto, padLast, padSides, page, pairs, palindrome, partitionBy, partitionOf, partitionSort, partitionSync, partitionTime, partitionWhen, peek, permutations, permutationsN, pluck, pushCopy, pushSort, range2d, range3d, rangeNd, rechunk, reductions, rename, renamer, repeatedly, reverse, run, sample, selectKeys, sideEffect, slidingWindow, some, sortedKeys, step, streamShuffle, streamSort, struct, sub, swizzle, symmetric, takeLast, takeNth, takeWhile, throttle, throttleTime, toggle, trace, tween, vals, wordWrap };
