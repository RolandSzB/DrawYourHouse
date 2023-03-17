function setup() {
    createCanvas(800,600)
}

function draw() {


 background("#ffffff");
 house();}

 function house(){
    
    fill("green");
    rect(50, 250, 455, 555);
    
    fill("red")
    triangle(25, 250, 530, 250, 270, 15);
    
    fill("blue")
    circle(270, 80, 50);
    line(270, 55, 270, 105);
    line(245, 80, 295, 81);
  }