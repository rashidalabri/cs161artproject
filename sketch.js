let values = [];

let i;
let j;

let gloria;

function preload() {
  gloria = loadFont('assets/WorkSans-Bold.ttf');
}

let bg;

function setup() {
  createCanvas(windowWidth/2, windowHeight/2, WEBGL);
  
  textFont(gloria);
  textSize(width / 30);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);

  i = 0;
  j = 0;
    
  for(let k = 0; k < min(width, 1000); k++){
    values.push(random(360));
  }
    
  frameRate(25);
  colorMode(HSB);

  bg = 0;
}

function draw() {
  background(color(values[-1], 200, 200));

  bubbleSort();
  simulateBubbleSort();

  fill(0);
  strokeWeight(0);
  let time = millis();
  rotateY(0.25* sin(0.001 * time));
  rotateZ(0.25 * cos(0.001 * time));
  rotateX(0.1 * tan(0.0001 * time));

  text('Bubble is my name.\nPushing you down is my game,\nand to sort, I came.', 0, 0);

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
    line(i , y, -100, i, y + h, -100);
  }
}

function simulateBubbleSort() {
  w = int(width / (values.length - 1));
  for (let k = 0; k < values.length - 1; k++) {
    x = k * w;
    c1 = color(values[k], 200, 200);
    c2 = color(values[k + 1], 200, 200);
    drawGradient(x - int(width / 2), -int(height / 2), w, height, c1, c2);
  }
}

function bubbleSort() {
  for(let k = 0; k < 250; k++){
    if(i < values.length) {
      let temp = values[j];
      if(values[j] > values[j + 1]) {
        values[j] = values[j+1];
        values[j+1] = temp;
      }
      j++;
      
      if(j>=values.length-i-1){
        j = 0;
        i++;
      }
    }
    else{
        values = [];
        i = 0;
        j = 0;
        for(let i = 0;i<width/1;i++){
            values.push(random(360));
        }
    }
  }
}

// Bubble is my name,
// pushing you down is my game
// and to sort I came