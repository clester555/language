/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

//"use strict";

let canvasWidth = 800;
let canvasHeight = 600;
let mazeWidth = 400;
let mazeHeight = 400;
let mazeLeft = 20;
let mazeTop = 20;
let cellSize = 50;
let maze;
let player;
let arrows = [];
let leftArrow, rightArrow, upArrow, downArrow;

/**
 * Description of preload
*/
function preload() {
    player = new Player(0,0,mazeLeft,mazeTop,cellSize);
    let pic = loadImage('assets/images/player.png');
    player.setPicture(pic);
    //   audioSound[i] = loadSound('assets/sounds/' + word[0] + '.wav'); 
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(canvasWidth,canvasHeight);
    maze = new Maze(mazeWidth,mazeHeight,mazeLeft,mazeTop,cellSize);
    leftArrow = new Arrow(450,350,100);
    rightArrow = new Arrow(650,350,100);
    upArrow = new Arrow(550,250,100);
    downArrow = new Arrow(550,450,100);
    arrows = [leftArrow,rightArrow,upArrow,downArrow];
}

function draw() {
    background('#919191');
    maze.draw();
    player.draw();
    drawArrows();
}

function mousePressed(){
    let z = maze.getIndex(player.x,player.y);
    if(leftArrow.isHit(mouseX,mouseY)){
        if (maze.grid[z].wall[3]==false){
            player.x-=1;
        }
    }
    if(rightArrow.isHit(mouseX,mouseY)){
        if (maze.grid[z].wall[1]==false){
            player.x+=1; 
        }
    }
    if(upArrow.isHit(mouseX,mouseY)){
        if (maze.grid[z].wall[0]==false){
            player.y-=1;
        }
    }
    if(downArrow.isHit(mouseX,mouseY)){
        if (maze.grid[z].wall[2]==false){
            player.y+=1;
        }
    }
}

function drawArrows(){
    for (let i = 0;i<arrows.length;i++){
        arrows[i].draw();
    }

}



