import colors from "/web_modules/flat-palettes.js";
import createCrystalMesh from "./crystal-mesh.js";
import createCamera from "/web_modules/perspective-camera.js";
import cameraProject from "/web_modules/camera-project.js";
import { RedIntegerFormat } from "three";

const stroke = (ctx, points) => {
  ctx.beginPath();
  points.forEach((p) => ctx.lineTo(p[0], p[1]));
  ctx.stroke();
};

const drawCells = (ctx, positions, cells) => {
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
  const width = canvas.width;
  const height = canvas.height;
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
  let { cells, positions } = createCrystalMesh();
  // console.log(cells, positions);

  // randomize colors from palette
  let [background, foreground] = colors(2);
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.strokeStyle = foreground;
  ctx.lineWidth = 8;

  function render() {
    // truck camera back and point at world center
    // const zOffset = Math.sin(playhead)
    const zOffset = 1.0;
    camera.identity();
    camera.translate([0, 0, 3 + zOffset]);
    camera.lookAt([0, 0, 0]);
    camera.update();

    // a 3D scene is made of:
    // - 4x4 projection matrix
    // - 4x4 view matrix
    // - 4x4 model matrix
    const projection = camera.projection;

    // "project" the 3D positions into 2D [x, y] points in pixel space
    //...

    // draw the mesh
    ctx.translate(width / 2, height / 2);
    let points = positions;
    drawCells(ctx, points, cells);
  }
  render();
}
init();
