img = "";
status = "";
function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loadeded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    else{
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#00dbff");
    text("Doge", 45, 75);
    noFill();
    stroke("#00dbff");
    rect(30, 60, 450, 350);

    fill("#00dbff");
    text("Nyan Cat", 320, 120);
    noFill();
    stroke("#00dbff");
    rect(300, 90, 270, 320);
}