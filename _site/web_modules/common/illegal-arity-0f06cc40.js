import { d as defError } from './deferror-480a42fb.js';

const IllegalArityError = defError(() => "illegal arity");
const illegalArity = (n) => {
    throw new IllegalArityError(n);
};

export { IllegalArityError as I, illegalArity as i };
