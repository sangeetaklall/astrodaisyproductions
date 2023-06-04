let t = 0;
function setup() {
  createCanvas(625, 625);
  canvas.parent('canvas-container');
}

function draw() {
  background('black');
  for (let y = 0; y <30; y++) {
    for (let x = 0; x <30; x++) { 
      noStroke();
      fill(x*cos(t)*25, y*7, 100);
      rect(x*sin(t)*25, y*25, 10, 50);
      rotate (x/200)
      circle(x*cos(t)*25, y*25, 10);
      
      }
    }
  
  t = t + 0.005;

  
}