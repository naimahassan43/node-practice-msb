//File System Module(Refactoring with Promises)
const fs = require("fs").promises;

async function fileSystemOptions() {
  //Create a file
  // await fs.writeFile("./app.txt", "Hello World!");
  //Read a file
  // const data = await fs.readFile("./app.txt", "utf-8");
  // console.log(data);
  //Rename a file
  // await fs.rename("./app.txt", "./helper.txt");
  // Delete a file
  // await fs.unlink("./helper.txt");
}
fileSystemOptions();
