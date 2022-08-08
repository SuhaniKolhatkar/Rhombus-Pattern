var bgcolor;
var button ;
var slider ;

function setup() {
canvas=  createCanvas(displayWidth,displayHeight);
  background(255)
  createP('');
 // button = createButton("go");
  //button.mousePressed(changeColor);
  slider = createSlider(1,50,1, 0.5);
  slider.position(displayWidth/2, 20);
  //slider1 = createSlider(10,800,800)
}
function changeColor(){
  //bgcolor=color(random(255))
}
function draw() {
 //background(bgcolor);
  if (mouseIsPressed){
  spiral()
  }
 
}
function spiral (){
  stroke(random(255),random(255),random(255))
  strokeWeight(2)
  fill(255);
  rectMode(CENTER)
  translate(width/2, height/2);
rotate(4*TWO_PI/slider.value());
  rect(0,0,slider.value()*10,slider.value()*10);
}
