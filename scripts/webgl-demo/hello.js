import { vec3 } from "/web_modules/gl-matrix.js";
import { random } from "/web_modules/canvas-sketch-util.js";

// import createCamera from "../../web_modules/perspective-camera.js";
// console.log(createCamera);

const createMesh = () => {
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

  console.log(centroid);
};

let mesh = createMesh();
console.log(mesh);
