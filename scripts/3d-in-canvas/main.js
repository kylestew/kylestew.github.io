import colors from "/web_modules/flat-palettes.js";
import createCrystalMesh from "./crystal-mesh.js";
import createCamera from "/web_modules/perspective-camera.js";
import cameraProject from "/web_modules/camera-project.js";
import { mat4 } from "/web_modules/gl-matrix.js";
import BezierEasing from "/web_modules/bezier-easing.js";

/*
 * TODO:
 * - 2nd shape?
 * - ball ends?
 * - move things?
 */

// == SETTINGS ==========================
const pointCount = 9;
// const easeA = new BezierEasing(0.14, 0.28, 0.48, 0.45);
// const easeB = new BezierEasing(0.14, 0.28, 0.67, 0.46);
const speed = 0.0001;
const lineWidth = 4;
const [background, primary, secondary] = colors(3);
// ======================================

const stroke = (ctx, points) => {
  ctx.beginPath();
  points.forEach((p) => ctx.lineTo(p[0], p[1]));

  ctx.strokeStyle = primary;
  ctx.stroke();

  ctx.fillStyle = secondary + "AA";
  ctx.fill();
};

const drawCells = (ctx, positions, cells) => {
  // TODO: sort by depth

  cells.forEach((cell) => {
    const points = cell.map((i) => positions[i]);
    points.push(points[0]);
    stroke(ctx, points);
  });
};

function init() {
  // grab and setup canvas
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  ctx.canvas.width = width;
  ctx.canvas.height = height;

  // setup 3D perspective camera
  const camera = createCamera({
    fov: (80 * Math.PI) / 180,
    near: 0.01,
    far: 1000,
    viewport: [0, 0, width, height],
  });

  // create 3D mesh
  const { cells, positions } = createCrystalMesh(pointCount);

  // randomize colors from palette
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = lineWidth;

  function render(time) {
    let playhead = (time * speed) % 1;
    const viewport = [0, 0, width, height];

    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    // truck camera back and point at world center
    let zOffset = Math.sin(playhead * Math.PI * -2) * 0.6;
    camera.identity();
    camera.translate([0, 0, 3 + zOffset]);
    camera.lookAt([0, 0, 0]);
    camera.update();
    const projection = camera.projection;
    const view = camera.view;
    const model = mat4.identity([]);

    // rotate the mesh in place
    // mat4.rotateY(model, model, easeA(playhead) * Math.PI * 2);
    // mat4.rotateX(model, model, easeB(playhead) * Math.PI * 2);

    // build MVP matrix
    const combined = mat4.identity([]);
    mat4.multiply(combined, view, model);
    mat4.multiply(combined, projection, combined);

    // "project" the 3D positions into 2D [x, y] points in pixel space
    const points = positions.map((position) => {
      return cameraProject([], position, viewport, combined);
    });

    // draw the mesh
    drawCells(ctx, points, cells);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
init();
