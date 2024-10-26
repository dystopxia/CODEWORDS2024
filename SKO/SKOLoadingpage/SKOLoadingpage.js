let fishImages= [];
let fish= [];
let bgImage;
let index= 0;

const weekURLs= [
  "sketch_241020week2reflection",
  "sketch_241020bweek3reflection",
  "sketch_241020cweek4reflection",
  "sketch_241020bweek5reflection",
  "sketch_241020aweek6reflection",
  "sketch_241020bweek7",
  "sketch_241021aweek8reflection",
  "skoweek9",
  "sketch_241021bweek10reflection",
  "sketch_241021cweek11reflections",
  "sketch_241021dweek12reflection"
];

function preload() {
  bgImage= loadImage("data/bg4.jpg");

  fishImages.push(loadImage("data/fish2.gif"));
  fishImages.push(loadImage("data/fish3new.gif"));
  fishImages.push(loadImage("data/fish4.gif"));
  fishImages.push(loadImage("data/fish5.gif"));
  fishImages.push(loadImage("data/fish6.gif"));
  fishImages.push(loadImage("data/fish7.gif"));
  fishImages.push(loadImage("data/fish8.gif"));
  fishImages.push(loadImage("data/fish9.gif"));
  fishImages.push(loadImage("data/fish10.gif"));
  fishImages.push(loadImage("data/fish11.gif"));
  fishImages.push(loadImage("data/fish12.gif"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  const fishHeight= 100;
  for (let i = 0; i < fishImages.length; i++) {   //create da fish objects for each img
    const y= random(fishHeight, height-fishHeight);
    fish.push(new Fish(random(width), y, random(0.5, 1), fishImages[i], i));
  }
}

function draw() {
  image(bgImage, 0, 0, width, height);

  for (let f of fish) {
    f.update();
    f.display();
  }
}

class Fish {
  constructor(x, y, speed, img, weekIndex) {
    this.x= x;
    this.y= y;
    this.speed= speed;
    this.img= img;
    this.weekIndex= weekIndex;
  }
  
  update() {
    this.x += this.speed; //move fish to the right only. had to change it to this bc my gifs would be flipped/words will be flipped :(
    
        if (this.x>width) { //reset position when reach da right edge
      this.x= -120; 
      
   //this.x += this.speed*this.direction;
    //edge collision
    //if (this.x>width-50 || this.x<0) {
      //this.direction*= -1;
    }
  }
  
  check() {
  const fishWidth= 120; 
  const fishHeight= 100;
  const halfWidth= fishWidth/2;
  const halfHeight= fishHeight/2;

  let distanceX= mouseX - this.x - halfWidth;
  let distanceY= mouseY - this.y - halfHeight;

  if (distanceX > 0 && distanceX<fishWidth && distanceY>0 && distanceY<fishHeight) { //check if the mouse is within the bounds of the fish
    let url= "https://dystopxia.github.io/CODEWORDS2024/SKO/" + weekURLs[this.weekIndex];
    window.open(url, "_blank");
  }
}


  display() {
    const fishWidth= 120; 
    const fishHeight= 100; 
  
    image(this.img, this.x, this.y, fishWidth, fishHeight); //so the fish wont flip
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  for (let f of fish) {
    f.check();
  }
}
