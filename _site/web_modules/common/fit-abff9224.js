import { c as clamp01, d as clamp11 } from './interval-fde8b87f.js';

/**
 * Returns normalized value of `x` WRT to interval `a .. b`. If `a`
 * equals `b`, returns 0.
 *
 * @param x -
 * @param a -
 * @param b -
 */
const norm = (x, a, b) => (b !== a ? (x - a) / (b - a) : 0);
const fit = (x, a, b, c, d) => c + (d - c) * norm(x, a, b);
const fitClamped = (x, a, b, c, d) => c + (d - c) * clamp01(norm(x, a, b));
const fit01 = (x, a, b) => a + (b - a) * clamp01(x);
const fit10 = (x, a, b) => b + (a - b) * clamp01(x);
const fit11 = (x, a, b) => a + (b - a) * (0.5 + 0.5 * clamp11(x));

export { fit as a, fitClamped as b, fit10 as c, fit11 as d, fit01 as f, norm as n };
