export { d as deref, i as isDeref } from '../common/deref-7136a142.js';
export { F as FLOAT_ARRAY_CTORS, a as GL2TYPE, G as GLType, I as INT_ARRAY_CTORS, S as SIZEOF, T as TYPE2GL, b as TYPEDARRAY_CTORS, U as UINT_ARRAY_CTORS, d as asGLType, e as asInt, c as asNativeType, h as intTypeForBits, i as intTypeForSize, s as sizeOf, t as typedArray, f as typedArrayType, g as uintTypeForBits, u as uintTypeForSize } from '../common/typedarray-b78a5d77.js';
import { E as EVENT_ENABLE, a as EVENT_DISABLE, b as EVENT_ALL } from '../common/api-4427ff26.js';
export { D as DEFAULT_EPS, b as EVENT_ALL, a as EVENT_DISABLE, E as EVENT_ENABLE, N as NO_OP, S as SEMAPHORE } from '../common/api-4427ff26.js';

/**
 * Class behavior mixin based on:
 * {@link http://raganwald.com/2015/06/26/decorators-in-es7.html}
 *
 * Additionally only injects/overwrites properties in target, which are NOT
 * marked with `@nomixin` (i.e. those which haven't set their `configurable`
 * property descriptor flag to `false`)
 *
 * @param behaviour - to mixin
 * @param sharedBehaviour -
 * @returns decorator function
 */
const mixin = (behaviour, sharedBehaviour = {}) => {
    const instanceKeys = Reflect.ownKeys(behaviour);
    const sharedKeys = Reflect.ownKeys(sharedBehaviour);
    const typeTag = Symbol("isa");
    function _mixin(clazz) {
        for (let key of instanceKeys) {
            const existing = Object.getOwnPropertyDescriptor(clazz.prototype, key);
            if (!existing || existing.configurable) {
                Object.defineProperty(clazz.prototype, key, {
                    value: behaviour[key],
                    writable: true,
                });
            }
        }
        Object.defineProperty(clazz.prototype, typeTag, { value: true });
        return clazz;
    }
    for (let key of sharedKeys) {
        Object.defineProperty(_mixin, key, {
            value: sharedBehaviour[key],
            enumerable: sharedBehaviour.propertyIsEnumerable(key),
        });
    }
    Object.defineProperty(_mixin, Symbol.hasInstance, {
        value: (x) => !!x[typeTag],
    });
    return _mixin;
};

/**
 * Property decorator factory. Sets `configurable` flag of PropertyDescriptor
 * to given state.
 *
 * @param state - true, if propoerty is configurable
 */
const configurable = (state) => function (_, __, descriptor) {
    descriptor.configurable = state;
};

/**
 * Method property decorator factory. Augments original method with
 * deprecation message (via console), shown when method is invoked.
 * Accepts optional message arg. Throws error if assigned property
 * is not a function.
 *
 * @param msg - deprecation message
 */
const deprecated = (msg, log = console.log) => function (target, prop, descriptor) {
    const signature = `${target.constructor.name}#${prop.toString()}`;
    const fn = descriptor.value;
    if (typeof fn !== "function") {
        throw new Error(`${signature} is not a function`);
    }
    descriptor.value = function () {
        log(`DEPRECATED ${signature}: ${msg || "will be removed soon"}`);
        return fn.apply(this, arguments);
    };
    return descriptor;
};

/**
 * Method property decorator. Sets `configurable` flag of
 * PropertyDescriptor to `false` (same as `@configurable(false)`).
 * Intended to be used in combination with mixin decorators to enable
 * partial implementations of mixed-in behaviors in target class and
 * avoid them being overidden by mixed-in behaviour.
 */
const nomixin = (_, __, descriptor) => {
    descriptor.configurable = false;
};

/**
 * Class decorator. Seals both constructor and prototype.
 *
 * @param constructor - class ctor to seal
 */
const sealed = (constructor) => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};

/**
 * Mixin class decorator, injects IEnable default implementation, incl.
 * a `_enabled` property. If the target also implements the
 * {@link @thi.ng/api#INotify} interface, {@link IEnable.enable} and
 * {@link IEnable.disable} will automatically emit the respective
 * events.
 */
const IEnableMixin = mixin({
    _enabled: true,
    isEnabled() {
        return this._enabled;
    },
    enable() {
        $enable(this, true, EVENT_ENABLE);
    },
    disable() {
        $enable(this, false, EVENT_DISABLE);
    },
    toggle() {
        this._enabled ? this.disable() : this.enable();
        return this._enabled;
    },
});
const $enable = (target, state, id) => {
    target._enabled = state;
    if (target.notify) {
        target.notify({ id, target });
    }
};

/**
 * Default implementation for {@link IGrid1D} methods.
 */
const IGrid1DMixin = mixin({
    order() {
        return [0];
    },
    includes(x) {
        return x >= 0 && x < this.size[0];
    },
    indexAt(x) {
        return this.includes(x) ? this.indexAtUnsafe(x) : -1;
    },
    indexAtUnsafe(x) {
        return this.offset + (x | 0) * this.stride[0];
    },
    getAt(x) {
        return this.includes(x) ? this.data[this.indexAtUnsafe(x)] : 0;
    },
    getAtUnsafe(x) {
        return this.data[this.indexAtUnsafe(x)];
    },
    setAt(x, val) {
        return this.includes(x)
            ? ((this.data[this.indexAtUnsafe(x)] = val), true)
            : false;
    },
    setAtUnsafe(x, val) {
        this.data[this.indexAtUnsafe(x)] = val;
        return true;
    },
});
/**
 * Default implementation for {@link IGrid2D} methods.
 */
const IGrid2DMixin = mixin({
    order() {
        return Math.abs(this.stride[1]) > Math.abs(this.stride[0])
            ? [1, 0]
            : [0, 1];
    },
    includes(x, y) {
        const size = this.size;
        return x >= 0 && x < size[0] && y >= 0 && y < size[1];
    },
    indexAt(x, y) {
        return this.includes(x, y) ? this.indexAtUnsafe(x, y) : -1;
    },
    indexAtUnsafe(x, y) {
        return (this.offset + (x | 0) * this.stride[0] + (y | 0) * this.stride[1]);
    },
    getAt(x, y) {
        return this.includes(x, y) ? this.data[this.indexAtUnsafe(x, y)] : 0;
    },
    getAtUnsafe(x, y) {
        return this.data[this.indexAtUnsafe(x, y)];
    },
    setAt(x, y, val) {
        return this.includes(x, y)
            ? ((this.data[this.indexAtUnsafe(x, y)] = val), true)
            : false;
    },
    setAtUnsafe(x, y, val) {
        this.data[this.indexAtUnsafe(x, y)] = val;
        return true;
    },
});
/**
 * Default implementation for {@link IGrid3D} methods.
 */
const IGrid3DMixin = mixin({
    order() {
        return strideOrder(this.stride);
    },
    includes(x, y, z) {
        const size = this.size;
        return (x >= 0 &&
            x < size[0] &&
            y >= 0 &&
            y < size[1] &&
            z >= 0 &&
            z < size[2]);
    },
    indexAt(x, y, z) {
        return this.includes(x, y, z) ? this.indexAtUnsafe(x, y, z) : -1;
    },
    indexAtUnsafe(x, y, z) {
        const stride = this.stride;
        return (this.offset +
            (x | 0) * stride[0] +
            (y | 0) * stride[1] +
            (z | 0) * stride[2]);
    },
    getAt(x, y, z) {
        return this.includes(x, y, z)
            ? this.data[this.indexAtUnsafe(x, y, z)]
            : 0;
    },
    getAtUnsafe(x, y, z) {
        return this.data[this.indexAtUnsafe(x, y, z)];
    },
    setAt(x, y, z, val) {
        return this.includes(x, y, z)
            ? ((this.data[this.indexAtUnsafe(x, y, z)] = val), true)
            : false;
    },
    setAtUnsafe(x, y, z, val) {
        this.data[this.indexAtUnsafe(x, y, z)] = val;
        return true;
    },
});
/**
 * Default implementation for {@link IGrid4D} methods.
 */
const IGrid4DMixin = mixin({
    order() {
        return strideOrder(this.stride);
    },
    includes(x, y, z, w) {
        const size = this.size;
        return (x >= 0 &&
            x < size[0] &&
            y >= 0 &&
            y < size[1] &&
            z >= 0 &&
            z < size[2] &&
            w >= 0 &&
            w < size[3]);
    },
    indexAt(x, y, z, w) {
        return this.includes(x, y, z, w) ? this.indexAtUnsafe(x, y, z, w) : -1;
    },
    indexAtUnsafe(x, y, z, w) {
        const stride = this.stride;
        return (this.offset +
            (x | 0) * stride[0] +
            (y | 0) * stride[1] +
            (z | 0) * stride[2] +
            (w | 0) * stride[3]);
    },
    getAt(x, y, z, w) {
        return this.includes(x, y, z, w)
            ? this.data[this.indexAtUnsafe(x, y, z, w)]
            : 0;
    },
    getAtUnsafe(x, y, z, w) {
        return this.data[this.indexAtUnsafe(x, y, z, w)];
    },
    setAt(x, y, z, w, val) {
        return this.includes(x, y, z, w)
            ? ((this.data[this.indexAtUnsafe(x, y, z, w)] = val), true)
            : false;
    },
    setAtUnsafe(x, y, z, w, val) {
        this.data[this.indexAtUnsafe(x, y, z, w)] = val;
        return true;
    },
});
const strideOrder = (strides) => [...strides]
    .map((x, i) => [x, i])
    .sort((a, b) => Math.abs(b[0]) - Math.abs(a[0]))
    .map((x) => x[1]);

const inotify_dispatch = (listeners, e) => {
    if (!listeners)
        return;
    for (let i = 0, n = listeners.length, l; i < n; i++) {
        l = listeners[i];
        l[0].call(l[1], e);
        if (e.canceled) {
            return;
        }
    }
};
/**
 * Mixin class decorator, injects INotify default implementation, incl.
 * a lazily instantiated `_listeners` property object, storing
 * registered listeners.
 */
const INotifyMixin = mixin({
    addListener(id, fn, scope) {
        let l = (this._listeners = this._listeners || {})[id];
        !l && (l = this._listeners[id] = []);
        if (this.__listener(l, fn, scope) === -1) {
            l.push([fn, scope]);
            return true;
        }
        return false;
    },
    removeListener(id, fn, scope) {
        let listeners;
        if (!(listeners = this._listeners))
            return false;
        const l = listeners[id];
        if (l) {
            const idx = this.__listener(l, fn, scope);
            if (idx !== -1) {
                l.splice(idx, 1);
                !l.length && delete listeners[id];
                return true;
            }
        }
        return false;
    },
    notify(e) {
        let listeners;
        if (!(listeners = this._listeners))
            return false;
        e.target === undefined && (e.target = this);
        inotify_dispatch(listeners[e.id], e);
        inotify_dispatch(listeners[EVENT_ALL], e);
    },
    __listener(listeners, f, scope) {
        let i = listeners.length;
        while (i-- > 0) {
            const l = listeners[i];
            if (l[0] === f && l[1] === scope) {
                break;
            }
        }
        return i;
    },
});

const iterable = (prop) => mixin({
    *[Symbol.iterator]() {
        yield* this[prop];
    },
});

const IWatchMixin = mixin({
    addWatch(id, fn) {
        this._watches = this._watches || {};
        if (this._watches[id]) {
            return false;
        }
        this._watches[id] = fn;
        return true;
    },
    removeWatch(id) {
        if (!this._watches)
            return;
        if (this._watches[id]) {
            delete this._watches[id];
            return true;
        }
        return false;
    },
    notifyWatches(oldState, newState) {
        if (!this._watches)
            return;
        const w = this._watches;
        for (let id in w) {
            w[id](id, oldState, newState);
        }
    },
});

export { IEnableMixin, IGrid1DMixin, IGrid2DMixin, IGrid3DMixin, IGrid4DMixin, INotifyMixin, IWatchMixin, configurable, deprecated, inotify_dispatch, iterable, mixin, nomixin, sealed };
