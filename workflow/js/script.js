/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let barkSound;
let prompt= 'R is for...?';
let target = new Target();
/**
 * Description of preload
*/
function preload() {
    barkSound = loadSound('assets/sounds/bark.wav');
    target.setImage(loadImage('assets/images/clown.png'));
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(640,640);
}


/**
 * Description of draw()
*/
function draw() {
    background(0,200,50);
    // textAlign(RIGHT,TOP);
    textSize(36);
    text(prompt,width/2,height/2);
    image(target.image,100,100);
}

function mousePressed(){
    barkSound.play();
}
