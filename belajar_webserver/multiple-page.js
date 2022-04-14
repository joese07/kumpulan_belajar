const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request, response) => {
  const requestUrl = url.parse(request.url).pathname;

  if (requestUrl === "/") {
    fs.readFile("./index.html", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri proses respons
    });
  } else if (requestUrl === "/profile") {
    fs.readFile("./profile.html", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri proses respons
    });
  } else if (requestUrl === "/datajson") {
    fs.readFile("./album.json", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(data);
      }
      response.end(); // untuk mengakhiri proses respons
    });
  } else {
    response.writeHead(404);
    response.write("Not Found");
    response.end();
  }
});

server.listen(8080);
// const data = {
//   nama: "Joese Rio Telysana",
//   age: 22,
//   lulus: false,
// };
// response.writeHead(200, { "Content-Type": "application/json" });
// response.end(JSON.stringify(data));
