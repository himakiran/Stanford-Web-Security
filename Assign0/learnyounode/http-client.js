// TODO: Replace this with your solution.

const http = require('http')

http.get(process.argv[2],cb);

function cb(response){
response.setEncoding('utf-8');
response.on('data', function (data) {console.log(data) })  ;
response.on('error',function (error) {console.log(error)});
}


