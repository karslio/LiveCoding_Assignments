// <!-- npm  init -->
// <!-- npm install uuid  -->
// <!-- npm install -D nodemon -->
// npm i moment

// 1. Write to .txt file
// Create a function that writes all numbers between given 2 values in a text(txt) file. Example: writetext(22,55)

var fs = require("fs");

function writetxt(p1, p2) {
  while (p1 <= p2) {
    fs.appendFileSync("./myfile.txt", `${p1}\n`);
    p1++;
  }
}

// 2. Read from .txt file Create a function that gets the content of given text file and prints it on the console.
// _Example: printText('mytextFile.txt')

function getTheText(filename) {
  let fileTex = fs.readFileSync(`./${filename}`).toString();
  return fileTex;
}

// readFile("myfile.txt");

// 3. Merge files
// Create a function that gets the content of given text files and creates a new file with all the content.
// Example: mergeFiles('mytextFile.txt', 'yourTextFile.txt')

function mergeFile(f1, f2) {
  let file1 = getTheText(f1);
  let file2 = getTheText(f2);
  console.log(file1 + file2);
}

mergeFile("myfile.txt", "secondfile.txt");

// 4. Using external module
// Install and import moment.js(a js libary) via NPM and create a function that prints the day name of
// X(given number as an argument) days later on the console by using moment.js   _Example: getFutureDay()
