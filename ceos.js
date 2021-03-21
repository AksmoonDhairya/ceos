var car,wall;
var speed,weight

function setup() {
  createCanvas(1200,400);

  
  speed=random(55,90)
  weight=random(55,90)

  car=createSprite(400, 200, 50, 50);
 car.velocityX = speed;
 car.shapeColour=color(255)

 wall=createSprite(1000, 200, 60,height/2);
 wall.shapeColour=color(80,80,80);


}

function draw() {
  background(0);
 
  
  if(wall.x-car.x<(car.weight+wall.weight)/2)
  {
  car.velocityX=0;
    var deformation =0.5*weight*speed*speed/22500;
  }
    if(deformation>180)
    {
      
      car.shapeColour=color(255,0,0);
    }
  if(deformation>180 && deformation>100)
  {
    
    
      car.shapeColour=color(230,230,0);
  }
    
    if(deformation>100)
  {
    
    car.shapeColour=color(0,255,0);
  }


  drawSprites();
 
}