// TODO: Replace this with your solution.

	
	
	const http = require('http')

	
	var res1='', res2='', res3='' ;
	var count=0

	var result_list = [res1,res2,res3];

	var url_list = [process.argv[2],process.argv[3],process.argv[4]];

	url_list.forEach(function (item,index,list) {
	//console.log(item);
	http.get(item, function (response) {
	var result = ''
	response.on('error',console.error)

	response.on('data' , function (data) {

	 result += data

	});

	response.on('end',function (){

	count+=1
	result_list[index] = result

	if(count===3)
	{
	console.log(result_list[0])
	console.log(result_list[1])
	console.log(result_list[2])
	}
	
	});

	

	
	
	}); //http.get

	} ); //urlist.forEach

	
	
	
