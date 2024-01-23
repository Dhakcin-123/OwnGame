var bird;
var bg;

var birdImg;

function preload(){
    bg = loadImage("bg_image.jpg");
    birdImg = loadAnimation("bird_1.png","bird_2.png","bird_3.png","bird_4.png");
}
    
    
function setup() {
    createCanvas(windowWidth,windowHeight);
    bird = createSprite(windowWidth-1000,windowHeight/2,40,40);
    bird.addAnimation(birdImg);
}

function draw() {
    background(bg);
    drawSprites();
}