// TODO: Replace this with your solution.

const mymod = require('./mymodule.js')

mymod(process.argv[2],process.argv[3],cb);

function cb(err,data){
if(err){
console.log(err)
}
else
{
for (each in data){console.log(data[each])}
}
}


