const fs = require('fs');

let md = `
    This is a new File
    ===================

    ES6 Template String are cool. They honor whitespace.

    * Template String
    * Node File System
    * Readline CLIs
`

fs.writeFile('./js.md', md.trim(), function (err) {
    if (err) throw err;
    fs.appendFileSync(
        './js.md',
        "\n\n### Node.js Everyone!"
    );
    console.log('Markdown was created');
})