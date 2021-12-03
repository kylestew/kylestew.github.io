/**
 * Hex digits
 */
const HEX = "0123456789abcdef";
/**
 * Returns 8bit uint as hex string
 *
 * @param x
 */
const U8 = (x) => HEX[(x >>> 4) & 0xf] + HEX[x & 0xf];
/**
 * Returns 16bit uint as hex string
 *
 * @param x
 */
const U16 = (x) => U8(x >>> 8) + U8(x & 0xff);
/**
 * Returns hex string of 16bit uint, read in big-endian order from given byte
 * array at index `i`.
 *
 * @param x -
 * @param i -
 */
const U16BE = (x, i) => U8(x[i]) + U8(x[i + 1]);
/**
 * Returns 24bit uint as hex string
 *
 * @param x
 */
const U24 = (x) => U8(x >>> 16) + U16(x);
/**
 * Returns 32bit uint as hex string
 *
 * @param x
 */
const U32 = (x) => U16(x >>> 16) + U16(x);
/**
 * Returns hex string of 32bit uint, read in big-endian order from given byte
 * array at index `i`.
 *
 * @param x -
 * @param i -
 */
const U32BE = (x, i) => U16BE(x, i) + U16BE(x, i + 2);
/**
 * Returns hex string of 48bit uint, read in big-endian order from given byte
 * array at index `i`.
 *
 * @param x -
 * @param i -
 */
const U48BE = (x, i) => U16BE(x, i) + U32BE(x, i + 2);
/**
 * Similar to {@link U64}, but takes the 64bit arg as 2x 32bit values.
 *
 * @param hi -
 * @param lo -
 */
const U64HL = (hi, lo) => U32(hi) + U32(lo);
/**
 * Returns UUID formatted string of given byte array from optional start index
 * `i` (default: 0). Array must have min. length 16 (starting from `i`).
 *
 * @param id -
 * @param i -
 */
const uuid = (id, i = 0) => 
// prettier-ignore
`${U32BE(id, i)}-${U16BE(id, i + 4)}-${U16BE(id, i + 6)}-${U16BE(id, i + 8)}-${U48BE(id, i + 10)}`;

export { U8 as U, U16 as a, U24 as b, U32 as c, U64HL as d, uuid as u };
