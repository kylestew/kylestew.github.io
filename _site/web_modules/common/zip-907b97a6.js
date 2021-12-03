import { i as illegalArity } from './illegal-arity-0f06cc40.js';
import { i as implementsFunction, a as isIterable } from './is-iterable-2e1d7abd.js';
import { N as NO_OP, S as SEMAPHORE } from './api-4427ff26.js';
import { i as isArrayLike } from './is-arraylike-29dbc151.js';

function comp(...fns) {
    let [a, b, c, d, e, f, g, h, i, j] = fns;
    switch (fns.length) {
        case 0:
            illegalArity(0);
        case 1:
            return a;
        case 2:
            return (...xs) => a(b(...xs));
        case 3:
            return (...xs) => a(b(c(...xs)));
        case 4:
            return (...xs) => a(b(c(d(...xs))));
        case 5:
            return (...xs) => a(b(c(d(e(...xs)))));
        case 6:
            return (...xs) => a(b(c(d(e(f(...xs))))));
        case 7:
            return (...xs) => a(b(c(d(e(f(g(...xs)))))));
        case 8:
            return (...xs) => a(b(c(d(e(f(g(h(...xs))))))));
        case 9:
            return (...xs) => a(b(c(d(e(f(g(h(i(...xs)))))))));
        case 10:
        default:
            const fn = (...xs) => a(b(c(d(e(f(g(h(i(j(...xs))))))))));
            return fns.length === 10 ? fn : comp(fn, ...fns.slice(10));
    }
}

const ensureTransducer = (x) => implementsFunction(x, "xform") ? x.xform() : x;

function comp$1(...fns) {
    fns = fns.map(ensureTransducer);
    return comp.apply(null, fns);
}

/**
 * Reducer composition helper, internally used by various transducers
 * during initialization. Takes existing reducer `rfn` (a 3-tuple) and a
 * reducing function `fn`. Returns a new reducer tuple.
 *
 * @remarks
 * `rfn[2]` reduces values of type `B` into an accumulator of type `A`.
 * `fn` accepts values of type `C` and produces interim results of type
 * `B`, which are then (possibly) passed to the "inner" `rfn[2]`
 * function. Therefore the resulting reducer takes inputs of `C` and an
 * accumulator of type `A`.
 *
 * It is assumed that `fn` internally calls `rfn[2]` to pass its own
 * results for further processing by the nested reducer `rfn`.
 *
 * @example
 * ```ts
 * compR(rfn, fn)
 * // [rfn[0], rfn[1], fn]
 * ```
 *
 * @param rfn -
 * @param fn -
 */
const compR = (rfn, fn) => [rfn[0], rfn[1], fn];

class Reduced {
    constructor(val) {
        this.value = val;
    }
    deref() {
        return this.value;
    }
}
const reduced = (x) => new Reduced(x);
const isReduced = (x) => x instanceof Reduced;
const ensureReduced = (x) => x instanceof Reduced ? x : new Reduced(x);
const unreduced = (x) => (x instanceof Reduced ? x.deref() : x);

const parseArgs = (args) => args.length === 2
    ? [undefined, args[1]]
    : args.length === 3
        ? [args[1], args[2]]
        : illegalArity(args.length);
function reduce(...args) {
    const rfn = args[0];
    const init = rfn[0];
    const complete = rfn[1];
    const reduce = rfn[2];
    args = parseArgs(args);
    const acc = args[0] == null ? init() : args[0];
    const xs = args[1];
    return unreduced(complete(implementsFunction(xs, "$reduce")
        ? xs.$reduce(reduce, acc)
        : isArrayLike(xs)
            ? reduceArray(reduce, acc, xs)
            : reduceIterable(reduce, acc, xs)));
}
function reduceRight(...args) {
    const rfn = args[0];
    const init = rfn[0];
    const complete = rfn[1];
    const reduce = rfn[2];
    args = parseArgs(args);
    let acc = args[0] == null ? init() : args[0];
    const xs = args[1];
    for (let i = xs.length; i-- > 0;) {
        acc = reduce(acc, xs[i]);
        if (isReduced(acc)) {
            acc = acc.deref();
            break;
        }
    }
    return unreduced(complete(acc));
}
const reduceArray = (rfn, acc, xs) => {
    for (let i = 0, n = xs.length; i < n; i++) {
        acc = rfn(acc, xs[i]);
        if (isReduced(acc)) {
            acc = acc.deref();
            break;
        }
    }
    return acc;
};
const reduceIterable = (rfn, acc, xs) => {
    for (let x of xs) {
        acc = rfn(acc, x);
        if (isReduced(acc)) {
            acc = acc.deref();
            break;
        }
    }
    return acc;
};
/**
 * Convenience helper for building a full {@link Reducer} using the identity
 * function (i.e. `(x) => x`) as completion step (true for 90% of all
 * bundled transducers).
 *
 * @param init - init step of reducer
 * @param rfn - reduction step of reducer
 */
const reducer = (init, rfn) => [init, (acc) => acc, rfn];
const $$reduce = (rfn, args) => {
    const n = args.length - 1;
    return isIterable(args[n])
        ? args.length > 1
            ? reduce(rfn.apply(null, args.slice(0, n)), args[n])
            : reduce(rfn(), args[0])
        : undefined;
};

function push(xs) {
    return xs
        ? [...xs]
        : reducer(() => [], (acc, x) => (acc.push(x), acc));
}

/**
 * Takes a transducer and input iterable. Returns iterator of
 * transformed results.
 *
 * @param xform -
 * @param xs -
 */
function* iterator(xform, xs) {
    const rfn = ensureTransducer(xform)(push());
    const complete = rfn[1];
    const reduce = rfn[2];
    for (let x of xs) {
        const y = reduce([], x);
        if (isReduced(y)) {
            yield* unreduced(complete(y.deref()));
            return;
        }
        if (y.length) {
            yield* y;
        }
    }
    yield* unreduced(complete([]));
}
/**
 * Optimized version of {@link iterator} for transducers which are
 * guaranteed to:
 *
 * 1) Only produce none or a single result per input
 * 2) Do not require a `completion` reduction step
 *
 * @param xform -
 * @param xs -
 */
function* iterator1(xform, xs) {
    const reduce = (ensureTransducer(xform)([NO_OP, NO_OP, (_, x) => x]))[2];
    for (let x of xs) {
        let y = reduce(SEMAPHORE, x);
        if (isReduced(y)) {
            y = unreduced(y.deref());
            if (y !== SEMAPHORE) {
                yield y;
            }
            return;
        }
        if (y !== SEMAPHORE) {
            yield y;
        }
    }
}
/**
 * Helper function used by various transducers to wrap themselves as
 * transforming iterators. Delegates to {@link iterator1} by default.
 *
 * @param xform -
 * @param args -
 * @param impl -
 *
 * @internal
 */
const __iter = (xform, args, impl = iterator1) => {
    const n = args.length - 1;
    return isIterable(args[n])
        ? args.length > 1
            ? impl(xform.apply(null, args.slice(0, n)), args[n])
            : impl(xform(), args[0])
        : undefined;
};

function map(fn, src) {
    return isIterable(src)
        ? iterator1(map(fn), src)
        : (rfn) => {
            const r = rfn[2];
            return compR(rfn, (acc, x) => r(acc, fn(x)));
        };
}

function mapIndexed(...args) {
    return (__iter(mapIndexed, args) ||
        ((rfn) => {
            const r = rfn[2];
            const fn = args[0];
            let i = args[1] || 0;
            return compR(rfn, (acc, x) => r(acc, fn(i++, x)));
        }));
}

function range(from, to, step) {
    return new Range(from, to, step);
}
/**
 * Simple class wrapper around given range interval and implementing
 * `Iterable` and {@link IReducible} interfaces, the latter is used to
 * accelerate use with {@link (reduce:1)}.
 */
class Range {
    constructor(from, to, step) {
        if (from === undefined) {
            from = 0;
            to = Infinity;
        }
        else if (to === undefined) {
            to = from;
            from = 0;
        }
        step = step === undefined ? (from < to ? 1 : -1) : step;
        this.from = from;
        this.to = to;
        this.step = step;
    }
    *[Symbol.iterator]() {
        let { from, to, step } = this;
        if (step > 0) {
            while (from < to) {
                yield from;
                from += step;
            }
        }
        else if (step < 0) {
            while (from > to) {
                yield from;
                from += step;
            }
        }
    }
    $reduce(rfn, acc) {
        const step = this.step;
        if (step > 0) {
            for (let i = this.from, n = this.to; i < n && !isReduced(acc); i += step) {
                acc = rfn(acc, i);
            }
        }
        else {
            for (let i = this.from, n = this.to; i > n && !isReduced(acc); i += step) {
                acc = rfn(acc, i);
            }
        }
        return acc;
    }
}

function str(sep, xs) {
    sep = sep || "";
    let first = true;
    return xs
        ? [...xs].join(sep)
        : reducer(() => "", (acc, x) => ((acc = first ? acc + x : acc + sep + x), (first = false), acc));
}

function take(n, src) {
    return isIterable(src)
        ? iterator(take(n), src)
        : (rfn) => {
            const r = rfn[2];
            let m = n;
            return compR(rfn, (acc, x) => --m > 0
                ? r(acc, x)
                : m === 0
                    ? ensureReduced(r(acc, x))
                    : reduced(acc));
        };
}

function transduce(...args) {
    return $transduce(transduce, reduce, args);
}
function transduceRight(...args) {
    return $transduce(transduceRight, reduceRight, args);
}
const $transduce = (tfn, rfn, args) => {
    let acc, xs;
    switch (args.length) {
        case 4:
            xs = args[3];
            acc = args[2];
            break;
        case 3:
            xs = args[2];
            break;
        case 2:
            return map((x) => tfn(args[0], args[1], x));
        default:
            illegalArity(args.length);
    }
    return rfn(ensureTransducer(args[0])(args[1]), acc, xs);
};

function* zip(...src) {
    const iters = src.map((s) => s[Symbol.iterator]());
    while (true) {
        const tuple = [];
        for (let i of iters) {
            let v = i.next();
            if (v.done) {
                return;
            }
            tuple.push(v.value);
        }
        yield tuple;
    }
}

export { $$reduce as $, Reduced as R, __iter as _, iterator as a, reducer as b, comp$1 as c, isReduced as d, ensureReduced as e, compR as f, mapIndexed as g, take as h, iterator1 as i, range as j, ensureTransducer as k, reduced as l, map as m, reduceRight as n, transduceRight as o, push as p, Range as q, reduce as r, str as s, transduce as t, unreduced as u, zip as z };
