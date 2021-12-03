import { d as defError } from './deferror-480a42fb.js';

const IllegalArgumentError = defError(() => "illegal argument(s)");
const illegalArgs = (msg) => {
    throw new IllegalArgumentError(msg);
};

export { IllegalArgumentError as I, illegalArgs as i };
