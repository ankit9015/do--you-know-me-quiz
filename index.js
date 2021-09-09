var readlineSync = require("readline-sync");
var username = readlineSync.question("name?");
var welcomeMessage = "Welcome" + username;
console.log(welcomeMessage);
