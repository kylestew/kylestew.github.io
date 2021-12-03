import { d as defmulti, D as DEFAULT } from '../common/defmulti-ecad7cb9.js';
export { D as DEFAULT, L as LOGGER, d as defmulti, s as setLogger } from '../common/defmulti-ecad7cb9.js';
import { i as illegalArity } from '../common/illegal-arity-0f06cc40.js';
import { i as illegalArgs } from '../common/illegal-arguments-2af523c3.js';
import '../common/unsupported-bfdbf30c.js';
import '../common/deferror-480a42fb.js';

/**
 * Returns a multi-dispatch function which delegates to one of the
 * provided implementations, based on the arity (number of args) when
 * the function is called.
 *
 * @remarks
 * Internally uses {@link (defmulti:1)}, so new arities can be dynamically
 * added (or removed) at a later time. If no `fallback` is provided,
 * `defmultiN` also registers a {@link DEFAULT} implementation which
 * simply throws an {@link @thi.ng/errors#IllegalArityError} when
 * invoked.
 *
 * **Note:** Unlike {@link (defmulti:1)} no argument type checking is
 * supported, however you can specify the return type for the generated
 * function.
 *
 * @example
 * ```ts
 * const foo = defmultiN<string>({
 *   0: () => "zero",
 *   1: (x) => `one: ${x}`,
 *   3: (x, y, z) => `three: ${x}, ${y}, ${z}`
 * });
 *
 * foo();
 * // zero
 * foo(23);
 * // one: 23
 * foo(1, 2, 3);
 * // three: 1, 2, 3
 * foo(1, 2);
 * // Error: illegal arity: 2
 *
 * foo.add(2, (x, y) => `two: ${x}, ${y}`);
 * foo(1, 2);
 * // two: 1, 2
 * ```
 *
 * @param impls - implementations
 * @param fallback - fallback implementation
 */
const defmultiN = (impls, fallback) => {
    const fn = defmulti((...args) => args.length);
    fn.add(DEFAULT, fallback || ((...args) => illegalArity(args.length)));
    for (let id in impls) {
        fn.add(id, impls[id]);
    }
    return fn;
};

/**
 * Syntax-sugar intended for sets of multi-methods sharing same dispatch
 * values / logic. Takes a dispatch value, an object of "is-a"
 * relationships and a number of multi-methods, each with an
 * implementation for the given dispatch value.
 *
 * @remarks
 * The relations object has dispatch values (parents) as keys and arrays
 * of multi-methods as their values. For each multi-method associates
 * the given `type` with the related parent dispatch value to delegate
 * to its implementation.
 *
 * The remaining implementations are associated with their related
 * multi-method and the given `type` dispatch value.
 *
 * @example
 * ```ts
 * foo = defmulti((x) => x.id);
 * bar = defmulti((x) => x.id);
 * bax = defmulti((x) => x.id);
 * baz = defmulti((x) => x.id);
 *
 * // define impls for dispatch value `a`
 * implementations(
 *   "a",
 *
 *   // delegate bax & baz impls to dispatch val `b`
 *   {
 *      b: [bax, baz]
 *   },
 *
 *   // concrete multi-fn impls
 *   foo,
 *   (x) => `foo: ${x.val}`,
 *
 *   bar,
 *   (x) => `bar: ${x.val.toUpperCase()}`
 * );
 *
 * // add parent impls
 * bax.add("b", (x) => `bax: ${x.id}`);
 * baz.add("c", (x) => `baz: ${x.id}`);
 * // use "c" impl for "b"
 * baz.isa("b", "c");
 *
 * foo({ id: "a", val: "alice" }); // "foo: alice"
 * bar({ id: "a", val: "alice" }); // "bar: ALICE"
 * bax({ id: "a", val: "alice" }); // "bax: a"
 * baz({ id: "a", val: "alice" }); // "baz: a"
 *
 * baz.impls(); // Set { "c", "a", "b" }
 * ```
 *
 * @param id - dispatch value / implementation ID
 * @param impls - implementations
 */
const implementations = (id, rels, ...impls) => {
    impls.length & 1 &&
        illegalArgs("expected an even number of implementation items");
    if (rels) {
        for (let parent in rels) {
            for (let fn of rels[parent]) {
                fn.isa(id, parent);
            }
        }
    }
    for (let i = 0; i < impls.length; i += 2) {
        impls[i].add(id, impls[i + 1]);
    }
};

export { defmultiN, implementations };
