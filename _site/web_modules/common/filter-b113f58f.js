import { m as map, i as iterator1, f as compR } from './zip-907b97a6.js';
import { a as isIterable } from './is-iterable-2e1d7abd.js';

/**
 * Iterator which yields an infinite repetition of given `input`
 * iterable's values. Produces no values if `input` is empty. If `num`
 * is given, only that many cycles will be emitted.
 *
 * @remarks
 * Also see {@link repeat}, {@link repeatedly} for related functions.
 *
 * @example
 * ```ts
 * // take 5 from infinite sequence
 * [...take(5, cycle([1, 2, 3]))]
 * // [1, 2, 3, 1, 2]
 *
 * // only produce 2 cycles
 * [...cycle(range(3), 2)]
 * // [ 0, 1, 2, 0, 1, 2 ]
 * ```
 *
 * @param input -
 * @param num -
 */
function* cycle(input, num = Infinity) {
    if (num < 1)
        return;
    let cache = [];
    for (let i of input) {
        cache.push(i);
        yield i;
    }
    if (cache.length > 0) {
        while (--num > 0) {
            yield* cache;
        }
    }
}

/**
 * Yields sequence of `n+1` monotonically increasing numbers in the
 * closed interval (0.0 .. 1.0). If `n <= 0`, yields nothing.
 *
 * @example
 * ```ts
 * [...normRange(4)]
 * // [0, 0.25, 0.5, 0.75, 1.0]
 * ```
 *
 * @param n - number of steps
 * @param includeLast - include last value (i.e. `1.0`)
 */
function* normRange(n, includeLast = true) {
    if (n > 0) {
        for (let i = 0, m = includeLast ? n + 1 : n; i < m; i++) {
            yield i / n;
        }
    }
}
/**
 * 2D version of {@link normRange} in Y-major order (i.e. X is inner loop).
 *
 * @param nx
 * @param ny
 * @param includeLastX
 * @param includeLastY
 */
function* normRange2d(nx, ny, includeLastX = true, includeLastY = true) {
    const rx = [...normRange(nx, includeLastX)];
    for (let y of normRange(ny, includeLastY)) {
        yield* map((x) => [x, y], rx);
    }
}
/**
 * 3D version of {@link normRange} in Z-major order (i.e. X being innermost
 * loop).
 *
 * @param nx
 * @param ny
 * @param includeLastX
 * @param includeLastY
 */
function* normRange3d(nx, ny, nz, includeLastX = true, includeLastY = true, includeLastZ = true) {
    const sliceXY = [...normRange2d(nx, ny, includeLastX, includeLastY)];
    for (let z of normRange(nz, includeLastZ)) {
        yield* map((xy) => [...xy, z], sliceXY);
    }
}

function filter(pred, src) {
    return isIterable(src)
        ? iterator1(filter(pred), src)
        : (rfn) => {
            const r = rfn[2];
            return compR(rfn, (acc, x) => (pred(x) ? r(acc, x) : acc));
        };
}

export { normRange2d as a, normRange3d as b, cycle as c, filter as f, normRange as n };
