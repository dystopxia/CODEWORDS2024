//let topimg;
//let bottomimg;
let maskGraphics;

function preload() {
  topimg= loadImage("data/topimg.jpg");
  bottomimg= loadImage("data/bottomimg.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  maskGraphics= createGraphics(windowWidth, windowHeight); //https://p5js.org/reference/p5/createGraphics/
}

function draw() {
  //background(103, 167, 250);

  let imgWidth= width;
  let imgHeight= height;
  
  image(bottomimg, 0, 0, imgWidth, imgHeight);

  createSpotlightMask(mouseX, mouseY); //spotlight mask referenced https://kirkdev.blogspot.com/2021/10/creating-and-positioning-circle-image.html

  //apply the mask to the top image
  let maskedImg = topimg.get(); //dupe image
  maskedImg.mask(maskGraphics); //apply mask to the duped image

  image(maskedImg, 0, 0, imgWidth, imgHeight); //this is the masked top image that goes over the bottom layer
}

function createSpotlightMask(x, y) {
  maskGraphics.clear();

  maskGraphics.fill(0);
  maskGraphics.rect(0, 0, width, height);

  maskGraphics.erase();
  let radius= 75;
  maskGraphics.ellipse(x, y, radius*2, radius*2);
  maskGraphics.noErase();
}
