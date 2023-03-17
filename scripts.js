function setup() {
    createCanvas(800,600)
}

function draw() {


 background("#ffffff");
 house();}

 function house(){
    //wall
    fill("green");
    rect(50, 250, 455, 555);
    //roof
    fill("red")
    triangle(25, 250, 530, 250, 270, 15);
    //roof window
    fill("blue")
    circle(270, 80, 50);
    line(270, 55, 270, 105);
    line(245, 80, 295, 81);

    //door
    fill("brown");
    rect(80, 450, 80, 455);
    //doorbell
    fill("yellow")
    circle(175, 500, 15);
    fill("black")
    circle(175, 500, 5);

    //windows
    fill("lightblue");
    rect(250, 300, 150, 155);
    line(250, 375, 400, 375);
    line(325, 300, 323, 455);
  }