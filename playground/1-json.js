const fs = require("fs");
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString(); // JS String
// const data = JSON.parse(dataJSON); // JS Object
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
let dataJSON = dataBuffer.toString(); // JS String
const data = JSON.parse(dataJSON); // JS Object
data.name = "Jason";
data.planet = "Saturn";
data.age = 30;
dataJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", dataJSON);
