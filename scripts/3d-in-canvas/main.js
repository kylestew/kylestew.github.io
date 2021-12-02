import { vec3 } from "/web_modules/gl-matrix.js";
import { random } from "/web_modules/canvas-sketch-util.js";
import colors from "/web_modules/flat-palettes.js";

// import createCamera from "../../web_modules/perspective-camera.js";
// console.log(createCamera);

const createMesh = () => {
  // crystal mesh is a convex hull of N random points on a sphere
  const pointCount = 10;
  const radius = 200;
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

  // translate all points in the mesh away from centroid
  positions.forEach((pos) => {
    vec3.sub(pos, pos, centroid);
  });

  // get triangles (cells) of the 3D mesh
  //...

  return positions;
};

const stroke = (ctx, points) => {
  ctx.beginPath();
  points.forEach((p) => ctx.lineTo(p[0], p[1]));
  ctx.stroke();
};

function init() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.canvas.width = width;
  ctx.canvas.height = height;

  console.log(width, height);

  let [background, foreground] = colors(2);
  console.log(foreground, background);

  let mesh = createMesh();
  console.log(mesh);
  let positions = mesh;

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  // "project" the 3D positions into 2D [x, y] points in pixel space
  // positions
  const points = positions;

  // draw the mesh
  // drawCells
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.strokeStyle = foreground;
  ctx.lineWidth = 8;
  ctx.translate(width / 2, height / 2);
  stroke(ctx, points);
}
console.log("in script");
window.onload = function () {
  console.log("onload");
  init();
};
