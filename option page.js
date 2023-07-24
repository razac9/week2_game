let rockImage;
let paperImage;
let scissorimage;
let lizardimage;
let stockimage;
let rocksound;
let papersound;
let Tiesound;
let Wrongsound;
let Correctsound;


function preload() {
    rockImage = loadImage("day5/rock.png");
    paperImage = loadImage("day5/paper.png");
    scissorimage  = loadImage("day5/scissor.png");
   lizardimage = loadImage("day5/lizard.png");
    stockimage = loadImage("day5/stock.png");
    Tiesound  =  loadSound("day5/Tie.mp3")
    Wrongsound =  loadSound("day5/Wrong.mp3")
    Correctsound =  loadSound("day5/Correct.mp3")
   
}
function setup() {
    createCanvas(600, 600);
    background(255, 192, 203);
    noStroke();
    fill(0); 
    textSize(20); 
    textAlign(CENTER); 
    text("Choose your weapon", width / 2, 100);
 }
 
 
 function draw() {
    fill(255, 0, 0);
    rect(100, 200, 100, 100);
    fill(0, 255, 0);
    rect(200, 200, 100, 100);
    fill(0, 0, 255);
    rect(300, 200, 100, 100);
    fill(200, 200, 255);
    rect(400, 200, 100, 100);
    fill(200, 50, 255);
    rect(500, 200, 100, 100);
    image(rockImage, 100, 200, 100, 100);
    image(paperImage, 200, 200, 100, 100);
    image(scissorimage, 300, 200, 100, 100);
    image(lizardimage, 400, 200, 100, 100);
    image(stockimage, 500, 200, 100, 100);
 }
