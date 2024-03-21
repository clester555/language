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
let mazeLeft = 200;
let mazeTop = 10;
let cellSize = 40;
let maze;
let player;
let arrows = [];
let arrowSize = 50;
let arrowLeft =325;
let arrowTop = 425;
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
    leftArrow = new Arrow(arrowLeft,arrowTop+arrowSize,arrowSize);
    rightArrow = new Arrow(arrowLeft+arrowSize*2,arrowTop+arrowSize,arrowSize);
    upArrow = new Arrow(arrowLeft+arrowSize,arrowTop,arrowSize);
    downArrow = new Arrow(arrowLeft+arrowSize,arrowTop+arrowSize*2,arrowSize);
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



