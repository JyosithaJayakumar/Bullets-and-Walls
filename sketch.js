var wall, thickness;
var bullets,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random (223,321)
  weight=random(30,52)
thickness=random(22,83)

  wall = createSprite(1200,200,thickness,height/2);
wall.shapeColour=color(80,80,80)

  bullets= createSprite(50,200,15,15);
  bullets.shapeColor=("white")

  
}

function draw() {
  background(0,0,0);

  bullets.x = World.mouseX;
  bullets.y = World.mouseY;

 bullets.velocityX = speed;

 if  ( hasCollided(bullets,wall)) {
   bullets.velocityX=0;
   var deformation =0.5 * weight * speed * speed/(thickness*thickness*thickness);
 
   if (deformation>10){
wall.shapeColor=color(255,0,0,);
   }

if (deformation<10){
  wall.shapeColor=color(0,255,0);
  }

 }

  drawSprites();
}

function hasCollided(bullets,wall){

  bulletsRightEdge=bullets.x+bullets.width;
  wallLeftEdge=wall.x;

  if (bulletsRightEdge>=wallLeftEdge)
  {
    return true
  }

return false;
}

