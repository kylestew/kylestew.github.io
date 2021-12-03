import { E as EPS } from './api-8453d590.js';
import { h as magSq, s as set } from './magsq-9dc23acb.js';
import { a as mulN } from './muln-2f111deb.js';

const mag = (v) => Math.sqrt(magSq(v));

/**
 * Normalizes vector to given (optional) length (default: 1). If `out`
 * is null, modifies `v` in place.
 *
 * @param out -
 * @param v -
 * @param n -
 */
const normalize = (out, v, n = 1) => {
    !out && (out = v);
    const m = mag(v);
    return m >= EPS ? mulN(out, v, n / m) : out !== v ? set(out, v) : out;
};

export { mag as m, normalize as n };
