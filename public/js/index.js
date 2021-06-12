var socket = io();

socket.on('connect', () => {
    console.log("client is connected")
})

socket.on('join', function(message) {
    console.log(" Admin: ", message)
})

socket.on('userJoined', function(message) {
    console.log("Joined: ", message)
})

socket.on('disconnect', () => {
    console.log('disconnected')
})

socket.on('newMessage', function(data) {
    console.log(" new message: ", data)
})