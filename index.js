var readlineSync = require('readline-sync');

const chalk = require('chalk');
console.log(" \n")


console.log("\n Welcome to Amit's Quiz on MCU \n");
var userName = readlineSync.question("Enter your Name --->");
console.log("\n")
console.log(chalk.white.bgRedBright(userName + ",You are ready to play the quiz !!"))
console.log("Rules : \n 1) You will be awarded score 1\n for every right answer \n 2) If you score more than 3 \n then you will reach level 2\n 3) Level 1 contain Five questions  \n 4) Level 2 contain Three questions ")


console.log("\n ")
console.log(("            ") + chalk.hex("#2d0745")(chalk.bgWhite("Level 1\n")));

var score = 0;
var QuesOne = {
  ques: "1) In which year Iron Man-1 was released ?",
  A: "A) 2010",
  B: "B) 2009",
  C: "C) 2008",
  D: "D) 2007",
  ans: 'C'
}


var QuesTwo = {
  ques: "2) Brunce Banner was affected by which rays ?",
  A: "A) Cosmic Rays",
  B: "B) Beta rays",
  C: "C) Alpha Rays",
  D: "D) Gamma Rays",
  ans: 'D'
}

var QuesThree = {
  ques: "3) How many movie-parts does Iron Man have in MCU ?",
  A: "A) 1",
  B: "B) 3",
  C: "C) 4",
  D: "D) 2",
  ans: 'B'
}

var QuesFour = {
  ques: "4) Captian America's shield is made of which metal ?",
  A: "A) Uranium",
  B: "B) Adamantium",
  C: "C) Vibranium",
  D: "D) Titanium",
  ans: 'C'
}


var QuesFive = {
  ques: "5) Ant-Man use which particles to change size ?",
  A: "A) Quantum particle",
  B: "B) Atomic particles",
  C: "C) Pym particles",
  D: "D) Cosmic particles",
  ans: 'C'
}

var QuesSix = {
  ques: "6) which is the Last movie of MCU phase-4 ?",

  A: "A) Spider Man - No-Way Home",
  B: "B) Dr. Strange-Multiverse of Madness",
  C: "C) Black Panther-Wakanda Forever",
  D: "D) Thor-Love and Thunder",
  ans: "C"
}

var QuesSev = {
  ques: "7) In which earth 'Avenger: Endgame' takes place in Multiverse ?",

  A: "A) Earth-467",
  B: "B) Earth-19999",
  C: "C) Earth-838",
  D: "D) Earth-616",
  ans: "D"

}
var Queseight = {
  ques: "8) 'He Who Remains' is the variant of ?",


  A: "A) The Watcher",
  B: "B) Celestial",
  C: "C) Kang - The Conqueror",
  D: "D) Eternity",
  ans: "C"
}

var array1 = [QuesOne, QuesTwo, QuesThree, QuesFour, QuesFive];

var array2 = [QuesSix, QuesSev, Queseight];

for (var i = 0; i < array1.length; i++) {
  Level1(array1[i].ques, array1[i].ans, array1[i].A, array1[i].B, array1[i].C, array1[i].D);
}

function Level1(Ques, Ans, A, B, C, D) {
  console.log(chalk.hex("#a64dff")(Ques + "\n"));
  console.log(chalk.hex("#d9b3ff")(A + "\n"));
  console.log(chalk.hex(" #d9b3ff")(B + "\n"));
  console.log(chalk.hex(" #d9b3ff")(C + "\n"));
  console.log(chalk.hex(" #d9b3ff")(D + "\n"));

  var userAns = readlineSync.question("Enter your Option --->");


  if (userAns.toUpperCase() === Ans.toUpperCase()) {
    console.log(chalk.green("\nRight Answer :-)"));
    score = score + 1;
    console.log(chalk.hex("#f5d969")("scores are :" + score));
  }
  else {
    console.log(chalk.red("\nWrong! :-("));
    console.log(chalk.green("Right option is :" + Ans))
    console.log(chalk.yellow("scores :" + score))
  }

  console.log("\n")
}
if (score >= 3) {
  console.log("\n");
  console.log(chalk.black(chalk.bgHex("#FFFFFF")("**Congratulations You reached Level 2**\n")));

  console.log("\n ")
  console.log(("            ") + chalk.hex("#2d0745")(chalk.bgWhite("Level 2\n")));

  for (var i = 0; i < array2.length; i++) {
    Level1(array2[i].ques, array2[i].ans, array2[i].A, array2[i].B, array2[i].C, array2[i].D);
  }
}
console.log("\n")
console.log(chalk.hex("#91d9ff")("------------Game Ends-------------\n"));

console.log(chalk.yellow("Final scores are :" + score))