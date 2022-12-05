const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js?"
]

function collectAnswers(questions, done) {
    const answers = [];

    const questionAnswered = answer => {
        answers.push(answer.trim());
        if (answers.length < questions.length) {
            // ask another question
            rl.question(
                questions[answers.length],
                questionAnswered
            );
        } else {
            // Done with questions
            return done(answers);
        }
    };
    rl.question(questions[0], questionAnswered);
}

collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
})