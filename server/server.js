const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {

    socket.emit('join', {from: 'Admin', text: 'Welcome to the chat app'});
    socket.broadcast.emit('userJoined', {from: 'Admin', text: 'new user joined'})

    socket.on("createMessage", function(data){
        // io.emit('newMessage', {
        //     from: data.from, 
        //     text: data.text, 
        //     createdAt: new Date().getTime()
        // })
    })

    socket.on("disconnect", () => {
        console.log(" client diconnected")
    })
})

server.listen(3000 ,() => console.log(`server is listening on port: ${port}`))