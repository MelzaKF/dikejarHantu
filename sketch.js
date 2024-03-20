class Mover { 
  constructor(x,y){ 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(-2,2), random(-2,2)) 
    this.acceleration = createVector(0,0); 
  }
  display(){ 
    noStroke()
    fill(192,192,192)
    ellipse(this.location.x-10,this.location.y,10,25)
    ellipse(this.location.x,this.location.y,10,25)
    ellipse(this.location.x+10,this.location.y,10,25)
    ellipse(this.location.x,this.location.y-10,33,35)
    fill(255,0,0)
    ellipse(this.location.x-5,this.location.y-10,5,8)
    ellipse(this.location.x+5,this.location.y-10,5,8)
  } 
  update(){ 
    var mouse = createVector(mouseX, mouseY); 
    var dir = mouse.sub(this.location); 
    var topSpeed = 8
    dir.normalize(); 
    dir.mult(0.3); 
    this.velocity.add(this.acceleration); 
    this.velocity.add(dir); 
    this.velocity.limit(topSpeed) 
    this.location.add(this.velocity);
  } 
   cekUjung(){ 
    if ( this.location.x > windowWidth ) { 
      this.location.x = 0; 
    } 
    else if (this.location.x < 0){ 
      this.location.x = windowWidth; 
    } 
    if ( this.location.y > windowHeight ) { 
      this.location.y = 0; 
    } 
    else if (this.location.y < 0){ 
      this.location.y = windowHeight; 
    } 
  } 
}

let movers = [];
let mouse;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<5;i++){
    movers[i] = new Mover(random(windowWidth), random(windowHeight));   
  }
}
function draw() {
  background(22); 
  noStroke()
  fill(240,248,254)
  ellipse(mouseX,mouseY-20,55,50)
  ellipse(mouseX-4,mouseY-12,48,35)
  fill(0,0,0)
  ellipse(mouseX-12,mouseY-20,6,6)
  ellipse(mouseX+5,mouseY-20,6,6)
  ellipse(mouseX-3,mouseY-14,6,11)
  fill(252,182,245)
  ellipse(mouseX-18,mouseY-15,10,4)
  ellipse(mouseX+12,mouseY-15,10,4)
  
    for (let i=0; i<5;i++){
      movers[i].cekUjung(); 
      movers[i].display(); 
      movers[i].update();    
  }  
}