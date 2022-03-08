var bg,bgimg
var ss,ss1
var alien,a1,a2,a3,a4,a5,a6,a7
var laser
var aliengroup,lasergroup
var score=0
var gamestate="play"
function preload(){
 bgimg= loadImage("assets/bg6.jpg")
 ss1=loadImage("assets/ss1.png")
 a1=loadImage("assets/a1.png") 
 a2=loadImage("assets/a2.png")
 a3=loadImage("assets/a3.png")
 a4=loadImage("assets/a4.png")
 a5=loadImage("assets/a5.png")
 a6=loadImage("assets/a6.png")
 a7=loadImage("assets/a7.png")
}

function setup() {

  createCanvas(1400,600)
  ss=createSprite(100,350)
  ss.addImage(ss1)
  ss.scale=0.35
  aliengroup=new  Group ()
  lasergroup=new  Group ()
}

function draw() {
  //set background color
  background(bgimg);
  fill ("white")
  textSize(30)
  text ("Score = "+score,1000,50)  
  ss.debug=false
  ss.setCollider("circle",0,0,200)
 if(gamestate==="play"){
if(keyDown(UP_ARROW)){
ss.y-=5
}

if(keyDown(DOWN_ARROW)){
  ss.y+=5
  }
  if(keyDown("space")){
    releaselaser()
    }
    spawnaliens()
    lasergroup.isTouching(aliengroup,destroyalien)
if(aliengroup.isTouching(ss))  {
ss.destroy()
gamestate="end"
}


 }
 if(gamestate==="end"){
   textSize(50)
text("GAME OVER",600,300)
aliengroup.setVelocityXEach(0)
aliengroup.setLifetimeEach(-1)
 }

 






  drawSprites();
}

function destroyalien(laser,alien){
alien.destroy()
lasergroup.destroyEach()
score+=10
}


function spawnaliens(){
  if(frameCount%100===0){
var rand=Math.round(random(100,500))
alien=createSprite(1400,rand,50,50)
alien.velocityX=-4
var randimg=Math.round(random(1,7))
switch(randimg){
case 1:
  alien.addImage(a1)
  alien.scale=0.5
  alien.velocityX=-12
break
case 2:
  alien.addImage(a2)
  alien.velocityX=-10
  alien.scale=0.35
break
case 3:
  alien.addImage(a3)
  alien.velocityX=-14
  alien.scale=0.5
break
case 4:
  alien.addImage(a4)
  alien.velocityX=-10
  alien.scale=0.4
break
case 5:
  alien.addImage(a5)
  alien.velocityX=-16
  alien.scale=0.5
break
case 6:
  alien.addImage(a6)
  alien.velocityX=-10
  alien.scale=0.5
break
case 7:
  alien.addImage(a7)
  alien.velocityX=-16
  alien.scale=0.5
break



}
alien.lifetime=400
aliengroup.add(alien)
  }
}




function releaselaser(){
  laser=createSprite(200,200,60,5)
  laser.y=ss.y
  laser.shapeColor="lime"
  laser.velocityX=10
  laser.lifetime=150
  lasergroup.add(laser)
}

