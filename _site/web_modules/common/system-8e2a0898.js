const INV_MAX = 1 / (2 ** 32);
class ARandom {
    float(norm = 1) {
        return this.int() * INV_MAX * norm;
    }
    norm(norm = 1) {
        return (this.int() * INV_MAX - 0.5) * 2 * norm;
    }
    minmax(min, max) {
        return this.float() * (max - min) + min;
    }
}

const random = Math.random;
/**
 * A `Math.random()` based {@link IRandom} implementation. Also @see
 * {@link SYSTEM}.
 */
class SystemRandom extends ARandom {
    int() {
        return (random() * 4294967296) /* 2**32 */ >>> 0;
    }
    float(norm = 1) {
        return random() * norm;
    }
    norm(norm = 1) {
        return (random() - 0.5) * 2 * norm;
    }
}
/**
 * Used as default PRNG throughout most other thi.ng projects, though usually is
 * configurable.
 */
const SYSTEM = new SystemRandom();

export { ARandom as A, SYSTEM as S, SystemRandom as a };
