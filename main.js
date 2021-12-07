status="";
img="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting Objects";
}
function modelLoaded(){
    console.log("modelloaded");
    status=true;
    objectdetector.detect(img,gotresult);
}
function gotresult(error,results){
if (error){
    console.log(error);
}
console.log(results);
}
function preload(){
    img=loadImage("dog_cat.jpg");
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog",50,80);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,300);

    fill("#FF0000");
    text("Cat",300,115);
    noFill();
    stroke("#FF0000");
    rect(280,90,300,300);
}