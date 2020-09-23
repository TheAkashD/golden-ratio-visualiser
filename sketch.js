let n = 0; //number of seeds 
let c = 3; //gap between seeds
let colour = 255; //colour of seeds

let sliderC;
let clearButton;
let sliderR;
let sliderG;
let sliderB;

function centreCanvas() {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
  }  

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;
	cnv.position(x, y);
	centreCanvas();
	background(51);
	colour=255;

	sliderC = createSlider(1, 10, 3, 1);
	sliderC.position(20, height-50);
	sliderBG = createSlider(0, 255, 51);
	sliderBG.position(20, height-100);

	sliderR = createSlider(0, 255, 255);
	sliderR.position(windowWidth-200, height-50);
	sliderG = createSlider(0, 255, 255);
	sliderG.position(windowWidth-200, height-100);
	sliderB = createSlider(0, 255, 255);
	sliderB.position(windowWidth-200, height-150);

	initText();
	clearButton = createButton("Clear");
	clearButton.position(windowWidth-200, windowHeight-200);
	clearButton.mousePressed(resetSketch);
}

function windowResized() {
	centreCanvas();
}

function initText(){
	textSize(20);
	textFont("Consolas");
	fill(255);
	text("DISTANCE", sliderC.x, sliderC.y);
	text("BACKGROUND (obsolete!)", sliderBG.x, sliderBG.y);
	text("RED", sliderR.x, sliderR.y);
	text("GREEN", sliderG.x, sliderG.y);
	text("BLUE", sliderB.x, sliderB.y);
	
	textSize(15);
	text("Created by Akash Dhorajiwala 2019", 10, 20);
}

function resetSketch() {
	centreCanvas();
	background(51);
	n = 0;
	c = 3;
	colour = 255;
	fill(255);
	initText();
}

function draw() {
	const phi = (1+sqrt(5))/2;  //golden ratio
	let c = sliderC.value();
	//background(sliderBG.value());
	let a = n * phi; //angle of rotation
	let r = c * sqrt(n);

	let x = r * cos(a) + width/2; //x coordinate
	let y = r * sin(a) + height/2; //y coordinate

	noFill();
	stroke(sliderR.value(), sliderG.value(), sliderB.value()); 	
	ellipse(x, y, 1, 1);
	frameRate(60);
	n++;
}