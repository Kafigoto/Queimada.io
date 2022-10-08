let radius = 20 * GlobalSize
let throwforce = 1
class Dodgeball{
  constructor(posVector,dirVector,speedVector,owner){
    this.ownerid = owner
    this.grabable = 0
    this.pos = createVector(posVector.x,posVector.y)
    this.acceleration = createVector(0,0)
    this.speed = createVector(speedVector.x,speedVector.y)
    this.speed.div(2)
    this.speed.add(dirVector)
    this.speed.mult(throwforce)

    this.pos.x = this.pos.x + (dirVector.x*3)*GlobalSize
    this.pos.y = this.pos.y + (dirVector.y*3)*GlobalSize
    
  }
}
function drawDodgeball(){
  if (Math.abs(this.speed.x) < 1 && Math.abs(this.speed.y) < 1 ){
    fill(255,0,0)
    this.grabable = 1
  }
  circle(this.pos.x,this.pos.y,radius)
  fill(0,0,255)
}
function moveDodgeball(){
  this.speed.x = this.speed.x + this.acceleration.x
  this.speed.y = this.speed.y + this.acceleration.y
  
  this.speed.x = this.speed.x - this.speed.x/100
  this.speed.y = this.speed.y - this.speed.y/100
  
  this.pos.x = this.pos.x + this.speed.x
  this.pos.y = this.pos.y + this.speed.y
  if (Math.abs(this.speed.x) < 0.08){
    this.speed.x *= 0
  }
  if (Math.abs(this.speed.y) < 0.08){
    this.speed.y *= 0
  }
}