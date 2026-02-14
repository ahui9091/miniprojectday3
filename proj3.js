function setup() {
  createCanvas(400, 400);
  background(35);
}

  function draw() {
    noStroke(0);
    fill(200, 2, 2);
    circle(mouseX, mouseY, 20)
    let mousepress = mouseIsPressed;
    if (mousepress == true){
        noStroke(0);
        fill(100, 35, 35);
        circle(mouseX, mouseY, 20)
    }
}


