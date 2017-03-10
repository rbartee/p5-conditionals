var x = 0;
var speed = 3;
function setup(){
    createCanvas(600,400);
}
function draw(){
    background(0);
    
    //i wrote this so background changes to green when clicked
    if(mouseIsPressed){
    background(19,50,163);
    }
    //makes outline white, 6px thick,no color inside shapes
    stroke(255);
    strokeWeight(6);
  
    
    if(mouseY<150){
        fill(204,14,14);
    }
    else{
        noFill();
    }
    
    //a circle
    ellipse(x,200,100,100);
    
    //this code is going to get the circle to move on its own
    if(x>width || x < 0){
        console.log("CIRCLE IS OF THE SCREEN!!!!");
        speed = speed * -1;
    }
       x = x + speed;
        console.log(x);
        
    }
    
