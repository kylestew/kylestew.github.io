import { S as SYSTEM, A as ARandom } from '../common/system-8e2a0898.js';
export { A as ARandom, S as SYSTEM, a as SystemRandom } from '../common/system-8e2a0898.js';
import { h as hasCrypto } from '../common/has-crypto-86fd03f1.js';
export { n as normal } from '../common/normal-dfbd2421.js';
import { a as assert } from '../common/assert-dcb272c2.js';
import { u as uuid$1 } from '../common/index-1bd2c425.js';
export { w as weightedRandom } from '../common/weighted-random-0faee244.js';
import '../common/_node-resolve:empty-5550de3c.js';
import '../common/deferror-480a42fb.js';

/**
 * Returns true w/ a (theoretical) probability of 50% (obviously depending on
 * quality of given {@link IRandom}) PRNG.
 *
 * @remarks
 * Also see {@link fairCoin}.
 *
 * @param rnd
 */
const coin = (rnd = SYSTEM) => rnd.float() < 0.5;
/**
 * Similar to {@link coin}, but more strict. Calls {@link coin} in a pairwise
 * manner as long as both results are equal (and discarding results). Otherwise
 * returns result of first call.
 *
 * @remarks
 * Reference:
 * https://en.m.wikipedia.org/wiki/Fair_coin#Fair_results_from_a_biased_coin
 *
 * @param rnd
 */
const fairCoin = (rnd = SYSTEM) => {
    let a, b;
    do {
        a = coin(rnd);
        b = coin(rnd);
    } while (a === b);
    return a;
};

/**
 * Fills given byte array with random values sourced from given {@link IRandom}
 * instance.
 *
 * @param rnd -
 * @param buf -
 * @param start -
 * @param end -
 */
const randomBytesFrom = (rnd, buf, start = 0, end = buf.length) => {
    for (let i = end; --i >= start;) {
        buf[i] = rnd.int() & 0xff;
    }
    return buf;
};
/**
 * Fills given byte array with random values. Wrapper for
 * `crypto.getRandomValues()` with automatic fallback to using `Math.random` if
 * platform doesn't provide global crypto instance.
 *
 * @param buf -
 * @param start -
 * @param end -
 */
const randomBytes = hasCrypto()
    ? (buf, start = 0, end = buf.length) => (window.crypto.getRandomValues(buf.subarray(start, end)), buf)
    : (buf, start, end) => randomBytesFrom(SYSTEM, buf, start, end);

/**
 * Currently browser only, a `window.crypto` backed {@link IRandom}
 * implementation. Random values are buffered to minimize overhead. Buffer size
 * is configurable via ctor.
 *
 * @remarks
 * Internally uses {@link randomBytes} to source values, which falls back to
 * using {@link SYSTEM} iff `window.crypto` is not available.
 *
 */
class Crypto extends ARandom {
    /**
     * @param size - buffer size in bytes (will be rounded to next multiple of 4)
     */
    constructor(size = 64) {
        super();
        this.buffer = new Uint8Array((size + 3) & ~3);
        this.u32 = new Uint32Array(this.buffer.buffer);
        this.i = size >>> 2;
    }
    copy() {
        return new Crypto(this.buffer.length);
    }
    bytes() {
        return new Uint8Array(this.buffer.buffer);
    }
    int() {
        if (this.i >= this.u32.length) {
            randomBytes(this.buffer);
            this.i = 0;
        }
        return this.u32[this.i++];
    }
}
/**
 * Default instance for {@link Crypto} PRNG.
 */
const CRYPTO = new Crypto();

/**
 * Higher order function. Returns no-arg function, yielding values in
 * exponential distribution based on given rate `lambda`.
 *
 * @remarks
 * https://en.wikipedia.org/wiki/Exponential_distribution
 *
 * @param rnd
 * @param lambda - event interval [0,Inf)
 */
const exponential = (rnd = SYSTEM, lambda = 10) => lambda === 0 ? () => Infinity : () => -Math.log(1 - rnd.float(1)) / lambda;

/**
 * Higher order function. Takes a {@link IRandom} instance and returns a no-arg
 * function which produces values with approx. normal distribution using CLT
 * (Central Limit Theorem).
 *
 * @remarks
 * The default configuration produces samples in the approx. [-0.5,0.5] range
 * with a ~12% standard deviation.
 *
 * Reference: {@link https://en.wikipedia.org/wiki/Central_limit_theorem}
 *
 * @param rnd - default `SYSTEM`
 * @param n - num samples, default 24
 * @param offset - center offset / bias, default 0
 * @param scale - scale, default 1
 */
const gaussian = (rnd = SYSTEM, n = 24, offset = 0, scale = 1) => () => {
    let sum = 0;
    let m = n;
    while (m-- > 0)
        sum += rnd.norm(scale);
    return sum / n + offset;
};

/**
 * HOF. Returns zero-arg function, yielding values in geometric distribution,
 * aka the number of independent trials required for the first occurrence of
 * success, and each trial using the given success probability `p`.
 *
 * @remarks
 * Returns 0 for p <= 0 and 1 for p >= 1.
 *
 * Reference: https://en.wikipedia.org/wiki/Geometric_distribution
 *
 * @param rnd
 * @param p - probability (0,1]
 */
const geometric = (rnd = SYSTEM, p = 0.5) => p <= 0
    ? () => Infinity
    : p >= 1
        ? () => 1
        : ((p = Math.log(1 - p)),
            () => Math.floor(Math.log(1 - rnd.float(1)) / p) + 1);

/**
 * HOF. Returns zero-arg function, yielding uniformly distributed values in the
 * `[min,max)` interval (default: `[0,1)`).
 *
 * @remarks
 * This function is syntax sugar for `rnd.minmax()`.
 *
 * @param rnd
 * @param min
 * @param max
 */
const uniform = (rnd = SYSTEM, min = 0, max = 1) => () => rnd.minmax(min, max);

/**
 * Returns a random element from `src` using given {@link IRandom} instance
 * (default: {@link SYSTEM}). The index selection will be constrained to the
 * `[start,end)` interval (default: entire array).
 *
 * @param src
 * @param rnd
 * @param start
 * @param end
 */
const pickRandom = (src, rnd = SYSTEM, start = 0, end = src.length) => src[rnd.minmax(start, end) | 0];

/**
 * Generates and returns a random string of `len` characters (default 4), plus
 * optional given `prefix` and using only provided `syms` characters (default
 * lowercase a-z).
 *
 * @remarks
 * See {@link @thi.ng/ksuid#} for a more advanced and collision-free approach.
 *
 * @example
 * ```ts
 * randomID()
 * "qgdt"
 *
 * randomID(8, "id-", "0123456789ABCDEF")
 * "id-94EF6E1A"
 * ```
 *
 * @param len -
 * @param prefix -
 * @param syms -
 * @param rnd -
 */
const randomID = (len = 4, prefix = "", syms = "abcdefghijklmnopqrstuvwxyz", rnd = SYSTEM) => {
    const n = syms.length;
    for (; len-- > 0;) {
        prefix += syms[rnd.int() % n];
    }
    return prefix;
};

const DEFAULT_SEED_32 = 0xdecafbad;
const DEFAULT_SEED_128 = [
    0xdecafbad,
    0x2fa9d75b,
    0xe41f67e3,
    0x5c83ec1a,
];
const DEFAULT_SEED_160 = [...DEFAULT_SEED_128, 0xf69a5c71];

/**
 * @remarks
 * References:
 * -
 * - https://github.com/thi-ng/ct-head/blob/master/random.h
 * - https://gist.github.com/voidqk/d112165a26b45244a65298933c0349a4
 */
class Smush32 extends ARandom {
    constructor(seed = DEFAULT_SEED_32) {
        super();
        this.buffer = new Uint32Array([seed, 0]);
    }
    copy() {
        const gen = new Smush32();
        gen.buffer.set(this.buffer);
        return gen;
    }
    seed(s) {
        this.buffer.set([s, 0]);
        return this;
    }
    int() {
        const b = this.buffer;
        const m = 0x5bd1e995;
        const k = (b[1]++ * m) >>> 0;
        const s = (b[0] = ((k ^ (k >> 24) ^ ((b[0] * m) >>> 0)) * m) >>> 0);
        return (s ^ (s >>> 13)) >>> 0;
    }
}

/**
 * Attempts to draw `k` unique values from given zero-arg function `fn`
 * (presumably a PRNG of sorts) and adds them to `existing` array of unique
 * samples (or creates a new one). Returns the array. Gives up after
 * `maxTrials`.
 *
 * @param k
 * @param fn
 * @param existing
 * @param maxTrials
 */
const uniqueValuesFrom = (k, fn, existing = [], maxTrials = 100) => {
    let n = 0;
    while (n < k) {
        let i;
        let trials = maxTrials;
        do {
            i = fn();
        } while (existing.includes(i) && --trials > 0);
        if (trials <= 0)
            break;
        existing.push(i);
        n++;
    }
    return existing;
};
/**
 * Similar to (and based o) {@link uniqueValuesFrom}. Attempts to add `k` unique
 * integer indices in the `[0, max)` interval to the (optional) array of
 * pre-`existing` indices (which will never be picked again and new indices will
 * be added to). Returns updated array.
 *
 * @remarks
 * Candidates are drawn from the provided `rnd` {@link IRandom} (default:
 * {@link SYSTEM}) and only `maxTrials` are attempted before giving up.
 *
 * @param k
 * @param max
 * @param existing
 * @param maxTrials
 * @param rnd
 */
const uniqueIndices = (k, max, existing, maxTrials = max, rnd = SYSTEM) => {
    assert(k >= 0 && k <= max, `k must be in [0, ${max}] interval`);
    return uniqueValuesFrom(k, () => rnd.int() % max, existing, maxTrials);
};

/**
 * Depending on if `rnd` is given, uses {@link randomBytesFrom} or
 * {@link randomBytes} to fill given (optional) byte array with a new UUIDv4.
 * Creates new Uint8Array if none given.
 *
 * @param buf -
 * @param rnd -
 */
const uuidv4Bytes = (buf, rnd) => {
    buf = buf || new Uint8Array(16);
    buf = rnd ? randomBytesFrom(rnd, buf) : randomBytes(buf);
    buf[6] = 0x40 | (buf[6] & 0x0f);
    buf[8] = 0x80 | (buf[8] & 0x3f);
    return buf;
};
/**
 * Returns a UUID string, either from given byte array, or if omitted, using a
 * new UUID v4 produced by {@link uuidv4Bytes}.
 *
 * @param id - byte array
 * @param i - start index
 */
const uuid = (id, i = 0) => uuid$1(id || uuidv4Bytes(), i);

/**
 * @remarks
 * Reference: https://en.wikipedia.org/wiki/Xorshift
 */
class XorShift128 extends ARandom {
    constructor(seed = DEFAULT_SEED_128) {
        super();
        this.buffer = new Uint32Array(4);
        this.seed(seed);
    }
    copy() {
        return new XorShift128(this.buffer);
    }
    bytes() {
        return new Uint8Array(this.buffer.buffer);
    }
    seed(seed) {
        this.buffer.set(seed);
        return this;
    }
    int() {
        const s = this.buffer;
        let t = s[3];
        let w;
        t ^= t << 11;
        t ^= t >>> 8;
        s[3] = s[2];
        s[2] = s[1];
        w = s[1] = s[0];
        return (s[0] = (t ^ w ^ (w >>> 19)) >>> 0);
    }
}

/**
 * @remarks
 * Reference: https://en.wikipedia.org/wiki/Xorshift#xorwow
 */
class XorWow extends ARandom {
    constructor(seed = DEFAULT_SEED_160) {
        super();
        this.buffer = new Uint32Array(5);
        this.seed(seed);
    }
    copy() {
        return new XorWow(this.buffer);
    }
    seed(seed) {
        this.buffer.set(seed);
        return this;
    }
    bytes() {
        return new Uint8Array(this.buffer.buffer);
    }
    int() {
        const s = this.buffer;
        let t = s[3];
        let w;
        t ^= t >>> 2;
        t ^= t << 1;
        s[3] = s[2];
        s[2] = s[1];
        w = s[1] = s[0];
        t ^= w;
        t ^= w << 4;
        s[0] = t;
        return (t + (s[4] += 0x587c5)) >>> 0;
    }
}

/**
 * @remarks
 * References:
 * - http://prng.di.unimi.it/
 * - http://prng.di.unimi.it/xoshiro128plusplus.c
 */
class Xoshiro128 extends ARandom {
    constructor(seed = DEFAULT_SEED_128) {
        super();
        this.buffer = new Uint32Array(4);
        this.seed(seed);
    }
    copy() {
        return new Xoshiro128(this.buffer);
    }
    bytes() {
        return new Uint8Array(this.buffer.buffer);
    }
    seed(seed) {
        this.buffer.set(seed);
        return this;
    }
    int() {
        const s = this.buffer;
        let t = s[0] + s[3];
        const res = ((t << 7) | (t >>> 25)) >>> 0;
        t = s[1] << 9;
        s[2] ^= s[0];
        s[3] ^= s[1];
        s[1] ^= s[2];
        s[0] ^= s[3];
        s[2] ^= t;
        t = s[3];
        s[3] = ((t << 11) | (t >>> 21)) >>> 0;
        return res;
    }
}

/**
 * @remarks
 * Reference: https://github.com/MersenneTwister-Lab/XSadd/blob/develop/xsadd.h
 */
class XsAdd extends ARandom {
    constructor(seed = DEFAULT_SEED_32) {
        super();
        this.buffer = new Uint32Array(4);
        this.seed(seed);
    }
    bytes() {
        return new Uint8Array(this.buffer.buffer);
    }
    copy() {
        const gen = new XsAdd();
        gen.buffer.set(this.buffer);
        return gen;
    }
    seed(seed) {
        const s = this.buffer;
        s.set([seed, 0, 0, 0]);
        for (let j = 0, i = 1; i < 8; j = i++) {
            let x = (s[j & 3] ^ (s[j & 3] >>> 30)) >>> 0;
            x = (0x8965 * x + (((0x6c07 * x) & 0xffff) << 16)) >>> 0;
            s[i & 3] ^= (i + x) >>> 0;
        }
        return this;
    }
    int() {
        const s = this.buffer;
        let t = s[0];
        t ^= t << 15;
        t ^= t >>> 18;
        t ^= s[3] << 11;
        s[0] = s[1];
        s[1] = s[2];
        s[2] = s[3];
        s[3] = t;
        return (t + s[2]) >>> 0;
    }
}

export { CRYPTO, Crypto, Smush32, XorShift128, XorWow, Xoshiro128, XsAdd, coin, exponential, fairCoin, gaussian, geometric, pickRandom, randomBytes, randomBytesFrom, randomID, uniform, uniqueIndices, uniqueValuesFrom, uuid, uuidv4Bytes };
