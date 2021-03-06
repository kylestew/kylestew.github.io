import { u as unsupported } from './unsupported-bfdbf30c.js';

var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["FINE"] = 0] = "FINE";
    LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["SEVERE"] = 4] = "SEVERE";
    LogLevel[LogLevel["NONE"] = 5] = "NONE";
})(LogLevel || (LogLevel = {}));

/**
 * No-op {@link ILogger} implementation, used as default logger for most
 * packages (where used).
 */
const NULL_LOGGER = Object.freeze({
    level: LogLevel.NONE,
    fine() { },
    debug() { },
    info() { },
    warn() { },
    severe() { },
});

let LOGGER = NULL_LOGGER;
const setLogger = (logger) => (LOGGER = logger);

/**
 * Unique symbol used for registering a default / fallback
 * implementation.
 */
const DEFAULT = Symbol();
function defmulti(f, _rels, _impls) {
    const impls = {};
    const rels = _rels ? makeRels(_rels) : {};
    const fn = (...args) => {
        const id = f(...args);
        const g = impls[id] || findImpl(impls, rels, id) || impls[DEFAULT];
        return g
            ? g(...args)
            : unsupported(`missing implementation for: "${id.toString()}"`);
    };
    fn.add = (id, _impl) => {
        if (impls[id]) {
            LOGGER.warn(`overwriting '${id.toString()}' impl`);
        }
        impls[id] = _impl;
        return true;
    };
    fn.addAll = (_impls) => {
        let ok = true;
        for (let id in _impls) {
            ok = fn.add(id, _impls[id]) && ok;
        }
        DEFAULT in _impls && fn.setDefault(_impls[DEFAULT]);
        return ok;
    };
    fn.setDefault = (impl) => fn.add(DEFAULT, impl);
    fn.remove = (id) => {
        if (!impls[id])
            return false;
        delete impls[id];
        return true;
    };
    fn.callable = (...args) => {
        const id = f(...args);
        return !!(impls[id] ||
            findImpl(impls, rels, id) ||
            impls[DEFAULT]);
    };
    fn.isa = (id, parent) => {
        let val = rels[id];
        !val && (rels[id] = val = new Set());
        val.add(parent);
    };
    fn.impls = () => {
        const res = new Set(Object.keys(impls));
        for (let id in rels) {
            findImpl(impls, rels, id) && res.add(id);
        }
        impls[DEFAULT] && res.add(DEFAULT);
        return res;
    };
    fn.rels = () => rels;
    fn.parents = (id) => rels[id];
    fn.ancestors = (id) => new Set(findAncestors([], rels, id));
    fn.dependencies = function* () {
        for (let a in rels) {
            for (let b of rels[a])
                yield [a, b];
        }
        for (let id in impls) {
            !rels[id] && (yield [id, undefined]);
        }
    };
    _impls && fn.addAll(_impls);
    return fn;
}
const findImpl = (impls, rels, id) => {
    const parents = rels[id];
    if (!parents)
        return;
    for (let p of parents) {
        let impl = impls[p] || findImpl(impls, rels, p);
        if (impl)
            return impl;
    }
};
const findAncestors = (acc, rels, id) => {
    const parents = rels[id];
    if (parents) {
        for (let p of parents) {
            acc.push(p);
            findAncestors(acc, rels, p);
        }
    }
    return acc;
};
const makeRels = (spec) => {
    const rels = {};
    for (let k in spec) {
        const val = spec[k];
        rels[k] =
            val instanceof Set
                ? val
                : Array.isArray(val)
                    ? new Set(val)
                    : new Set([val]);
    }
    return rels;
};

export { DEFAULT as D, LOGGER as L, defmulti as d, setLogger as s };
