const isString = (x) => typeof x === "string";

const isNotStringAndIterable = (x) => x != null &&
    typeof x !== "string" &&
    typeof x[Symbol.iterator] === "function";

export { isNotStringAndIterable as a, isString as i };
