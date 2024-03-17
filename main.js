function preload() {   
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw(){
    image(video,0,0,640,480);
    circle(30, 30, 70);

}

function take_snapshot(){
    save('roomformanyaroomformanyaroomformanyamoooore,pictures.png');
}

