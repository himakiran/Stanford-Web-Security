// TODO: Replace this with your solution.
const http = require('http')
const url = require('url')


 
///api/parsetime?iso=2013-08-10T12:10:15.474Z
const server = http.createServer(function (req, res) {  
       // request handling logic... 

	const myURL = new URL(req.url,'http://127.0.0.1:8080')
	
	if (req.method == 'GET' && req.url.includes('/api/parsetime')) {

	res.writeHead(200, { 'Content-Type': 'application/json' }) 
	
	var date_str = myURL.search
	const date = new Date(Date.parse(date_str.substring(5,)))
	var hr = date.getHours()
	var mi = date.getMinutes()
	var sec = date.getSeconds()

	var resp_obj = {"hour" : hr,"minute" : mi, "second" : sec}
	return res.end( JSON.stringify(resp_obj))
	

	return res.end(req.url+"rteceived") 
		
	}

	if (req.method == 'GET' && req.url.includes('/api/unixtime')) {

	res.writeHead(200, { 'Content-Type': 'application/json' })  
	var date_str = myURL.search
	const date = new Date(Date.parse(date_str.substring(5,)))
	var resp_obj = {"unixtime" : date.getTime()}
	return res.end(JSON.stringify(resp_obj)) 
	
	}

	

	}) //http.createServer
	
 
     server.listen(process.argv[2])   

