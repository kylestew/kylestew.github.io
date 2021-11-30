import * as THREE from "../../libs/three.module.min.js";

const canvas = document.querySelector("#gl-canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
console.log(canvas, renderer);
