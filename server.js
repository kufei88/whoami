var http = require('http');
const os = require('os');


http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	var whoami = {};
	whoami.ipaddress = getClientIp(request).split(':').pop();
	whoami.software = os.type()+' '+os.release();
	whoami.language =request.headers["accept-language"].split(',')[0] ;
	// 发送响应数据 "Hello World"
	response.end(JSON.stringify(whoami));
}).listen(8888);
function getClientIp(req) {
        return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    };
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');