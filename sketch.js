let minDiam = 10;
let maxDiam = 60;
let gridstep = 80;
let offsetRange = gridstep - maxDiam;


let xpos = 0;
let ypos = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(30,144,255);
    
    //draw grids
    randomSeed(0);
    noStroke();
    fill(255,182,193);
    for(let xpos = 0; xpos <= windowWidth; xpos += gridstep)
    {for(let ypos = 0; ypos <= windowHeight; ypos += gridstep){
        let xOffset = random(-offsetRange, offsetRange);
        let yOffset = random(-offsetRange,offsetRange);
        circle(xpos + xOffset, ypos + yOffset, random(minDiam, maxDiam));
    }
        
    
}
}
