var socket = io();

socket.on('connect', () => {

    socket.on('newUser', function(data) {
    	console.log("new user joined", data)
    })
    
})


socket.on('disconnect', () => {
    console.log('disconnected')
})

jQuery('#message-form').on('submit', function(evt){
	evt.preventDefault();
	console.log(" form submitted")
	socket.emit('createMessage', {user: 'User', text: jQuery('[name=message]').val()})
})

socket.on('newMessage', function(data){
	var li = jQuery('<li></li>');
	li.text(`from ${data.from} text: ${data.text}`)

	jQuery('#messages').append(li)
})