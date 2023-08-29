var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score=0;

var gamestate="serve";

var caixa1 = createSprite(25,75,50,50);
caixa1.shapeColor= "red";

var caixa2 = createSprite(75,75,50,50);
caixa2.shapeColor= "blue";

var caixa3= createSprite(125,75,50,50);
caixa3.shapeColor= "red";

var caixa4 = createSprite(175,75,50,50);
caixa4.shapeColor= "blue";

var caixa5 = createSprite(225,75,50,50);
caixa5.shapeColor= "red";

var caixa6 = createSprite(275,75,50,50);
caixa6.shapeColor= "blue";

var caixa7 = createSprite(325,75,50,50);
caixa7.shapeColor= "red";

var caixa8 = createSprite(375,75,50,50);
caixa8.shapeColor= "blue";

var caixa9 = createSprite(25,125,50,50);
caixa9.shapeColor= "blue";

var caixa10 = createSprite(75,125,50,50);
caixa10.shapeColor= "red";

var caixa11 = createSprite(125,125,50,50);
caixa11.shapeColor= "blue";

var caixa12 = createSprite(175,125,50,50);
caixa12.shapeColor= "red";

var caixa13 = createSprite(225,125,50,50);
caixa13.shapeColor= "blue";

var caixa14= createSprite(275,125,50,50);
caixa14.shapeColor= "red";

var caixa15 = createSprite(325,125,50,50);
caixa15.shapeColor= "blue";

var caixa16 = createSprite(375,125,50,50);
caixa16.shapeColor= "red";

var raquete = createSprite(200,400,50,15);
raquete.shapeColor="gray";

var bola = createSprite(150,250,20,20);
bola.shapeColor="yellow";


function draw() {
  background("black");
  
  fill("green");
  textSize(20);
  text("Pontuação: "+score,150,20);
  
  if (gamestate == "serve"){
    text("Pressione ENTER para começar", 30,200);
    if (keyDown("ENTER")){
   gamestate="play";
    bola.velocityY=4;
    bola.velocityX=3;
  }
  }

if (gamestate == "play"){
    raquete.x=World.mouseX;
    if(bola.isTouching(bottomEdge)|| score==16){
    gamestate="end";
}
}
  if(gamestate == "end"){
    bola.velocityX=0;
    bola.velocityY=0;
    if(score==16){
 text("Você Ganhou!",170,200);
    } else{
      text("Você Perdeu!",140,200);
    }
  }
  
  
  if (bola.isTouching(caixa1)){
    score=score+1;
    bola.bounceOff(caixa1);
    caixa1.destroy();
  }
   if (bola.isTouching(caixa2)){
    score=score+1;
    bola.bounceOff(caixa2);
    caixa2.destroy();
  }
   if (bola.isTouching(caixa3)){
    score=score+1;
    bola.bounceOff(caixa3);
    caixa3.destroy();
  }
   if (bola.isTouching(caixa4)){
    score=score+1;
    bola.bounceOff(caixa4);
    caixa4.destroy();
  }
   if (bola.isTouching(caixa5)){
    score=score+1;
    bola.bounceOff(caixa5);
    caixa5.destroy();
  }
   if (bola.isTouching(caixa6)){
   score=score+1;
   bola.bounceOff(caixa6);
    caixa6.destroy();
  }
   if (bola.isTouching(caixa7)){
    score=score+1;
    bola.bounceOff(caixa7);
    caixa7.destroy();
  }
   if (bola.isTouching(caixa8)){
    score=score+1;
    bola.bounceOff(caixa8);
    caixa8.destroy();
  }
   if (bola.isTouching(caixa9)){
    score=score+1;
    bola.bounceOff(caixa9);
    caixa9.destroy();
  }
   if (bola.isTouching(caixa10)){
    score=score+1;
    bola.bounceOff(caixa10);
    caixa10.destroy();
  }
   if (bola.isTouching(caixa11)){
    score=score+1;
    bola.bounceOff(caixa11);
    caixa11.destroy();
  }
   if (bola.isTouching(caixa12)){
    score=score+1;
    bola.bounceOff(caixa12);
    caixa12.destroy();
  }
   if (bola.isTouching(caixa13)){
    score=score+1;
    bola.bounceOff(caixa13);
    caixa13.destroy();
  }
   if (bola.isTouching(caixa14)){
    score=score+1;
    bola.bounceOff(caixa14);
    caixa14.destroy();
  }
   if (bola.isTouching(caixa15)){
    score=score+1;
    bola.bounceOff(caixa15);
    caixa15.destroy();
  }
   if (bola.isTouching(caixa16)){
    score=score+1;
    bola.bounceOff(caixa16);
    caixa16.destroy();
  }
  
  createEdgeSprites();
  
  bola.bounceOff(raquete);
  bola.bounceOff(rightEdge);
  bola.bounceOff(leftEdge);
  bola.bounceOff(topEdge);

drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
