var car, carImage, w, h, road, signal,signalImage;

function preload() {
  carImage = loadImage("car.png");
  road = loadImage("road.jpg");
  signalImage = loadImage("signal.png");
}

function setup() {
  w = windowWidth;
  h = windowHeight
  createCanvas(w,h);

  car = createSprite(w/8, h/1.35, 50, 50);
  car.addImage(carImage);
  car.scale = 0.65;
  car.velocityX = (Math.round(random(25,35)));

  signal = createSprite(w - 80,h/1.8,20,20);
  signal.addImage(signalImage);
  
}

function draw() {
  background = createSprite(w/2,h/2,20,20); 
  background.addImage(road);
  background.scale = 3;
  background.depth = car.depth - 1;

  if (signal.x - car.x < signal.width/2 + car.width/2) {
    car.velocityX = 0;
  }

  drawSprites();
}