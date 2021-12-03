const implementsFunction = (x, fn) => x != null && typeof x[fn] === "function";

const isIterable = (x) => x != null && typeof x[Symbol.iterator] === "function";

export { isIterable as a, implementsFunction as i };
