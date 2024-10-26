var wigglyLetters=[];
var size=32;
var speed=1;
var letter, size, rand, speed, xposition, yposition;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(32);
  textFont("Times");
}


function draw() {
  background(0);
  fill(255); //changes font to white
  noStroke();
  for(var i=0; i<wigglyLetters.length; i++){
    wigglyLetters[i].wiggle();
    wigglyLetters[i].display();
  }
}

function mousePressed() {
  rand = int(random(65, 160)); //65 is letter A, 66 is letter B
  letter= char(rand);
  //text(letter, mouseX, mouseY);
  //new wiggle class : positionx, positiony, size, letter, speed
  wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed));
  
}
class Wiggle {
  constructor(x, y, size, letter, speed){ 
    this.x=x;
    this.y=y;
    this.textSize=size;
    this.speed=speed;
    this.letter=letter;
  }
  wiggle(){
    this.x+=random(-4, 4);
    this.y+=random(-4, 4);
    this.textSize+=random(-20, 20);
  }
  //draws the elements to the screen
  display(){
    textSize(this.textSize);
    text(this.letter, this.x, this.y);
  }
}
function windowResize(){
 resizeCanvas(windowWidth, windowHeight);
}
  
  
  
