const readlineSync = require("readline-sync");
const chalk = require('chalk');

var user = readlineSync.question("What is your name?");
console.log(chalk.blue(`Welcome ${user} to, Do you know Ankit?`));

var score = 0;

function play(question, options, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question);

  if (userAnswer === answer) {
    score = score + 1
    console.log(chalk.green("correct"));
  } else {
    console.log(chalk.red("wrong"));
  }

  console.log(chalk.blue("current score: ", score));
  console.log("-----------------------------------");
}

var questionData = [{
  question: "What is my last name?",
  options: ["Sharma", "Joshi", "Singh", "Birla"],
  answer: 1
}, {
  question: "Where do I live?",
  options: ["Delhi", "Bhopal", "Bangalore", "Mumbai"],
  answer: 0
}, {
  question: "My favourite superhero would be?",
  options: ["Batman", "Spiderman", "Shaktimaan", "Deadpool"],
  answer: 3
}, {
  question: "When is my birthday? (dd/mm)",
  options: ["9-March", "10-April", "15-October", "14-December"],
  answer: 0
}, {
  question: "My favourite comic movie would be?",
  options: ["Hera Pheri", "Andaaz apna apna", "Golmaal-1", "Hangover"],
  answer: 0
}];

for (let i = 0; i < questionData.length; i++) {
  var currentQuestion = questionData[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
}

console.log("YaY!!, you scored: ", score);


