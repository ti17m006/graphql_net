const PORT = 8000;
const HOST = '127.0.0.1';

const http = require('http');
const app = require('./app01/app');

http
    .createServer(app)
    .listen(PORT, HOST, function () {
        console.log(`Linstening ${HOST} on a port ${PORT}`);
    });
