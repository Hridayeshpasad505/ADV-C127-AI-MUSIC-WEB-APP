song1 ="";
song2 ="";

function preload()
{
song1 = loudSound("music.mp3");
song2 = loudSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}

function draw()
{
image(VIDEO, 0, 0, 600, 500);
}


function play()
{
    song.play();
}