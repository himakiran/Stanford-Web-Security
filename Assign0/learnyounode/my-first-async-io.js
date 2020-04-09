// TODO: Replace this with your solution.
const fs = require('fs');
var lines = 0;

function writelines(){

fs.readFile(process.argv[2],function countlines(err,data){
if (err) {
console.log(err);
}
else{
const buf = data.toString();
lines = buf.split('\n').length-1;
console.log(lines)
}
});
}


writelines();



