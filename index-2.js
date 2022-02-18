//File System Module(with callback)

const fs = require("fs");

//Create a file
// fs.writeFile("./app.txt", "Hello World", (err) => {
//   if (err) console.log(err);
//   else console.log("File created successfully");
// });

//Read a file
// fs.readFile("./app.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

//Rename a file

// fs.rename("./app.txt", "./helper.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("file renamed");
// });

// Delete a file

fs.unlink("./helper.txt", (err) => {
  if (err) console.log(err);
  else console.log("file deleted");
});
