const http = require('http');
const handleRequest = require('./handleRequest');

const server = http.createServer(handleRequest.handleRequest);
server.listen(3000);