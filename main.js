function setup(){
    video = createCapture(VIDEO);
    video.size(700,500);
    video.position(500, 400);

    canvas = createCanvas(700, 500);
    canvas.center();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){}
function gotPoses(){}
function draw(){

}