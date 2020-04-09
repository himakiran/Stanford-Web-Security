// TODO: Replace this with your solution.

const fs = require('fs');

module.exports = listfiles;

function listfiles(dir_path,file_ext,cb){

	fs.readdir(dir_path,function callback(err,data){
		if(err)
			{
				cb(err);
			}
		else
			{
				const fileslist = data;
				//console.log(fileslist)
				var ext = '';
				var result =[];
				for (each in fileslist)
					{
						ext = fileslist[each].split('.')[1]
						//console.log(ext);
						
						if(ext===file_ext){result.push(fileslist[each])} 
						else{}
						

					}
				cb(null,result);

			}

	});

}


