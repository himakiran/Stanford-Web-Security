// TODO: Replace this with your solution.

const net = require('net')  
var date = new Date()

const server = net.createServer(function (socket) {  
       // socket handling logic 
	// "2013-07-06 17:42" 
	var date_str = date.getFullYear()+'-'+(date.getMonth()+1).toString().padStart(2, '0')+'-'+date.getDate().toString().padStart(2, '0')+' '+date.getHours().toString().padStart(2, '0')+':'+date.getMinutes().toString().padStart(2, '0')+'\n' 
	socket.end(date_str)
     })  
server.listen(process.argv[2]) 
