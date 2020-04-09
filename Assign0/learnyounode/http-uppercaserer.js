// TODO: Replace this with your solution.
const http = require('http')
const map = require('through2-map')  

const server = http.createServer(function (req, res) {  
       // request handling logic... 
	if (req.method == 'POST') {
	req.pipe(map(function (chunk) {  
       		return chunk.toString().toUpperCase()  
     	})).pipe(res)
	}
	
     })  
     server.listen(process.argv[2])   

