//创建web服务器
var http=require('http')
http.createServer( function(request,response){
	response.writeHead(200,{'Content-Type': 'text/plain' });
	response.end('Hello World!');
	
}).listen(8888);

console.log("Server is running at localhost: 8888")
