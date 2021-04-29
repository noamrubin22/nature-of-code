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
    let choice = floor(random(4));
    if (choice == 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
  }
}
