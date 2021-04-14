import http from 'http';

require('dotenv').config();

const PORT = process.env.PORT_NUMBER;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(PORT)

console.log(`Server running at port: https://localhost:${PORT}`);

export default server;