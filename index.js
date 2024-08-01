// const http = require("http");
// const express = require("express");
// const path = require("path");
// const {Server} = require("socket.io");
// const { Socket } = require("dgram");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);


// //socket.io
// io.on('connection' , (socket) =>{
//   socket.on('usermessage', (message) =>{
//     //console.log("A new user msg:-", message);
//     io.emit("message", message);
//     });
// });


// app.use(express.static(path.resolve("./public")));

// app.get('/', (req , res)=>{
//     return res.sendFile("/public/index.html")
// })

// server.listen(9000, ()=> console.log("Server started at 9000"));

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index1.html');
});



io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', { username: msg.username, message: msg.message });
  });
});


io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets


server.listen(3000, () => {
  console.log('listening on *:3000');
});