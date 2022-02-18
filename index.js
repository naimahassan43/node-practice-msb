//File System Module(with callback)

const fs = require("fs");

//Create a file
fs.writeFile("./app.txt", "Hello World", (err) => {
  if (err) console.log(err);
  else console.log("File created successfully");
});
