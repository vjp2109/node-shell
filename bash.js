const pwd = require("./pwd.js");
const cat = require("./cat.js");
const ls = require("./ls.js");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  let [catCheck, fileName] = cmd.split(" ");

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (catCheck === "cat") {
    cat(fileName);
  } else {
    done(cmd);
  }
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

module.exports = done;
