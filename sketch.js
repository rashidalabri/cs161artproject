let values = [];

let i;
let j;

let gloria;

let increasing;

function preload() {
  gloria = loadFont("assets/WorkSans-Bold.ttf");
}

let bg;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(gloria);
  textSize(width / 30);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);

  i = 0;
  j = 0;

  for (let k = 0; k < width / 10; k++) {
    values.push(random(360));
  }

  frameRate(25);
  colorMode(HSB);

  increasing = true;

  bg = 0;
}

function draw() {
  //   background(color(bg, 200, 200));
  background(0);

  bubbleSort();

  simulateBubbleSort();

  fill(0);
  strokeWeight(4);
  stroke(color(bg, 200, 100));
  textSize(width / 30 + 0.1 * (width / 30) * sin(0.0025 * millis()));

  text(
    "Bubble is my name.\nPushing you down is my game,\nand to sort, I came.",
    width / 2,
    height / 2
  );

  if (bg < 360) {
    bg += 1;
  } else {
    bg = 0;
  }
}

function drawGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = x; i <= x + w; i++) {
    let inter = map(i, x, x + w, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    strokeWeight(1);
    line(i, y, i, y + h);
  }
}

function simulateBubbleSort() {
  w = int(width / (values.length - 1));
  for (let k = 0; k < values.length - 1; k++) {
    x = k * w;
    c1 = color(values[k], 200, 200);
    c2 = color(values[k + 1], 200, 200);
    drawGradient(x, 0, w, height, c1, c2);
  }
}

function bubbleSort() {
  for (let k = 0; k < 250; k++) {
    if (i < values.length) {
      let temp = values[j];
      if (values[j] > values[j + 1]) {
        values[j] = values[j + 1];
        values[j + 1] = temp;
      }
      j++;

      if (j >= values.length - i - 1) {
        j = 0;
        i++;
      }
    } else {
      values = [];
      i = 0;
      j = 0;
      for (let k = 0; k < width / 10; k++) {
        values.push(random(360));
      }
    }
  }
}
