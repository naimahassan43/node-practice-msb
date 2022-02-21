//NPM module

const validator = require("validator");

// console.log(validator.isEmail("john@gmail.com"));
// console.log(validator.isJSON(JSON.stringify({ name: "john" })));
// console.log(validator.isPort("65535")); //0 to 65535
console.log(
  validator.isURL("https://www.msbacademy.com/course/javascript-bootcamp/")
);
