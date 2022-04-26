var backImg;
var santa, santaImg;
var gift, gifts;
var Divyansh, DivyanshImg;
var Aryansh, AryanshImg;
var edges;

function preload() {
backImg = loadImage("assetes/bg 3.jpg");    
santaImg = loadImage("assetes/santa.png");
g1 = loadImage("assetes/g1.png");
g2 = loadImage("assetes/g2.png");
g3 = loadImage("assetes/g3.png");
g4 = loadImage("assetes/g4.png");
g5 = loadImage("assetes/g5.png");
}



function setup() {
   createCanvas(600, 200);

     santa = createSprite(200,180,400,20);
      santa.addImage("santa", santaImg);
      santa.velocityX = 3;

     Divyansh = createSprite(10, height - 50, 10, 10);
     Divyansh.addImage("Divyansh", DivyanshImg);

     Aryansh = createSprite(width - 100, height - 50, 10, 10 );
     Aryansh.addImage("Aryansh", AryanshImg);

    edges = createEdgeSprite();

    gifts = new Group();


}

function draw() {
    background(0);
    image(backImg, 0, 0, width, height)

    santa.bounceOff(edges);

    if (keyDown("left_Arrow")) 
    {
     Aryansh.x = Aryansh.x - 3;
    }

    if (keyDown("right_Arrow")) 
    {
     Aryansh.x = Aryansh.x + 3;
    }

    if (keyDown("a")) 
    {
     Divyansh.x = Divyansh.x - 3;
    }

    if (keyDown("d")) 
    {
     Divyansh.x = Divyansh.x + 3;
    }


    drawSprite();
}
 
function spawnGifts(){
    if (frameCount % 60 === 0){
      var gift = createSprite(400,165,10,40);
      gift.x = santa.x;
      
       //generate random gift
       var rand = Math.round(random(1,5));
       switch(rand) {
         case 1: gift.addImage(g1);
                 break;
         case 2: gift.addImage(g2);
                 break;
         case 3: gift.addImage(g3);
                 break;
         case 4: gift.addImage(g4);
                 break;
         case 5: gift.addImage(g5);
                 break;
        default: break;
         
       }
      
       //assign scale and lifetime to the gift           
       gift.scale = 0.5;
       gift.lifetime = 300;
      
      //add each gift to the group
       gifts.add(gift);
    }
   }