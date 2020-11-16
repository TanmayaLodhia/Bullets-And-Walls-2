var bullet, weight, speed;
var wall,thickness;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,15);
  bullet.velocityX=speed;
  wall=createSprite(1250,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0);  
  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="green";
    }
    
    if(damage<=10) {
      wall.shapeColor="red";
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false
}