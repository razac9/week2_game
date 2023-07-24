let i = 0;
let j = 0;
let x = 0;

let computerOptions1 = ["Rock", "Paper", "Scissor", "Lizard", "Spock"] 
let computerOptions2 = ["Grass", "Ground", "Rock", "Fire", "Ice"]
let compChoice;
let userChoice;

let rockImage;
let scissorImage;
let paperImage;
let spockImage;
let lizardImage;

let grassImage;
let groundImage;
let rock2Image;
let fireImage;
let iceImage;

let win;
let lose;
let tie;

let winSound;
let tieSound;
let loseSound;


function preload(){
    rockImage = loadImage("rock.png");
    scissorImage = loadImage("scissors.png");
    paperImage = loadImage("paper.png");
    spockImage =loadImage("spock.png");
    lizardImage =  loadImage("lizards.png");

    grassImage = loadImage("typegrass.png");
    groundImage = loadImage("typeground.png");
    rock2Image = loadImage("typerock.png");
    fireImage = loadImage("typefire.png");
    iceImage = loadImage("typeice.png");

    winSound = loadSound("Correct.mp3");
    tieSound = loadSound("Tie.mp3");
    loseSound = loadSound("Wrong.mp3");
}

function setup(){
    createCanvas(1440,720)
    background(0)
}


function draw(){
    if (i == 0){
        //setup code for homepage
        background(0)
        fill(255)
        textSize(50)
        textAlign(CENTER, TOP);
        text("WELCOME! CHOOSE A VERSION", 960, 75);
        fill(255, 0, 0)
        rect(700, 500, 200, 75)
        fill(0, 255, 0)
        rect(1100, 500, 200, 75)
        textSize(20)
        text("Regular RPSLS", 800, 537.5)
        fill(255, 0, 0)
        text("Pokemon Version", 1200, 537.5)

    }
    if(i == 1){
        background(255, 192, 203);
        noStroke();
        fill(0); 
        textSize(20); 
        textAlign(CENTER); 
        text("Choose your weapon", width / 2, 100);
        text("You Chose", 100, 550)
        text("Computer Chose", 400, 550)
        fill(255); 
        textSize(30); 
        textAlign(CENTER);
        text("RESULT: ", 200, 450)
        fill(255)
        rect(50, 600, 100, 100);
        rect(350, 600, 100, 100);

        if (j == 1){
        //setup options page for RPSLS
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
        image(scissorImage, 300, 200, 100, 100);
        image(lizardImage, 400, 200, 100, 100);
        image(spockImage, 500, 200, 100, 100);
        if( x == 1){
        if(win){
            text("YOU WIN! ", 375, 450)
        }
        else if(lose){
            text("YOU LOSE :(", 375, 450)
        }
        else if(tie){
            text("YOU TIE :|", 375, 450)
        }
        if(userChoice == "Rock"){
            image(rockImage, 50, 600, 100, 100);
        }
        else if (userChoice == "Paper"){
            image(paperImage, 50, 600, 100, 100);
        }
        else if (userChoice == "Scissor"){
            image(scissorImage, 50, 600, 100, 100);
        }
        else if (userChoice == "Lizard"){
            image(lizardImage, 50, 600, 100, 100);
        }
        else if (userChoice == "Spock"){
            image(spockImage, 50, 600, 100, 100);
        }

        if(compChoice == "Rock"){
            image(rockImage, 350, 600, 100, 100) 
        }
        else if(compChoice == "Paper"){
            image(paperImage, 350, 600, 100, 100)
        }
        else if(compChoice == "Scissor"){
            image(scissorImage, 350, 600, 100, 100)
        }
        else if (compChoice == "Lizard"){
            image(lizardImage, 350, 600, 100, 100)
        }
        else if (compChoice == "Spock"){
            image(spockImage, 350, 600, 100, 100)
        }
        }
   
    }
        
        else if (j == 2){
            //setup options & results page for Pokemon
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
            image(grassImage, 100, 200, 100, 100);
            image(groundImage, 200, 200, 100, 100);
            image(rock2Image, 300, 200, 100, 100);
            image(fireImage, 400, 200, 100, 100);
            image(iceImage, 500, 200, 100, 100);
            if( x == 1){
            if(win){
                text("YOU WIN! ", 375, 450)
            }
            else if(lose){
                text("YOU LOSE :(", 375, 450)
            }
            else if(tie){
                text("YOU TIE :|", 375, 450)
            }
            if(userChoice == "Grass"){
                image(grassImage, 50, 600, 100, 100);
            }
            else if (userChoice == "Ground"){
                image(groundImage, 50, 600, 100, 100);
            }
            else if (userChoice == "Rock"){
                image(rock2Image, 50, 600, 100, 100);
            }
            else if (userChoice == "Fire"){
                image(fireImage, 50, 600, 100, 100);
            }
            else if (userChoice == "Ice"){
                image(iceImage, 50, 600, 100, 100);
            }
    
            if(compChoice == "Grass"){
                image(grassImage, 350, 600, 100, 100) 
            }
            else if(compChoice == "Ground"){
                image(groundImage, 350, 600, 100, 100)
            }
            else if(compChoice == "Rock"){
                image(rock2Image, 350, 600, 100, 100)
            }
            else if (compChoice == "Fire"){
                image(fireImage, 350, 600, 100, 100)
            }
            else if (compChoice == "Ice"){
                image(iceImage, 350, 600, 100, 100)
            }
            }
        }
    }        
}

function mouseClicked(){
    if (i == 0 && ((mouseX > 700 && mouseX < 900 && mouseY > 500 && mouseY < 575) ||(mouseX > 1100 && mouseX < 1300 && mouseY > 500 && mouseY < 575))){
        i = 1;
        if (mouseX > 700 && mouseX < 900 && mouseY > 500 && mouseY < 575){
            j = 1;
        }
        else if(mouseX > 1100 && mouseX < 1300 && mouseY > 500 && mouseY < 575){
            j = 2;
        }

    }
    else if (i == 1 && ((mouseX > 100 && mouseX < 200 && mouseY > 200 && mouseY < 300) || (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300) || (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) || (mouseX > 400 && mouseX < 500 && mouseY > 200 && mouseY < 300) || (mouseX > 500 && mouseX < 600 && mouseY > 200 && mouseY < 300))){
        x = 1;
        if (j == 1){
        if(mouseX > 100 && mouseX < 200 && mouseY > 200 && mouseY < 300){
            userChoice = "Rock"
        }
        else if(mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300){
            userChoice = "Paper"
        }
        else if(mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300){
            userChoice = "Scissor"
        }
        else if(mouseX > 400 && mouseX < 500 && mouseY > 200 && mouseY < 300){
            userChoice = "Lizard"
        }
        else if(mouseX > 500 && mouseX < 600 && mouseY > 200 && mouseY < 300){
            userChoice = "Spock"
        }

        compChoice = computerOptions1[Math.floor(Math.random() * 5)]
        
        if((userChoice == "Rock"&& compChoice == "Scissor") || (userChoice == "Rock"&& compChoice == "Lizard") 
        || (userChoice == "Paper" && compChoice == "Spock") ||(userChoice == "Paper" && compChoice == "Rock") || 
        (userChoice == "Scissor"&& compChoice == "Lizard") || (userChoice == "Scissor"&& compChoice == "Paper") ||
        (userChoice == "Lizard" && compChoice == "Paper") ||(userChoice == "Lizard" && compChoice == "Spock") || 
        (userChoice == "Spock" && compChoice == "Rock") || (userChoice == "Spock" && compChoice == "Scissor")){
            win = true;
            lose = false;
            tie = false;
            winSound.play();
        }
        else if((userChoice == "Rock"&& compChoice == "Paper") || (userChoice == "Rock"&& compChoice == "Spock") || 
        (userChoice == "Paper"&& compChoice == "Lizard") || (userChoice == "Paper" && compChoice == "Scissor") || 
        (userChoice == "Scissor"&& compChoice == "Rock") || (userChoice == "Scissor"&& compChoice == "Spock") || 
        (userChoice == "Lizard" && compChoice == "Rock") || (userChoice == "Lizard" && compChoice == "Scissor") || 
        (userChoice == "Spock" && compChoice == "Paper") || (userChoice == "Spock" && compChoice == "Lizard")){
            win = false;
            lose = true;
            tie = false;
            loseSound.play()
        }
        else{
            win = false;
            lose = false;
            tie = true;
            tieSound.play();
        }
  
        }
        else if (j == 2){
            //Pokemon version
            if(mouseX > 100 && mouseX < 200 && mouseY > 200 && mouseY < 300){
                userChoice = "Grass"
            }
            else if(mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300){
                userChoice = "Ground"
            }
            else if(mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300){
                userChoice = "Rock"
            }
            else if(mouseX > 400 && mouseX < 500 && mouseY > 200 && mouseY < 300){
                userChoice = "Fire"
            }
            else if(mouseX > 500 && mouseX < 600 && mouseY > 200 && mouseY < 300){
                userChoice = "Ice"
            }

            compChoice = computerOptions2[Math.floor(Math.random() * 5)]

            if((userChoice == "Grass"&& compChoice == "Ground") || (userChoice == "Grass"&& compChoice == "Rock") 
            || (userChoice == "Ground" && compChoice == "Fire") ||(userChoice == "Ground" && compChoice == "Rock") || 
            (userChoice == "Rock"&& compChoice == "Fire") || (userChoice == "Rock"&& compChoice == "Ice") ||
            (userChoice == "Fire" && compChoice == "Grass") ||(userChoice == "Fire" && compChoice == "Ice") || 
            (userChoice == "Ice" && compChoice == "Grass") || (userChoice == "Ice" && compChoice == "Ground")){
                win = true;
                lose = false;
                tie = false;
                winSound.play();
            }
            else if((userChoice == "Grass"&& compChoice == "Fire") || (userChoice == "Grass"&& compChoice == "Ice") || 
            (userChoice == "Ground"&& compChoice == "Grass") || (userChoice == "Ground"&& compChoice == "Ice") || 
            (userChoice == "Rock"&& compChoice == "Grass") || (userChoice == "Rock"&& compChoice == "Ground") || 
            (userChoice == "Fire" && compChoice == "Ground") || (userChoice == "Fire" && compChoice == "Rock") || 
            (userChoice == "Ice" && compChoice == "Rock") || (userChoice == "Ice" && compChoice == "Fire")){
                win = false;
                lose = true;
                tie = false;
                loseSound.play()
            }
            else{
                win = false;
                lose = false;
                tie = true;
                tieSound.play();
            }
            }
    }
}