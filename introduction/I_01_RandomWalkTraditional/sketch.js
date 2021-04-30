let walker;
function setup() {
  createCanvas(640, 360);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.display();
  walker.step();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  display() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    let stepx = random(-1, 1);
    let stepy = random(-1, 1);

    this.x += stepx;
    this.y += stepy;
  }
}
