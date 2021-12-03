class Picture {
  constructor(width, height, pixels) {
    this.width = width;
    this.height = height;
    this.pixels = pixels;
  }
  static empty(width, height, color) {
    let pixels = new Array(width * height).fill(color);
    return new Picture(width, height, pixels);
  }
  pixel(x, y) {
    return this.pixels[x + y * this.width];
  }
  draw(pixels) {
    let copy = this.pixels.slice();
    for (let { x, y, color } of pixels) {
      copy[x + y * this.width] = color;
    }
    return new Picture(this.width, this.height, copy);
  }
}

function updateState(state, action) {
  return { ...state, ...action };
}

let PictureCanvas = class PictureCanvas {};

class PixelEditor {
  constructor(state, config) {
    this.state = state;

    // this.canvas = new PictureCanvas(state.picture)
  }
  syncState(state) {
    this.state = state;
  }
}

let startState = {
  tool: "draw",
  color: "#000000",
  picture: Picture.empty(60, 30, "#f0f0f0"),
};

function startPixelEditor({ state = startState }) {
  let app = new PixelEditor(state, {});
}

// let bob = document.querySelector("div#main");
// console.log(bob);
/* <div></div>
<script>
  document.querySelector("div")
    .appendChild(startPixelEditor({}));
</script> */
