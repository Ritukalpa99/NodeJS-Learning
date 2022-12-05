const process = require("process");

const waitTime = 5000;

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    console.log("\ndone");
}

setTimeout(timerFinished, waitTime);


const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting...${p}%`)
}

const interval = setInterval(incTime, waitInterval);