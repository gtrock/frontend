//接受参数
var http=require('http')
var url=require('url');
http.createServer( function(request,response){
	response.writeHead(200,{'Content-Type': 'text/plain' });
	
	var u= url.parse(request.url ,true).query;
	response.write("name:" + u.name);
	response.write("\n");
	response.end('Hello World!');
	
}).listen(8888);

console.log("Server is running at localhost: 8888")
