import { vec3 } from "/web_modules/gl-matrix.js";
import { random } from "/web_modules/canvas-sketch-util.js";
import convexHull from "/web_modules/convex-hull.js";

const centroid = (points) => {
  return points.reduce(
    (sum, pos) => {
      return vec3.add(sum, sum, pos);
    },
    [0, 0, 0]
  );
};

const createCrystalMesh = (pointCount) => {
  // crystal mesh is a convex hull of N random points on a sphere
  const positions = Array.from(new Array(pointCount)).map(() => {
    return random.onSphere(1);
  });

  // center the mesh by finding its "centroid"
  const cent = centroid(positions);
  if (positions.length >= 1) {
    vec3.scale(cent, cent, 1 / positions.length);
  }

  // translate all points in the mesh away from centroid
  positions.forEach((pos) => {
    vec3.sub(pos, pos, cent);
  });

  // get triangles (cells) of the 3D mesh
  const cells = convexHull(positions);
  return { cells, positions };
};

export { createCrystalMesh, centroid };
