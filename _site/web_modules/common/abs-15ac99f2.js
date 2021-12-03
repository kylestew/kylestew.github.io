import { E as EPS } from './api-8453d590.js';

const absDiff = (x, y) => Math.abs(x - y);
const sign = (x, eps = EPS) => (x > eps ? 1 : x < -eps ? -1 : 0);

export { absDiff as a, sign as s };
