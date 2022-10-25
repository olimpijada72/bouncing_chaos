//////////////
/// TO DO ////
//////////////

// Napravi slider za velicinu
// Napravi slider za boje
// Napravi slider za transparentnost

// Stilizuj elemente (font, velicina, pozicije, highlight)


///////////////////////
// Globalne promenljive
///////////////////////
let pom = 1;
let kraj = true;
var oblici = [];
var oblik;
var okvir = false;

//Buttons
var btnStart;
var btnErase;
var btnRestart;
var btnStrokeOn;
var btnStrokeOff;


//Sliders
var sliderTransparency;



///////////////////////
// Main
///////////////////////
function setup() {

 var canvas = createCanvas(windowWidth, windowHeight-60);
  
  

  clear();
  // background(180);
  noStroke();

  

  
  // Buttons
  btnStart = select('#startStop');
  btnStart.mousePressed(startStop);
  
  btnErase = select('#resetBg');
  btnErase.mousePressed(resetBg);
  
  btnRestart = select('#restart');
  btnRestart.mousePressed(restart);
  
  btnStrokeOn = select('#strokeOn');
  btnStrokeOn.mousePressed(strokeOn);
  
  btnStrokeOff = select('#strokeOff');
  btnStrokeOff.mousePressed(strokeOff);

  
  sliderTransparency = createSlider(20, 200, 100);  sliderTransparency.parent(select("#sliderContainer"));
  
  print(sliderTransparency.value())

  oblik = new Oblik(sliderTransparency.value());
  

  
  // for(var i = 0; i < 1; ++i){
  //   oblici[i] = new Oblik();
  // }
  
  

  
  
  


}

function draw() {
  if(okvir){
    stroke(0);
    
  }
  else{
    noStroke();
  }
  
  
  if(!kraj){
    oblik.cicle1();
  }
    



}





///////////////////////
// User defined functions
///////////////////////

function sudari(niz){
  for(var i = niz.length-1; i >=1; --i){
    for(var j = i- 1; j >= 0; --j ){
      if(niz[i].bump(niz[j])){
        niz[i].randomColor();
        niz[j].randomColor();

        // niz[i].reverseDirection();
        //         niz[j].reverseDirection();

        // print(i, j);
//         if(niz[i].v >= niz[j].v){
//           niz[i].reverseDirection();
//           niz[i].grow(niz[j]);
//           niz.splice(j, 1);
//           j--;
//         }
//         else{
//           niz[j].reverseDirection();
//           niz[j].grow(niz[i]);
//           niz.splice(i, 1);
//           i--;

//         }
        
      }
    }
  }
  
  
}


// BUTTONS

function startStop() {
  kraj = !kraj;
}

function resetBg(){
  clear();
  kraj = true;
}

function restart(){

  oblik = new Oblik(sliderTransparency.value());
  kraj = false;
  
}

function strokeOn(){
  okvir = true;
  
}

function strokeOff(){
  okvir = false;
  
}














// function doubleClicked() {
//   background(12, 16, 25, 255);
//   ++pom;

//   kraj = !kraj;

// }



function drawShape(pom) {
  if(kraj != false){
    if (pom % 3 == 1) {
    oblik.drawCircle();
  } else if (pom % 3 == 2) {
    oblik.drawRect();
  } else {
    oblik.drawTriangle();
  }
  }
  
}
