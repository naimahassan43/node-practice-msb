//HTTP Module
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server running");
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.end("<h1>Hello everyone</h1>");
});

server.listen(3000);
