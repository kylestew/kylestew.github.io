/**
 * WebGL numeric type constants. Use {@link GL2TYPE} to convert, if needed.
 *
 * {@link Type}
 * {@link GL2TYPE}
 * {@link TYPE2GL}
 */
var GLType;
(function (GLType) {
    GLType[GLType["I8"] = 5120] = "I8";
    GLType[GLType["U8"] = 5121] = "U8";
    GLType[GLType["I16"] = 5122] = "I16";
    GLType[GLType["U16"] = 5123] = "U16";
    GLType[GLType["I32"] = 5124] = "I32";
    GLType[GLType["U32"] = 5125] = "U32";
    GLType[GLType["F32"] = 5126] = "F32";
})(GLType || (GLType = {}));
/**
 * Conversion from {@link GLType} to {@link Type} enums.
 */
const GL2TYPE = {
    [GLType.I8]: "i8",
    [GLType.U8]: "u8",
    [GLType.I16]: "i16",
    [GLType.U16]: "u16",
    [GLType.I32]: "i32",
    [GLType.U32]: "u32",
    [GLType.F32]: "f32",
};
/**
 * Potentially lossy conversion from {@link Type} to {@link GLType} enums.
 *
 * Not all enums are mappable:
 *
 * - `F64` maps to `undefined`, since unsupported by WebGL
 * - `U8C` maps to "u8"
 */
const TYPE2GL = {
    i8: GLType.I8,
    u8: GLType.U8,
    u8c: GLType.U8,
    i16: GLType.I16,
    u16: GLType.U16,
    i32: GLType.I32,
    u32: GLType.U32,
    f32: GLType.F32,
    f64: undefined,
};
/**
 * Size information (in bytes) for {@link Type}. Also see {@link sizeOf}.
 */
const SIZEOF = {
    u8: 1,
    u8c: 1,
    i8: 1,
    u16: 2,
    i16: 2,
    u32: 4,
    i32: 4,
    f32: 4,
    f64: 8,
};
const FLOAT_ARRAY_CTORS = {
    f32: Float32Array,
    f64: Float64Array,
};
const INT_ARRAY_CTORS = {
    i8: Int8Array,
    i16: Int16Array,
    i32: Int32Array,
};
const UINT_ARRAY_CTORS = {
    u8: Uint8Array,
    u8c: Uint8ClampedArray,
    u16: Uint16Array,
    u32: Uint32Array,
};
const TYPEDARRAY_CTORS = {
    ...FLOAT_ARRAY_CTORS,
    ...INT_ARRAY_CTORS,
    ...UINT_ARRAY_CTORS,
};
/**
 * Returns canonical {@link Type} value of `type` by first
 * attempting to resolve it as {@link GLType} enum.
 *
 * @example
 * ```ts
 * asNativeType(GLType.F32) => "f32"
 * asNativeType("f32") => "f32"
 * ```
 *
 * @param type -
 */
const asNativeType = (type) => {
    const t = GL2TYPE[type];
    return t !== undefined ? t : type;
};
/**
 * Returns suitable {@link GLType} enum of `type`.
 *
 * @example
 * ```ts
 * asGLType("f32") => GLType.F32
 * asGLType(GLType.F32) => GLType.F32
 * ```
 *
 * @param type -
 */
const asGLType = (type) => {
    const t = TYPE2GL[type];
    return t !== undefined ? t : type;
};
/**
 * Coerces given numeric args to integer values.
 */
const asInt = (...args) => args.map((x) => x | 0);
/**
 * Returns byte size for given {@link Type} ID or {@link GLType} enum.
 *
 * @param type
 */
const sizeOf = (type) => SIZEOF[asNativeType(type)];
function typedArray(type, ...xs) {
    return new TYPEDARRAY_CTORS[asNativeType(type)](...xs);
}
/**
 * Takes an {@link NumericArray} and returns its corresponding {@link Type} ID.
 * Standard JS arrays will default to {@link "f64"}.
 *
 * @param x
 */
const typedArrayType = (x) => {
    if (Array.isArray(x))
        return "f64";
    for (let id in TYPEDARRAY_CTORS) {
        if (x instanceof TYPEDARRAY_CTORS[id])
            return id;
    }
    return "f64";
};
/**
 * Returns the smallest possible *unsigned* int type enum for given `x`.
 * E.g. if `x <= 256`, the function returns `"u8"`.
 *
 * @param x - value to classify
 */
const uintTypeForSize = (x) => x <= 0x100 ? "u8" : x <= 0x10000 ? "u16" : "u32";
/**
 * Returns the smallest possible *signed* int type enum for given `x`.
 * E.g. if `x >= -128 && x < 128`, the function returns `"i8"`.
 *
 * @param x - value to classify
 */
const intTypeForSize = (x) => x >= -0x80 && x < 0x80 ? "i8" : x >= -0x8000 && x < 0x8000 ? "i16" : "i32";
/**
 * Returns suitable {@link UintType} for given bit size (`[0,32]` range)
 *
 * @param x
 */
const uintTypeForBits = (x) => x > 16 ? "u32" : x > 8 ? "u16" : "u8";
/**
 * Returns suitable {@link IntType} for given bit size (`[0,32]` range)
 *
 * @param x
 */
const intTypeForBits = (x) => x > 16 ? "i32" : x > 8 ? "i16" : "i8";

export { FLOAT_ARRAY_CTORS as F, GLType as G, INT_ARRAY_CTORS as I, SIZEOF as S, TYPE2GL as T, UINT_ARRAY_CTORS as U, GL2TYPE as a, TYPEDARRAY_CTORS as b, asNativeType as c, asGLType as d, asInt as e, typedArrayType as f, uintTypeForBits as g, intTypeForBits as h, intTypeForSize as i, sizeOf as s, typedArray as t, uintTypeForSize as u };
