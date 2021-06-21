const fs = require("fs");

const cat = (fileName) => {
  fs.readFile(`./${fileName}`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    process.stdout.write("\nprompt > ");
  });
};

module.exports = cat;
