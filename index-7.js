//URL module
const http = require("http");
const url = require("url");

// create a server
const server = http.createServer(async (req, res) => {
  if (req.url === "/favicon.ico") return;
  console.log(req.url);

  const myUrl = new URL(req.url, "http://localhost:3000/");
  console.log(myUrl);
  console.log(myUrl.pathname);
  console.log(myUrl.searchParams.get("id"));
  console.log(myUrl.searchParams.get("category"));
  // Send this data as a response from server
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hellooo</h1>");
});

server.listen(3000);
