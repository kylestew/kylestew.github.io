export { I as IntersectionType } from '../common/isec-8a7dcbce.js';
export { D as DEFAULT_SAMPLES, s as setDefaultSamples } from '../common/sample-d7a90011.js';

/**
 * Polygon convexity classifier.
 */
var Convexity;
(function (Convexity) {
    Convexity[Convexity["ILLEGAL"] = -1] = "ILLEGAL";
    Convexity[Convexity["COLINEAR"] = 0] = "COLINEAR";
    Convexity[Convexity["CONVEX"] = 1] = "CONVEX";
    Convexity[Convexity["CONCAVE"] = 2] = "CONCAVE";
})(Convexity || (Convexity = {}));

export { Convexity };
