var solo,solo1;
var gatoImg,gato,gatoStop,gatoSentado;
var ratoImg,rato,ratoParado,ratoLupa;


function preload() {
    //load the images here
    solo1=loadImage("images/garden.png");

    gatoImg=loadAnimation("images/cat2.png","images/cat3.png");
    gatoStop=loadImage("images/cat1.png");
    gatoSentado=loadImage("images/cat4.png");

    ratoImg=loadAnimation("images/mouse2.png","images/mouse3.png");
    ratoParado=loadImage("images/mouse1.png");
    ratoLupa=loadImage("images/mouse4.png");
    
    

}

function setup(){
    createCanvas(1000,800);
    //solo=createSprite(1000,800);
    //solo.addImage(solo1);
    
    gato=createSprite(800,600,10,10);
    gato.addImage(gatoStop);
    gato.addAnimation("andar",gatoImg);
    gato.addImage("gatoSentado",gatoSentado);
    gato.scale=0.2;

    rato=createSprite(100,600,10,10);
    rato.addImage(ratoParado);
    rato.addAnimation("correr",ratoImg);
    rato.addImage("lupa",ratoLupa);
    rato.scale=0.2;
    
    //create tom and jerry sprites here
    gato.setCollider("circle",0,0,20);
    

    

}

function draw() {

    background(solo1);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("up")){
        gato.velocityX=-3;
        gato.changeAnimation("andar",gatoImg);

        rato.changeAnimation("correr",ratoImg);
    }

    if(gato.isTouching(rato)){
        gato.changeAnimation("gatoSentado");
        gato.velocityX=0;
        rato.changeAnimation("lupa",ratoLupa);
    }


    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
