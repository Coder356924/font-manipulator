function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150); 
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    background('#FFD700');
}
function modalLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}