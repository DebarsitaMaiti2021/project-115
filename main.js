function preload(){

}

function setup(){
    canvas=createCanvas(550,550);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.center();
}

function draw(){
    image(video,100,100,350,300);
    fill('#fc0398');
    stroke('#37b6ed');
    circle(50,50,100);
    circle(500,50,100);
    circle(500,500,100);
    circle(50,500,100);

    fill('#ebe134');
    stroke('#eb8334');
    rect(100,40,350,20);
    rect(100,490,350,20);
    rect(40,100,20,350);
    rect(490,100,20,350);
    

}

function take_snapshot(){
    save('image.png');
}

