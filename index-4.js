//Exercise- Read and Write File Simultaneously
//Read Data.json file and get total salary

const fs = require("fs").promises;

async function getSum() {
  //read data.json file
  let data = await fs.readFile("./data.json", "utf-8");
  data = JSON.parse(data); //get array data
  // console.log(data);

  let sum = 0;

  for (let user of data) {
    sum = sum + user.salary;
  }

  // console.log("Total Salary: ", sum);

  await fs.writeFile("./sum.txt", sum);
}

getSum();
