const fs = require("fs");

/// Sync
fs.renameSync("./random.txt", "./new-random.txt");
console.log("File renamed");

// Async
fs.rename("./random.txt", "./new-random.txt", function (err) {
  if (err) throw err;
  console.log("File renamed");
});

// Removing
fs.unlinkSync("./new-random.txt");

fs.unlink("./new-random.txt", (err) => {
  console.log("File removed");
});
