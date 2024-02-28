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
let foo = new p5.SpeechRec();
let currentSpeech= '?';

/**
 * Description of preload
*/
function preload() {
    barkSound = loadSound('assets/sounds/bark.wav');
    // foo.setLang('en-US');
    foo.onResult = showResult;
    foo.start();
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
    textAlign(CENTER,CENTER);
    textSize(36);
    text(currentSpeech,width/2,height/2);
}

function mousePressed(){
    // barkSound.play();
    voice.speak('My queen is beautiful and sexy, plus she is always right.');
}

function showResult()
{
  currentSpeech = foo.resultString;
}