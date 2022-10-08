
class blob{
    constructor(x,y,blobsize){
      this.id = null
      this.players = players
      this.ball = 1
      this.size = blobsize;
      this.mass = 1
      this.force = createVector(0,0);
      this.pos = createVector(x,y);
      this.speed = createVector(0,0);
      this.acceleration = createVector(0,0);
      this.balls = []
    }
  }

function shootblob(){
  if (this.ball == 1){
    this.ball = 0
    let trajectory = createVector(mouseX-width/2,mouseY-height/2)
    trajectory.setMag(10)
    this.balls.push(new Dodgeball(this.pos,trajectory,this.speed,this.id))
  }
}

function moveblob(){
    if (keyIsDown(87)){//w
      this.force.y = -1;
    }else
    if (keyIsDown(83)){//s
      this.force.y = 1;
    }else{
      this.force.y = 0
    }
    if (keyIsDown(68)){//d
      this.force.x = 1;
    }else
    if (keyIsDown(65)){//a
      this.force.x = -1;
    }else{
      this.force.x = 0
    }
      
    this.acceleration.x = this.force.x/this.mass
    this.acceleration.y = this.force.y/this.mass
    
    this.speed.x = this.speed.x + this.acceleration.x
    this.speed.y = this.speed.y + this.acceleration.y
    
    this.speed.x = this.speed.x - this.speed.x/10
    this.speed.y = this.speed.y - this.speed.y/10
    
    this.pos.x = this.pos.x + this.speed.x
    this.pos.y = this.pos.y + this.speed.y
    if (Math.abs(this.speed.x) < 0.08){
      this.speed.x *= 0
    }
    if (Math.abs(this.speed.y) < 0.08){
      this.speed.y *= 0
    }
  }

// function catchballblob(){
//     for(let i = 0; i < this.players.length; i++){
//         for(let j = 0; j < this.players[i].balls.length; j++){
//             if(this.players[i].balls[j].pos.dist(this.pos)<(35*GlobalSize)){
//                 if(this.players[i].balls[j].grabable == 1){
//                 this.ball = 1
//                 delete this.players[i].balls[j]
//                 this.players[i].balls.splice(j,1)
//                 }else if(this.players[i].balls[j].ownerid != this.id){
//                 // die here
//                 }
//             }
//         }
//     }
// }

function drawblob(){
    for (let i = 0; i < this.balls.length; i++){
      moveDodgeball.apply(this.balls[i])
      drawDodgeball.apply(this.balls[i])
    }
    circle(this.pos.x,this.pos.y,this.size)
}