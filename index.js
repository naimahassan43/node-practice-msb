//Problem: Mini Calculator
//Take Input from command line

const add = require("./calculator/add");
const sub = require("./calculator/sub");
const mul = require("./calculator/mul");
const div = require("./calculator/div");

//Take Input from command line

const a = parseInt(process.argv[2]);
const ch = process.argv[3];
const b = parseInt(process.argv[4]);

if (ch === "ADD") {
  console.log(add(a, b));
} else if (ch === "SUB") {
  console.log(sub(a, b));
} else if (ch === "MUL") {
  console.log(mul(a, b));
} else if (ch === "DIV") {
  console.log(div(a, b));
} else {
  console.log("Invalid");
}
