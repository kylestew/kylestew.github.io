import { vec3 } from "/web_modules/gl-matrix.js";
import { random } from "/web_modules/canvas-sketch-util.js";
import convexHull from "/web_modules/convex-hull.js";

const createCrystalMesh = () => {
  // crystal mesh is a convex hull of N random points on a sphere
  const pointCount = 10;
  const radius = 1;
  const positions = Array.from(new Array(pointCount)).map(() => {
    return random.onSphere(radius);
  });

  // center the mesh by finding its "centroid"
  const centroid = positions.reduce(
    (sum, pos) => {
      return vec3.add(sum, sum, pos);
    },
    [0, 0, 0]
  );
  if (positions.length >= 1) {
    vec3.scale(centroid, centroid, 1 / positions.length);
  }

  // translate all points in the mesh away from centroid
  positions.forEach((pos) => {
    vec3.sub(pos, pos, centroid);
  });

  // get triangles (cells) of the 3D mesh
  const cells = convexHull(positions);
  return { cells, positions };
};

export default createCrystalMesh;
