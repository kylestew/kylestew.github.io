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

export default cameraProject_1;
