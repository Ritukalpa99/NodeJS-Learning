const process = require("process");

process.stdout.write("hello ");

const question = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language"
];
const answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n ${question[i]}`);
    process.stdout.write(` > `);
}

process.stdin.on('data', function (data) {
    process.stdout.write(data.toString().trim());
})
ask(answers.length);