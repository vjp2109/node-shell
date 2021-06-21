const fs = require("fs");

// const ls = () => {
//   fs.readdir("./", "utf8", (err, files) => {
//     if (err) {
//       process.stdout.write('Something went wrong!');
//     } else {
//       process.stdout.write(files.join("\n"));
//       process.stdout.write("\nprompt > ");
//     }
//   });
// };

// module.exports = ls;

module.exports = (done) => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done("Something went wrong!");
    } else {
      done(files.join("\n"));
    }
  });
};
