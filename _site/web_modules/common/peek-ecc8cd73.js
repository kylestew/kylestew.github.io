/**
 * Returns first element of given array or `undefined` if array is empty.
 *
 * @param buf - array
 */
const first = (buf) => buf[0];
/**
 * Returns last element of given array or `undefined` if array is empty.
 *
 * @param buf - array
 */
const peek = (buf) => buf[buf.length - 1];

export { first as f, peek as p };
