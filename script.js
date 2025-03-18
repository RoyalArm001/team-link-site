// Գունային ռեժիմի փոփոխություն
const colorCircles = document.querySelectorAll('.color-circle');
const body = document.body;

colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        const selectedColor = circle.getAttribute('data-color');
        body.className = ''; // Մաքրել նախկին գունային ռեժիմը
        body.classList.add(selectedColor + '-mode');
    });
});

// Համբուրգեր մենյու
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Սքրոլ դեպի վերև
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});



function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").innerText = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Կանչում ենք, որ միանգամից ցույց տա

function setTheme(theme) {
    if (theme === 'system') {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
    }
    document.body.className = theme + "-theme";
    localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", function () {
    let savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
});


// WebGL անիմացիայի համար
const canvas = document.getElementById('landscape');
const gl = canvas.getContext('webgl');

if (!gl) {
  console.error('WebGL is not supported in your browser.');
}

// Vertex shader
const vertexShaderSource = `
  attribute vec4 a_position;
  void main() {
    gl_Position = a_position;
  }
`;

// Fragment shader
const fragmentShaderSource = `
  precision mediump float;
  void main() {
    gl_FragColor = vec4(0.0, 0.5, 1.0, 1.0); // Կապույտ գույն
  }
`;

// Shader կոմպիլյացիա
function compileShader(gl, source, type) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
const fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);

// Shader program
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  console.error('Program linking error:', gl.getProgramInfoLog(program));
}

gl.useProgram(program);

// Buffer
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

const positions = [
  -1.0, -1.0,
  1.0, -1.0,
  -1.0, 1.0,
  1.0, 1.0,
];

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
gl.enableVertexAttribArray(positionAttributeLocation);
gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

// Render
function render() {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  requestAnimationFrame(render);
}

render();