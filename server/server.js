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
    console.log(' user is connected');

    socket.emit('newMessage', {from: "sammy@google.com", text: "can we meet up at 4", createdAt: 234})

    socket.on("createMessage", function(data){
        console.log(' message from  the client', data)
    })

})
socket.on("disconnect", () => {
   console.log(" client diconnected")
})

server.listen(3000 ,() => console.log(`server is listening on port: ${port}`))