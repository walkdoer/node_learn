'use strict';
var net = require('net');

var server = net.createServer(function(socket) {
    socket.on('data', function (data) {
        socket.write('您好,接收到你的消息:' + data);
    });
    socket.on('end', function () {
        console.log('連接斷開');
    });
    socket.write('歡迎光臨我的空間\n');
});

server.listen(4444, function () {
    console.log('server bound');
});
