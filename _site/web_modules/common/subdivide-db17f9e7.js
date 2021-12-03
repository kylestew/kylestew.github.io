import { t as transduce, p as push, c as comp } from './zip-907b97a6.js';
import { m as mapcatIndexed } from './mapcat-indexed-ba34747a.js';
import { p as partition } from './wrap-sides-cdd50232.js';

/**
 * {@link http://algorithmicbotany.org/papers/subgpu.sig2003.pdf}
 *
 * @param kernel - subdivision scheme
 * @param pts - source points
 * @param iter - number of iterations
 */
const subdivide = (pts, { fn, pre, size }, iter = 1) => {
    while (iter-- > 0) {
        const nump = pts.length;
        pts = transduce(comp(partition(size, 1), mapcatIndexed((i, pts) => fn(pts, i, nump))), push(), pre ? pre(pts) : pts);
    }
    return pts;
};

export { subdivide as s };
