var socket = io();

socket.on('connect', () => {
    console.log("client is connected")
})

socket.emit('createMessage', {from: 'ami', text: ' my first socket message'})

socket.on('disconnect', () => {
    console.log('disconnected')
})

socket.on('newMessage', function(data) {
    console.log(" new message: ", data)
})