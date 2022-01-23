leftwristx=0;
rightwristx=0;
difference=0;
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
    fill('gray');
    text('Liam',100,400);
    textSize(difference);
    document.getElementById("font_size").innerHTML="font size will be= "+difference+"px";
}
function modalLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=leftwristx-rightwristx;
        console.log("leftwristx= "+leftwristx+"rightwristx= "+rightwristx+"difference= "+difference);
    }
}