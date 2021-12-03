function download(dataURL, name) {
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = name;
  link.click();
}

function downloadCanvas(ctx, filename) {
  var dataURL = ctx.canvas.toDataURL("image/png");
  download(dataURL, filename);
}

export { downloadCanvas };
