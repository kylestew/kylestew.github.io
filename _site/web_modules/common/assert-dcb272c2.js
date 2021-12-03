import { p as process } from './_node-resolve:empty-5550de3c.js';
import { d as defError } from './deferror-480a42fb.js';

const AssertionError = defError(() => "Assertion failed");
/**
 * Takes a `test` result or predicate function without args and throws
 * error with given `msg` if test failed (i.e. is falsy).
 *
 * @remarks
 * The function is only enabled if `"production" != "production"`
 * or if the `UMBRELLA_ASSERTS` env var is set to 1.
 */
const assert = (() => typeof process !== "undefined" && typeof process.env !== "undefined"
    ? 
        !!process.env.UMBRELLA_ASSERTS
    : typeof __SNOWPACK_ENV__ !== "undefined"
        ? __SNOWPACK_ENV__.MODE !== "production" ||
            !!__SNOWPACK_ENV__.UMBRELLA_ASSERTS ||
            !!__SNOWPACK_ENV__.SNOWPACK_PUBLIC_UMBRELLA_ASSERTS
        : true)()
    ? (test, msg) => {
        if ((typeof test === "function" && !test()) || !test) {
            throw new AssertionError(typeof msg === "function" ? msg() : msg);
        }
    }
    : () => { };

export { AssertionError as A, assert as a };
