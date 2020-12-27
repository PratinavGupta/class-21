var mRect, fRect; 
function setup() 
{ 
  createCanvas(800, 400); 
  fRect = createSprite(100, 200, 50, 80); 
  fRect.shapeColor = "green"; 
  fRect.debug = true; 
  fRect.velocityX = 3; 
  mRect = createSprite(600, 200, 80, 30); 
  mRect.shapeColor = "green"; 
  mRect.debug = true ;
  mRect.velocityX = -3; 
} function draw() 
{ 
  background(0); 
  
  // mRect.x=mouseX; // mRect.y=mouseY; 
  
fRect.velocityX= - fRect.velocityX;
mRect.velocityX= - mRect.velocityX;


    } 

    drawSprites(); 

  }