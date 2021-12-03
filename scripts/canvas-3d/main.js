import { downloadCanvas } from "../lib/save.js";
import { setup, render, settings } from "./sketch.js";

let ctx;

function resetCanvas() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  ctx.canvas.width = width;
  ctx.canvas.height = height;
}

function init() {
  const canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  resetCanvas();

  setup();

  function mainLoop(time) {
    let playhead = (time / 1000 / settings.loopTime) % 1.0;

    render({
      ctx,
      width: ctx.canvas.width,
      height: ctx.canvas.height,
      playhead,
    });

    requestAnimationFrame(mainLoop);
  }
  requestAnimationFrame(mainLoop);
}

window.onload = function () {
  init();
};

window.onresize = function () {
  resetCanvas();
};

window.onkeydown = function (evt) {
  if (evt.key == "s") {
    downloadCanvas(ctx, "output");
  } else if (evt.key == "r") {
    setup();
  }
};
