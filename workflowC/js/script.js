/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let canvasWidth = 1200;
let canvasHeight = 600;
let numOfPlayers = 5;
let lastRound = 3;
let player = [];
let PURPLE = '#C456ED';
let RED = '#E71228';
let BLUE = '#78D0FC';
let GREEN = '#5CE734';
let ORANGE = '#F8A01A';
let YELLOW = '#F9FC20';
let colors = [];
let word= [];
let prizes = ['nut',
            'leaf',
            'butterfly',
            'cookie',
            'egg',
            'frog',
            'apple',
            'snake',
            'turtle',
            'squirrel',
            'pizza',
            'duck',
            'raccoon',
            'monkey',
            'fox',
            'dog',
            'fan',
            'log',
            'tiger',
            'lion',
            'hippo',
            'bear',
            'elephant',
            'dinosaur',
            'tree'];

let apple = null;
let prize = [];
let selectedPrize = [0,1,2,3,4,5];
let selectedPlayer = 0;
let questionVisible = true; 
let selectedWord = 0;
let nextPrize = 6;
let potentialPrize = null;
let round = 1;
/**
 * Description of preload
*/
function preload() {
    

    for (let i = 0; i<prizes.length;i++){
        let pic = loadImage('assets/images/objects/' +prizes[i]+ '.jpeg');
        prize[i] = new Prize(prizes[i],pic);
    }

    
    let pic = loadImage('assets/images/objects/happyFace.png');
    player[0] = new Player('Youzi',pic);
    player[1] = new Player('Cola', pic);
    player[2] = new Player('Cici',pic);
    player[3] = new Player('Yiyang', pic);
    player[4] = new Player('Adam',pic);
    player[5] = new Player('Dudu', pic);


    
    
     //   audioSound[i] = loadSound('assets/sounds/' + word[0] + '.wav');
    
    
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(canvasWidth,canvasHeight);

    for(let i = 0; i<numOfPlayers; i++){
        player[i].setPosition(i*200+100,450);
    }
    imageMode(CENTER);
    colors[0] = PURPLE;
    colors[1] = RED;
    colors[2] = BLUE;
    colors[3] = GREEN;
    colors[4] = YELLOW;
    colors[5] = ORANGE;

    word=['ban','can','fan','man','pan','ran','van','bat','cat','fat','hat','mat','pat','rat','sat'];

    randomizeWords();
    randomizePrizes();
  
}


/**
 * Description of draw()
*/
function draw() {
    background('#919191');
    if(round<=lastRound){
        for (let i = 0; i<6;i++){
            fill(colors[i]);
            rect(i*200,0,200,250);
            image(prize[selectedPrize[i]].getPic(),100+i*200,150,180,180);
        }
    
        textSize(40);
        fill(0,0,0);
        text('Round = ' + round,520,590);
    }



    textSize(30);
    for(let i = 0; i<numOfPlayers; i++){
        player[i].draw();
    }
    
    if (questionVisible == true){
        fill(200,200,200);
        rect(300,200,600,200);
        textSize(30);
        fill(0,0,0);
        text(player[selectedPlayer].getName() + ', can you read this word?',320,230);
        textSize(80);
        text(word[selectedWord],530,320);

        fill(255,255,255);
        rect (350,350,100,40);
        rect (750,350,100,40);
        fill(0,0,0);
        textSize(20);
        text('YES',380,375);
        text('NO',785,375);
    }
    let conflict = false;
    for(let i = 0;i<numOfPlayers;i++){
        if(player[i].getHasConflict() == true){
            conflict= true;
            fill(200,200,200);
            rect(300,200,600,200);
            textSize(30);
            fill(0,0,0);
            text('Which is bigger?',480,230);
            image(player[i].getPic(),500,330,120,120);
            image(player[i].getPrize().getPic(),700,330,120,120);
        }
   }
   if (round>lastRound && conflict == false){
    fill(0,0,0);
    textSize(100);
    text('Who is the biggest?',120,100);
}

}

function mousePressed(){
    //barkSound.play();
    if (questionVisible==true){
        if(mouseY>350 && mouseY<390){
            if (mouseX>350 && mouseX<450){
                questionVisible=false;
                selectedWord +=1;
                if(selectedWord==word.length){
                    selectedWord=0;
                }
                return;
            }
            if (mouseX>750 && mouseX<850){
                nextPlayer();
                return;
            }  
        }
    }else{
        if(mouseY<250){
            if(mouseX>1000){
                player[selectedPlayer].setPrize(prize[selectedPrize[5]]);
                selectedPrize[5]=nextPrize;
                nextPrize+=1;
                nextPlayer();
                return;
            }
            if(mouseX<200){
                player[selectedPlayer].setPrize(prize[selectedPrize[0]]);
                selectedPrize[0]=nextPrize;
                nextPrize+=1;
                nextPlayer();
                return;
            }
            if(mouseX>200 && mouseX<400){
                player[selectedPlayer].setPrize(prize[selectedPrize[1]]);
                selectedPrize[1]=nextPrize;
                nextPrize+=1;
                nextPlayer();
                return;
            }
            if(mouseX>400 && mouseX<600){
                player[selectedPlayer].setPrize(prize[selectedPrize[2]]);
                selectedPrize[2]=nextPrize;
                nextPrize+=1;
                nextPlayer();
                return;
            }
            if(mouseX>600 && mouseX<800){
                player[selectedPlayer].setPrize(prize[selectedPrize[3]]);
                selectedPrize[3]=nextPrize;
                nextPrize+=1;
                nextPlayer();
                return;
            }
            if(mouseX>800 && mouseX<1000){
                player[selectedPlayer].setPrize(prize[selectedPrize[4]]);
                selectedPrize[4]=nextPrize;
                nextPrize+=1;
                nextPlayer();
                return;
            }
        }
    }
    for(let i = 0;i<numOfPlayers;i++){
        if(player[i].getHasConflict() == true){
            console.log('ssss');
            if (mouseY>270 && mouseY<390){
                console.log(mouseX);
                if(mouseX>440 && mouseX<560){
                    console.log('pressed 1');
                    player[i].setHasConflict(false);
                }
                if(mouseX>640 && mouseX<760){
                    console.log('pressed 2');
                    player[i].setHasConflict(false);
                    player[i].setPic(player[i].getPrize().getPic());
                }
            }
        }
    }
}

function nextPlayer(){
    selectedPlayer+=1;
    if(selectedPlayer==numOfPlayers){
        selectedPlayer=0;
        round +=1;
        console.log(round);
       
    }
    if (round <= lastRound){
        questionVisible=true;
    }
}

function randomizeWords(){
    for (let i = 0; i<word.length;i++){
        let a = Math.floor(random(word.length));
        let t = word[i];
        word[i]=word[a];
        word[a] = t;
    }



}

function randomizePrizes(){
    for (let i = 0; i<prize.length;i++){
        let a = Math.floor(random(prize.length));
        let t = prize[i];
        prize[i]=prize[a];
        prize[a] = t;
    }
}