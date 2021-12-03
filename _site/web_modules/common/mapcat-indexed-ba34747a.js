import { c as cat } from './wrap-sides-cdd50232.js';
import { _ as __iter, a as iterator, c as comp, g as mapIndexed } from './zip-907b97a6.js';

function mapcatIndexed(...args) {
    return (__iter(mapcatIndexed, args, iterator) ||
        comp(mapIndexed(args[0], args[1]), cat()));
}

export { mapcatIndexed as m };
