var maxDrops=100;

for(var i=0;i<maxDrops;i++){
    drops.push(new createDrops(random(0,400),random(0,400)));
}

 friction : 0.1,
function preload(){
    
}

function setup(){
  creatCanvas(800,400); 
  
 if(this.rain.position.y>height){
     Mettr.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
 } 
 ranand=Math.round(random(1,4));
 if(frameCount%80===0){
     thunderCreatedFrame=frameCount;
     thunder=createSprite(random(100,370),ranand(10,30),  10,10);           
     switch(rand){
         case 1:thunder.addImage(thunder1);
         break;
         case 2:thunder.addImage(thunder2);
         break;
         default:break;
     }       
     thunder.scale=random(0.3,0.6)
 }
 
}

function draw(){
 backround=("black");   
 thunder1.display();
 thunder2.display();
}   

