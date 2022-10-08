var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

ConnectedPlayers = []

function newConnection(socket){
    console.log('new connection: ' + socket.id);


    socket.on('object', receivMsg)
    socket.on('start', connectPlayer)

    function connectPlayer(startingObject){
        startingObject.id = socket.id
        ConnectedPlayers.push(startingObject);
        console.log(ConnectedPlayers)
    }

    // function receivMsg(objectObject){
    //     for (let i = 0; i < ConnectedPlayers.length; i++){
    //         if (ConnectedPlayers[i].id == socket.id){
    //             let player = ConnectedPlayers[i]
    //             player.x = objectObject.x
    //             player.y = objectObject.y
    //             break
    //         }
    //     }
    // }
    function receivMsg(objectObject){
        for (let i = 0; i < ConnectedPlayers.length; i++){
            if (ConnectedPlayers[i].id == socket.id){
                objectObject.object.id = objectObject.id 
                ConnectedPlayers[i] = objectObject.object
                break
            }
        }
    }
}

function heartbeat(){
    io.sockets.emit('heartbeat', ConnectedPlayers);
    // console.log(ConnectedPlayers)
    // console.log("sent")
}

setInterval(heartbeat,33)