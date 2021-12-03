import { i as isNumber } from '../common/is-number-dd4646bb.js';
import { a as add3, b as add2, c as add, s as setC4, d as cross2, e as divN, f as setC3, g as setC2, h as cross3 } from '../common/divn-48ef128e.js';
import { s as set, a as set2, b as set3, c as sub3, d as sub2, m as magSq2, e as dot3, f as sub, g as dot, h as magSq } from '../common/magsq-9dc23acb.js';
import { c as copyVectors, a as copy, e as eqDelta2, d as dist, i as isInArray } from '../common/dist-d1b6a469.js';
import { equiv } from './equiv.js';
import { c as cossin, s as sincos, r as rad } from '../common/angle-a4c18f3e.js';
import { f as fit01 } from '../common/fit-abff9224.js';
import { m as mul2, Z as ZERO3, s as subN3, d as div2, n as neg, X as X2, a as Z3, b as ZERO2, c as subN2, e as dotS3, M as MAX2, f as MIN2, g as MIN3, h as MAX3, i as div, j as addN2 } from '../common/addn-a6cb9da5.js';
import { r as rotateZ, m as max3, a as min3, b as abs2, s as submN2, p as powN2, c as angleBetween2, d as direction, e as perpendicularCW, f as cornerBisector, g as mixCubic, h as mixQuadratic, i as cartesian2, j as madd2, o as orthoNormal3, k as max2, l as min2, n as perpendicularCCW, q as min$1, t as max$1, u as submN, v as mixBilinear, w as madd, x as normalCW, y as pointOnRay2, z as pointOnRay3, A as randMinMax } from '../common/random-33cc64de.js';
import { i as illegalState } from '../common/illegal-state-3552b3b2.js';
import { m as maddN2, a as maddN } from '../common/maddn-71d670d5.js';
import { S as SQRT2_2, E as EPS, T as TAU, P as PI, H as HALF_PI, a as SQRT3, b as THIRD_PI } from '../common/api-8453d590.js';
import { p as peek } from '../common/peek-ecc8cd73.js';
import { i as isPlainObject } from '../common/is-plain-object-24968a48.js';
import { m as mulN2, a as mulN, b as mulN3 } from '../common/muln-2f111deb.js';
import { m as mixN2, a as mixN } from '../common/mixn-930ba9a4.js';
import { r as roundEps, f as fract, a as roundTo, s as safeDiv } from '../common/safe-div-fded9333.js';
import { m as map, t as transduce, z as zip, p as push, i as iterator1, c as comp } from '../common/zip-907b97a6.js';
import { m as mapcat } from '../common/scan-c7864370.js';
import { d as defmulti, D as DEFAULT } from '../common/defmulti-ecad7cb9.js';
import { c as corner2, s as signedArea2 } from '../common/clockwise-757eff92.js';
import { a as addmN, b as addW4, c as addW2 } from '../common/addw-db4076c6.js';
import { i as isArray } from '../common/is-array-a7fa88fb.js';
import { D as DEFAULT_SAMPLES } from '../common/sample-d7a90011.js';
import { S as Sampler, r as resample$1, s as simplify$1 } from '../common/simplify-9c73d58b.js';
import { e as eqDelta } from '../common/eqdelta-099a6304.js';
import { z as zeroes, d as distSq2, a as distSq } from '../common/empty-f956d7b3.js';
import { W as WS, p as percent, U as U24, e as escapeEntities } from '../common/entities-43fd3ff3.js';
import { n as normalize$1, m as mag } from '../common/normalize-238b0958.js';
import { c as cycle, n as normRange, f as filter } from '../common/filter-b113f58f.js';
import { a as alignmentQuat, m as mulVQ, b as mulV344, c as mulV, s as scale23, t as translation23, d as concat, e as scale44, f as translation44 } from '../common/translation-e758206b.js';
import { c as centroid$1, p as polyArea2, a as classifyPointInCircle, b as classifyPointInTriangle2, d as pointInPolygon2, e as pointInAABB, f as pointInCircle, g as pointInSegment, h as pointInRect, i as pointInTriangle2, t as tessellate$1 } from '../common/tessellate-8bab73cd.js';
import { i as implementsFunction } from '../common/is-iterable-2e1d7abd.js';
import { i as isArrayLike } from '../common/is-arraylike-29dbc151.js';
import { i as isString, a as isNotStringAndIterable } from '../common/is-not-string-iterable-3777e99a.js';
import { a as assert } from '../common/assert-dcb272c2.js';
import { u as unsupported } from '../common/unsupported-bfdbf30c.js';
import { c as clamp01, i as inRange, a as clamp, m as minNonZero2, b as minNonZero3 } from '../common/interval-fde8b87f.js';
import { f as float } from '../common/float-2b4c018a.js';
import { d as deref, i as isDeref } from '../common/deref-7136a142.js';
import { i as isFunction } from '../common/is-function-b13d3e65.js';
import { i as illegalArgs } from '../common/illegal-arguments-2af523c3.js';
import { m as mixCubic$1 } from '../common/mix-6c45be6a.js';
import { s as sign } from '../common/abs-15ac99f2.js';
import { I as IntersectionType } from '../common/isec-8a7dcbce.js';
import { c as closestPointSegment, a as closestPointPolyline, b as closestT } from '../common/line-33765adb.js';
import { m as minError } from '../common/min-error-2de893da.js';
import { g as grahamScan2 } from '../common/graham-scan-87e2456a.js';
import { p as partition, w as wrapSides } from '../common/wrap-sides-cdd50232.js';
import { v as vop } from '../common/emit-4620adbe.js';
import { S as SYSTEM } from '../common/system-8e2a0898.js';
import { s as subdivide } from '../common/subdivide-db17f9e7.js';
import '../common/normal-dfbd2421.js';
import '../common/deferror-480a42fb.js';
import '../common/illegal-arity-0f06cc40.js';
import '../common/api-4427ff26.js';
import '../common/index-1bd2c425.js';
import '../common/_node-resolve:empty-5550de3c.js';
import '../common/ensure-array-22c314b7.js';
import '../common/mapcat-indexed-ba34747a.js';

const __copyAttribs = ($) => ({ ...$.attribs });
const __copyShape = (ctor, inst) => new ctor(copyVectors(inst.points), __copyAttribs(inst));

class AABB {
    constructor(pos = [0, 0, 0], size = 1, attribs) {
        this.pos = pos;
        this.attribs = attribs;
        this.size = isNumber(size) ? [size, size, size] : size;
    }
    get type() {
        return "aabb";
    }
    copy() {
        return new AABB(set([], this.pos), set([], this.size), __copyAttribs(this));
    }
    max() {
        return add3([], this.pos, this.size);
    }
}

class APC {
    constructor(points = [], attribs) {
        this.points = points;
        this.attribs = attribs;
    }
    *[Symbol.iterator]() {
        yield* this.points;
    }
}

const pointAt = (pos, r, axis, start, end, t, out = []) => pointAtTheta(pos, r, axis, fit01(t, start, end), out);
const pointAtTheta = (pos, r, axis, theta, out = []) => add2(null, rotateZ(null, mul2(out, cossin(theta), r), axis), pos);

class Arc {
    constructor(pos, r, axis, start, end, xl = false, cw = false, attribs) {
        this.pos = pos;
        this.r = r;
        this.axis = axis;
        this.start = start;
        this.end = end;
        this.xl = xl;
        this.cw = cw;
        this.attribs = attribs;
    }
    get type() {
        return "arc";
    }
    copy() {
        return new Arc(set([], this.pos), set([], this.r), this.axis, this.start, this.end, this.xl, this.cw, __copyAttribs(this));
    }
    equiv(o) {
        return (o instanceof Arc &&
            equiv(this.pos, o.pos) &&
            equiv(this.r, o.r) &&
            this.start === o.start &&
            this.end === o.end &&
            this.axis === o.axis &&
            this.xl === o.xl &&
            this.cw &&
            o.cw);
    }
    pointAt(t, out = []) {
        return pointAt(this.pos, this.r, this.axis, this.start, this.end, t, out);
    }
    pointAtTheta(theta, out = []) {
        return pointAtTheta(this.pos, this.r, this.axis, theta, out);
    }
    toHiccup() {
        return [
            "path",
            this.attribs,
            [["M", this.pointAt(0)], ...this.toHiccupPathSegments()],
        ];
    }
    toHiccupPathSegments() {
        return [
            [
                "A",
                this.r[0],
                this.r[1],
                this.axis,
                this.xl,
                this.cw,
                this.pointAt(1),
            ],
        ];
    }
}

class Circle {
    constructor(pos = [0, 0], r = 1, attribs) {
        this.pos = pos;
        this.r = r;
        this.attribs = attribs;
    }
    get type() {
        return "circle";
    }
    copy() {
        return new Circle(set([], this.pos), this.r, __copyAttribs(this));
    }
    toHiccup() {
        return ["circle", this.attribs, this.pos, this.r];
    }
}

class Cubic extends APC {
    get type() {
        return "cubic";
    }
    copy() {
        return __copyShape(Cubic, this);
    }
    toHiccup() {
        return [
            "path",
            this.attribs,
            [["M", this.points[0]], ...this.toHiccupPathSegments()],
        ];
    }
    toHiccupPathSegments() {
        const pts = this.points;
        return [["C", pts[1], pts[2], pts[3]]];
    }
}

class Ellipse {
    constructor(pos = [0, 0], r = [1, 1], attribs) {
        this.pos = pos;
        this.attribs = attribs;
        this.r = isNumber(r) ? [r, r] : r;
    }
    get type() {
        return "ellipse";
    }
    copy() {
        return new Ellipse(set([], this.pos), set([], this.r), __copyAttribs(this));
    }
    toHiccup() {
        return ["ellipse", this.attribs, this.pos, this.r];
    }
}

class Group {
    constructor(attribs, children = []) {
        this.attribs = attribs;
        this.children = children;
    }
    get type() {
        return "group";
    }
    *[Symbol.iterator]() {
        yield* this.children;
    }
    copy() {
        return this.copyTransformed((c) => c.copy());
    }
    copyTransformed(fn) {
        return new Group(__copyAttribs(this), this.children.map(fn));
    }
    equiv(o) {
        return o instanceof Group && equiv(this.children, o.children);
    }
    toHiccup() {
        return ["g", this.attribs, ...this.children.map((x) => x.toHiccup())];
    }
}

class Line extends APC {
    get type() {
        return "line";
    }
    copy() {
        return __copyShape(Line, this);
    }
    toHiccup() {
        return ["line", this.attribs, this.points[0], this.points[1]];
    }
    toHiccupPathSegments() {
        const [a, b] = this.points;
        return [
            a[0] === b[0]
                ? ["V", b[1]]
                : a[1] === b[1]
                    ? ["H", b[0]]
                    : ["L", b],
        ];
    }
}

class Path {
    constructor(segments = [], attribs) {
        this.segments = segments;
        this.attribs = attribs;
        this.closed = false;
    }
    get type() {
        return "path";
    }
    *[Symbol.iterator]() {
        yield* this.segments;
    }
    copy() {
        const p = new Path(this.segments.map((s) => {
            const d = { type: s.type };
            s.point && (d.point = copy(s.point));
            s.geo && (d.geo = s.geo.copy());
            return d;
        }), __copyAttribs(this));
        p.closed = this.closed;
        return p;
    }
    equiv(o) {
        return o instanceof Path && equiv(this.segments, o.segments);
    }
    add(s) {
        if (this.closed)
            illegalState("path already closed");
        this.segments.push(s);
    }
    toHiccup() {
        let dest = [];
        const segments = this.segments;
        const n = segments.length;
        if (n > 1) {
            for (let i = 0; i < n; i++) {
                const s = segments[i];
                if (s.geo) {
                    dest = dest.concat(s.geo.toHiccupPathSegments());
                }
                else if (s.point) {
                    dest.push(["M", s.point]);
                }
            }
            if (this.closed) {
                dest.push(["Z"]);
            }
        }
        return ["path", this.attribs || {}, dest];
    }
}

class Plane {
    constructor(normal = [0, 1, 0], w = 0, attribs) {
        this.normal = normal;
        this.w = w;
        this.attribs = attribs;
    }
    get type() {
        return "plane";
    }
    copy() {
        return new Plane(set([], this.normal), this.w, __copyAttribs(this));
    }
    toHiccup() {
        return ["plane", this.attribs, this.normal, this.w];
    }
}

class Points extends APC {
    get type() {
        return "points";
    }
    copy() {
        return __copyShape(Points, this);
    }
    toHiccup() {
        return ["points", this.attribs, this.points];
    }
}
class Points3 extends APC {
    get type() {
        return "points3";
    }
    copy() {
        return __copyShape(Points3, this);
    }
    toHiccup() {
        return ["points3", this.attribs, this.points];
    }
}

class Polygon extends APC {
    get type() {
        return "poly";
    }
    copy() {
        return __copyShape(Polygon, this);
    }
    toHiccup() {
        return ["polygon", this.attribs, this.points];
    }
}

class Polyline extends APC {
    get type() {
        return "polyline";
    }
    copy() {
        return __copyShape(Polyline, this);
    }
    toHiccup() {
        return ["polyline", { ...this.attribs, fill: "none" }, this.points];
    }
    toHiccupPathSegments() {
        const res = [];
        for (let pts = this.points, n = pts.length, i = 1; i < n; i++) {
            res.push(["L", pts[i]]);
        }
        return res;
    }
}

class Quad extends APC {
    get type() {
        return "quad";
    }
    copy() {
        return __copyShape(Quad, this);
    }
    toHiccup() {
        return ["polygon", this.attribs, this.points];
    }
}

class Quad3 extends APC {
    get type() {
        return "quad3";
    }
    copy() {
        return __copyShape(Quad3, this);
    }
    toHiccup() {
        return ["polygon", this.attribs, this.points];
    }
}

class Quadratic extends APC {
    get type() {
        return "quadratic";
    }
    copy() {
        return __copyShape(Quadratic, this);
    }
    toHiccup() {
        return [
            "path",
            this.attribs,
            [["M", this.points[0]], ...this.toHiccupPathSegments()],
        ];
    }
    toHiccupPathSegments() {
        const pts = this.points;
        return [["Q", pts[1], pts[2]]];
    }
}

class Ray {
    constructor(pos, dir, attribs) {
        this.pos = pos;
        this.dir = dir;
        this.attribs = attribs;
    }
    get type() {
        return "ray";
    }
    copy() {
        return new Ray(set([], this.pos), set([], this.dir), __copyAttribs(this));
    }
    toHiccup() {
        return [
            "line",
            this.attribs,
            this.pos,
            maddN2([], this.dir, 1e6, this.pos),
        ];
    }
}

class Rect {
    constructor(pos = [0, 0], size = 1, attribs) {
        this.pos = pos;
        this.attribs = attribs;
        this.size = isNumber(size) ? [size, size] : size;
    }
    get type() {
        return "rect";
    }
    copy() {
        return new Rect(set2([], this.pos), set2([], this.size), __copyAttribs(this));
    }
    max() {
        return add2([], this.pos, this.size);
    }
    toHiccup() {
        return ["rect", this.attribs, this.pos, this.size[0], this.size[1]];
    }
}

class Sphere {
    constructor(pos = [0, 0, 0], r = 1, attribs) {
        this.pos = pos;
        this.r = r;
        this.attribs = attribs;
    }
    get type() {
        return "sphere";
    }
    copy() {
        return new Sphere(set3([], this.pos), this.r, __copyAttribs(this));
    }
    toHiccup() {
        return ["sphere", this.attribs, this.pos, this.r];
    }
}

/**
 * Basic stub for text elements. Currently, only a minimal set of geometry
 * operations are implemented for this type, however this type implements
 * {@link @this.ng/api#IToHiccup} and so is useful as wrapper for inclusion of
 * text elements in {@link Group}s with other shape types.
 */
class Text {
    constructor(pos, body, attribs) {
        this.pos = pos;
        this.body = body;
        this.attribs = attribs;
    }
    get type() {
        return "text";
    }
    copy() {
        return new Text(set([], this.pos), this.body, __copyAttribs(this));
    }
    toHiccup() {
        return ["text", this.attribs, this.pos, this.body];
    }
}

class Triangle extends APC {
    get type() {
        return "tri";
    }
    copy() {
        return __copyShape(Triangle, this);
    }
    toHiccup() {
        return ["polygon", this.attribs, this.points];
    }
}

/**
 * Takes an array of arguments, checks if last element is a plain object
 * and if so, removes it from array and returns it. Else returns
 * `undefined`.
 *
 * @param args -
 *
 * @internal
 */
const __argAttribs = (args) => isPlainObject(peek(args)) ? args.pop() : undefined;
/**
 * Args parser for functions expecting up to 2 vector args and optional
 * attribs object. Returns 3-tuple of re-structured args.
 *
 * @param args -
 *
 * @internal
 */
const __argsVV = (args) => {
    const attr = __argAttribs(args);
    return args.length
        ? args.length === 2
            ? [args[0], args[1], attr]
            : [undefined, args[0], attr]
        : [undefined, undefined, attr];
};
/**
 * Args parser for functions expecting a vector, numeric and/or optional
 * attribs object. Returns 3-tuple of re-structured args.
 *
 * @param args -
 *
 * @internal
 */
const __argsVN = (args) => {
    const attr = __argAttribs(args);
    return args.length
        ? args.length === 2
            ? [args[0], args[1], attr]
            : isNumber(args[0])
                ? [undefined, args[0], attr]
                : [args[0], undefined, attr]
        : [undefined, undefined, attr];
};

function aabb(...args) {
    return new AABB(...__argsVV(args));
}
const aabbFromMinMax = (min, max, attribs) => new AABB(min, sub3([], max, min), attribs);
/**
 * Returns the intersection AABB of given inputs or `undefined` if they
 * are non-overlapping.
 *
 * @param a
 * @param b
 */
const intersectionAABB = (a, b) => {
    const p = max3([], a.pos, b.pos);
    const q = min3(null, add3([], a.pos, a.size), add3([], b.pos, b.size));
    const size = max3(null, sub3(null, q, p), ZERO3);
    return size[0] > 0 && size[1] > 0 && size[2] > 0
        ? new AABB(p, size)
        : undefined;
};
function inscribedAABB(...args) {
    let pos, r;
    if (args.length === 1) {
        const c = args[0];
        pos = c.pos;
        r = c.r;
    }
    else {
        [pos, r] = args;
    }
    r *= SQRT2_2;
    return aabb(subN3([], pos, r), r * 2);
}

/**
 * Conversion from endpoint to center parameterization.
 *
 * {@link https://svgwg.org/svg2-draft/implnote.html#ArcConversionEndpointToCenter}
 *
 * Returns undefined if `a` & `b` are equal or any `radii` component is
 * zero.
 *
 * @param a - start point
 * @param b - end point
 * @param radii - ellipse radii
 * @param axis - in radians
 * @param xl - large arc flag
 * @param cw - clockwise flag
 */
const fromEndPoints = (a, b, radii, axis = 0, xl = false, cw = false) => {
    const r = abs2([], radii);
    if (eqDelta2(a, b) || r[0] < EPS || r[1] < EPS) {
        return;
    }
    axis %= TAU;
    const d = submN2([], a, b, 0.5);
    const c = Math.cos(axis);
    const s = Math.sin(axis);
    // transformed point
    const tp = [c * d[0] + s * d[1], -s * d[0] + c * d[1]];
    const [tx2, ty2] = powN2([], tp, 2);
    // ensure radii
    const rc = tx2 / (r[0] * r[0]) + ty2 / (r[1] * r[1]);
    rc > 1 && mulN2(r, r, Math.sqrt(rc));
    const [rx, ry] = r;
    const rx2 = rx * rx;
    const ry2 = ry * ry;
    // transformed center
    const radicant = Math.max(0, (rx2 * ry2 - rx2 * ty2 - ry2 * tx2) / (rx2 * ty2 + ry2 * tx2));
    const coeff = (xl !== cw ? 1 : -1) * Math.sqrt(radicant);
    const tc = [coeff * ((rx * tp[1]) / ry), coeff * (-(ry * tp[0]) / rx)];
    // actual center
    const center = [
        c * tc[0] - s * tc[1] + (a[0] + b[0]) / 2,
        s * tc[0] + c * tc[1] + (a[1] + b[1]) / 2,
    ];
    // transformed end points & angles
    const ta = div2(null, sub2([], tp, tc), r);
    const tb = div2(null, sub2(null, neg([], tp), tc), r);
    const start = angleBetween2(X2, ta);
    let sweep = angleBetween2(ta, tb);
    if (!cw && sweep > 0) {
        sweep -= TAU;
    }
    else if (cw && sweep < 0) {
        sweep += TAU;
    }
    sweep %= TAU;
    return {
        center,
        r,
        axis,
        start,
        end: start + sweep,
        xl,
        cw,
    };
};

const arc = (pos, r, axis, start, end, xl = false, clockwise = false) => new Arc(pos, isNumber(r) ? [r, r] : r, axis, start, end, xl, clockwise);
const arcFrom2Points = (a, b, radii, axis = 0, xl = false, cw = false, attribs) => {
    const res = fromEndPoints(a, b, radii, axis, xl, cw);
    return res
        ? new Arc(res.center, res.r, res.axis, res.start, res.end, res.xl, res.cw, attribs)
        : undefined;
};

/**
 * Computes and returns the center of the circumcircle of the given 2D
 * triangle points. Returns `undefined` if the points are colinear or
 * coincident.
 *
 * @param a - triangle vertex 1
 * @param b - triangle vertex 2
 * @param c - triangle vertex 3
 * @param eps - epsilon value for colinear check
 */
const circumCenter2 = (a, b, c, eps = EPS) => {
    const ax = a[0], ay = a[1];
    const bx = b[0], by = b[1];
    const cx = c[0], cy = c[1];
    const bax = bx - ax;
    const bay = by - ay;
    const cbx = cx - bx;
    const cby = cy - by;
    const deltaAB = Math.abs(bay);
    const deltaBC = Math.abs(cby);
    // colinear check
    if ((deltaAB < eps && deltaBC < eps) ||
        (Math.abs(bax) < eps && Math.abs(cbx) < eps)) {
        return;
    }
    const abx2 = (ax + bx) / 2;
    const aby2 = (ay + by) / 2;
    const bcx2 = (bx + cx) / 2;
    const bcy2 = (by + cy) / 2;
    if (deltaAB < eps) {
        return [abx2, (-cbx / cby) * (abx2 - bcx2) + bcy2];
    }
    if (deltaBC < eps) {
        return [bcx2, (-bax / bay) * (bcx2 - abx2) + aby2];
    }
    let m1 = -bax / bay;
    let m2 = -cbx / cby;
    let mx1 = abx2;
    let my1 = aby2;
    let mx2 = bcx2;
    let my2 = bcy2;
    let xc = (m1 * mx1 - m2 * mx2 + my2 - my1) / (m1 - m2);
    let yc = deltaAB > deltaBC ? m1 * (xc - mx1) + my1 : m2 * (xc - mx2) + my2;
    return [xc, yc];
};

function circle(...args) {
    return new Circle(...__argsVN(args));
}
const circleFrom2Points = (a, b, attribs) => new Circle(mixN2([], a, b, 0.5), dist(a, b) / 2, attribs);
const circleFrom3Points = (a, b, c, attribs) => {
    const o = circumCenter2(a, b, c);
    return o ? new Circle(o, dist(a, o), attribs) : undefined;
};

/**
 * Converts line segment `a` -> `b` into a cubic curve, which when
 * sampled yields uniformly spaced points. The inner control points are
 * located at 1/3 and 2/3 respectively.
 *
 * @param a - line endpoint
 * @param b - line endpoint
 */
const cubicFromLine = (a, b) => [
    set([], a),
    mixN([], a, b, 1 / 3),
    mixN([], b, a, 1 / 3),
    set([], b),
];

/**
 * Converts elliptic arc into a 1-4 cubic curve segments, depending on
 * arc's angle range.
 *
 * Partially based on:
 * {@link https://github.com/chromium/chromium/blob/develop/third_party/blink/renderer/core/svg/svg_path_parser.cc#L253}
 *
 * @param pos - ellipse center
 * @param r - ellipse radii
 * @param axis - rotation angle (radians)
 * @param start - start angle (radians)
 * @param end - end angle (radians)
 */
const cubicFromArc = (pos, r, axis, start, end) => {
    const p = pointAtTheta(pos, r, axis, start);
    const q = pointAtTheta(pos, r, axis, end);
    const delta = end - start;
    const [rx, ry] = r;
    const [s, c] = sincos(axis);
    const dx = (c * (p[0] - q[0])) / 2 + (s * (p[1] - q[1])) / 2;
    const dy = (-s * (p[0] - q[0])) / 2 + (c * (p[1] - q[1])) / 2;
    if ((Math.abs(delta) < PI && dx === 0 && dy === 0) || magSq2(r) < EPS) {
        return [cubicFromLine(p, q)];
    }
    const mapP = (x, y) => {
        x *= rx;
        y *= ry;
        return [c * x - s * y + pos[0], s * x + c * y + pos[1]];
    };
    const res = [];
    const n = Math.ceil(roundEps(Math.abs(delta) / HALF_PI, 1e-3));
    const d = delta / n;
    const t = (8 / 6) * Math.tan(0.25 * d);
    if (!isFinite(t)) {
        return [cubicFromLine(p, q)];
    }
    for (let i = n, theta = start, sc = sincos(theta); i > 0; i--, theta += d) {
        const [s1, c1] = sc;
        const [s2, c2] = (sc = sincos(theta + d));
        res.push([
            mapP(c1, s1),
            mapP(c1 - s1 * t, s1 + c1 * t),
            mapP(c2 + s2 * t, s2 - c2 * t),
            mapP(c2, s2),
        ]);
    }
    return res;
};

const cubicFromQuadratic = (a, b, c) => [
    set([], a),
    mixN([], a, b, 2 / 3),
    mixN([], c, b, 2 / 3),
    set([], c),
];

const __pclike = (ctor, args) => {
    const attr = __argAttribs(args);
    return new ctor(args.length === 1 ? args[0] : args, attr);
};

function cubic(...args) {
    return __pclike(Cubic, args);
}
const cubicFromArc$1 = (arc) => cubicFromArc(arc.pos, arc.r, arc.axis, arc.start, arc.end).map((c) => new Cubic(c, __copyAttribs(arc)));
const cubicFromLine$1 = (a, b, attribs) => new Cubic(cubicFromLine(a, b), attribs);
const cubicFromQuadratic$1 = (a, b, c, attribs) => new Cubic(cubicFromQuadratic(a, b, c), attribs);

function ellipse(...args) {
    return new Ellipse(...__argsVV(args));
}

const group = (attribs = {}, children) => new Group(attribs, children);

/**
 * Performs Liang-Barsky clipping of the line segment with endpoints
 * `a`, `b` against the clipping rect defined by `min` and `max`. The
 * optional `ca` and `cb` vectors can be given to store the result
 * (clipped points). If omitted creates new vectors. Returns a tuple of
 * `[ca, cb, a, b]`, where the latter two values represent the
 * normalized distances of the clipped points relative to original given
 * line segment. Returns `undefined` iff the line lies completely
 * outside the rect.
 *
 * - {@link https://en.wikipedia.org/wiki/Liang%E2%80%93Barsky_algorithm}
 * - {@link https://github.com/thi-ng/c-thing/blob/develop/src/geom/clip/liangbarsky.c}
 *
 * @param a - line endpoint
 * @param b - line endpoint
 * @param min - bbox min
 * @param max - bbox max
 * @param ca - result A
 * @param cb - result B
 */
const liangBarsky2 = (a, b, min, max, ca = [], cb = []) => {
    const res = liangBarsky2Raw(a[0], a[1], b[0], b[1], min[0], min[1], max[0], max[1]);
    if (!res)
        return;
    ca[0] = res[0];
    ca[1] = res[1];
    cb[0] = res[2];
    cb[1] = res[3];
    return [ca, cb, res[4], res[5]];
};
/**
 * Same as {@link liangBarsky2} but for non-vector arguments.
 *
 * @param ax
 * @param ay
 * @param bx
 * @param by
 * @param minx
 * @param miny
 * @param maxx
 * @param maxy
 */
const liangBarsky2Raw = (ax, ay, bx, by, minx, miny, maxx, maxy) => {
    const dx = bx - ax;
    const dy = by - ay;
    let alpha = 0;
    let beta = 1;
    const clip = (p, q) => {
        if (p < 0) {
            const r = q / p;
            if (r > beta) {
                return false;
            }
            if (r > alpha) {
                alpha = r;
            }
        }
        else if (p > 0) {
            const r = q / p;
            if (r < alpha) {
                return false;
            }
            if (r < beta) {
                beta = r;
            }
        }
        else if (q < 0) {
            return false;
        }
        return true;
    };
    return clip(-dx, ax - minx) &&
        clip(dx, maxx - ax) &&
        clip(-dy, ay - miny) &&
        clip(dy, maxy - ay)
        ? [
            alpha * dx + ax,
            alpha * dy + ay,
            beta * dx + ax,
            beta * dy + ay,
            alpha,
            beta,
        ]
        : undefined;
};

function line(...args) {
    return __pclike(Line, args);
}
const clippedLine = (l, bounds) => {
    const res = bounds instanceof Rect
        ? liangBarsky2(l.points[0], l.points[1], bounds.pos, bounds.max())
        : liangBarsky2(l.points[0], l.points[1], bounds[0], bounds[1]);
    if (res) {
        return new Line([res[0], res[1]], { ...l.attribs });
    }
};

const buildSegments = (tangents, t, uniform) => {
    const res = [];
    for (let i = 0, num = tangents.length - 1; i < num; i++) {
        const [a, na] = tangents[i];
        const [b, nb] = tangents[i + 1];
        const d = uniform ? t : t * dist(a, b);
        res.push([a, maddN([], na, d, a), maddN([], nb, -d, b), b]);
    }
    return res;
};
const closedCubicFromBreakPoints = (points, t = 1 / 3, uniform = false) => {
    const tangents = [];
    for (let num = points.length, i = num - 1, j = 0; j < num; i = j, j++) {
        const a = points[i];
        const b = points[j];
        const c = points[(j + 1) % num];
        const n = mulN(null, perpendicularCW(null, cornerBisector([], a, b, c)), corner2(a, b, c));
        tangents.push([set([], b), n]);
    }
    tangents.push(tangents[0]);
    return buildSegments(tangents, t, uniform);
};
const openCubicFromBreakPoints = (points, t = 1 / 3, uniform = false) => {
    const tangents = [
        [points[0], direction([], points[0], points[1])],
    ];
    const num = points.length - 1;
    for (let i = 1; i < num; i++) {
        const a = points[i - 1];
        const b = points[i];
        const c = points[i + 1];
        const n = mulN(null, perpendicularCW(null, cornerBisector([], a, b, c)), corner2(a, b, c));
        tangents.push([set([], b), n]);
    }
    tangents.push([points[num], direction([], points[num - 1], points[num])]);
    return buildSegments(tangents, t, uniform);
};

const buildUniform = (segments, t) => {
    const res = [];
    for (let i = 0, n = segments.length - 2; i < n; i += 2) {
        const a = segments[i];
        const b = segments[i + 1];
        const c = segments[i + 2];
        res.push([
            a,
            add(null, direction([], a, b, t), a),
            add(null, direction([], c, b, t), c),
            c,
        ]);
    }
    return res;
};
const buildNonUniform = (segments, t) => {
    const res = [];
    for (let i = 0, n = segments.length - 2; i < n; i += 2) {
        const a = segments[i];
        const b = segments[i + 1];
        const c = segments[i + 2];
        res.push([a, mixN([], a, b, t), mixN([], c, b, t), c]);
    }
    return res;
};
const closedCubicFromControlPoints = (points, t = 1, uniform = false) => {
    const segments = [];
    for (let i = 0, num = points.length; i < num; i++) {
        const q = points[(i + 1) % num];
        segments.push(addmN([], points[i], q, 0.5), set([], q));
    }
    segments.push(segments[0]);
    return uniform ? buildUniform(segments, t) : buildNonUniform(segments, t);
};
const openCubicFromControlPoints = (points, t = 1, uniform = false) => {
    const segments = [set([], points[0]), set([], points[0])];
    const num = points.length - 1;
    for (let i = 0; i < num; i++) {
        const q = points[i + 1];
        segments.push(addmN([], points[i], q, 0.5), set([], q));
    }
    segments.push(set([], points[num]));
    return uniform ? buildUniform(segments, t) : buildNonUniform(segments, t);
};

const __dispatch = (x) => x.type;
const __dispatch2 = (a, b) => a.type + "-" + b.type;

const sample = (pos, r, axis, start, end, opts) => {
    if (isPlainObject(opts) && opts.dist !== undefined) {
        return new Sampler(sample(pos, r, axis, start, end, opts.num || DEFAULT_SAMPLES)).sampleUniform(opts.dist, opts.last !== false);
    }
    opts = isNumber(opts)
        ? { num: opts, last: true }
        : { num: DEFAULT_SAMPLES, ...opts };
    let delta = end - start;
    let num = opts.theta ? Math.round(delta / opts.theta) : opts.num;
    delta /= num;
    opts.last !== false && num++;
    const pts = new Array(num);
    for (let i = 0; i < num; i++) {
        pts[i] = pointAtTheta(pos, r, axis, start + i * delta);
    }
    return pts;
};

const __sample = (sample) => function $(pts, opts) {
    if (isPlainObject(opts) && opts.dist !== undefined) {
        return new Sampler($(pts, opts.num || DEFAULT_SAMPLES)).sampleUniform(opts.dist, opts.last !== false);
    }
    opts = isNumber(opts)
        ? {
            num: opts,
            last: true,
        }
        : {
            num: DEFAULT_SAMPLES,
            ...opts,
        };
    const res = [];
    sample(res, pts, opts.num);
    opts.last && res.push(set([], pts[pts.length - 1]));
    return res;
};

const sampleCubic = __sample((res, [a, b, c, d], num) => {
    const delta = 1 / num;
    for (let t = 0; t < num; t++) {
        res.push(mixCubic([], a, b, c, d, t * delta));
    }
});

const sampleQuadratic = __sample((res, [a, b, c], num) => {
    const delta = 1 / num;
    for (let t = 0; t < num; t++) {
        res.push(mixQuadratic([], a, b, c, t * delta));
    }
});

const vertices = defmulti(__dispatch, {
    line: "polyline",
    points3: "points",
    quad: "poly",
    tri: "poly",
}, {
    // e +----+ h
    //   |\   :\
    //   |f+----+ g
    //   | |  : |
    // a +-|--+d|
    //    \|   \|
    //   b +----+ c
    //
    aabb: ({ pos, size }) => {
        const [px, py, pz] = pos;
        const [qx, qy, qz] = add3([], pos, size);
        return [
            [px, py, pz],
            [px, py, qz],
            [qx, py, qz],
            [qx, py, pz],
            [px, qy, pz],
            [px, qy, qz],
            [qx, qy, qz],
            [qx, qy, pz], // h
        ];
    },
    arc: ($, opts) => sample($.pos, $.r, $.axis, $.start, $.end, opts),
    circle: ($, opts = DEFAULT_SAMPLES) => {
        const pos = $.pos;
        const r = $.r;
        let [num, last] = circleOpts(opts, r);
        const delta = TAU / num;
        last && num++;
        const buf = new Array(num);
        for (let i = 0; i < num; i++) {
            buf[i] = cartesian2(null, [r, i * delta], pos);
        }
        return buf;
    },
    cubic: ($, opts) => sampleCubic($.points, opts),
    ellipse: ($, opts = DEFAULT_SAMPLES) => {
        const buf = [];
        const pos = $.pos;
        const r = $.r;
        let [num, last] = circleOpts(opts, Math.max($.r[0], $.r[1]));
        const delta = TAU / num;
        last && num++;
        for (let i = 0; i < num; i++) {
            buf[i] = madd2([], cossin(i * delta), r, pos);
        }
        return buf;
    },
    group: ({ children }) => children.reduce((acc, $) => acc.concat(vertices($)), []),
    path: ($, opts) => {
        const _opts = isNumber(opts) ? { num: opts } : opts;
        let verts = [];
        for (let segs = $.segments, n = segs.length - 1, i = 0; i <= n; i++) {
            const s = segs[i];
            if (s.geo) {
                verts = verts.concat(vertices(s.geo, {
                    ..._opts,
                    last: i === n && !$.closed,
                }));
            }
        }
        return verts;
    },
    points: ($) => $.points,
    poly: ($, opts) => resample$1($.points, opts, true),
    polyline: ($, opts) => resample$1($.points, opts),
    quadratic: ($, opts) => sampleQuadratic($.points, opts),
    rect: ($, opts) => {
        const p = $.pos;
        const q = add2([], p, $.size);
        const verts = [set2([], p), [q[0], p[1]], q, [p[0], q[1]]];
        return opts != null ? vertices(new Polygon(verts), opts) : verts;
    },
});
/**
 * Takes array of vectors or an `IShape`. If the latter, calls {@link vertices}
 * and return result, else returns original array.
 *
 * @param shape
 */
const ensureVertices = (shape) => isArray(shape) ? shape : vertices(shape);
const circleOpts = (opts, r) => isNumber(opts)
    ? [opts, false]
    : [
        opts.theta
            ? Math.floor(TAU / opts.theta)
            : opts.dist
                ? Math.floor(TAU / (opts.dist / r))
                : opts.num || DEFAULT_SAMPLES,
        opts.last === true,
    ];

const asPolygon = defmulti(__dispatch, {
    circle: "points",
    ellipse: "points",
    line: "points",
    path: "points",
    poly: "points",
    polyline: "points",
    quad: "points",
    rect: "points",
    tri: "points",
}, {
    points: ($, opts) => new Polygon(vertices($, opts), __copyAttribs($)),
});

const asCubic = defmulti(__dispatch, {
    ellipse: "circle",
    quad: "poly",
    tri: "poly",
}, {
    arc: cubicFromArc$1,
    circle: ($) => asCubic(arc($.pos, $.r, 0, 0, TAU, true, true)),
    cubic: ($) => [$],
    group: ($) => [...mapcat(asCubic, $.children)],
    line: ({ attribs, points }) => [
        cubicFromLine$1(points[0], points[1], { ...attribs }),
    ],
    path: ($) => [
        ...mapcat((s) => (s.geo ? asCubic(s.geo) : null), $.segments),
    ],
    poly: ($, opts = {}) => polyCubic($, opts, closedCubicFromBreakPoints, closedCubicFromControlPoints),
    polyline: ($, opts = {}) => polyCubic($, opts, openCubicFromBreakPoints, openCubicFromControlPoints),
    quadratic: ({ attribs, points }) => [
        cubicFromQuadratic$1(points[0], points[1], points[2], { ...attribs }),
    ],
    rect: ($, opts) => asCubic(asPolygon($), opts),
});
// prettier-ignore
const polyCubic = ($, opts, breakPoints, controlPoints) => {
    opts = { breakPoints: false, scale: 1 / 3, uniform: false, ...opts };
    return (opts.breakPoints
        ? breakPoints($.points, opts.scale, opts.uniform)
        : controlPoints($.points, opts.scale, opts.uniform)).map((pts) => new Cubic(pts, __copyAttribs($)));
};

class PathBuilder {
    constructor(attribs, opts = {}) {
        this.attribs = attribs;
        this.opts = opts;
        this.paths = [];
        this.attribs = attribs;
        this.newPath();
    }
    *[Symbol.iterator]() {
        yield* this.paths;
    }
    current() {
        return this.curr;
    }
    newPath() {
        this.curr = new Path([], this.attribs);
        this.paths.push(this.curr);
        this.currP = zeroes(2);
        this.bezierP = zeroes(2);
        this.startP = zeroes(2);
    }
    moveTo(p, relative = false) {
        if (this.opts.autoSplit !== false && this.curr.segments.length > 0) {
            this.curr = new Path([], this.attribs);
            this.paths.push(this.curr);
        }
        p = this.updateCurrent(p, relative);
        set2(this.startP, p);
        set2(this.bezierP, p);
        this.curr.add({
            point: p,
            type: "m",
        });
        return this;
    }
    lineTo(p, relative = false) {
        this.curr.add({
            geo: new Line([copy(this.currP), this.updateCurrent(p, relative)]),
            type: "l",
        });
        set2(this.bezierP, this.currP);
        return this;
    }
    hlineTo(x, relative = false) {
        this.addHVLine(x, 0, relative);
        return this;
    }
    vlineTo(y, relative = false) {
        this.addHVLine(y, 1, relative);
        return this;
    }
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Cubic_B%C3%A9zier_Curve
    cubicTo(cp1, cp2, p, relative = false) {
        this.addCubic(this.absPoint(cp1, relative), cp2, p, relative);
        return this;
    }
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Quadratic_B%C3%A9zier_Curve
    quadraticTo(cp, p, relative = false) {
        this.addQuadratic(this.absPoint(cp, relative), p, relative);
        return this;
    }
    cubicChainTo(cp2, p, relative = false) {
        const prevMode = peek(this.curr.segments).type;
        const c1 = copy(this.currP);
        prevMode === "c" && add2(null, sub2([], c1, this.bezierP), c1);
        this.addCubic(c1, cp2, p, relative);
        return this;
    }
    quadraticChainTo(p, relative = false) {
        const prevMode = peek(this.curr.segments).type;
        const c1 = copy(this.currP);
        prevMode === "q" && sub2(null, mulN2(null, c1, 2), this.bezierP);
        this.addQuadratic(c1, p, relative);
        return this;
    }
    arcTo(p, r, xaxis, xl, clockwise, relative = false) {
        if (eqDelta(r[0], 0) || eqDelta(r[1], 0)) {
            return this.lineTo(p, relative);
        }
        const prev = copy(this.currP);
        this.curr.add({
            geo: arcFrom2Points(prev, this.updateCurrent(p, relative), r, xaxis, xl, clockwise),
            type: "a",
        });
        set2(this.bezierP, this.currP);
        return this;
    }
    closePath() {
        this.curr.add({
            geo: new Line([copy(this.currP), copy(this.startP)]),
            type: "l",
        });
        this.curr.closed = true;
        return this;
    }
    updateCurrent(p, relative) {
        p = copy(relative ? add2(null, this.currP, p) : set2(this.currP, p));
        return p;
    }
    absPoint(p, relative) {
        return relative ? add2(null, p, this.currP) : p;
    }
    addHVLine(p, i, relative) {
        const prev = copy(this.currP);
        this.currP[i] = relative ? this.currP[i] + p : p;
        set2(this.bezierP, this.currP);
        this.curr.add({
            geo: new Line([prev, copy(this.currP)]),
            type: "l",
        });
    }
    addCubic(cp1, cp2, p, relative) {
        cp2 = this.absPoint(cp2, relative);
        set2(this.bezierP, cp2);
        this.curr.add({
            geo: new Cubic([
                copy(this.currP),
                cp1,
                cp2,
                this.updateCurrent(p, relative),
            ]),
            type: "c",
        });
    }
    addQuadratic(cp, p, relative) {
        set2(this.bezierP, cp);
        this.curr.add({
            geo: new Quadratic([
                copy(this.currP),
                cp,
                this.updateCurrent(p, relative),
            ]),
            type: "q",
        });
    }
}
const pathBuilder = (attribs, opts) => new PathBuilder(attribs, opts);

const path = (segments, attribs) => new Path(segments, attribs);
const pathFromCubics = (cubics, attribs) => {
    const path = new Path([], attribs || cubics[0].attribs);
    path.segments.push({ type: "m", point: cubics[0].points[0] });
    for (let c of cubics) {
        path.segments.push({ type: "c", geo: c });
    }
    return path;
};
const normalizedPath = (path) => new Path([
    ...mapcat((s) => s.geo
        ? map((c) => ({ type: "c", geo: c }), asCubic(s.geo))
        : [{ ...s }], path.segments),
], path.attribs);
const roundedRect = (pos, size, r, attribs) => {
    r = isNumber(r) ? [r, r] : r;
    const [w, h] = maddN2([], r, -2, size);
    return new PathBuilder(attribs)
        .moveTo([pos[0] + r[0], pos[1]])
        .hlineTo(w, true)
        .arcTo(r, r, 0, false, true, true)
        .vlineTo(h, true)
        .arcTo([-r[0], r[1]], r, 0, false, true, true)
        .hlineTo(-w, true)
        .arcTo([-r[0], -r[1]], r, 0, false, true, true)
        .vlineTo(-h, true)
        .arcTo([r[0], -r[1]], r, 0, false, true, true)
        .current();
};

const CMD_RE = /[achlmqstvz]/i;
const WSC = { ...WS, ",": true };
const pathFromSvg = (svg) => {
    const b = new PathBuilder();
    try {
        let cmd = "";
        for (let n = svg.length, i = 0; i < n;) {
            i = skipWS(svg, i);
            const c = svg.charAt(i);
            if (CMD_RE.test(c)) {
                cmd = c;
                i++;
            }
            let p, pa, pb, t1, t2, t3;
            switch (cmd.toLowerCase()) {
                case "m":
                    [p, i] = readPoint(svg, i);
                    b.moveTo(p, cmd === "m");
                    break;
                case "l":
                    [p, i] = readPoint(svg, i);
                    b.lineTo(p, cmd === "l");
                    break;
                case "h":
                    [p, i] = readFloat(svg, i);
                    b.hlineTo(p, cmd === "h");
                    break;
                case "v":
                    [p, i] = readFloat(svg, i);
                    b.vlineTo(p, cmd === "v");
                    break;
                case "q":
                    [pa, i] = readPoint(svg, i);
                    [p, i] = readPoint(svg, i);
                    b.quadraticTo(pa, p, cmd === "q");
                    break;
                case "c":
                    [pa, i] = readPoint(svg, i);
                    [pb, i] = readPoint(svg, i);
                    [p, i] = readPoint(svg, i);
                    b.cubicTo(pa, pb, p, cmd === "c");
                    break;
                case "s":
                    [pa, i] = readPoint(svg, i);
                    [p, i] = readPoint(svg, i);
                    b.cubicChainTo(pa, p, cmd === "s");
                    break;
                case "t":
                    [p, i] = readPoint(svg, i);
                    b.quadraticChainTo(p, cmd === "t");
                    break;
                case "a": {
                    [pa, i] = readPoint(svg, i);
                    [t1, i] = readFloat(svg, i);
                    [t2, i] = readFlag(svg, i);
                    [t3, i] = readFlag(svg, i);
                    [pb, i] = readPoint(svg, i);
                    b.arcTo(pb, pa, rad(t1), t2, t3, cmd === "a");
                    break;
                }
                case "z":
                    b.closePath();
                    break;
                default:
                    throw new Error(`unsupported segment type: ${c} @ pos ${i}`);
            }
        }
        return b.paths;
    }
    catch (e) {
        throw e instanceof Error
            ? e
            : new Error(`illegal char '${svg.charAt(e)}' @ ${e}`);
    }
};
const skipWS = (src, i) => {
    const n = src.length;
    while (i < n && WSC[src.charAt(i)])
        i++;
    return i;
};
const readPoint = (src, index) => {
    let x, y;
    [x, index] = readFloat(src, index);
    index = skipWS(src, index);
    [y, index] = readFloat(src, index);
    return [[x, y], index];
};
const readFlag = (src, i) => {
    i = skipWS(src, i);
    const c = src.charAt(i);
    return [
        c === "0"
            ? false
            : c === "1"
                ? true
                : illegalState(`expected '0' or '1' @ pos: ${i}`),
        i + 1,
    ];
};
const readFloat = (src, index) => {
    index = skipWS(src, index);
    let signOk = true;
    let dotOk = true;
    let expOk = false;
    let commaOk = false;
    let i = index;
    for (let n = src.length; i < n; i++) {
        const c = src.charAt(i);
        if ("0" <= c && c <= "9") {
            expOk = true;
            commaOk = true;
            signOk = false;
            continue;
        }
        if (c === "-" || c === "+") {
            if (!signOk)
                break;
            signOk = false;
            continue;
        }
        if (c === ".") {
            if (!dotOk)
                break;
            dotOk = false;
            continue;
        }
        if (c === "e") {
            if (!expOk)
                throw i;
            expOk = false;
            dotOk = false;
            signOk = true;
            continue;
        }
        if (c === ",") {
            if (!commaOk)
                throw i;
            i++;
        }
        break;
    }
    if (i === index) {
        illegalState(`expected coordinate @ pos: ${i}`);
    }
    return [parseFloat(src.substring(index, i)), i];
};

const plane = (normal, w, attribs) => new Plane(normalize$1(null, normal), w, attribs);
const planeWithPoint = (normal, p, attribs) => {
    normal = normalize$1(null, normal);
    return new Plane(normal, dot3(normal, p), attribs);
};
const planeFrom3Points = (a, b, c, attribs) => planeWithPoint(orthoNormal3([], a, b, c), a, attribs);

const points = (pts, attribs) => new Points(pts, attribs);
const points3 = (pts, attribs) => new Points3(pts, attribs);

const polygon = (pts, attribs) => new Polygon(pts, attribs);
const star = (r, n, profile, attribs) => new Polygon(transduce(map(([i, p]) => cartesian2(null, [r * p, i * TAU])), push(), zip(normRange(n * profile.length, false), cycle(profile))), attribs);

const polyline = (pts, attribs) => new Polyline(pts, attribs);

/**
 * Returns signed distance between point `p` and plane defined by normal `n` and
 * `w`. In 2D this also works for lines.
 *
 * @remarks
 * If result is > 0 the point lies "above" the plane, if < 0 below the plane or
 * if zero on the plane.
 *
 * @param p
 * @param n
 * @param w
 */
const distToPlane = (p, n, w) => dot(n, p) - w;
/**
 * Returns closest point to `p` on the plane defined by normal `n` and `w`. In
 * 2D this also works for lines.
 *
 * @param p
 * @param normal
 * @param w
 * @param out
 */
const closestPointPlane = (p, normal, w, out = []) => sub(out, p, normalize$1(out, normal, distToPlane(p, normal, w)));

function quad(...args) {
    return __pclike(Quad, args);
}
function quad3(...args) {
    const attr = __argAttribs(args);
    return new Quad3(args.length === 1 ? args[0] : args, attr);
}
const quadOnPlane = (plane, pos, size, attribs) => {
    pos = closestPointPlane(pos, plane.normal, plane.w);
    const [w, h] = isNumber(size) ? [size, size] : size;
    const q = alignmentQuat(Z3, plane.normal);
    return new Quad3([
        [-w, -h, 0],
        [w, -h, 0],
        [w, h, 0],
        [-w, h, 0],
    ].map((p) => add3(null, mulVQ(null, q, p), pos)), attribs);
};

const quadraticFromLine = (a, b) => [
    set([], a),
    addmN([], a, b, 0.5),
    set([], b),
];

function quadratic(...args) {
    return __pclike(Quadratic, args);
}
const quadraticFromLine$1 = (a, b, attribs) => new Quadratic(quadraticFromLine(a, b), attribs);

const ray = (pos, dir, attribs, normalize = true) => new Ray(pos, normalize ? normalize$1(null, dir) : dir, attribs);

function rect(...args) {
    return new Rect(...__argsVV(args));
}
const rectFromMinMax = (min, max, attribs) => new Rect(min, sub2([], max, min), attribs);
const rectFromCentroid = (centroid, size, attribs) => new Rect(maddN2([], size, -0.5, centroid), size, attribs);
/**
 * Returns the intersection rect of given inputs or `undefined` if they
 * are non-overlapping.
 *
 * @param a
 * @param b
 */
const intersectionRect = (a, b) => {
    const p = max2([], a.pos, b.pos);
    const q = min2(null, add2([], a.pos, a.size), add2([], b.pos, b.size));
    const size = max2(null, sub2(null, q, p), ZERO2);
    return size[0] > 0 && size[1] > 0 ? new Rect(p, size) : undefined;
};
function inscribedSquare(...args) {
    let pos, r;
    if (args.length === 1) {
        const c = args[0];
        pos = c.pos;
        r = c.r;
    }
    else {
        [pos, r] = args;
    }
    r *= SQRT2_2;
    return rect(subN2([], pos, r), r * 2);
}
function inscribedSquareHex(...args) {
    let pos, l;
    if (args.length === 1) {
        const pts = args[0].points;
        pos = centroid$1(pts);
        l = dist(pts[0], pts[1]);
    }
    else {
        [pos, l] = args;
    }
    l *= 3 - SQRT3;
    return rect(subN2([], pos, l / 2), l);
}

const text = (pos, body, attribs) => new Text(pos, body, attribs);

const equilateralTriangle2 = (a, b) => {
    const dir = sub2([], b, a);
    const c = normalize$1(null, perpendicularCCW([], dir), mag(dir) * Math.sin(THIRD_PI));
    return [a, b, maddN2(null, dir, 0.5, c)];
};

function triangle(...args) {
    return __pclike(Triangle, args);
}
const equilateralTriangle = (a, b, attribs) => new Triangle(equilateralTriangle2(a, b), attribs);

const perimeter = (pts, num = pts.length, closed = false) => {
    if (num < 2)
        return 0;
    let res = 0;
    let p = pts[0];
    let q = pts[1];
    for (let i = 1; i < num; p = q, q = pts[++i]) {
        res += dist(p, q);
    }
    return closed ? res + dist(p, pts[0]) : res;
};

/**
 * Returns the arc length / perimeter / circumference of the given
 * shape. For groups calls {@link arcLength} for each child and returns the
 * sum of results.
 *
 * Implemented for:
 *
 * - Circle
 * - Ellipse
 * - Group
 * - Line
 * - Polygon
 * - Polyline
 * - Quad
 * - Rect
 * - Triangle
 *
 */
const arcLength = defmulti(__dispatch, {
    quad: "poly",
    tri: "poly",
}, {
    circle: ($) => TAU * $.r,
    ellipse: ({ r: [a, b] }) => 
    // Ramanujan approximation
    // https://www.mathsisfun.com/geometry/ellipse-perimeter.html
    PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (3 * b + a))),
    group: ({ children }) => children.reduce((sum, $) => sum + arcLength($), 0),
    line: ({ points }) => dist(points[0], points[1]),
    poly: ({ points }) => perimeter(points, points.length, true),
    polyline: ({ points }) => perimeter(points, points.length),
    rect: ({ size }) => 2 * (size[0] + size[1]),
    tri: ({ points }) => dist(points[0], points[1]) +
        dist(points[1], points[2]) +
        dist(points[2], points[0]),
});

/**
 * Returns the possibly signed (unsigned by default) surface area of given
 * `shape`. For groups calls {@link area} for each child and returns sum of
 * unsigned areas.
 *
 * In general, for polygons and triangles, the sign of the result can be
 * used as indication of the shapes orientation (clockwise /
 * counterclockwise).
 *
 * For curves, lines, point clouds and rays the function returns 0.
 *
 * Implemented for:
 *
 * - AABB
 * - Circle
 * - Cubic
 * - Ellipse
 * - Group
 * - Line
 * - Plane
 * - Points
 * - Polygon
 * - Polyline
 * - Quad
 * - Quadratic
 * - Ray
 * - Rect
 * - Sphere
 * - Triangle
 *
 * @param shape - shape to operate on
 * @param signed - true, if signed area
 */
const area = defmulti(__dispatch, { quad: "poly" }, {
    aabb: ({ size: [w, h, d] }) => 2 * (w * h + w * d + h * d),
    arc: 
    // http://cut-the-knot.org/Generalization/Cavalieri2.shtml
    ($) => 0.5 * Math.abs($.start - $.end) * $.r[0] * $.r[1],
    circle: ($) => PI * $.r ** 2,
    ellipse: ($) => PI * $.r[0] * $.r[1],
    group: ({ children }) => children.reduce((sum, $) => sum + area($, false), 0),
    plane: () => Infinity,
    poly: ($, signed) => {
        const area = polyArea2($.points);
        return signed ? area : Math.abs(area);
    },
    rect: ($) => $.size[0] * $.size[1],
    sphere: ($) => 4 * PI * $.r ** 2,
    tri: ($, signed) => {
        const area = 0.5 * signedArea2(...$.points);
        return signed ? area : Math.abs(area);
    },
    [DEFAULT]: () => 0,
});

const asPath = (src, attribs) => pathFromCubics(asCubic(src), attribs || __copyAttribs(src));

const asPolyline = defmulti(__dispatch, {
    arc: "points",
    circle: "poly",
    cubic: "points",
    ellipse: "poly",
    line: "points",
    polyline: "points",
    quad: "poly",
    quadratic: "points",
    rect: "poly",
    tri: "poly",
}, {
    points: ($, opts) => new Polyline(vertices($, opts), __copyAttribs($)),
    path: ($, opts) => {
        const pts = vertices($, opts);
        $.closed && pts.push(set([], pts[0]));
        return new Polyline(pts, __copyAttribs($));
    },
    poly: ($, opts) => {
        const pts = vertices($, opts);
        pts.push(set([], pts[0]));
        return new Polyline(pts, __copyAttribs($));
    },
});

const CONVERSIONS = {};
const convert = (res, src, destMode, srcMode) => {
    const spec = CONVERSIONS[destMode];
    assert(!!spec, `no conversions available for ${destMode}`);
    let $convert = spec[srcMode];
    return $convert
        ? $convert(res, src)
        : CONVERSIONS.rgb[srcMode]
            ? spec.rgb(res, CONVERSIONS.rgb[srcMode]([], src))
            : unsupported(`can't convert: ${srcMode} -> ${destMode}`);
};

/**
 * RGB black
 */
const BLACK = Object.freeze([0, 0, 0, 1]);
/**
 * RGB white
 */
const WHITE = Object.freeze([1, 1, 1, 1]);
/**
 * RGB red
 */
const RED = Object.freeze([1, 0, 0, 1]);
/**
 * RGB green
 */
const GREEN = Object.freeze([0, 1, 0, 1]);
/**
 * RGB blue
 */
const BLUE = Object.freeze([0, 0, 1, 1]);
/**
 * RGB cyan
 */
const CYAN = Object.freeze([0, 1, 1, 1]);
/**
 * RGB magenta
 */
const MAGENTA = Object.freeze([1, 0, 1, 1]);
/**
 * RGB yellow
 */
const YELLOW = Object.freeze([1, 1, 0, 1]);
/**
 * XYZ D50 to sRGB conversion matrix
 *
 * @remarks
 * Reference:
 * http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
const XYZ_RGB_D50 = [
    3.1338561, -0.9787684, 0.0719453, -1.6168667, 1.9161415, -0.2289914,
    -0.4906146, 0.033454, 1.4052427,
];
/**
 * XYZ D65 to sRGB conversion matrix
 *
 * @remarks
 * Reference:
 * http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
const XYZ_RGB_D65 = [
    3.2404542, -0.969266, 0.0556434, -1.5371385, 1.8760108, -0.2040259,
    -0.4985314, 0.041556, 1.0572252,
];
/**
 * CIE Standard Illuminant D50
 */
const D50 = [0.96422, 1, 0.82521];
/**
 * CIE Standard Illuminant D65
 *
 * Reference:
 * https://en.wikipedia.org/wiki/Illuminant_D65
 */
const D65 = [0.95047, 1, 1.08883];
/**
 * Float value formatter
 *
 * @internal
 */
let FF = float(3);
/**
 * Percentage value formatter
 *
 * @internal
 */
let PC = percent(3);
const INV8BIT = 1 / 0xff;

/** @internal */
const __ensureAlpha = (x, def = 1) => x != undefined ? clamp01(x) : def;

const hslCss = (src) => {
    const h = FF(fract(src[0]) * 360);
    const s = PC(clamp01(src[1]));
    const l = PC(clamp01(src[2]));
    const a = __ensureAlpha(src[3]);
    // TODO update to new syntax once CSS Color L4 is more widely supported
    // https://www.w3.org/TR/css-color-4/#serializing-lab-lch
    // https://test.csswg.org/harness/results/css-color-4_dev/grouped/ (test reports)
    // return `hsl(${h} ${s} ${l}` + (a < 1 ? `/${FF(a)})` : ")");
    return a < 1 ? `hsla(${h},${s},${l},${FF(a)})` : `hsl(${h},${s},${l})`;
};

/**
 * Similar to {@link clamp}, but calls `ensureHue` to fold (instead of
 * clamping) the hue into [0,1] interval.
 *
 * @param out - result
 * @param src - source color
 * @param alpha - alpha value
 */
const clampH = (out, src, alpha = 1) => setC4(out || src, fract(src[0]), clamp01(src[1]), clamp01(src[2]), __ensureAlpha(src[3], alpha));

const hsvHsl = (out, src) => {
    out = clampH(out || src, src);
    const s = out[1];
    const v = out[2];
    const l = ((2 - s) * v) / 2;
    out[2] = l;
    out[1] = l && l < 1 ? (s * v) / (l < 0.5 ? l * 2 : 2 - l * 2) : s;
    return out;
};

const hsvCss = (src) => hslCss(hsvHsl([], src));

const intArgb32Css = (src) => {
    const a = src >>> 24;
    return a < 255
        ? `rgba(${(src >> 16) & 0xff},${(src >> 8) & 0xff},${src & 0xff},${FF(a * INV8BIT)})`
        : `#${U24(src & 0xffffff)}`;
};

/**
 * Extracts 16-bit lane from given 32bit uint and returns as unsigned
 * half word [0x0000 .. 0xffff].
 *
 * - Lane #0: bits 16-31
 * - Lane #1: bits 0-15
 *
 * @param x -
 * @param lane - lane ID enum
 */
/**
 * Swaps bytes lanes 1 & 3 (i.e. bits 16-23 with bits 0-7)
 *
 * @param x
 */
const swapLane13 = (x) => ((x & 0xff) << 16) | ((x >> 16) & 0xff) | (x & 0xff00ff00);

/**
 * Alias for {@link intArgbAbgr}.
 */
const intAbgr32Argb32 = swapLane13;

const lchLab = (out, src) => {
    let { 1: c, 2: h } = src;
    h *= TAU;
    const a = __ensureAlpha(src[3]);
    return c > 0
        ? setC4(out || src, src[0], Math.cos(h) * c, Math.sin(h) * c, a)
        : setC4(out || src, src[0], 0, 0, a);
};

const transform = (x) => {
    const y = x ** 3;
    return y > 0.008856 ? y : (x - 16 / 116) / 7.787;
};
/**
 * Converts Lab to XYZ using provided white point (default: {@link D50}). Also
 * see {@link labXyzD65}.
 *
 * @param out
 * @param src
 * @param white
 */
const labXyz = (out, src, white = D50) => {
    const y = (src[0] + 0.16) / 1.16;
    return setC4(out || src, transform(src[1] / 5.0 + y) * white[0], transform(y) * white[1], transform(y - src[2] / 2.0) * white[2], __ensureAlpha(src[3]));
};
/**
 * Same as {@link labXyz}, but using hardcoded {@link D65} white point.
 *
 * @param out
 * @param src
 */
const labXyzD65 = (out, src) => labXyz(out, src, D65);

/** @internal */
const __mulV33 = (out, mat, src, clampOut = false) => {
    const x = dotS3(mat, src, 0, 0, 3);
    const y = dotS3(mat, src, 1, 0, 3);
    const z = dotS3(mat, src, 2, 0, 3);
    const a = __ensureAlpha(src[3]);
    return clampOut
        ? setC4(out || src, clamp01(x), clamp01(y), clamp01(z), a)
        : setC4(out || src, x, y, z, a);
};

/**
 * Converts CIE XYZ to RGB using provided transformation/whitepoint matrix
 * (default: {@link XYZ_RGB_D50}).
 *
 * {@link https://en.wikipedia.org/wiki/CIE_1931_color_space}
 *
 * @param out - result
 * @param src - source color
 */
const xyzRgb = (out, src, mat = XYZ_RGB_D50) => __mulV33(out, mat, src);
/**
 * Same as {@link xyzRgb}, but hard coded to use {@link D65} white point (via
 * {@link XYZ_RGB_D65} matrix).
 *
 * @param out
 * @param src
 */
const xyzRgbD65 = (out, src) => xyzRgb(out, src, XYZ_RGB_D65);

/**
 * Converts Lab to linear RGB (via XYZ) using {@link D50} white point.
 *
 * @param out
 * @param src
 */
const labRgb = (out, src) => xyzRgb(null, labXyz(out, src));
/**
 * Same as {@link labRgb}, but using {@link D65} white point.
 *
 * @param out
 * @param src
 */
const labRgbD65 = (out, src) => xyzRgbD65(null, labXyzD65(out, src));

/**
 * Maps a single linear RGB channel value to sRGB.
 *
 * {@link https://en.wikipedia.org/wiki/SRGB}
 *
 * @param x - channel value
 */
const linearSrgb = (x) => x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;

/**
 * Converts linear RGB to sRGB.
 *
 * @param out - result
 * @param src - source color
 */
const rgbSrgb = (out, src) => setC4(out || src, linearSrgb(src[0]), linearSrgb(src[1]), linearSrgb(src[2]), __ensureAlpha(src[3]));

/** @internal */
const __scale8bit = (x, shift = 0) => ((x < 0 ? 0 : x > 1 ? 1 : x) * 0xff + 0.5) << shift;

const srgbCss = (src) => {
    const r = __scale8bit(src[0]);
    const g = __scale8bit(src[1]);
    const b = __scale8bit(src[2]);
    const a = __ensureAlpha(src[3]);
    // TODO update to `rgb(${r} ${g} ${b}/${FF(a)})` (CSS L4 syntax)
    return a < 1
        ? `rgba(${r},${g},${b},${FF(a)})`
        : `#${U24((r << 16) | (g << 8) | b)}`;
};

const rgbCss = (src) => srgbCss(rgbSrgb([], src));

/** @internal */
const CSS_CONVERSIONS = {
    abgr32: (x) => intArgb32Css(intAbgr32Argb32(x[0])),
    argb32: (x) => intArgb32Css(x[0]),
    hsl: hslCss,
    hsv: hsvCss,
    // TODO temporarily disabled until CSS L4 is officially supported in browsers
    // currently serializing as sRGB CSS
    // lab50: labCss,
    // lab65: (x) => labCss(labLabD65_50([], x)),
    // lch: lchCss,
    lab50: (src) => srgbCss(rgbSrgb(null, labRgb([], src))),
    lab65: (src) => srgbCss(rgbSrgb(null, labRgbD65([], src))),
    lch: (src) => srgbCss(rgbSrgb(null, labRgb(null, lchLab([], src)))),
    rgb: rgbCss,
    srgb: srgbCss,
};
/**
 * Takes a color in one of the following formats and tries to convert it
 * to a CSS string:
 *
 * - any {@link TypedColor} instance
 * - raw sRGB(A) vector
 * - number (packed 0xaarrggbb int, MUST provide alpha channel)
 * - string (passthrough)
 *
 * @param col - source color
 */
const css = (src) => {
    let asCss;
    return isString(src)
        ? src
        : isNumber(src)
            ? intArgb32Css(src)
            : src.mode
                ? (asCss = CSS_CONVERSIONS[src.mode])
                    ? asCss(src)
                    : CSS_CONVERSIONS.rgb(convert([], src, "rgb", src.mode))
                : srgbCss(src);
};

let PRECISION = 2;
/** @internal */
const ff = (x) => (x === (x | 0) ? x : x.toFixed(PRECISION));
/** @internal */
const fpoint = (p) => ff(p[0]) + "," + ff(p[1]);
/** @internal */
const fpoints = (pts, sep = " ") => pts ? pts.map(fpoint).join(sep) : "";
const DEFAULT_NUMERIC_IDS = [
    "font-size",
    "opacity",
    "stroke-width",
    "stroke-miterlimit",
];
/**
 * Takes an attributes object and a number of attrib IDs whose values should be
 * formatted using {@link ff}. Mutates and returns `attribs` object.
 *
 * @param attribs
 * @param ids
 *
 * @internal
 */
const numericAttribs = (attribs, ids) => {
    let v;
    for (let id of DEFAULT_NUMERIC_IDS.concat(ids)) {
        typeof (v = attribs[id]) === "number" && (attribs[id] = ff(v));
    }
    return attribs;
};
/**
 * Takes an attributes object and converts any `fill`, `stroke` or
 * transformation attributes, i.e. `transform`, `rotate`, `scale`, `translate`.
 *
 * @remarks
 * If the element has a `transform` attrib, conversion of the other attribs will
 * be skipped, else the values are assumed to be either strings or:
 *
 * - `transform`: 6-element numeric array (mat23)
 * - `translate`: 2-element array
 * - `rotate`: number (angle in radians)
 * - `scale`: number (uniform scale) or 2-elem array
 *
 * If no `transform` is given, the resulting transformation order will always be
 * TRS. Any string values given will be used as-is and therefore need to be
 * complete, e.g. `{ rotate: "rotate(60)" }`
 *
 * For color related attribs (`fill`, `stroke`), if given value is array-like, a
 * number or an {@link @thi.ng/color#IColor} instance, it will be converted into
 * a CSS color string using {@link @thi.ng/color#asCSS}.
 *
 * String color attribs prefixed with `$` are replaced with `url(#...)` refs
 * (used for referencing gradients).
 *
 * Additional attribute names given (via rest args) will be formatted as numeric
 * values (using configured precision, see {@link setPrecision}). Formatting is
 * done via {@link numericAttribs}.
 *
 * Returns updated attribs or `undefined` if `attribs` itself is null-ish.
 *
 * @param attribs - attributes object
 * @param numericIDs - numeric attribute names
 *
 * @internal
 */
const fattribs = (attribs, ...numericIDs) => {
    if (!attribs)
        return;
    const res = ftransforms(attribs);
    let v;
    (v = attribs.fill) && (res.fill = fcolor(v));
    (v = attribs.stroke) && (res.stroke = fcolor(v));
    return numericAttribs(attribs, numericIDs);
};
/**
 * Converts any transformation related attribs.
 *
 * {@link fattribs}
 *
 * @param attribs - attributes object
 *
 * @internal
 */
const ftransforms = (attribs) => {
    let v;
    if ((v = attribs.transform) ||
        attribs.translate ||
        attribs.scale ||
        attribs.rotate) {
        if (v) {
            attribs.transform = !isString(v)
                ? `matrix(${[...v].map(ff).join(" ")})`
                : v;
            delete attribs.translate;
            delete attribs.rotate;
            delete attribs.scale;
        }
        else {
            attribs.transform = buildTransform(attribs);
        }
    }
    return attribs;
};
/**
 * @internal
 */
const buildTransform = (attribs) => {
    const tx = [];
    let v;
    if ((v = attribs.translate)) {
        tx.push(isString(v) ? v : `translate(${ff(v[0])} ${ff(v[1])})`);
        delete attribs.translate;
    }
    if ((v = attribs.rotate)) {
        tx.push(isString(v) ? v : `rotate(${ff((v * 180) / Math.PI)})`);
        delete attribs.rotate;
    }
    if ((v = attribs.scale)) {
        tx.push(isString(v)
            ? v
            : isArrayLike(v)
                ? `scale(${ff(v[0])} ${ff(v[1])})`
                : `scale(${ff(v)})`);
        delete attribs.scale;
    }
    return tx.join(" ");
};
/**
 * Attempts to convert a single color attrib value. If `col` is prefixed with
 * `$`, the value will be converted into a `url(#...)` reference.
 *
 * {@link fattribs}
 *
 * @param col - color value
 *
 * @internal
 */
const fcolor = (col) => isString(col)
    ? col[0] === "$"
        ? `url(#${col.substr(1)})`
        : col
    : css(col);
/** @internal */
const withoutKeys = (src, keys) => {
    const dest = {};
    for (let k in src) {
        src.hasOwnProperty(k) && !keys.has(k) && (dest[k] = src[k]);
    }
    return dest;
};

const circle$1 = (p, r, attribs, ...body) => [
    "circle",
    fattribs({
        ...attribs,
        cx: ff(p[0]),
        cy: ff(p[1]),
        r: ff(r),
    }),
    ...body,
];

const ellipse$1 = (p, rx, ry, attribs, ...body) => [
    "ellipse",
    fattribs({
        ...attribs,
        cx: ff(p[0]),
        cy: ff(p[1]),
        rx: ff(rx),
        ry: ff(ry),
    }),
    ...body,
];

const RE_ALPHA_COLOR = /(rgb|hsl)a\(([a-z0-9.-]+),([0-9.%]+),([0-9.%]+),([0-9.]+)\)/;
const gradient = (type, attribs, stops) => [
    type,
    fattribs(attribs),
    ...stops.map(gradientStop),
];
const gradientStop = ([offset, col]) => {
    col = fcolor(col);
    // use stop-opacity attrib for safari compatibility
    // https://stackoverflow.com/a/26220870/294515
    let opacity;
    const parts = RE_ALPHA_COLOR.exec(col);
    if (parts) {
        col = `${parts[1]}(${parts[2]},${parts[3]},${parts[4]})`;
        opacity = parts[5];
    }
    return ["stop", { offset, "stop-color": col, "stop-opacity": opacity }];
};
const linearGradient = (id, from, to, stops, attribs) => gradient("linearGradient", {
    ...attribs,
    id,
    x1: ff(from[0]),
    y1: ff(from[1]),
    x2: ff(to[0]),
    y2: ff(to[1]),
}, stops);
const radialGradient = (id, from, to, fr, r, stops, attribs) => gradient("radialGradient", {
    ...attribs,
    id,
    fx: ff(from[0]),
    fy: ff(from[1]),
    cx: ff(to[0]),
    cy: ff(to[1]),
    fr: ff(fr),
    r: ff(r),
}, stops);

const image = (pos, url, attribs, ...body) => [
    "image",
    fattribs({
        ...attribs,
        // TODO replace w/ SVG2 `href` once Safari supports it
        "xlink:href": url,
        x: ff(pos[0]),
        y: ff(pos[1]),
    }),
    ...body,
];

const line$1 = (a, b, attribs, ...body) => [
    "line",
    fattribs({
        ...attribs,
        x1: ff(a[0]),
        y1: ff(a[1]),
        x2: ff(b[0]),
        y2: ff(b[1]),
    }),
    ...body,
];
const hline = (y, attribs) => line$1([-1e6, y], [1e6, y], attribs);
const vline = (x, attribs) => line$1([x, -1e6], [x, 1e6], attribs);

const DEG = 180 / Math.PI;
const path$1 = (segments, attribs, ...body) => {
    let res = [];
    for (let seg of segments) {
        res.push(seg[0]);
        switch (seg[0].toLowerCase()) {
            case "a":
                res.push([
                    // rx
                    ff(seg[1]),
                    // ry
                    ff(seg[2]),
                    // x-axis (theta)
                    ff(seg[3] * DEG),
                    // xl
                    seg[4] ? 1 : 0,
                    // clockwise
                    seg[5] ? 1 : 0,
                    // target xy
                    ff(seg[6][0]),
                    ff(seg[6][1]),
                ].join(","));
                break;
            case "h":
            case "v":
                res.push(ff(seg[1]));
                break;
            case "m":
            case "l":
                res.push(fpoint(seg[1]));
                break;
            case "z":
                break;
            default:
                res.push(fpoints(seg.slice(1), ","));
        }
    }
    return ["path", fattribs({ ...attribs, d: res.join("") }), ...body];
};

/**
 * Shape instancing group.
 *
 * @remarks
 * The `shape` arg can be an SVG shape `#id` defined elsewhere in the
 * document or set to `circle` or `rect` (default).
 *
 * The `size` arg is only used for the latter two shape types and
 * defines the radius or width respectively.
 *
 * @param pts - points
 * @param shape - shape type
 * @param size - point size/radius
 * @param attribs - attributes
 */
const points$1 = (pts, shape, size = 1, attribs, ...body) => {
    const group = [
        "g",
        fattribs(withoutKeys(attribs, new Set(["shape", "size"]))),
        ...body,
    ];
    const href = buildSymbol(group, shape, size);
    for (let p of pts) {
        // TODO replace w/ SVG2 `href` once Safari supports it
        group.push(["use", { "xlink:href": href, x: ff(p[0]), y: ff(p[1]) }]);
    }
    return group;
};
/**
 * Similar to {@link points}, but takes points from a single large flat
 * buffer of coordinates with arbitrary striding.
 *
 * @remarks
 * In addition to `shape` and `size`, the following attribs can be used
 * to define the index range and strides:
 *
 * - `start` - start index (default: 0)
 * - `num` - number of points (default: buffer length/2)
 * - `cstride` - component stride (default: 1)
 * - `estride` - element stride (default: 2)
 *
 * @param pts - flat point buffer
 * @param shape - shape type
 * @param size - point size/radius
 * @param attribs - other attributes
 */
const packedPoints = (pts, shape, size = 1, attribs, ...body) => {
    attribs = {
        start: 0,
        cstride: 1,
        estride: 2,
        ...attribs,
    };
    const { start, cstride, estride } = attribs;
    let num = attribs && attribs.num != null
        ? attribs.num
        : ((pts.length - start) / estride) | 0;
    const group = [
        "g",
        fattribs(withoutKeys(attribs, new Set(["start", "cstride", "estride", "shape", "size", "num"]))),
        ...body,
    ];
    const href = buildSymbol(group, shape, size);
    for (let i = start; num-- > 0; i += estride) {
        // TODO replace w/ SVG2 `href` once Safari supports it
        group.push([
            "use",
            { "xlink:href": href, x: ff(pts[i]), y: ff(pts[i + cstride]) },
        ]);
    }
    return group;
};
const buildSymbol = (group, shape, size) => {
    let href;
    if (!shape || shape[0] !== "#") {
        href = "_" + ((Math.random() * 1e6) | 0).toString(36);
        group.push(["g", { opacity: 0 }, buildShape(shape, href, size)]);
        href = "#" + href;
    }
    else {
        href = shape;
    }
    return href;
};
const buildShape = (shape, id, r) => {
    const rf = ff(r);
    if (shape === "circle") {
        return ["circle", { id, cx: 0, cy: 0, r: rf }];
    }
    const rf2 = ff(-r / 2);
    return ["rect", { id, x: rf2, y: rf2, width: rf, height: rf }];
};

const polygon$1 = (pts, attribs, ...body) => [
    "polygon",
    fattribs({
        ...attribs,
        points: fpoints(pts),
    }),
    ...body,
];

const polyline$1 = (pts, attribs, ...body) => [
    "polyline",
    fattribs({
        fill: "none",
        points: fpoints(pts),
        ...attribs,
    }),
    ...body,
];

const roundedRect$1 = (p, width, height, rx, ry, attribs, ...body) => {
    attribs = fattribs({
        ...attribs,
        x: ff(p[0]),
        y: ff(p[1]),
        width: ff(width),
        height: ff(height),
    });
    if (rx > 0 || ry > 0) {
        attribs.rx = ff(rx);
        attribs.ry = ff(ry);
    }
    return ["rect", attribs, ...body];
};

const text$1 = (p, body, attribs, ...xs) => [
    "text",
    fattribs({
        ...attribs,
        x: ff(p[0]),
        y: ff(p[1]),
    }),
    body,
    ...xs,
];

const ATTRIB_ALIASES = {
    alpha: "opacity",
    dash: "stroke-dasharray",
    dashOffset: "stroke-dashoffset",
    lineCap: "stroke-linecap",
    lineJoin: "stroke-linejoin",
    miterLimit: "stroke-miterlimit",
    weight: "stroke-width",
};
const TEXT_ALIGN = {
    left: "start",
    right: "end",
    center: "middle",
    start: "start",
    end: "end",
};
const BASE_LINE = {
    top: "text-top",
    bottom: "text-bottom",
};
/**
 * Takes a normalized hiccup tree of {@link @thi.ng/geom# | @thi.ng/geom} or
 * {@link @thi.ng/hdom-canvas# | @thi.ng/hdom-canvas} shape definitions and recursively
 * converts it into an hiccup flavor which is compatible for SVG
 * serialization. This conversion also involves translation & reorg of
 * various attributes. Returns new tree. The original remains untouched,
 * as will any unrecognized tree/shape nodes.
 *
 * @param tree - shape tree
 */
const convertTree = (tree) => {
    if (tree == null)
        return null;
    if (implementsFunction(tree, "toHiccup")) {
        return convertTree(tree.toHiccup());
    }
    const type = tree[0];
    if (isArray(type)) {
        return tree.map(convertTree);
    }
    let attribs = convertAttribs(tree[1]);
    switch (tree[0]) {
        case "svg":
        case "defs":
        case "a":
        case "g": {
            const res = [type, fattribs(attribs)];
            for (let i = 2, n = tree.length; i < n; i++) {
                const c = convertTree(tree[i]);
                c != null && res.push(c);
            }
            return res;
        }
        case "linearGradient":
            return linearGradient(attribs.id, attribs.from, attribs.to, tree[2], {
                gradientUnits: attribs.gradientUnits || "userSpaceOnUse",
                gradientTransform: attribs.gradientTransform,
            });
        case "radialGradient":
            return radialGradient(attribs.id, attribs.from, attribs.to, attribs.r1, attribs.r2, tree[2], {
                gradientUnits: attribs.gradientUnits || "userSpaceOnUse",
                gradientTransform: attribs.gradientTransform,
            });
        case "circle":
            return circle$1(tree[2], tree[3], attribs, ...tree.slice(4));
        case "ellipse":
            return ellipse$1(tree[2], tree[3][0], tree[3][1], attribs, ...tree.slice(4));
        case "rect": {
            const r = tree[5] || 0;
            return roundedRect$1(tree[2], tree[3], tree[4], r, r, attribs, ...tree.slice(6));
        }
        case "line":
            return line$1(tree[2], tree[3], attribs, ...tree.slice(4));
        case "hline":
            return hline(tree[2], attribs);
        case "vline":
            return vline(tree[2], attribs);
        case "polyline":
            return polyline$1(tree[2], attribs, ...tree.slice(3));
        case "polygon":
            return polygon$1(tree[2], attribs, ...tree.slice(3));
        case "path":
            return path$1(tree[2], attribs, ...tree.slice(3));
        case "text":
            return text$1(tree[2], tree[3], attribs, ...tree.slice(4));
        case "img":
            return image(tree[3], tree[2].src, attribs, ...tree.slice(4));
        case "points":
            return points$1(tree[2], attribs.shape, attribs.size, attribs, ...tree.slice(3));
        case "packedPoints":
            return packedPoints(tree[2], attribs.shape, attribs.size, attribs, ...tree.slice(3));
        default:
            return tree;
    }
};
const convertAttribs = (attribs) => {
    const res = {};
    if (!attribs)
        return res;
    // convertTransforms(res, attribs);
    for (let id in attribs) {
        const v = attribs[id];
        const aid = ATTRIB_ALIASES[id];
        if (aid) {
            res[aid] = v;
        }
        else {
            convertAttrib(res, id, v);
        }
    }
    return res;
};
const convertAttrib = (res, id, v) => {
    switch (id) {
        case "font": {
            const i = v.indexOf(" ");
            res["font-size"] = v.substr(0, i);
            res["font-family"] = v.substr(i + 1);
            break;
        }
        case "align":
            res["text-anchor"] = TEXT_ALIGN[v];
            break;
        case "baseline":
            res["dominant-baseline"] = BASE_LINE[v] || v;
            break;
        // case "filter":
        // TODO needs to be translated into <filter> def first
        // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
        // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter
        // break;
        default:
            res[id] = v;
    }
};

const XML_SVG = "http://www.w3.org/2000/svg";
const XML_XLINK = "http://www.w3.org/1999/xlink";

/**
 * Defines an <svg> root element with default XML namespaces. By default
 * currently still defaults to SVG version to 1.1 to support Safari and other
 * legacy tooling.
 *
 * @remarks
 * If the `convert: true` attrib is given, all body elements will be
 * automatically converted using {@link convertTree}. The `convert` attrib is
 * NOT going to be serialized in the final output.
 *
 * @param attribs - attributes object
 * @param body - shape primitives
 */
const svg = (attribs, ...body) => {
    attribs = fattribs({
        version: "1.1",
        xmlns: XML_SVG,
        "xmlns:xlink": XML_XLINK,
        ...attribs,
    }, "width", "height", "stroke-width");
    if (attribs.convert) {
        delete attribs.convert;
        body = body.map(convertTree);
    }
    return ["svg", attribs, ...body];
};

/** @internal */
const PROC_TAGS = {
    "?xml": "?>\n",
    "!DOCTYPE": ">\n",
    "!ENTITY": ">\n",
    "!ELEMENT": ">\n",
    "!ATTLIST": ">\n",
};
/** @internal */
const RE_TAG = /^([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?$/;
/** @internal */
const COMMENT = "__COMMENT__";
/** @internal */
const CDATA = "!CDATA";
/** @internal */
const NO_SPANS = {
    button: 1,
    option: 1,
    script: 1,
    style: 1,
    text: 1,
    textarea: 1,
    title: 1,
};
const tagMap = (tags) => tags.split(" ").reduce((acc, x) => ((acc[x] = true), acc), {});
/** @internal */
// tslint:disable-next-line
const SVG_TAGS = tagMap("animate animateColor animateMotion animateTransform circle clipPath color-profile defs desc discard ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font foreignObject g image line linearGradient marker mask metadata mpath path pattern polygon polyline radialGradient rect set stop style svg switch symbol text textPath title tref tspan use view");
/** @internal */
// tslint:disable-next-line
const VOID_TAGS = tagMap("area base br col command embed hr img input keygen link meta param source stop track use wbr ?xml");
/** @internal */
// tslint:disable-next-line
const NO_CLOSE_EMPTY = tagMap("animate circle ellipse line path polygon polyline rect");
/** @internal */
const ATTRIB_JOIN_DELIMS = {
    accept: ",",
    sizes: ",",
    srcset: ",",
};

const css$1 = (rules) => {
    let css = "";
    let v;
    for (let r in rules) {
        v = deref(rules[r]);
        isFunction(v) && (v = v(rules));
        v != null && (css += `${r}:${v};`);
    }
    return css;
};

/**
 * Takes a space separated string of existing CSS class names and merges
 * it with `val`, which is either another string of class names, an
 * object of booleans or an `IDeref` evaluating to either. Returns
 * updated class string.
 *
 * @remarks
 * If `val` evaluates to a string, it will be appended to `existing`.
 *
 * If `val` is an object, its keys are used as class names and their
 * values indicate if the class should be added or removed from the
 * existing set.
 *
 * @example
 * ```ts
 * mergeClasses("foo bar", { foo: false, baz: true })
 * // "bar baz"
 *
 * mergeClasses("foo bar", "baz");
 * // "baz"
 * ```
 *
 * @param existing
 * @param val
 */
const mergeClasses = (existing, val) => {
    val = deref(val);
    if (val == null)
        return existing;
    if (isString(val))
        return existing + " " + val;
    const classes = new Set(existing.split(" "));
    for (let id in val) {
        deref(val[id]) ? classes.add(id) : classes.delete(id);
    }
    return [...classes].join(" ");
};
/**
 * Takes an attrib object and optional element ID and CSS class names from Emmet-style
 * hiccup tag, then transforms and merges definitions, returns attribs.
 *
 * @param attribs
 * @param id
 * @param classes
 */
const mergeEmmetAttribs = (attribs, id, classes) => {
    id && (attribs.id = id);
    let aclass = deref(attribs.class);
    if (classes) {
        classes = classes.replace(/\./g, " ");
        attribs.class = aclass ? mergeClasses(classes, aclass) : classes;
    }
    else if (aclass) {
        attribs.class = isString(aclass) ? aclass : mergeClasses("", aclass);
    }
    return attribs;
};

const normalize = (tag) => {
    let name = tag[0];
    let match;
    const hasAttribs = isPlainObject(tag[1]);
    const attribs = hasAttribs ? { ...tag[1] } : {};
    if (!isString(name) || !(match = RE_TAG.exec(name))) {
        illegalArgs(`"${name}" is not a valid tag name`);
    }
    name = match[1];
    mergeEmmetAttribs(attribs, match[2], match[3]);
    if (tag.length > 1) {
        tag = tag.slice(hasAttribs ? 2 : 1).filter((x) => x != null);
        if (tag.length > 0) {
            return [name, attribs, tag];
        }
    }
    return [name, attribs];
};

/**
 * Takes an object of RDF/XML prefixes and returns formatted string for
 * the RDFa `prefix` attribute.
 *
 * @example
 * ```ts
 * import { foaf, xsd } from "@thi.ng/prefixes";
 *
 * formatPrefixes({ foaf, xsd })
 * // "foaf: http://xmlns.com/foaf/0.1/ rdf: http://www.w3.org/2001/XMLSchema#"
 * ```
 *
 * @param prefixes -
 */
const formatPrefixes = (prefixes) => Object.keys(prefixes)
    .reduce((acc, k) => (acc.push(`${k}: ${prefixes[k]}`), acc), [])
    .join(" ");

/**
 * Recursively normalizes and serializes given tree as HTML/SVG/XML
 * string. Expands any embedded component functions with their results.
 *
 * @remarks
 * Each node of the input tree can have one of the following input
 * forms:
 *
 * ```js
 * ["tag", ...]
 * ["tag#id.class1.class2", ...]
 * ["tag", {other: "attrib"}, ...]
 * ["tag", {...}, "body", function, ...]
 * [function, arg1, arg2, ...]
 * [{render: (ctx,...) => [...]}, args...]
 * iterable
 * ```
 *
 * Tags can be defined in "Zencoding" convention, e.g.
 *
 * ```js
 * ["div#foo.bar.baz", "hi"] // <div id="foo" class="bar baz">hi</div>
 * ```
 *
 * The presence of the attributes object (2nd array index) is optional.
 * Any attribute values, incl. functions are allowed. If the latter, the
 * function is called with the full attribs object as argument and the
 * return value is used for the attribute. This allows for the dynamic
 * creation of attrib values based on other attribs. The only exception
 * to this are event attributes, i.e. attribute names starting with
 * "on". Function values assigned to event attributes will be omitted
 * from the output.
 *
 * ```js
 * ["div#foo", { bar: (attribs) => attribs.id + "-bar" }]
 * // <div id="foo" bar="foo-bar"></div>
 * ```
 *
 * The `style` attribute can ONLY be defined as string or object.
 *
 * ```js
 * ["div", {style: {color: "red", background: "#000"}}]
 * // <div style="color:red;background:#000;"></div>
 * ```
 *
 * Boolean attribs are serialized in HTML5 syntax (present or not).
 * `null`, `undefined` or empty string attrib values are ignored.
 *
 * Any `null` or `undefined` array values (other than in head position)
 * will also be removed, unless a function is in head position.
 *
 * A function in head position of a node acts as a mechanism for
 * component composition & delayed execution. The function will only be
 * executed at serialization time. In this case the optional global
 * context object and all other elements of that node / array are passed
 * as arguments when that function is called. The return value the
 * function MUST be a valid new tree (or `undefined`).
 *
 * If the `ctx` object it'll be passed to each embedded component fns.
 * Optionally call {@link derefContext} prior to {@link serialize} to
 * auto-deref context keys with values implementing the
 * {@link @thi.ng/api#IDeref} interface.
 *
 * ```js
 * const foo = (ctx, a, b) => ["div#" + a, ctx.foo, b];
 *
 * serialize([foo, "id", "body"], { foo: { class: "black" } })
 * // <div id="id" class="black">body</div>
 * ```
 *
 * Functions located in other positions are called ONLY with the global
 * context arg and can return any (serializable) value (i.e. new trees,
 * strings, numbers, iterables or any type with a suitable
 * `.toString()`, `.toHiccup()` or `.deref()` implementation).
 *
 * If the optional `span` flag is true (default: false), all text
 * content will be wrapped in <span> elements (this is to ensure DOM
 * compatibility with hdom). The only elements for spans are never
 * created are listed in `NO_SPANS` in `api.ts`.
 *
 * If the optional `keys` flag is true (default: false), all elements
 * will have an autogenerated `key` attribute injected. If `span` is
 * enabled, `keys` will be enabled by default too (since in this case we
 * assume the output is meant to be compatible with
 * {@link @thi.ng/hdom# | @thi.ng/hdom}).
 *
 * hiccup & hdom control attributes (i.e. attrib names prefixed with
 * `__`) will be omitted from the output. The only control attrib
 * supported by this package is `__serialize`. If set to `false`, the
 * entire tree branch will be excluded from the output.
 *
 * Single or multiline comments can be included using the special
 * `COMMENT` tag (`__COMMENT__`) (always WITHOUT attributes!).
 *
 * ```
 * [COMMENT, "Hello world"]
 * // <!-- Hello world -->
 *
 * [COMMENT, "Hello", "world"]
 * <!--
 *     Hello
 *     world
 * -->
 * ```
 *
 * Currently, the only processing / DTD instructions supported are:
 *
 * - `?xml`
 * - `!DOCTYTPE`
 * - `!ELEMENT`
 * - `!ENTITY`
 * - `!ATTLIST`
 *
 * These are used as follows (attribs are only allowed for `?xml`, all
 * others only accept a body string which is taken as is):
 *
 * ```
 * ["?xml", { version: "1.0", standalone: "yes" }]
 * // <?xml version="1.0" standalone="yes"?>
 *
 * ["!DOCTYPE", "html"]
 * // <!DOCTYPE html>
 * ```
 *
 * @param tree - hiccup elements / component tree
 * @param ctx - arbitrary user context object
 * @param escape - auto-escape entities
 * @param span - use spans for text content
 * @param keys - attach key attribs
 */
const serialize = (tree, ctx, escape = false, span = false, keys = span, path = [0]) => _serialize(tree, ctx, escape, span, keys, path);
const _serialize = (tree, ctx, esc, span, keys, path) => tree == null
    ? ""
    : Array.isArray(tree)
        ? serializeElement(tree, ctx, esc, span, keys, path)
        : isFunction(tree)
            ? _serialize(tree(ctx), ctx, esc, span, keys, path)
            : implementsFunction(tree, "toHiccup")
                ? _serialize(tree.toHiccup(ctx), ctx, esc, span, keys, path)
                : isDeref(tree)
                    ? _serialize(tree.deref(), ctx, esc, span, keys, path)
                    : isNotStringAndIterable(tree)
                        ? serializeIter(tree, ctx, esc, span, keys, path)
                        : ((tree = esc ? escapeEntities(String(tree)) : String(tree)), span)
                            ? `<span${keys ? ` key="${path.join("-")}"` : ""}>${tree}</span>`
                            : tree;
const serializeElement = (tree, ctx, esc, span, keys, path) => {
    let tag = tree[0];
    return !tree.length
        ? ""
        : isFunction(tag)
            ? _serialize(tag.apply(null, [ctx, ...tree.slice(1)]), ctx, esc, span, keys, path)
            : implementsFunction(tag, "render")
                ? _serialize(tag.render.apply(null, [ctx, ...tree.slice(1)]), ctx, esc, span, keys, path)
                : tag === COMMENT
                    ? serializeComment(tree)
                    : tag == CDATA
                        ? serializeCData(tree)
                        : isString(tag)
                            ? serializeTag(tree, ctx, esc, span, keys, path)
                            : isNotStringAndIterable(tree)
                                ? serializeIter(tree, ctx, esc, span, keys, path)
                                : illegalArgs(`invalid tree node: ${tree}`);
};
const serializeTag = (tree, ctx, esc, span, keys, path) => {
    tree = normalize(tree);
    const attribs = tree[1];
    if (attribs.__skip || attribs.__serialize === false)
        return "";
    keys && attribs.key === undefined && (attribs.key = path.join("-"));
    const tag = tree[0];
    const body = tree[2]
        ? serializeBody(tag, tree[2], ctx, esc, span, keys, path)
        : !VOID_TAGS[tag] && !NO_CLOSE_EMPTY[tag]
            ? `></${tag}>`
            : PROC_TAGS[tag] || "/>";
    return `<${tag}${serializeAttribs(attribs, esc)}${body}`;
};
const serializeAttribs = (attribs, esc) => {
    let res = "";
    for (let a in attribs) {
        if (a.startsWith("__"))
            continue;
        const v = serializeAttrib(attribs, a, deref(attribs[a]), esc);
        v != null && (res += v);
    }
    return res;
};
const serializeAttrib = (attribs, a, v, esc) => {
    return v == null
        ? null
        : isFunction(v) && (/^on\w+/.test(a) || (v = v(attribs)) == null)
            ? null
            : v === true
                ? " " + a
                : v === false
                    ? null
                    : a === "data"
                        ? serializeDataAttribs(v, esc)
                        : attribPair(a, v, esc);
};
const attribPair = (a, v, esc) => {
    v =
        a === "style" && isPlainObject(v)
            ? css$1(v)
            : a === "prefix" && isPlainObject(v)
                ? formatPrefixes(v)
                : isArray(v)
                    ? v.join(ATTRIB_JOIN_DELIMS[a] || " ")
                    : v.toString();
    return v.length ? ` ${a}="${esc ? escapeEntities(v) : v}"` : null;
};
const serializeDataAttribs = (data, esc) => {
    let res = "";
    for (let id in data) {
        let v = deref(data[id]);
        isFunction(v) && (v = v(data));
        v != null && (res += ` data-${id}="${esc ? escapeEntities(v) : v}"`);
    }
    return res;
};
const serializeBody = (tag, body, ctx, esc, span, keys, path) => {
    if (VOID_TAGS[tag]) {
        illegalArgs(`No body allowed in tag: ${tag}`);
    }
    const proc = PROC_TAGS[tag];
    let res = proc ? " " : ">";
    span = span && !proc && !NO_SPANS[tag];
    for (let i = 0, n = body.length; i < n; i++) {
        res += _serialize(body[i], ctx, esc, span, keys, [...path, i]);
    }
    return res + (proc || `</${tag}>`);
};
const serializeComment = (tree) => tree.length > 2
    ? `\n<!--\n${tree
        .slice(1)
        .map((x) => "    " + x)
        .join("\n")}\n-->\n`
    : `\n<!-- ${tree[1]} -->\n`;
const serializeCData = (tree) => `<![CDATA[\n${tree.slice(1).join("\n")}\n]]>`;
const serializeIter = (iter, ctx, esc, span, keys, path) => {
    const res = [];
    const p = path.slice(0, path.length - 1);
    let k = 0;
    for (let i of iter) {
        res.push(_serialize(i, ctx, esc, span, keys, [...p, k++]));
    }
    return res.join("");
};

const bounds = (pos, r, axis, start, end) => {
    const min = set2([], MAX2);
    const max = set2([], MIN2);
    const p = [];
    const update = (theta) => {
        pointAtTheta(pos, r, axis, theta, p);
        min2(null, min, p);
        max2(null, max, p);
    };
    update(start);
    update(end);
    if (start > end) {
        const t = start;
        start = end;
        end = t;
    }
    // include multiples of π/2 within [start,end] interval
    for (let i = roundTo(start, HALF_PI), j = roundTo(end, HALF_PI); i < j; i += HALF_PI) {
        inRange(i, start, end) && update(i);
    }
    return [min, max];
};

/**
 * Computes the nD bounds of given vectors. `vmin` should be initialized
 * to `+∞` and `vmax` to `-∞` (e.g. use copies of `MIN*` / `MAX*`
 * constants defined in thi.ng/vectors).
 *
 * @example
 * ```ts
 * points = [[-1,-2], [5,-3], [0,4]];
 *
 * bounds(points, [...MAX2], [...MIN2])
 * // [[-1,-3],[5,4]]
 * ```
 *
 * Returns 2-tuple of modified `[vmin, vmax]`.
 *
 * @param pts - point
 * @param vmin - min result (pre-initialized to `+∞`)
 * @param vmax - max result (pre-initialized to `-∞`)
 */
const bounds$1 = (pts, vmin, vmax) => {
    for (let i = pts.length; i-- > 0;) {
        const p = pts[i];
        min$1(null, vmin, p);
        max$1(null, vmax, p);
    }
    return [vmin, vmax];
};

/**
 * Computes cubic spline bounds for a single vector component.
 *
 * Based on:
 * {@link http://www.iquilezles.org/www/articles/bezierbbox/bezierbbox.htm}
 *
 * @param min - min accumulator
 * @param max - max accumulator
 * @param i - vector component
 * @param pa - control point 1
 * @param pb - control point 2
 * @param pc - control point 3
 * @param pd - control point 4
 */
const axisBounds = (min, max, i, pa, pb, pc, pd) => {
    min[i] = Math.min(pa, pd);
    max[i] = Math.max(pa, pd);
    const k0 = -pa + pb;
    const k1 = pa - 2 * pb + pc;
    const k2 = -pa + 3 * pb - 3 * pc + pd;
    let h = k1 * k1 - k0 * k2;
    if (h > 0) {
        h = Math.sqrt(h);
        const update = (t) => {
            if (t > 0 && t < 1) {
                const q = mixCubic$1(pa, pb, pc, pd, t);
                min[i] = Math.min(min[i], q);
                max[i] = Math.max(max[i], q);
            }
        };
        update(k0 / (-k1 - h));
        update(k0 / (-k1 + h));
    }
};
const cubicBounds = (a, b, c, d) => {
    const min = [];
    const max = [];
    for (let i = a.length; i-- > 0;) {
        axisBounds(min, max, i, a[i], b[i], c[i], d[i]);
    }
    return [min, max];
};

const solveQuadratic = (a, b, c) => {
    const t = clamp01((a - b) / (a - 2.0 * b + c));
    const s = 1 - t;
    return s * s * a + 2.0 * s * t * b + t * t * c;
};
const inBounds = (p, min, max) => {
    for (let i = p.length; i-- > 0;) {
        if (!inRange(p[i], min[i], max[i]))
            return false;
    }
    return true;
};
const quadraticBounds = (a, b, c) => {
    const mi = min$1([], a, c);
    const ma = max$1([], a, c);
    if (!inBounds(b, mi, ma)) {
        const q = [];
        for (let i = a.length; i-- > 0;) {
            q[i] = solveQuadratic(a[i], b[i], c[i]);
        }
        min$1(null, mi, q);
        max$1(null, ma, q);
    }
    return [mi, ma];
};

/**
 * Computes the total bounds for the given shape collection, which
 * should either contain only 2D or 3D types. No mixed dimensions are
 * allowed! Currently the {@link bounds} function MUST be passed in as
 * arg to avoid circular module dependencies.
 *
 * @param shapes - input shapes
 * @param bounds - bbox function
 */
const __collBounds = (shapes, bounds) => {
    let n = shapes.length - 1;
    if (n < 0)
        return;
    let b = bounds(shapes[n]);
    if (!b)
        return;
    let { pos, size } = b;
    for (; n-- > 0;) {
        b = bounds(shapes[n]);
        if (!b)
            continue;
        [pos, size] = __unionBounds(pos, size, b.pos, b.size);
    }
    return [pos, size];
};
/**
 * Takes the position and size vectors of 2
 * {@link @thi.ng/geom-api#AABBLike}s and returns 2-tuple of
 * `[pos,size]` of their union bounds.
 *
 * @param apos - bbox 1 min pos
 * @param asize - bbox1 size
 * @param bpos - bbox 2 min pos
 * @param bsize - bbox 2 size
 */
const __unionBounds = (apos, asize, bpos, bsize) => {
    const p = add([], apos, asize);
    const q = add([], bpos, bsize);
    const pos = min$1([], apos, bpos);
    return [pos, sub(null, max$1(null, p, q), pos)];
};

const bounds$2 = defmulti(__dispatch, {
    aabb: "rect",
    poly: "points",
    polyline: "points",
    quad: "points",
    tri: "points",
}, {
    arc: ($) => rectFromMinMax(...bounds($.pos, $.r, $.axis, $.start, $.end)),
    circle: ($) => new Rect(subN2([], $.pos, $.r), mulN2(null, [2, 2], $.r)),
    cubic: ({ points }) => rectFromMinMax(...cubicBounds(points[0], points[1], points[2], points[3])),
    ellipse: ($) => new Rect(sub2([], $.pos, $.r), mul2(null, [2, 2], $.r)),
    group: ($) => {
        const res = __collBounds($.children, bounds$2);
        return res ? new Rect(...res) : undefined;
    },
    line: ({ points: [a, b] }) => rectFromMinMax(min$1([], a, b), max$1([], a, b)),
    path: (path) => {
        const b = __collBounds([
            ...iterator1(comp(map((s) => s.geo), filter((s) => !!s)), path.segments),
        ], bounds$2);
        return b ? new Rect(...b) : undefined;
    },
    points: ($) => rectFromMinMax(...bounds$1($.points, set2([], MAX2), set2([], MIN2))),
    points3: ($) => aabbFromMinMax(...bounds$1($.points, set3([], MAX3), set3([], MIN3))),
    quadratic: ({ points }) => rectFromMinMax(...quadraticBounds(points[0], points[1], points[2])),
    rect: ($) => $.copy(),
    text: ($) => new Rect(set2([], $.pos), [0, 0]),
});

const asSvg = (...args) => args.map((x) => serialize(convertTree(x))).join("");
const svgDoc = (attribs, ...xs) => {
    if (xs.length > 0) {
        if (!attribs || !attribs.viewBox) {
            const cbounds = __collBounds(xs, bounds$2);
            if (cbounds) {
                const [[x, y], [w, h]] = cbounds;
                attribs = {
                    width: ff(w),
                    height: ff(h),
                    viewBox: `${ff(x)} ${ff(y)} ${ff(w)} ${ff(h)}`,
                    ...attribs,
                };
            }
        }
    }
    return svg(attribs, ...xs);
};

const centerOfWeight2 = (pts, out = []) => {
    const n = pts.length - 1;
    let area = 0;
    let x = 0;
    let y = 0;
    let a = pts[n];
    let b = pts[0];
    for (let i = 0; i <= n; a = b, b = pts[++i]) {
        const z = cross2(a, b);
        area += z;
        x += (a[0] + b[0]) * z;
        y += (a[1] + b[1]) * z;
    }
    area = 1 / (area * 3);
    out[0] = x * area;
    out[1] = y * area;
    return out;
};

const centroid = defmulti(__dispatch, {
    arc: "circle",
    aabb: "rect",
    ellipse: "circle",
    line3: "line",
    points3: "points",
    polyline: "points",
    quad: "poly",
    sphere: "circle",
    text: "circle",
    tri3: "tri",
}, {
    circle: ($, out) => set(out || [], $.pos),
    group: ($) => {
        const b = bounds$2($);
        return b ? centroid(b) : undefined;
    },
    line: ({ points }, out) => mixN(out || [], points[0], points[1], 0.5),
    points: ($, out) => centroid$1($.points, out),
    plane: ($, out) => mulN(out || [], $.normal, $.w),
    poly: ($, out) => centerOfWeight2($.points, out),
    rect: ($, out) => maddN(out || [], $.size, 0.5, $.pos),
    tri: ({ points }, out) => divN(null, add(null, add(out || [], points[0], points[1]), points[2]), 3),
});

const __translatedPoints = (pts, delta) => pts.map((x) => add([], x, delta));
const __translatedShape = (ctor) => ($, delta) => new ctor(__translatedPoints($.points, delta), __copyAttribs($));

const translate = defmulti(__dispatch, {}, {
    aabb: ($, delta) => new AABB(add3([], $.pos, delta), set3([], $.size), __copyAttribs($)),
    arc: ($, delta) => {
        const a = $.copy();
        add2(null, a.pos, delta);
        return a;
    },
    circle: ($, delta) => new Circle(add2([], $.pos, delta), $.r, __copyAttribs($)),
    cubic: __translatedShape(Cubic),
    ellipse: ($, delta) => new Ellipse(add2([], $.pos, delta), set2([], $.r), __copyAttribs($)),
    group: ($, delta) => $.copyTransformed((x) => translate(x, delta)),
    line: __translatedShape(Line),
    path: ($, delta) => new Path($.segments.map((s) => s.geo
        ? {
            type: s.type,
            geo: translate(s.geo, delta),
        }
        : {
            type: s.type,
            point: add2([], s.point, delta),
        }), __copyAttribs($)),
    points: __translatedShape(Points),
    points3: __translatedShape(Points3),
    poly: __translatedShape(Polygon),
    polyline: __translatedShape(Polyline),
    quad: __translatedShape(Quad),
    quadratic: __translatedShape(Quadratic),
    ray: ($, delta) => new Ray(add2([], $.pos, delta), $.dir, __copyAttribs($)),
    rect: ($, delta) => new Rect(add2([], $.pos, delta), set2([], $.size), __copyAttribs($)),
    sphere: ($, delta) => new Sphere(add3([], $.pos, delta), $.r, __copyAttribs($)),
    text: ($, delta) => new Text(add2([], $.pos, delta), $.body, __copyAttribs($)),
    tri: __translatedShape(Triangle),
});

const center = defmulti(__dispatch, {}, {
    [DEFAULT]: ($, origin = ZERO3) => {
        const c = centroid($);
        return c ? translate($, submN(null, c, origin, -1)) : undefined;
    },
    arc: ($, origin = ZERO2) => new Arc(set2([], origin), set2([], $.r), $.axis, $.start, $.end, $.xl, $.cw, __copyAttribs($)),
    circle: ($, origin = ZERO2) => new Circle(set2([], origin), $.r, __copyAttribs($)),
    ellipse: ($, origin = ZERO2) => new Ellipse(set2([], origin), set2([], $.r), __copyAttribs($)),
    sphere: ($, origin = ZERO3) => new Sphere(set3([], origin), $.r, __copyAttribs($)),
});

const classifyPoint = defmulti(__dispatch, { sphere: "circle" }, {
    circle: ($, p, eps = EPS) => classifyPointInCircle(p, $.pos, $.r, eps),
    plane: ($, p, eps) => sign(dot($.normal, p) - $.w, eps),
    tri: ({ points }, p, eps = EPS) => classifyPointInTriangle2(p, points[0], points[1], points[2], eps),
});

const NONE = Object.freeze({
    type: IntersectionType.NONE,
});

const intersectRayLine = (rpos, dir, a, b, minD = 0, maxD = Infinity) => {
    const bax = b[0] - a[0];
    const bay = b[1] - a[1];
    const d = dir[0] * bay - dir[1] * bax;
    if (eqDelta(d, 0)) {
        return NONE;
    }
    const arx = a[0] - rpos[0];
    const ary = a[1] - rpos[1];
    const t = (bay * arx - bax * ary) / d;
    const s = (dir[1] * arx - dir[0] * ary) / d;
    return t >= minD && t <= maxD && s >= 0 && s <= 1
        ? {
            type: IntersectionType.INTERSECT,
            isec: maddN([], dir, t, rpos),
            alpha: t,
        }
        : NONE;
};

const startPoints = (pts, closed) => closed ? [pts[pts.length - 1], pts[0]] : [pts[0], pts[1]];
const intersectRayPolyline = (rpos, dir, pts, closed = false, minD = 0, maxD = Infinity) => {
    const n = pts.length - 1;
    let alpha = maxD;
    let cross = 0;
    let [i, j] = startPoints(pts, closed);
    for (let k = 0; k <= n; i = j, j = pts[++k]) {
        const d = intersectRayLine(rpos, dir, i, j, minD, maxD).alpha;
        if (d !== undefined) {
            cross++;
            if (d < alpha)
                alpha = d;
        }
    }
    return cross > 0
        ? {
            type: IntersectionType.INTERSECT,
            isec: maddN2([], dir, alpha, rpos),
            inside: !(cross & 1),
            alpha,
        }
        : NONE;
};
const intersectRayPolylineAll = (rpos, dir, pts, closed = false, minD = 0, maxD = Infinity) => {
    const n = pts.length - 1;
    let [i, j] = startPoints(pts, closed);
    const res = [];
    for (let k = 0; k <= n; i = j, j = pts[++k]) {
        const d = intersectRayLine(rpos, dir, i, j, minD, maxD).alpha;
        if (d !== undefined) {
            res.push([d, maddN2([], dir, d, rpos)]);
        }
    }
    return res.length
        ? {
            type: IntersectionType.INTERSECT,
            isec: res.sort((a, b) => a[0] - b[0]).map((x) => x[1]),
        }
        : NONE;
};

const intersectLinePolylineAll = (a, b, pts, closed = false) => {
    const dir = sub([], b, a);
    const maxD = mag(dir);
    return intersectRayPolylineAll(a, normalize$1(null, dir), pts, closed, 0, maxD);
};

const clipLineSegmentPoly = (a, b, pts) => {
    const isecs = intersectLinePolylineAll(a, b, pts, true).isec;
    const isAInside = pointInPolygon2(a, pts);
    const isBInside = pointInPolygon2(b, pts);
    if (!isecs) {
        return isAInside && isBInside ? [[a, b]] : undefined;
    }
    isAInside && isecs.unshift(a);
    isBInside && isecs.push(b);
    return collectSegments(isecs);
};
const collectSegments = (isecs) => {
    const segments = [];
    for (let i = 0, n = isecs.length - 1; i < n; i += 2) {
        segments.push([isecs[i], isecs[i + 1]]);
    }
    return segments;
};

const intersectLineLine = (a, b, c, d, eps = EPS) => {
    const bax = b[0] - a[0];
    const bay = b[1] - a[1];
    const dcx = d[0] - c[0];
    const dcy = d[1] - c[1];
    const acx = a[0] - c[0];
    const acy = a[1] - c[1];
    const det = dcy * bax - dcx * bay;
    let alpha = dcx * acy - dcy * acx;
    let beta = bax * acy - bay * acx;
    if (eqDelta(det, 0, eps)) {
        if (eqDelta(alpha, 0, eps) && eqDelta(beta, 0, eps)) {
            let isec = closestPointSegment(c, a, b, undefined, true) ||
                closestPointSegment(d, a, b, undefined, true);
            return {
                type: isec
                    ? IntersectionType.COINCIDENT
                    : IntersectionType.COINCIDENT_NO_INTERSECT,
                isec,
            };
        }
        return { type: IntersectionType.PARALLEL };
    }
    alpha /= det;
    beta /= det;
    const ieps = 1 - eps;
    return {
        type: eps < alpha && alpha < ieps && eps < beta && beta < ieps
            ? IntersectionType.INTERSECT
            : IntersectionType.INTERSECT_OUTSIDE,
        isec: mixN2([], a, b, alpha),
        alpha,
        beta,
        det,
    };
};

/**
 * Extended version of Sutherland-Hodgeman convex polygon clipping
 * supporting any convex boundary polygon (not only rects). Returns new
 * array of clipped vertices.
 *
 * {@link https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm}
 *
 * @param pts - subject poly vertices
 * @param bounds - clipping boundary vertices
 * @param bc - pre-computed boundary centroid
 * @param eps - edge classification tolerance
 */
const sutherlandHodgeman = (pts, bounds, bc, eps = EPS) => {
    bc = bc || centroid$1(bounds);
    for (let ne = bounds.length, j = ne - 1, i = 0; i < ne; j = i, i++) {
        const clipped = [];
        const ca = bounds[j];
        const cb = bounds[i];
        const sign = corner2(ca, cb, bc, eps);
        for (let np = pts.length, k = np - 1, l = 0; l < np; k = l, l++) {
            const p = pts[k];
            const q = pts[l];
            const cqsign = corner2(ca, cb, q, eps);
            if (corner2(ca, cb, p, eps) === sign) {
                clipped.push(cqsign !== sign
                    ? intersectLineLine(ca, cb, p, q).isec
                    : q);
            }
            else if (cqsign === sign) {
                clipped.push(intersectLineLine(ca, cb, p, q).isec, q);
            }
        }
        if (clipped.length < 2) {
            return [];
        }
        pts = clipped;
    }
    return pts;
};

const clipConvex = defmulti(__dispatch, {
    circle: "rect",
    ellipse: "rect",
    path: "rect",
    quad: "poly",
    tri: "poly",
}, {
    group: ({ children, attribs }, boundary) => {
        boundary = ensureVertices(boundary);
        const clipped = [];
        for (let c of children) {
            const res = clipConvex(c, boundary);
            if (res)
                clipped.push(res);
        }
        return new Group({ ...attribs }, clipped);
    },
    line: ($, boundary) => {
        const segments = clipLineSegmentPoly($.points[0], $.points[1], ensureVertices(boundary));
        return segments && segments.length
            ? new Line(segments[0], __copyAttribs($))
            : undefined;
    },
    poly: ($, boundary) => {
        boundary = ensureVertices(boundary);
        const pts = sutherlandHodgeman($.points, boundary, centroid$1(boundary));
        return pts.length ? new Polygon(pts, __copyAttribs($)) : undefined;
    },
    rect: ($, boundary) => {
        boundary = ensureVertices(boundary);
        const pts = sutherlandHodgeman(vertices($), boundary, centroid$1(boundary));
        return pts.length ? new Polygon(pts, __copyAttribs($)) : undefined;
    },
});

const closestPoint = (p, o, r, axis, start, end, out = [], res, iter) => {
    const fn = (t) => pointAtTheta(o, r, axis, fit01(t, start, end), out);
    return fn(minError(fn, distSq2, p, res, iter));
};

const closestPointRect = (p, bmin, bmax, out = []) => {
    const [minID, minW] = closestBoxEdge(p, bmin, bmax, 4);
    return minID === 0
        ? setC2(out, minW, clamp(p[1], bmin[1], bmax[1]))
        : setC2(out, clamp(p[0], bmin[0], bmax[0]), minW);
};
const closestPointAABB = (p, bmin, bmax, out = []) => {
    const [minID, minW] = closestBoxEdge(p, bmin, bmax, 6);
    return minID === 0
        ? setC3(out, minW, clamp(p[1], bmin[1], bmax[1]), clamp(p[2], bmin[2], bmax[2]))
        : minID === 1
            ? setC3(out, clamp(p[0], bmin[0], bmax[0]), minW, clamp(p[2], bmin[2], bmax[2]))
            : setC3(out, clamp(p[0], bmin[0], bmax[0]), clamp(p[1], bmin[1], bmax[1]), minW);
};
const closestBoxEdge = (p, bmin, bmax, n) => {
    let minD = Infinity;
    let minID;
    let minW;
    for (let i = 0; i < n; i++) {
        const j = i >> 1;
        const w = (i & 1 ? bmax : bmin)[j];
        const d = Math.abs(p[j] - w);
        if (d < minD) {
            minD = d;
            minID = j;
            minW = w;
        }
    }
    return [minID, minW];
};

/**
 * Returns closest point to `p` on circle defined by origin `c` and radius `r`.
 *
 * @param p
 * @param c
 * @param r
 * @param out
 */
const closestPointCircle = (p, c, r, out = []) => add(out, c, direction(out, c, p, r));

/**
 * Returns closest point to `p` in given point array, optionally using custom
 * distance function `dist` (default: {@link @thi.ng/vectors#distSq}).
 *
 * @param p
 * @param pts
 * @param out
 * @param dist
 */
const closestPointArray = (p, pts, out = [], dist = distSq) => {
    let minD = Infinity;
    let closest;
    for (let i = pts.length; i-- > 0;) {
        const d = dist(pts[i], p);
        if (d < minD) {
            minD = d;
            closest = pts[i];
        }
    }
    return closest ? set(out, closest) : undefined;
};

/**
 * Performs recursive search for closest point to `p` on cubic curve
 * defined by control points `a`,`b`,`c`,`d`. The `res` and `recur`
 * params are used to control the recursion behavior. If `eps` is given,
 * the search is terminated as soon as a point with a shorter *squared*
 * distance than `eps` is found.
 *
 * {@link @thi.ng/math#minError}
 *
 * @param p - query point
 * @param a - control point 1
 * @param b - control point 2
 * @param c - control point 3
 * @param d - control point 4
 * @param res - search steps per iteration
 * @param iter - iterations
 * @param eps - epsilon value
 */
const closestPointCubic = (p, a, b, c, d, out = [], res, iter, eps) => {
    const fn = (t) => mixCubic(out, a, b, c, d, t);
    return fn(minError(fn, distSq, p, res, iter, 0, 1, eps));
};

/**
 * Performs recursive search for closest point to `p` on quadratic curve
 * defined by control points `a`,`b`,`c`. The `res` and `recur` params
 * are used to control the recursion behavior. If `eps` is given, the
 * search is terminated as soon as a point with a shorter *squared*
 * distance than `eps` is found.
 *
 * {@link @thi.ng/math#minError}
 *
 * @param p - query point
 * @param a - control point 1
 * @param b - control point 2
 * @param c - control point 3
 * @param res - search steps per iteration
 * @param iter - iterations
 * @param eps - epsilon value
 */
const closestPointQuadratic = (p, a, b, c, out = [], res, iter, eps) => {
    const fn = (t) => mixQuadratic(out, a, b, c, t);
    return fn(minError(fn, distSq, p, res, iter, 0, 1, eps));
};

const closestPoint$1 = defmulti(__dispatch, {
    quad: "poly",
    sphere: "circle",
    tri: "poly",
}, {
    aabb: ($, p, out) => closestPointAABB(p, $.pos, add3([], $.pos, $.size), out),
    arc: ($, p, out) => closestPoint(p, $.pos, $.r, $.axis, $.start, $.end, out),
    circle: ($, p, out) => closestPointCircle(p, $.pos, $.r, out),
    cubic: ({ points }, p, out) => closestPointCubic(p, points[0], points[1], points[2], points[3], out),
    line: ({ points }, p, out) => closestPointSegment(p, points[0], points[1], out),
    plane: ($, p, out) => closestPointPlane(p, $.normal, $.w, out),
    points: ($, p, out) => closestPointArray(p, $.points, out),
    poly: ($, p, out) => closestPointPolyline(p, $.points, true, out),
    polyline: ($, p, out) => closestPointPolyline(p, $.points, false, out),
    quadratic: ({ points }, p, out) => closestPointQuadratic(p, points[0], points[1], points[2], out),
    rect: ($, p, out) => closestPointRect(p, $.pos, add2([], $.pos, $.size), out),
});

const convexHull = defmulti(__dispatch, {
    circle: "tri",
    ellipse: "tri",
    poly: "points",
    polyline: "points",
    quad: "points",
    rect: "tri",
}, {
    group: ($) => new Polygon(vertices($), __copyAttribs($)),
    points: ($) => new Polygon(grahamScan2($.points), __copyAttribs($)),
    tri: ($) => $.copy(),
});

const __edges = (vertices, closed = false) => (partition(2, 1, closed ? wrapSides(vertices, 0, 1) : vertices));

const edges = defmulti(__dispatch, {
    line: "polyline",
    quad: "poly",
    tri: "poly",
}, {
    aabb: ($) => {
        const [a, b, c, d, e, f, g, h] = vertices($);
        return [
            [a, b],
            [b, c],
            [c, d],
            [d, a],
            [e, f],
            [f, g],
            [g, h],
            [h, e],
            [a, e],
            [b, f],
            [c, g],
            [d, h], // right
        ];
    },
    poly: ($) => __edges($.points, true),
    polyline: ($) => __edges($.points),
    rect: ($) => __edges(vertices($), true),
});

const mapPoint = defmulti(__dispatch, { aabb: "rect" }, {
    rect: ($, p, out = []) => div(null, sub(out, p, $.pos), $.size),
});

const __transformedPoints = (pts, mat, op = mulV) => pts.map((p) => op([], mat, p));
const __transformedPointsWith = (pts, fn, op = mulV) => pts.map((p) => op([], fn(p), p));
const __transformedShape = (ctor) => ($, mat) => new ctor(__transformedPoints($.points, mat), __copyAttribs($));
const __transformedShapePoints = (ctor) => ($, fn) => new ctor(__transformedPointsWith($.points, fn), __copyAttribs($));
const __transformedPoints3 = (pts, mat) => __transformedPoints(pts, mat, mulV344);
const __transformedPointsWith3 = (pts, fn) => __transformedPointsWith(pts, fn, mulV344);
const __transformedShape3 = (ctor) => ($, mat) => new ctor(__transformedPoints3($.points, mat), __copyAttribs($));
const __transformedShapePoints3 = (ctor) => ($, fn) => new ctor(__transformedPointsWith3($.points, fn), __copyAttribs($));

/**
 * Transforms given shape with provided matrix. Some shape types will be
 * automatically converted to other types prior to transformation because they
 * cannot be reliably represented in their original type anymore, this
 * includes:
 *
 * - Arc => Path (cubics)
 * - Circle => Path (cubics)
 * - Ellipse => Path (cubics)
 * - Rect => Polygon
 */
const transform$1 = defmulti(__dispatch, {
    circle: "arc",
    ellipse: "circle",
}, {
    arc: ($, mat) => transform$1(asPath($), mat),
    cubic: __transformedShape(Cubic),
    group: ($, mat) => $.copyTransformed((x) => transform$1(x, mat)),
    line: __transformedShape(Line),
    path: ($, mat) => new Path([
        ...map((s) => s.type === "m"
            ? {
                type: s.type,
                point: mulV([], mat, s.point),
            }
            : {
                type: s.type,
                geo: transform$1(s.geo, mat),
            }, $.segments),
    ], __copyAttribs($)),
    points: __transformedShape(Points),
    points3: __transformedShape3(Points3),
    poly: __transformedShape(Polygon),
    polyline: __transformedShape(Polyline),
    quad: __transformedShape(Quad),
    quadratic: __transformedShape(Quadratic),
    rect: ($, mat) => transform$1(asPolygon($), mat),
    text: ($, mat) => new Text(mulV([], mat, $.pos), $.body, __copyAttribs($)),
    tri: __transformedShape(Triangle),
});

/**
 * Projects given point `uv` (normalized coords) into the target space
 * defined by `shape` and writes result to `out` (or returns new
 * vector). See {@link mapPoint} for reverse operation. Both functions
 * together can be used to warp points from one shape into another.
 *
 * Currently only implemented for these shape types:
 *
 * - AABB
 * - Quad
 * - Rect
 *
 * @param shape - shape to operate on
 * @param uv - point to map in UV space
 * @param out - result
 */
const unmapPoint = defmulti(__dispatch, {
    aabb: "rect",
    quad3: "quad",
}, {
    quad: ({ points }, uv, out = []) => mixBilinear(out, points[0], points[1], points[3], points[2], uv[0], uv[1]),
    rect: ($, uvw, out = []) => madd(out, $.size, uvw, $.pos),
});

const translateScale = (tmat, smat, shape, preTrans, postTrans, scale) => transform$1(shape, concat([], tmat([], postTrans), smat([], scale), tmat([], preTrans)));
const fitIntoBounds2 = (shape, dest) => {
    const src = bounds$2(shape);
    if (!src)
        return;
    const c = centroid(src);
    if (!c)
        return;
    return translateScale(translation23, scale23, shape, neg(null, c), centroid(dest), minNonZero2(safeDiv(dest.size[0], src.size[0]), safeDiv(dest.size[1], src.size[1])));
};
const fitIntoBounds3 = (shape, dest) => {
    const src = bounds$2(shape);
    if (!src)
        return;
    const c = centroid(src);
    if (!c)
        return;
    return translateScale(translation44, scale44, shape, neg(null, c), centroid(dest), minNonZero3(safeDiv(dest.size[0], src.size[0]), safeDiv(dest.size[1], src.size[1]), safeDiv(dest.size[2], src.size[2])));
};
const fitAllIntoBounds2 = (shapes, dest) => {
    const sbraw = __collBounds(shapes, bounds$2);
    if (!sbraw)
        return;
    const src = new Rect(...sbraw);
    const sx = safeDiv(dest.size[0], src.size[0]);
    const sy = safeDiv(dest.size[1], src.size[1]);
    const scale = sx > 0 ? (sy > 0 ? Math.min(sx, sy) : sx) : sy;
    const smat = scale23([], scale);
    const b = center(transform$1(src, smat), centroid(dest));
    const c1 = [];
    const c2 = [];
    const res = [];
    for (let i = shapes.length; i-- > 0;) {
        const s = shapes[i];
        const sc = centroid(s, c1);
        if (sc) {
            unmapPoint(b, mapPoint(src, sc), c2);
            res.push(translateScale(translation23, scale23, s, neg(null, c1), c2, smat));
        }
        else {
            res.push(s);
        }
    }
    return res;
};

const flip = defmulti(__dispatch, {
    cubic: "points",
    line: "points",
    points3: "points",
    poly: "points",
    polyline: "points",
    quad: "points",
    quadratic: "points",
    tri: "points",
}, {
    [DEFAULT]: (x) => x,
    arc: ($) => {
        const t = $.start;
        $.start = $.end;
        $.end = t;
        $.cw = !$.cw;
        return $;
    },
    group: ($) => {
        $.children.forEach(flip);
        return $;
    },
    path: ($) => {
        // TODO
        return $;
    },
    points: ($) => {
        $.points.reverse();
        return $;
    },
    ray: ($) => {
        $.dir = neg(null, $.dir);
        return $;
    },
});

const intersectCircleCircle = (a, b, ar, br) => {
    const delta = sub([], b, a);
    const d = mag(delta);
    if (eqDelta(d, 0)) {
        return { type: IntersectionType.COINCIDENT };
    }
    if (d <= ar + br && d >= Math.abs(ar - br)) {
        ar *= ar;
        const alpha = (ar - br * br + d * d) / (2 * d);
        const h = Math.sqrt(ar - alpha * alpha);
        const p = maddN([], delta, alpha / d, a);
        const t = mulN(null, perpendicularCCW(null, delta), h / d);
        return {
            type: IntersectionType.INTERSECT,
            isec: [add([], p, t), sub([], p, t)],
        };
    }
    return NONE;
};

const intersectPlanePlane = (na, wa, nb, wb) => {
    const dn = dot3(na, nb);
    if (eqDelta(dn, 1)) {
        return eqDelta(wa, wb) ? { type: IntersectionType.COINCIDENT } : NONE;
    }
    const det = 1 / (1 - dn * dn);
    const da = (wa - wb * dn) * det;
    const db = (wb - wa * dn) * det;
    return {
        type: IntersectionType.INTERSECT,
        isec: [
            add3(null, mulN3([], na, da), mulN3([], nb, db)),
            cross3([], na, nb),
        ],
    };
};

const intersectRayCircle = (rpos, dir, spos, r) => {
    const delta = sub([], spos, rpos);
    const w = dot(delta, dir);
    let d = r * r + w * w - magSq(delta);
    if (d < 0)
        return NONE;
    d = Math.sqrt(d);
    const a = w + d;
    const b = w - d;
    const isec = a >= 0
        ? b >= 0
            ? a > b
                ? [maddN(delta, dir, b, rpos), maddN([], dir, a, rpos)]
                : [maddN(delta, dir, a, rpos), maddN([], dir, b, rpos)]
            : [maddN(delta, dir, a, rpos)]
        : b >= 0
            ? [maddN(delta, dir, b, rpos)]
            : undefined;
    return isec ? { type: IntersectionType.INTERSECT, isec } : NONE;
};

const intersectRayPlane = (rpos, dir, normal, w, eps = EPS) => {
    const d = dot(normal, dir);
    const cp = sign(dot(normal, rpos) - w, eps);
    if ((d > eps && cp < 0) || (d < -eps && cp > 0)) {
        const isec = sub(null, mulN([], normal, w), rpos);
        const alpha = dot(normal, isec) / d;
        return {
            type: IntersectionType.INTERSECT,
            isec: maddN(isec, dir, alpha, rpos),
            alpha,
        };
    }
    return cp === 0
        ? {
            type: IntersectionType.COINCIDENT,
            isec: copy(rpos),
        }
        : NONE;
};

const min = Math.min;
const max = Math.max;
/**
 * Based on:
 * {@link https://tavianator.com/fast-branchless-raybounding-box-intersections/}
 *
 * @param rpos - ray origin
 * @param dir - ray dir
 * @param bmin - rect min
 * @param bmax - rect max
 */
const rayRect = (rpos, dir, bmin, bmax) => {
    let p = rpos[0];
    let d = 1 / dir[0];
    let t1 = (bmin[0] - p) * d;
    let t2 = (bmax[0] - p) * d;
    let tmin = min(t1, t2);
    let tmax = max(t1, t2);
    p = rpos[1];
    d = 1 / dir[1];
    t1 = (bmin[1] - p) * d;
    t2 = (bmax[1] - p) * d;
    return [max(tmin, min(t1, t2)), min(tmax, max(t1, t2))];
};
/**
 * Like to {@link rayRect}, but for 3D (AABB).
 *
 * @param rpos - ray origin
 * @param dir - ray dir
 * @param bmin - box min
 * @param bmax - box max
 */
const rayBox = (rpos, dir, bmin, bmax) => {
    let p = rpos[0];
    let d = 1 / dir[0];
    let t1 = (bmin[0] - p) * d;
    let t2 = (bmax[0] - p) * d;
    let tmin = min(t1, t2);
    let tmax = max(t1, t2);
    p = rpos[1];
    d = 1 / dir[1];
    t1 = (bmin[1] - p) * d;
    t2 = (bmax[1] - p) * d;
    tmin = max(tmin, min(t1, t2));
    tmax = min(tmax, max(t1, t2));
    p = rpos[2];
    d = 1 / dir[2];
    t1 = (bmin[2] - p) * d;
    t2 = (bmax[2] - p) * d;
    return [max(tmin, min(t1, t2)), min(tmax, max(t1, t2))];
};
const intersectWith = (fn) => (rpos, dir, bmin, bmax) => {
    const t = fn(rpos, dir, bmin, bmax);
    const tmin = t[0];
    const tmax = t[1];
    const inside = tmin < 0;
    return tmax > max(tmin, 0)
        ? inside
            ? {
                type: IntersectionType.INTERSECT,
                isec: [maddN([], dir, tmax, rpos)],
                alpha: tmax,
                inside,
            }
            : {
                type: IntersectionType.INTERSECT,
                isec: [
                    maddN([], dir, tmin, rpos),
                    maddN([], dir, tmax, rpos),
                ],
                alpha: tmin,
                beta: tmax,
            }
        : NONE;
};
const intersectRayRect = intersectWith(rayRect);
const intersectRayAABB = intersectWith(rayBox);

const testBoxSphere = vop(0);
/**
 * Returns true if given 2D rect defined by `boxMinPos` and `boxSize`
 * intersects circle.
 *
 * @param boxMinPos
 * @param boxSize
 * @param circlePos
 * @param r
 */
const testRectCircle = testBoxSphere.add(2, (boxMinPos, boxSize, circlePos, r) => axis(circlePos[0], boxMinPos[0], boxSize[0]) +
    axis(circlePos[1], boxMinPos[1], boxSize[1]) <=
    r * r);
/**
 * Same as {@link testRectCircle}, but for 3D AABB and sphere.
 *
 * @param boxMinPos
 * @param boxSize
 * @param spherePos
 * @param r
 */
const testAABBSphere = testBoxSphere.add(3, (boxMinPos, boxSize, spherePos, r) => axis(spherePos[0], boxMinPos[0], boxSize[0]) +
    axis(spherePos[1], boxMinPos[1], boxSize[1]) +
    axis(spherePos[2], boxMinPos[2], boxSize[2]) <=
    r * r);
testBoxSphere.default((boxPos, boxSize, spherePos, r) => {
    let sum = 0;
    for (let i = boxPos.length; i-- > 0;) {
        sum += axis(spherePos[i], boxPos[i], boxSize[i]);
    }
    return sum <= r * r;
});
/**
 * Like {@link testCenteredAABBSphere}, but for arbitrary dimensions w/
 * optimized execution for 2D & 3D cases.
 *
 * @param boxCenter
 * @param boxExtent
 * @param spherePos
 * @param r
 */
const testCenteredBoxSphere = vop(0);
/**
 * Similar to {@link testRectCircle}, but for rects defined by centroid
 * and radius-like extent.
 *
 * @param rectPos
 * @param extent
 * @param circlePos
 * @param r
 */
const testCenteredRectCircle = testCenteredBoxSphere.add(2, (boxPos, { 0: w, 1: h }, circlePos, r) => axis(circlePos[0], boxPos[0] - w, w * 2) +
    axis(circlePos[1], boxPos[1] - h, h * 2) <=
    r * r);
/**
 * Similar to {@link testAABBSphere}, but for AABBs defined by centroid
 * and radius-like extent.
 *
 * @param boxCenter
 * @param boxExtent
 * @param spherePos
 * @param r
 */
const testCenteredAABBSphere = testCenteredBoxSphere.add(3, (boxPos, { 0: w, 1: h, 2: d }, spherePos, r) => axis(spherePos[0], boxPos[0] - w, w * 2) +
    axis(spherePos[1], boxPos[1] - h, h * 2) +
    axis(spherePos[2], boxPos[2] - d, d * 2) <=
    r * r);
testCenteredBoxSphere.default((boxPos, boxExtent, spherePos, r) => {
    let sum = 0;
    for (let i = boxPos.length; i-- > 0;) {
        sum += axis(spherePos[i], boxPos[i] - boxExtent[i], boxExtent[i] * 2);
    }
    return sum <= r * r;
});
const axis = (a, b, c) => (a < b ? a - b : a > b + c ? a - b - c : 0) ** 2;

const testRectRect = ([ax, ay], [aw, ah], [bx, by], [bw, bh]) => !(ax > bx + bw || bx > ax + aw || ay > by + bh || by > ay + ah);

const intersects = defmulti(__dispatch2, {
    "ray-sphere": "ray-circle",
    "ray-quad": "ray-poly",
    "ray-tri": "ray-poly",
    "sphere-sphere": "circle-circle",
}, {
    "circle-circle": (a, b) => intersectCircleCircle(a.pos, b.pos, a.r, b.r),
    "line-line": ({ points: a }, { points: b }) => intersectLineLine(a[0], a[1], b[0], b[1]),
    "plane-plane": (a, b) => intersectPlanePlane(a.normal, a.w, b.normal, b.w),
    "ray-aabb": (ray, box) => intersectRayAABB(ray.pos, ray.dir, box.pos, box.max()),
    "ray-circle": (ray, sphere) => intersectRayCircle(ray.pos, ray.dir, sphere.pos, sphere.r),
    "ray-plane": (ray, plane) => intersectRayPlane(ray.pos, ray.dir, plane.normal, plane.w),
    "ray-poly": (ray, poly) => intersectRayPolyline(ray.pos, ray.dir, poly.points, true),
    "ray-polyline": (ray, poly) => intersectRayPolyline(ray.pos, ray.dir, poly.points, false),
    "ray-rect": (ray, rect) => intersectRayRect(ray.pos, ray.dir, rect.pos, rect.max()),
    "rect-circle": (rect, circle) => ({
        type: testRectCircle(rect.pos, rect.size, circle.pos, circle.r)
            ? IntersectionType.INTERSECT
            : IntersectionType.NONE,
    }),
    "rect-rect": (a, b) => ({
        type: testRectRect(a.pos, a.size, b.pos, b.size)
            ? IntersectionType.INTERSECT
            : IntersectionType.NONE,
    }),
});

const offset = defmulti(__dispatch, {}, {
    circle: ($, n) => new Circle(set2([], $.pos), Math.max($.r + n, 0)),
    line: ({ points: [a, b], attribs }, n) => {
        const norm = normalCW([], a, b, n);
        return new Quad([
            add2([], a, norm),
            add2([], b, norm),
            sub2([], b, norm),
            sub2([], a, norm),
        ], { ...attribs });
    },
    rect: ($, n) => rectFromCentroid(centroid($), max2(null, addN2([], $.size, n), ZERO2), __copyAttribs($)),
});

const pointAt$1 = defmulti(__dispatch, {
    quad: "poly",
    tri: "poly",
}, {
    arc: ($, t) => $.pointAtTheta(fit01(t, $.start, $.end)),
    circle: ($, t) => cartesian2(null, [$.r, TAU * t], $.pos),
    cubic: ({ points }, t) => mixCubic([], points[0], points[1], points[2], points[3], t),
    ellipse: ($, t) => madd2([], cossin(TAU * t), $.r, $.pos),
    line: ({ points }, t) => mixN2([], points[0], points[1], t),
    poly: ($, t) => new Sampler($.points, true).pointAt(t),
    polyline: ($, t) => new Sampler($.points).pointAt(t),
    quadratic: ({ points }, t) => mixQuadratic([], points[0], points[1], points[2], t),
    ray: ($, t) => pointOnRay2([], $.pos, $.dir, t),
    ray3: ($, t) => pointOnRay3([], $.pos, $.dir, t),
    rect: ($, t) => new Sampler(vertices($), true).pointAt(t),
});

const pointInside = defmulti(__dispatch, {
    points3: "points",
    quad: "poly",
    sphere: "circle",
}, {
    aabb: ($, p) => pointInAABB(p, $.pos, $.size),
    circle: ($, p) => pointInCircle(p, $.pos, $.r),
    line: ($, p) => pointInSegment(p, $.points[0], $.points[1]),
    points: ({ points }, p) => isInArray(p, points),
    poly: ($, p) => pointInPolygon2(p, $.points) > 0,
    rect: ($, p) => pointInRect(p, $.pos, $.size),
    tri: (tri, p) => pointInTriangle2(p, ...tri.points),
});

const resample = defmulti(__dispatch, {
    ellipse: "circle",
    line: "polyline",
    quad: "poly",
    tri: "poly",
    rect: "circle",
}, {
    circle: ($, opts) => asPolygon($, opts),
    poly: ($, opts) => new Polygon(resample$1($.points, opts, true, true), __copyAttribs($)),
    polyline: ($, opts) => new Polyline(resample$1($.points, opts, false, true), __copyAttribs($)),
});

const scatter = (shape, num, rnd = SYSTEM, out = []) => {
    const b = bounds$2(shape);
    if (!b)
        return;
    const mi = b.pos;
    const mx = b.max();
    for (; num-- > 0;) {
        while (true) {
            const p = randMinMax([], mi, mx, rnd);
            if (pointInside(shape, p)) {
                out.push(p);
                break;
            }
        }
    }
    return out;
};

const simplify = defmulti(__dispatch, {}, {
    path: ($, eps = 0.1) => {
        const res = [];
        const orig = $.segments;
        const n = orig.length;
        let points;
        let lastP;
        for (let i = 0; i < n; i++) {
            const s = orig[i];
            if (s.type === "l" || s.type === "p") {
                points = points
                    ? points.concat(vertices(s.geo))
                    : vertices(s.geo);
                lastP = peek(points);
            }
            else if (points) {
                points.push(lastP);
                res.push({
                    geo: new Polyline(simplify$1(points, eps)),
                    type: "p",
                });
                points = null;
            }
            else {
                res.push({ ...s });
            }
        }
        if (points) {
            points.push(lastP);
            res.push({
                geo: new Polyline(points),
                type: "p",
            });
        }
        return new Path(res, __copyAttribs($));
    },
    poly: ($, eps = 0.1) => new Polygon(simplify$1($.points, eps, true), __copyAttribs($)),
    polyline: ($, eps = 0.1) => new Polyline(simplify$1($.points, eps), __copyAttribs($)),
});

const cubicSplitAt = (a, b, c, d, t) => {
    if (t <= 0 || t >= 1) {
        const p = t <= 0 ? a : d;
        const c1 = [set([], p), set([], p), set([], p), set([], p)];
        const c2 = [set([], a), set([], b), set([], c), set([], d)];
        return t <= 0 ? [c1, c2] : [c2, c1];
    }
    const ab = mixN([], a, b, t);
    const bc = mixN([], b, c, t);
    const cd = mixN([], c, d, t);
    const abc = mixN([], ab, bc, t);
    const bcd = mixN([], bc, cd, t);
    const p = mixN([], abc, bcd, t);
    return [
        [set([], a), ab, abc, set([], p)],
        [p, bcd, cd, set([], d)],
    ];
};
const splitCubicNearPoint = (p, a, b, c, d, res, iter) => cubicSplitAt(a, b, c, d, minError((t) => mixCubic([], a, b, c, d, t), distSq, p, res, iter));

const quadraticSplitAt = (a, b, c, t) => {
    if (t <= 0 || t >= 1) {
        const p = t <= 0 ? a : c;
        const c1 = [set([], p), set([], p), set([], p)];
        const c2 = [set([], a), set([], b), set([], c)];
        return t <= 0 ? [c1, c2] : [c2, c1];
    }
    const ab = mixN([], a, b, t);
    const bc = mixN([], b, c, t);
    const p = mixN([], ab, bc, t);
    return [
        [set([], a), ab, p],
        [p, bc, set([], c)],
    ];
};
const quadraticSplitNearPoint = (p, a, b, c, res, iter) => quadraticSplitAt(a, b, c, minError((t) => mixQuadratic([], a, b, c, t), distSq, p, res, iter));

const __pointArraysAsShapes = (ctor, src, attribs) => src
    ? [...map((pts) => new ctor(copyVectors(pts), { ...attribs }), src)]
    : undefined;

const __splitLine = (a, b, t) => {
    const p = mixN([], a, b, t);
    return [
        [a, p],
        [set([], p), b],
    ];
};

const splitAt = defmulti(__dispatch, {}, {
    arc: ($, t) => {
        const theta = fit01(t, $.start, $.end);
        return [
            new Arc(set([], $.pos), set([], $.r), $.axis, $.start, theta, $.xl, $.cw, __copyAttribs($)),
            new Arc(set([], $.pos), set([], $.r), $.axis, theta, $.end, $.xl, $.cw, __copyAttribs($)),
        ];
    },
    cubic: ({ attribs, points }, t) => cubicSplitAt(points[0], points[1], points[2], points[3], t).map((pts) => new Cubic(pts, { ...attribs })),
    line: ({ attribs, points }, t) => __splitLine(points[0], points[1], t).map((pts) => new Line(pts, { ...attribs })),
    polyline: ($, t) => __pointArraysAsShapes(Polyline, new Sampler($.points).splitAt(t), $.attribs),
    quadratic: ({ attribs, points }, t) => quadraticSplitAt(points[0], points[1], points[2], t).map((pts) => new Quadratic(pts, { ...attribs })),
});

/**
 * Similar to {@link splitAt}, but instead of taking a normalized parametric
 * split position, splits the given curve at the closest point to `p`.
 * Returns tuple of split shapes of same type as `shape`.
 *
 * Implemented for:
 *
 * - Cubic
 * - Line
 * - Polyline
 * - Quadratic
 *
 * @param shape - shape to operate on
 * @param p - split point
 */
const splitNearPoint = defmulti(__dispatch, {}, {
    cubic: ({ points, attribs }, p) => splitCubicNearPoint(p, points[0], points[1], points[2], points[3]).map((pts) => new Cubic(pts, { ...attribs })),
    line: ($, p) => {
        const t = closestT(p, $.points[0], $.points[1]) || 0;
        return __splitLine($.points[0], $.points[1], clamp01(t)).map((pts) => new Line(pts, __copyAttribs($)));
    },
    polyline: ($, p) => __pointArraysAsShapes(Polyline, new Sampler($.points).splitNear(p), $.attribs),
    quadratic: ({ points, attribs }, p) => quadraticSplitNearPoint(p, points[0], points[1], points[2]).map((pts) => new Quadratic(pts, { ...attribs })),
});

const subdivCurve = defmulti(__dispatch, {}, {
    poly: ($, kernel, iter = 1) => new Polygon(subdivide($.points, kernel, iter), __copyAttribs($)),
    polyline: ($, kernel, iter = 1) => new Polyline(subdivide($.points, kernel, iter), __copyAttribs($)),
});

const cubicTangentAt = (out, a, b, c, d, t, len = 1) => {
    const s = 1 - t;
    const ss = s * s;
    const tt = t * t;
    const ts2 = 2 * t * s;
    return normalize$1(out, addW4(out, a, b, c, d, -3 * ss, 3 * (ss - ts2), 3 * (ts2 - tt), 3 * tt), len);
};

const quadraticTangentAt = (out, a, b, c, t, len = 1) => normalize$1(out, addW2(out, sub(out, b, a), sub([], c, b), 2 * (1 - t), 2 * t), len);

const tangentAt = defmulti(__dispatch, {
    quad: "poly",
    tri: "poly",
}, {
    circle: (_, t) => cossin(TAU * t + HALF_PI),
    cubic: ({ points }, t) => cubicTangentAt([], points[0], points[1], points[2], points[3], t),
    line: ({ points }) => direction([], points[0], points[1]),
    poly: ($, t) => new Sampler($.points, true).tangentAt(t),
    polyline: ($, t) => new Sampler($.points).tangentAt(t),
    quadratic: ({ points }, t) => quadraticTangentAt([], points[0], points[1], points[2], t),
    rect: ($, t) => new Sampler(vertices($), true).tangentAt(t),
});

const tessellate = defmulti(__dispatch, {}, {
    [DEFAULT]: ($, fns) => tessellate$1(vertices($), fns),
});

/**
 * Transforms vertices of given shape with provided function, which is
 * being called for each vertex individually and should produce a
 * transformation matrix. Some shape types will be automatically
 * converted to other types prior to transformation because they cannot
 * be reliably represented in their original type anymore, this
 * includes:
 *
 * - Arc => Path (cubics)
 * - Circle => Path (cubics)
 * - Ellipse => Path (cubics)
 * - Rect => Polygon
 */
const transformVertices = defmulti(__dispatch, {
    circle: "rect",
    ellipse: "circle",
}, {
    arc: ($, fn) => transformVertices(asPolyline($), fn),
    cubic: __transformedShapePoints(Cubic),
    group: ($, fn) => $.copyTransformed((x) => transformVertices(x, fn)),
    line: __transformedShapePoints(Line),
    path: ($, fn) => new Path([
        ...map((s) => s.type === "m"
            ? {
                type: s.type,
                point: mulV([], fn(s.point), s.point),
            }
            : {
                type: s.type,
                geo: transformVertices(s.geo, fn),
            }, $.segments),
    ], __copyAttribs($)),
    points: __transformedShapePoints(Points),
    points3: __transformedShapePoints3(Points3),
    poly: __transformedShapePoints(Polygon),
    polyline: __transformedShapePoints(Polyline),
    quad: __transformedShapePoints(Quad),
    quadratic: __transformedShapePoints(Quadratic),
    rect: ($, fn) => transformVertices(asPolygon($), fn),
    tri: __transformedShapePoints(Triangle),
});

const union = defmulti(__dispatch, {}, {
    aabb: (a, b) => [
        new AABB(...__unionBounds(a.pos, a.size, b.pos, b.size)),
    ],
    rect: (a, b) => [
        new Rect(...__unionBounds(a.pos, a.size, b.pos, b.size)),
    ],
});

/**
 * Returns the volume of given 3D shape. Returns 0 for all others.
 *
 * Currently only implemented for:
 *
 * - AABB
 * - Sphere
 */
const volume = defmulti(__dispatch, {}, {
    [DEFAULT]: () => 0,
    aabb: ({ size }) => size[0] * size[1] * size[2],
    sphere: ($) => (4 / 3) * PI * $.r ** 3,
});

const warpPoints = (pts, dest, src) => {
    const res = [];
    for (let n = pts.length, i = 0; i < n; i++) {
        res.push(unmapPoint(dest, mapPoint(src, pts[i])));
    }
    return res;
};

const withAttribs = (shape, attribs, replace = true) => {
    shape.attribs = replace ? attribs : { ...shape.attribs, ...attribs };
    return shape;
};

export { AABB, APC, Arc, Circle, Cubic, Ellipse, Group, Line, Path, PathBuilder, Plane, Points, Points3, Polygon, Polyline, Quad, Quad3, Quadratic, Ray, Rect, Sphere, Text, Triangle, aabb, aabbFromMinMax, arc, arcFrom2Points, arcLength, area, asCubic, asPath, asPolygon, asPolyline, asSvg, bounds$2 as bounds, center, centroid, circle, circleFrom2Points, circleFrom3Points, classifyPoint, clipConvex, clippedLine, closestPoint$1 as closestPoint, convexHull, cubic, cubicFromArc$1 as cubicFromArc, cubicFromLine$1 as cubicFromLine, cubicFromQuadratic$1 as cubicFromQuadratic, edges, ellipse, ensureVertices, equilateralTriangle, fitAllIntoBounds2, fitIntoBounds2, fitIntoBounds3, flip, group, inscribedAABB, inscribedSquare, inscribedSquareHex, intersectionAABB, intersectionRect, intersects, line, mapPoint, normalizedPath, offset, path, pathBuilder, pathFromCubics, pathFromSvg, plane, planeFrom3Points, planeWithPoint, pointAt$1 as pointAt, pointInside, points, points3, polygon, polyline, quad, quad3, quadOnPlane, quadratic, quadraticFromLine$1 as quadraticFromLine, ray, rect, rectFromCentroid, rectFromMinMax, resample, roundedRect, scatter, simplify, splitAt, splitNearPoint, star, subdivCurve, svgDoc, tangentAt, tessellate, text, transform$1 as transform, transformVertices, translate, triangle, union, unmapPoint, vertices, volume, warpPoints, withAttribs };
