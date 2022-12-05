const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done) => {
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