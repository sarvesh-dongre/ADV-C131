img = "";


function preload() {
    img = loadImage("dog_cat.jpg");
}


function setup() {
    canvas = createCanvas(600, 420);
    canvas.center();
}


function draw() {
    image(img, 0, 0, 600, 420);
    
    fill("#FF0000");
    text("DOG", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(40, 60, 275, 650);
}