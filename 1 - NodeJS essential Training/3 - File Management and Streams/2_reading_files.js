const fs = require('fs');

let ipsumSync = fs.readFileSync('./readme.md', "utf-8");

console.log(ipsumSync);

fs.readFile('./readme.md', "utf-8", (err, ipsumAsync) => {
    console.log(ipsumAsync);
})
