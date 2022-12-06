const fs = require("fs");

fs.rmdir("./some-folder", function (err) {
  if (err) throw err;
  console.log("Folder removed");
});

// For cases in which the dir is not empty
fs.readdirSync("./some-folder").forEach((file) => {
  // moving the files to make the dir empty before deletion
  fs.renameSync(`./some-folder/${file}`, `./not-some-folder/${file}`);
});

console.log("File removed");
fs.rmdirSync("./some-folder");
console.log("Dir removed");
