import { d as defError } from '../common/deferror-480a42fb.js';
export { d as defError } from '../common/deferror-480a42fb.js';
export { A as AssertionError, a as assert } from '../common/assert-dcb272c2.js';
export { I as IllegalArgumentError, i as illegalArgs } from '../common/illegal-arguments-2af523c3.js';
export { I as IllegalArityError, i as illegalArity } from '../common/illegal-arity-0f06cc40.js';
export { I as IllegalStateError, i as illegalState } from '../common/illegal-state-3552b3b2.js';
export { U as UnsupportedOperationError, u as unsupported } from '../common/unsupported-bfdbf30c.js';
import '../common/_node-resolve:empty-5550de3c.js';

const OutOfBoundsError = defError(() => "index out of bounds");
const outOfBounds = (index) => {
    throw new OutOfBoundsError(index);
};
/**
 * Throws an {@link OutOfBoundsError} if `index` outside the `[min..max)` range.
 *
 * @param index
 * @param min
 * @param max
 */
const ensureIndex = (index, min, max) => (index < min || index >= max) && outOfBounds(index);
/**
 * Throws an {@link OutOfBoundsError} if either `x` or `y` is outside their
 * respective `[0..max)` range.
 *
 * @param x
 * @param y
 * @param maxX
 * @param maxY
 * @returns
 */
const ensureIndex2 = (x, y, maxX, maxY) => (x < 0 || x >= maxX || y < 0 || y >= maxY) && outOfBounds([x, y]);

export { OutOfBoundsError, ensureIndex, ensureIndex2, outOfBounds };
