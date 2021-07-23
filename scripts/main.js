"use strict";
/* this is the main application, using TypeScript */
window.addEventListener("load", startup, false);
let canvas = document.getElementById('icanvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
let gl = canvas.getContext('webgl', {
    antialias: false,
    depth: false
});
function startup() {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(30, 10, 60, 60);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
//# sourceMappingURL=main.js.map