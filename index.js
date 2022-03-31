var readLineSync = require("readline-sync");
var currentScore = 0;
var questions = [{
        question: "What is the Sun mainly made from? \n\n1. Lava\n2. Gas\n3. Rock\n4. Molten Rock\n",
        answer: "2"
    },
    {
        question: "Which of these best describes the atmosphere surrounding Venus? \n\n1. Hot and Poisonous\n2. Cold and Snowy\n3. Bright and Sunny\n4. Cold and Wet\n",
        answer: "1"
    },
    {
        question: "How many moons does Mars have? \n\n1. 2\n2. 5\n3. 3\n4. 6\n",
        answer: "1"
    },
    {
        question: "Which of these planets is smallest?\n\n1. Uranus\n2. Jupiter\n3. Earth\n4. Mercury\n",
        answer: "4"
    },
    {
        question: "Which is the closest planet to the Sun?\n\n1. Earth\n2. Neptune\n3. Mercury\n4. Venus\n",
        answer: "3"
    }
];
var highScores = [{
        name: "Chandy",
        score: 40
    },
    {
        name: "Situn",
        score: 30
    },
    {
        name: "Pitaji",
        score: 50
    }
];

function intro() {
    var userName = readlineSync.question("What's your name? ")
    console.log("\n\nWelcome, " + userName + "\nLet's begin our Solar System Quiz !\n")
    console.log("_________________")
}

function play(question, answer) {
    var userAnswer = readLineSync.question(question)
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("\nCorrect !");
        currentScore += 1;
    } else {
        console.log("\nIncorrect")
    }
}

function game() {
    for (i = o; i < questions.length; i++) {
        var currentQuestion = question[i]
        play(currentQuestion.question, currentQuestion.answer)
    }
}

function showScore() {
    var tot = questions.length * 10;

    console.log("You scored: " + currentScore + " Out of " + tot + ".");
    console.log("\n\nHigh Scores : \n")

    highScores.map(currentScore => console.log(currentScore.name, " : ", currentScore.score))

    console.log("\nIf the scores need to be refreshed let me know to have them updated by sending me a screenshot.")
    console.log("_____________")
    //  for(q=0; q<highScores.length;q++)
    //    {
    //      var hscore=highScores[q];

    //      console.log(hscore.name +"   "+ hscore.score)
    //    }
    // console.table([
    //               {Name: userName, Score: currentScore},
    //               {Name: "Chandy", Score: 50},
    //               {Name: "Situn", Score:40},
    //               {Name: "Jaga", Score:20},
    // ]);
    
}

intro();
game();
showScore();