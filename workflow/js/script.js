/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let barkSound;
let voice = new p5.Speech();

/**
 * Description of preload
*/
function preload() {
    barkSound = loadSound('assets/sounds/bark.wav');
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(640,640);
    background(0,200,50);
}


/**
 * Description of draw()
*/
function draw() {

}

function mousePressed(){
    // barkSound.play();
    voice.speak('My queen is beautiful and sexy, plus she is always right.');
}