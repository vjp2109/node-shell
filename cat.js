const fs = require("fs");

// const cat = (fileName) => {
//   fs.readFile(`./${fileName}`, "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     process.stdout.write(data);
//     process.stdout.write("\nprompt > ");
//   });
// };

// module.exports = cat;

module.exports = (done, fileName) => {
  fs.readFile(`./${fileName}`, "utf8", (err, data) => {
    if (err) {
      done("Something went wrong!");
    } else {
      done(data);
    }
  });
};
