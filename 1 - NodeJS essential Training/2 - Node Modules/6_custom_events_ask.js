const collectAnswers = require('./6_custom_events_collect_answers');

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js?"
]

collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
})