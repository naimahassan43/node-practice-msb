//File System Module(Refactoring with Promises)
const fs = require("fs").promises;

async function fileSystemOptions() {
  //Create a file
  await fs.writeFile("./app.txt", "Hello World!");
}
fileSystemOptions();
