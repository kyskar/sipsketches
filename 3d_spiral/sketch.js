/* spiral animation and 3D illusion
shape and colour inspired by nostalgia for basic drawing programs
*/

let ratioMult = 0.006;

function spiral(r) {
  for (let i = 0; i <= 360; i += 1) {
    let theta = radians(i * r);

    let x = cos(theta + r) * i / 2;
    let y = sin(theta) * i / 2;
    fill(y * 10, x * 10, x * 10);
    ellipse(x, y, 30, 8, 50);

    x = cos(theta) * i / 2;
    y = sin(theta + r) * i / 2;
    fill(x * 10, x * 10, y * 10);
    ellipse(x, y, 30, 8, 50);
  }
}

function setup() {
  createCanvas(400, 400);
  // fill(255);
  noStroke();
}

function draw() {
  background(100, 100, 120);
  translate(width / 2, height / 2);

  // function mousePressed() {      // very wip
  //   if (ratioMult == 0.006) {
  //     let ratioMult = 0.06;
  //   } else {
  //     let ratioMult = 0.006;
  //   }
  // }
  // console.log(ratioMult);

  let ratio = frameCount * ratioMult;
  spiral(ratio);
  
  if (ratioMult <= 0.03){
    ratioMult += 0.00001;
  }
}