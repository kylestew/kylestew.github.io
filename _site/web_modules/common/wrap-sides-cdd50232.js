import { f as compR, u as unreduced, d as isReduced, e as ensureReduced, _ as __iter, a as iterator } from './zip-907b97a6.js';
import { e as ensureArray } from './ensure-array-22c314b7.js';
import { i as illegalArgs } from './illegal-arguments-2af523c3.js';
import { i as inRange } from './interval-fde8b87f.js';

/**
 * Transducer to concatenate iterable values. Iterates over each input
 * and emits individual values down stream, therefore removing one level
 * of nesting from the input.
 *
 * @remarks
 * If, during processing, the transducer is given a wrapped reduced
 * input iterable, it will still be processed as normal, but then
 * immediately triggers early termination by wrapping its own result in
 * {@link reduced}. E.g. this behavior allows a {@link (mapcat:1)} user
 * functions to benefit from reduced results.
 *
 * Also see:
 * - {@link concat}
 * - {@link (mapcat:1)}
 *
 * @example
 * ```ts
 * [...iterator(comp(map((x) => [x, x]), cat()), [1, 2, 3, 4])]
 * // [ 1, 1, 2, 2, 3, 3, 4, 4 ]
 *
 * [...iterator(
 *   comp(
 *     mapIndexed((i, x) => [[i], [x, x]]),
 *     cat(),
 *     cat()
 *   ),
 *   "abc"
 * )]
 * // [ 0, 'a', 'a', 1, 'b', 'b', 2, 'c', 'c' ]
 *
 * [...mapcat((x)=>(x > 1 ? reduced([x, x]) : [x, x]), [1, 2, 3, 4])]
 * // [ 1, 1, 2, 2 ]
 * ```
 *
 * @param rfn -
 */
const cat = () => (rfn) => {
    const r = rfn[2];
    return compR(rfn, (acc, x) => {
        if (x) {
            for (let y of unreduced(x)) {
                acc = r(acc, y);
                if (isReduced(acc)) {
                    break;
                }
            }
        }
        return isReduced(x) ? ensureReduced(acc) : acc;
    });
};

function partition(...args) {
    const iter = __iter(partition, args, iterator);
    if (iter) {
        return iter;
    }
    let size = args[0], all, step;
    if (typeof args[1] == "number") {
        step = args[1];
        all = args[2];
    }
    else {
        step = size;
        all = args[1];
    }
    return ([init, complete, reduce]) => {
        let buf = [];
        let skip = 0;
        return [
            init,
            (acc) => {
                if (all && buf.length > 0) {
                    acc = reduce(acc, buf);
                    buf = [];
                }
                return complete(acc);
            },
            (acc, x) => {
                if (skip <= 0) {
                    if (buf.length < size) {
                        buf.push(x);
                    }
                    if (buf.length === size) {
                        acc = reduce(acc, buf);
                        buf = step < size ? buf.slice(step) : [];
                        skip = step - size;
                    }
                }
                else {
                    skip--;
                }
                return acc;
            },
        ];
    };
}

/**
 * Yields iterator of `src` with the last `numLeft` values of `src`
 * prepended at the beginning and/or the first `numRight` values
 * appended at the end.
 *
 * @remarks
 * `numLeft` defaults to 1 and `numRight` defaults to same value as
 * `numLeft`, therefore wraps both sides by default and throws error if
 * either `nXXX < 0` or larger than `src.length`.
 *
 * See also:
 * - {@link extendSides}
 * - {@link padSides}
 *
 * @param src -
 * @param numLeft -
 * @param numRight -
 */
function* wrapSides(src, numLeft = 1, numRight = numLeft) {
    const _src = ensureArray(src);
    !(inRange(numLeft, 0, _src.length) && inRange(numRight, 0, _src.length)) &&
        illegalArgs(`allowed wrap range: [0..${_src.length}]`);
    if (numLeft > 0) {
        for (let m = _src.length, i = m - numLeft; i < m; i++) {
            yield _src[i];
        }
    }
    yield* _src;
    if (numRight > 0) {
        for (let i = 0; i < numRight; i++) {
            yield _src[i];
        }
    }
}

export { cat as c, partition as p, wrapSides as w };
