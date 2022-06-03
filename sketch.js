var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
pista = createSprite (200,200);
pista.addImage(pathImg);
pista.velocityY = 4;
pista.scale=1.2;

//Criando menino que corre 
boy = createSprite (180,340,30,30)
boy.addAnimation("Jakerunning",boyImg)
boy.scale=0.1

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(390,0,100,800)
rightBoundary.visible = false;
}


function draw() {
background("black");


// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.x = World.mouseX;
boy.collide(edges[3]);
boy.collide(leftBoundary)
boy.collide(rightBoundary)

 //Reiniciar o fundo
 if(pista.y>400){
     pista.y = height/2
 }



 drawSprites();

 }




