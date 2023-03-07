LeftEarX=0;
LeftEarY=0;

RightEarX=0;
RightEarY=0;
function preload() {
    Left_Ear = loadImage('E_leftEar.png');
    Right_Ear = loadImage('E_rightEar.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        LeftEarX = results[0].pose.leftEar.x;
        LeftEarY = results[0].pose.leftEar.y;
        console.log("leftEar x =" + LeftEarX);
        console.log("leftEar y =" + LeftEarY);

        RightEarX = results[0].pose.rightEar.x;
        RightEarY = results[0].pose.rightEar.y;
        console.log("rightEar x =" + RightEarX);
       console.log("rightEar y =" + RightEarY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(Left_Ear, LeftEarX, LeftEarY, 100, 100);
    image(Right_Ear, RightEarX, RightEarY, 100, 100);
}

function take_snapshot() {
    save('myFilterImage.png');
}