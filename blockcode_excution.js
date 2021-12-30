var fs = require("fs");
var textIN = fs.readFileSync("names.txt", "utf-8");
console.log(textIN);


fs.readFile('names.txt', 'utf-8', (err,data) => {
    console.log(data);
});
console.log('Reading File');
