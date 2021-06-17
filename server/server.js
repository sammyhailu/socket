const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const {generateMessage} = require('./utils/message');


const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {

	// socket.emit()
	socket.broadcast.emit('newUser', {user: 'User', text: 'new user joined'})
    
	socket.on('createMessage', function(data) {

		io.emit('newMessage', {from: data.user, text: data.text, msg: "new Message"})
	})

    socket.on("disconnect", () => {
        console.log("User was diconnected")
    })
})

server.listen(3000 ,() => console.log(`server is listening on port: ${port}`))