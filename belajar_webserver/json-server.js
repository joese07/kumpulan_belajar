const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  const data = {
    nama: "Joese Rio Telysana",
    age: 22,
    lulus: false,
  };
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
});

server.listen(8080);
