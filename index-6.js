//Exercise
// Create a server
//Read a html file
// Send this data as a response from server

const http = require("http");
const fs = require("fs").promises;

// create a server
const server = http.createServer(async (req, res) => {
  //Read a html file
  const data = await fs.readFile("./index.html", "utf8");

  // Send this data as a response from server
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data);
});

server.listen(3000);
