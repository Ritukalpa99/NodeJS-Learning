const fs = require('fs');

// Synch
let filesSynch = fs.readdirSync('./');
console.log(`Using Synch ${filesSynch}`);

fs.readdir('./', function (err, filesAsynch) {
    if (err) throw err;
    console.log(`Using Asynch ${filesAsynch}`);
})
