// TODO: Replace this with your solution.

const bl = require('bl')
const http = require('http')

http.get(process.argv[2], function (response) {

response.pipe(bl(

function(err,data){

if(err){
console.log(err);
}
else
{
result = data.toString();

console.log(result.length);
console.log(result)

}

}

))

});

