let minDiam = 20;
let maxDiam = 100;
let circleSize = 100;

let minxpos = 0;
let maxxpos = 15;
let minypos = 0;
let maxypos = 15;

let gridSize = 80;
let circleX = gridSize/2;
let circleY = gridSize/2;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(30,144,255);
    
    //draw grids
    randomSeed(0);
    fill(30,144,255);
    
    for(let gridX = 0; gridX <= windowWidth; gridX += random(gridSize+80, gridSize-80))
    {for(let gridY = 0; gridY <= windowHeight; gridY += random(gridSize+80, gridSize-80)){
        rect(gridX, gridY, gridSize, gridSize);
    }
        
    }

    //  for(let gridX = 0; gridX <= windowWidth; gridX += random(gridSize+30, gridSize-30))
    // {for(let gridY = 0; gridY <= windowHeight; gridY += random(gridSize+30, gridSize-30)){
    //     circle(gridX, gridY, random(minDiam,maxDiam));
    // }
        
    // }





    // for(let gridX = 0; gridX <= windowWidth; gridX += 80)
    // {for(let gridY = 0; gridY <= windowHeight; gridY += 80){
    //     circle(gridX, gridY, random(minDiam,maxDiam));
    // }
        
    // }

    // fill(255,182,193);
    // for(let xpos = 0; xpos <= windowWidth; xpos += 100)
    // {for(let ypos = 0; ypos <= windowHeight; ypos += 100){
    //     circle(random(minxpos,maxxpos),ypos,random(minDiam, maxDiam));
    // }
        
    // }
}
