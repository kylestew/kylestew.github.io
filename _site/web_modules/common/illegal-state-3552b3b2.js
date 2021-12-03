import { d as defError } from './deferror-480a42fb.js';

const IllegalStateError = defError(() => "illegal state");
const illegalState = (msg) => {
    throw new IllegalStateError(msg);
};

export { IllegalStateError as I, illegalState as i };
