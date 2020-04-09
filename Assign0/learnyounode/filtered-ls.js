// TODO: Replace this with your solution.
const fs = require('fs');

function writels(){ 

fs.readdir(process.argv[2],function callback(err,data){
if(err){
console.log(err);
}
else
{
const fileslist = data;
//console.log(fileslist)
var ext = '';
for (each in fileslist){

ext = fileslist[each].split('.')[1]
//console.log(ext);

if(ext.localeCompare(process.argv[3])){
} 
else{


console.log(fileslist[each]);
}
}

}

});

}


writels();
