class Oblik {
  constructor( a = 100, x = random(50,width -50), y = random(50, height-50)) {
    //koordinate
    this.x = x;
    this.y = y;
    
    
   this.a = a;
   this.randomColor();
   this.randomDirection();


    //velicina
    this.v = random(35, 50);
    



  }

  
  // ATRIBUTI
  
  randomColor() {

    this.r = random(200);
    this.g = random(200);
    this.b = random(100, 150);
    
    // this.r = random(255);
    // this.g = random(255);
    // this.b = random(255);
    

    fill(this.r, this.g, this.b, this.a);
  }

  randomDirection(){
    this.xSpeed = random(2, 4);
    if(random(1, 2) > 1.5){
      this.xSpeed *= -1;
    }
    
    this.ySpeed = random(2, 4);
    if(random(1, 2) > 1.5){
      this.ySpeed *= -1;
    }

  }
  
  randomSize(){
    this.v = random(25, 50);

  }

  reverseDirection(){
      this.ySpeed *= -1;
      this.xSpeed *= -1;

  }
  
  
  
  // CRTANjE OBLIKA
  drawCircle() {
    fill(this.r, this.g, this.b, this.a);

    circle(this.x, this.y, this.v);
  }

  drawRect() {
    rect(this.x, this.y, this.v);
  }

  drawTriangle() {
    triangle(
      this.x,
      this.y,
      this.x + this.v,
      this.y,
      this.x + this.v / 2,
      this.y + this.v * 0.7
    );
  }
  
  
  
  // OSTALE OPERACIJE
  move(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  
  bounce(that){
    if(this.y > height - this.v/2 -10 || this.y < this.v/2 + 10){
      this.ySpeed *= -1;


    }
    if(this.x > width - this.v/2 - 10|| this.x < this.v/2 + 10){
      this.xSpeed *= -1;

    }
    
    
    
    
 
    
    
  }
  
  
  
  
  // OPERACIJE
  bump(that){
    return (dist(this.x, this.y, that.x, that.y ) < this.v/2 + that.v/2);
  }
  
  grow(that){
    this.v += that.v;
  }
  
  
  
  
  
  
  
  

  cicle1(){
    this.drawCircle();
    this.move();
    this.randomColor();
    this.bounce();

  }
  
   cicle2(){
    this.drawCircle();
    this.move();
    this.bounce();

  }
  
    cicle3(){
    this.drawRect();
    this.move();
    this.randomColor();
    this.bounce();

  }
  
    cicle4(){
    this.drawTriangle();
    this.move();
    this.randomColor();
    this.bounce();

  }
  
  
  
  

}