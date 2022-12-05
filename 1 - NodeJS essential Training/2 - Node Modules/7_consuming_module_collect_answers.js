const readLine = require('readline');
const { EventEmitter } = require('events');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const emitter = new EventEmitter();
    const questionAnswered = answer => {

        emitter.emit('answer', answer);

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
    rl.question(firstQuestion, questionAnswered);
    return emitter;
}