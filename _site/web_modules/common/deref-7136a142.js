/**
 * Returns true iff `x` implements {@link IDeref}.
 *
 * @param x
 */
const isDeref = (x) => x != null && typeof x["deref"] === "function";
/**
 * If `x` implements {@link IDeref}, returns its wrapped value, else
 * returns `x` itself.
 *
 * @param x -
 */
const deref = (x) => (isDeref(x) ? x.deref() : x);

export { deref as d, isDeref as i };
