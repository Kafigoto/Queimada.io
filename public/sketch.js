let socket;

let GlobalSize = 1
const height = 600
const width = 600
let players = []

function setup() {
  main = new blob(width/2,height/2,50*GlobalSize);

  socket = io.connect('http://localhost:3000')
  socket.on('connect', () => {main = new blob(width/2,height/2,50*GlobalSize);});

  startingObject = main;
  let connected = false;
  socket.on('connect', () => {socket.emit('start', startingObject);});
  socket.on('heartbeat', newConnection)

  function newConnection(ConnectedPlayers) {
    players = ConnectedPlayers
  }

  frameRate(80);
  createCanvas(width, height);
}

function draw() {
  translate(height/2-main.pos.x, width/2-main.pos.y);
  background(220);
  fill(0,0,255)
  drawblob.apply(main)
  fill(50,50,50)
  moveblob.apply(main)
  // catchballblob.apply(main)
  objectObject = {object:main, id: socket.id}
  socket.emit('object', objectObject);
  for (let i = 0; i < players.length; i++){
    if(players[i].id != socket.id){
      moveblob.apply(players[i])
      drawblob.apply(players[i])
    }
  }
}

function mouseClicked(){
  shootblob.apply(main)
}

function createNew(x,y,size){
  players.push(new blob(x,y,size))
}

function keyPressed() {
  if (keyCode == 78){
    createNew(50,50,50)
  }
  if (keyCode == 82){
    main.catch()
  }
  if (keyCode == 71){ // G
    console.log(players)
    // let tempvar = main
    // console.log(tempvar)
    // socket.emit('object', tempvar);
  }
}