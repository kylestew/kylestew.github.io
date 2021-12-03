const DEFAULT_EPS = 1e-6;
/**
 * Internal use only. **Do NOT use in user land code!**
 *
 * @internal
 */
const SEMAPHORE = Symbol();
/**
 * No-effect placeholder function.
 */
const NO_OP = () => { };
/**
 * Catch-all event ID
 */
const EVENT_ALL = "*";
const EVENT_ENABLE = "enable";
const EVENT_DISABLE = "disable";

export { DEFAULT_EPS as D, EVENT_ENABLE as E, NO_OP as N, SEMAPHORE as S, EVENT_DISABLE as a, EVENT_ALL as b };
