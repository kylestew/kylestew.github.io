function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

var objectAssign = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = Object.keys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

var cross_1 = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out
}

var dot_1 = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

var subtract_1 = subtract;

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out
}

var EPSILON = 0.000001;
var edge1 = [0,0,0];
var edge2 = [0,0,0];
var tvec = [0,0,0];
var pvec = [0,0,0];
var qvec = [0,0,0];

var rayTriangleIntersection = intersectTriangle;

function intersectTriangle (out, pt, dir, tri) {
    subtract_1(edge1, tri[1], tri[0]);
    subtract_1(edge2, tri[2], tri[0]);
    
    cross_1(pvec, dir, edge2);
    var det = dot_1(edge1, pvec);
    
    if (det < EPSILON) return null;
    subtract_1(tvec, pt, tri[0]);
    var u = dot_1(tvec, pvec);
    if (u < 0 || u > det) return null;
    cross_1(qvec, tvec, edge1);
    var v = dot_1(dir, qvec);
    if (v < 0 || u + v > det) return null;
    
    var t = dot_1(edge2, qvec) / det;
    out[0] = pt[0] + t * dir[0];
    out[1] = pt[1] + t * dir[1];
    out[2] = pt[2] + t * dir[2];
    return out;
}

var add_1 = add;

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out
}

var scale_1 = scale;

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out
}

var copy_1 = copy;

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out
}

var rayPlaneIntersection = intersectRayPlane;

var v0 = [0, 0, 0];

function intersectRayPlane(out, origin, direction, normal, dist) {
  var denom = dot_1(direction, normal);
  if (denom !== 0) {
    var t = -(dot_1(origin, normal) + dist) / denom;
    if (t < 0) {
      return null
    }
    scale_1(v0, direction, t);
    return add_1(out, origin, v0)
  } else if (dot_1(normal, origin) + dist === 0) {
    return copy_1(out, origin)
  } else {
    return null
  }
}

var squaredDistance_1 = squaredDistance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x*x + y*y + z*z
}

var scaleAndAdd_1 = scaleAndAdd;

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out
}

var tmp = [0, 0, 0];

var raySphereIntersection = intersectRaySphere;
function intersectRaySphere (out, origin, direction, center, radius) {
  subtract_1(tmp, center, origin);
  var len = dot_1(direction, tmp);
  if (len < 0) { // sphere is behind ray
    return null
  }

  scaleAndAdd_1(tmp, origin, direction, len);
  var dSq = squaredDistance_1(center, tmp);
  var rSq = radius * radius;
  if (dSq > rSq) {
    return null
  }

  scale_1(out, direction, len - Math.sqrt(rSq - dSq));
  return add_1(out, out, origin)
}

var rayAabbIntersection = intersection;
var distance_1 = distance;

function intersection (out, ro, rd, aabb) {
  var d = distance(ro, rd, aabb);
  if (d === Infinity) {
    out = null;
  } else {
    out = out || [];
    for (var i = 0; i < ro.length; i++) {
      out[i] = ro[i] + rd[i] * d;
    }
  }

  return out
}

function distance (ro, rd, aabb) {
  var dims = ro.length;
  var lo = -Infinity;
  var hi = +Infinity;

  for (var i = 0; i < dims; i++) {
    var dimLo = (aabb[0][i] - ro[i]) / rd[i];
    var dimHi = (aabb[1][i] - ro[i]) / rd[i];

    if (dimLo > dimHi) {
      var tmp = dimLo;
      dimLo = dimHi;
      dimHi = tmp;
    }

    if (dimHi < lo || dimLo > hi) {
      return Infinity
    }

    if (dimLo > lo) lo = dimLo;
    if (dimHi < hi) hi = dimHi;
  }

  return lo > hi ? Infinity : lo
}
rayAabbIntersection.distance = distance_1;

var tmpTriangle = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

var tmp3 = [0, 0, 0];

var ray3d = Ray;
function Ray (origin, direction) {
  this.origin = origin || [ 0, 0, 0 ];
  this.direction = direction || [ 0, 0, -1 ];
}

Ray.prototype.set = function (origin, direction) {
  this.origin = origin;
  this.direction = direction;
};

Ray.prototype.copy = function (other) {
  copy_1(this.origin, other.origin);
  copy_1(this.direction, other.direction);
};

Ray.prototype.clone = function () {
  var other = new Ray();
  other.copy(this);
  return other
};

Ray.prototype.intersectsSphere = function (center, radius) {
  return raySphereIntersection(tmp3, this.origin, this.direction, center, radius)
};

Ray.prototype.intersectsPlane = function (normal, distance) {
  return rayPlaneIntersection(tmp3, this.origin, this.direction, normal, distance)
};

Ray.prototype.intersectsTriangle = function (triangle) {
  return rayTriangleIntersection(tmp3, this.origin, this.direction, triangle)
};

Ray.prototype.intersectsBox = function (aabb) {
  return rayAabbIntersection(tmp3, this.origin, this.direction, aabb)
};

Ray.prototype.intersectsTriangleCell = function (cell, positions) {
  var a = cell[0], b = cell[1], c = cell[2];
  tmpTriangle[0] = positions[a];
  tmpTriangle[1] = positions[b];
  tmpTriangle[2] = positions[c];
  return this.intersectsTriangle(tmpTriangle)
};

var transformMat4_1 = transformMat4;

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4 (out, a, m) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out
}

var set_1 = set;

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set (out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out
}

var NEAR_RANGE = 0;
var FAR_RANGE = 1;
var tmp4 = [0, 0, 0, 0];

var cameraProject_1 = cameraProject;
function cameraProject (out, vec, viewport, combinedProjView) {
  var vX = viewport[0],
    vY = viewport[1],
    vWidth = viewport[2],
    vHeight = viewport[3],
    n = NEAR_RANGE,
    f = FAR_RANGE;

  // convert: clip space -> NDC -> window coords
  // implicit 1.0 for w component
  set_1(tmp4, vec[0], vec[1], vec[2], 1.0);

  // transform into clip space
  transformMat4_1(tmp4, tmp4, combinedProjView);

  // now transform into NDC
  var w = tmp4[3];
  if (w !== 0) { // how to handle infinity here?
    tmp4[0] = tmp4[0] / w;
    tmp4[1] = tmp4[1] / w;
    tmp4[2] = tmp4[2] / w;
  }

  // and finally into window coordinates
  // the foruth component is (1/clip.w)
  // which is the same as gl_FragCoord.w
  out[0] = vX + vWidth / 2 * tmp4[0] + (0 + vWidth / 2);
  out[1] = vY + vHeight / 2 * tmp4[1] + (0 + vHeight / 2);
  out[2] = (f - n) / 2 * tmp4[2] + (f + n) / 2;
  out[3] = w === 0 ? 0 : 1 / w;
  return out
}

var projectMat4 = project;

/**
 * Multiplies the input vec by the specified matrix, 
 * applying a W divide, and stores the result in out 
 * vector. This is useful for projection,
 * e.g. unprojecting a 2D point into 3D space.
 *
 * @method  prj
 * @param {vec3} out the output vector
 * @param {vec3} vec the input vector to project
 * @param {mat4} m the 4x4 matrix to multiply with 
 * @return {vec3} the out vector
 */
function project (out, vec, m) {
  var x = vec[0],
    y = vec[1],
    z = vec[2],
    a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3],
    a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7],
    a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11],
    a30 = m[12], a31 = m[13], a32 = m[14], a33 = m[15];

  var lw = 1 / (x * a03 + y * a13 + z * a23 + a33);

  out[0] = (x * a00 + y * a10 + z * a20 + a30) * lw;
  out[1] = (x * a01 + y * a11 + z * a21 + a31) * lw;
  out[2] = (x * a02 + y * a12 + z * a22 + a32) * lw;
  return out
}

var cameraUnproject = unproject;

/**
 * Unproject a point from screen space to 3D space.
 * The point should have its x and y properties set to
 * 2D screen space, and the z either at 0 (near plane)
 * or 1 (far plane). The provided matrix is assumed to already
 * be combined, i.e. projection * view.
 *
 * After this operation, the out vector's [x, y, z] components will
 * represent the unprojected 3D coordinate.
 *
 * @param  {vec3} out               the output vector
 * @param  {vec3} vec               the 2D space vector to unproject
 * @param  {vec4} viewport          screen x, y, width and height in pixels
 * @param  {mat4} invProjectionView combined projection and view matrix
 * @return {vec3}                   the output vector
 */
function unproject (out, vec, viewport, invProjectionView) {
  var viewX = viewport[0],
    viewY = viewport[1],
    viewWidth = viewport[2],
    viewHeight = viewport[3];

  var x = vec[0],
    y = vec[1],
    z = vec[2];

  x = x - viewX;
  y = viewHeight - y - 1;
  y = y - viewY;

  out[0] = (2 * x) / viewWidth - 1;
  out[1] = (2 * y) / viewHeight - 1;
  out[2] = 2 * z - 1;
  return projectMat4(out, out, invProjectionView)
}

var normalize_1 = normalize;

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x*x + y*y + z*z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out
}

// could be modularized...







var tmp$1 = [0, 0, 0];
var epsilon = 0.000000001;

// modifies direction & up vectors in place
var cameraLookAt = function (direction, up, position, target) {
  subtract_1(tmp$1, target, position);
  normalize_1(tmp$1, tmp$1);
  var isZero = tmp$1[0] === 0 && tmp$1[1] === 0 && tmp$1[2] === 0;
  if (!isZero) {
    var d = dot_1(tmp$1, up);
    if (Math.abs(d - 1) < epsilon) { // collinear
      scale_1(up, direction, -1);
    } else if (Math.abs(d + 1) < epsilon) { // collinear opposite
      copy_1(up, direction);
    }
    copy_1(direction, tmp$1);

    // normalize up vector
    cross_1(tmp$1, direction, up);
    normalize_1(tmp$1, tmp$1);

    cross_1(up, tmp$1, direction);
    normalize_1(up, up);
  }
};

var set_1$1 = set$1;

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set$1(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out
}

var cameraPickingRay = createPickRay;
function createPickRay(origin, direction, point, viewport, invProjView) {
  set_1$1(origin, point[0], point[1], 0);
  set_1$1(direction, point[0], point[1], 1);
  cameraUnproject(origin, origin, viewport, invProjView);
  cameraUnproject(direction, direction, viewport, invProjView);
  subtract_1(direction, direction, origin);
  normalize_1(direction, direction);
}

var multiply_1 = multiply;

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
}

var invert_1 = invert;

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
}

var identity_1 = identity;

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

// this could also be useful for a orthographic camera
var cameraBase = function cameraBase (opt) {
  opt = opt || {};

  var camera = {
    projection: identity_1([]),
    view: identity_1([]),
    position: opt.position || [0, 0, 0],
    direction: opt.direction || [0, 0, -1],
    up: opt.up || [0, 1, 0],
    viewport: opt.viewport || [ -1, -1, 1, 1 ],
    projView: identity_1([]),
    invProjView: identity_1([])
  };

  function update () {
    multiply_1(camera.projView, camera.projection, camera.view);
    var valid = invert_1(camera.invProjView, camera.projView);
    if (!valid) {
      throw new Error('camera projection * view is non-invertible')
    }
  }

  function lookAt (target) {
    cameraLookAt(camera.direction, camera.up, camera.position, target);
    return camera
  }

  function identity () {
    set_1$1(camera.position, 0, 0, 0);
    set_1$1(camera.direction, 0, 0, -1);
    set_1$1(camera.up, 0, 1, 0);
    identity_1(camera.view);
    identity_1(camera.projection);
    identity_1(camera.projView);
    identity_1(camera.invProjView);
    return camera
  }

  function translate (vec) {
    add_1(camera.position, camera.position, vec);
    return camera
  }

  function createPickingRay (mouse) {
    var ray = new ray3d();
    cameraPickingRay(ray.origin, ray.direction, mouse, camera.viewport, camera.invProjView);
    return ray
  }

  function project (point) {
    return cameraProject_1([], point, camera.viewport, camera.projView)
  }

  function unproject (point) {
    return cameraUnproject([], point, camera.viewport, camera.invProjView)
  }

  return objectAssign(camera, {
    translate: translate,
    identity: identity,
    lookAt: lookAt,
    createPickingRay: createPickingRay,
    update: update,
    project: project,
    unproject: unproject
  })
};

var defined = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined) return arguments[i];
    }
};

var perspective_1 = perspective;

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
}

var lookAt_1 = lookAt;

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < 0.000001 &&
        Math.abs(eyey - centery) < 0.000001 &&
        Math.abs(eyez - centerz) < 0.000001) {
        return identity_1(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
}

var cameraPerspective = function cameraPerspective (opt) {
  opt = opt || {};

  var camera = cameraBase(opt);
  camera.fov = defined(opt.fov, Math.PI / 4);
  camera.near = defined(opt.near, 1);
  camera.far = defined(opt.far, 100);

  var center = [0, 0, 0];

  var updateCombined = camera.update;

  function update () {
    var aspect = camera.viewport[2] / camera.viewport[3];

    // build projection matrix
    perspective_1(camera.projection, camera.fov, aspect, Math.abs(camera.near), Math.abs(camera.far));

    // build view matrix
    add_1(center, camera.position, camera.direction);
    lookAt_1(camera.view, camera.position, center, camera.up);

    // update projection * view and invert
    updateCombined();
    return camera
  }

  // set it up initially from constructor options
  update();
  return objectAssign(camera, {
    update: update
  })
};

var perspectiveCamera = cameraPerspective;

export default perspectiveCamera;
