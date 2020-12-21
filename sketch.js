var bullets,wall , speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52);
thickness=random(23,83)

 bullets=  createSprite(50, 200, 50, 50);
 bullets.velocityX=speed;
 bullets.shapeColor=color(255);
 wall= createSprite(1200,200,thickness,height/2)
 wall.shapeColor=color(230,230,230)
 
}

function draw() {
  
  background(0);  

  if(hasCollided(bullets,wall))
  {
  	bullets.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
  }
}
  drawSprites();
  }

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;  

}


