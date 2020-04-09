// TODO: Replace this with your solution.

const fs = require('fs');

var filedata = fs.readFileSync(process.argv[2]);

const str = filedata.toString();

/*
a JavaScript String can be .split() into an array of  
  substrings and that '\n' can be used as a delimiter. Note that the test  
  file does not have a newline character ('\n') at the end of the last line,  
  so using this method you'll end up with an array that has one more element  
  than the number of newlines.  
*/
console.log(str.split('\n').length-1)
