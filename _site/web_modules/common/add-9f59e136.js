import { $ as $$reduce, b as reducer } from './zip-907b97a6.js';

/**
 * Higher-order reducer for math operations.
 *
 * @param rfn -
 * @param fn -
 * @param initDefault -
 * @param args -
 *
 * @internal
 */
const __mathop = (rfn, fn, initDefault, args) => {
    const res = $$reduce(rfn, args);
    if (res !== undefined) {
        return res;
    }
    const init = args[0] || initDefault;
    return reducer(() => init, fn);
};

function add(...args) {
    return __mathop(add, (acc, x) => acc + x, 0, args);
}

export { __mathop as _, add as a };
