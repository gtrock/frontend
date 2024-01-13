//理解服务端渲染  循环输出Hello World!  10次
var http=require('http')
http.createServer( function(request,response){
	response.writeHead(200,{'Content-Type': 'text/plain' });
	
	for(var i=0;i<10;i++){
		response.write('Hello World!\n');
	}	
	response.end('');
	
}).listen(8888);

console.log("Server is running at localhost: 8888")
