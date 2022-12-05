const collectAnswers = require('./7_consuming_module_collect_answers');

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js?"
]

const answerEvent = collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
})

answerEvent.on('answer', answer => console.log(`The answer is ${answer}`));