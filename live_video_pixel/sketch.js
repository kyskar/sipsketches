// live video filter - pixelation and distortion to emulate an old screen

p5.disableFriendlyErrors = true;

let capture;
let diff = 70;

let y = 0;
let a = 5;
let easing = 0.05;

function pixelate(framePixels) {
  let pixSize = round(map(mouseX, 0, width, 2, 20))

  for (let y = 0; y < height; y += pixSize) {
    for (let x = 0; x < width; x += pixSize) {
      const pixValue = (y * width + x) * 4;

      const colR = random((capture.pixels[pixValue]) - diff, (capture.pixels[pixValue]) + diff);
      const colG = random((capture.pixels[pixValue + 1]) - diff, (capture.pixels[pixValue + 1]) + diff);
      const colB = random((capture.pixels[pixValue + 2]) - diff, (capture.pixels[pixValue + 2]) + diff);

      fill(colR, colG, colB);
      rect(x, y, pixSize, pixSize);
    }
  }
}

function lines(y, a, easing) {  //very wip
  stroke(250, 40);
  strokeWeight(15);
  if (y <= height) {
    y += a + (sin(easing));
    line(0, y, width, y);
    // lines(y,a,easing);
  } 
  if (y>= height) {
    a = 5;
    y = 0;
  }
}

function setup() {
  createCanvas(320, 240);
  frameRate(20);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide(); //uncomment for plain vid
}

function draw() {
  background(200);
  noStroke();
  frame = capture.loadPixels();

  pixelate(frame);
  lines(y, a, easing);
  a += 5;
}