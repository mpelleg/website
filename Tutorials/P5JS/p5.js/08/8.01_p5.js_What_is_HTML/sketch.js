// https://vimeo.com/channels/learningp5js/142698165

function setup() {
  createCanvas(200, 200);
  createElement('h1','Ma porco dio')
}

function mousePressed(params) {
  createP("Porco dio is " + random(0,10))
}

function draw() {
  background(0);
  fill(255, 0, 0);
  rect(100, 100, 50, 50);
}
