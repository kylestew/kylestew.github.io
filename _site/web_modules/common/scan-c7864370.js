import { a as isIterable } from './is-iterable-2e1d7abd.js';
import { c as cat } from './wrap-sides-cdd50232.js';
import { a as iterator, c as comp, m as map, r as reduce, b as reducer, _ as __iter, u as unreduced, d as isReduced, e as ensureReduced } from './zip-907b97a6.js';
import { N as NO_OP } from './api-4427ff26.js';

function mapcat(fn, src) {
    return isIterable(src) ? iterator(mapcat(fn), src) : comp(map(fn), cat());
}

function last(xs) {
    return xs ? reduce(last(), xs) : reducer(NO_OP, (_, x) => x);
}

/**
 * Iterator yielding an infinite (by default) repetition of given value
 * `x`. If `n` is given, only produces that many values.
 *
 * See also: {@link repeatedly}
 *
 * @example
 * ```ts
 * [...repeat(42, 5)]
 * // [42, 42, 42, 42, 42]
 * ```
 *
 * @param x - value to repeat
 * @param n - num values (default: ∞)
 */
function* repeat(x, n = Infinity) {
    while (n-- > 0) {
        yield x;
    }
}

function scan(...args) {
    return ((args.length > 2 && __iter(scan, args, iterator)) ||
        (([inito, completeo, reduceo]) => {
            const [initi, completei, reducei] = args[0];
            let acc = args.length > 1 && args[1] != null ? args[1] : initi();
            return [
                inito,
                (_acc) => {
                    let a = completei(acc);
                    if (a !== acc) {
                        _acc = unreduced(reduceo(_acc, a));
                    }
                    acc = a;
                    return completeo(_acc);
                },
                (_acc, x) => {
                    acc = reducei(acc, x);
                    if (isReduced(acc)) {
                        return ensureReduced(reduceo(_acc, acc.deref()));
                    }
                    return reduceo(_acc, acc);
                },
            ];
        }));
}

export { last as l, mapcat as m, repeat as r, scan as s };
