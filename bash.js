const pwd = require("./pwd.js");
const cat = require("./cat.js");
const ls = require("./ls.js");
const date = require("./date.js");
const echo = require("./echo.js");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  let [catCheck, fileName] = cmd.split(" ");
  // let echoCheck = cmd.split(' ')[0];
  // let userStr = cmd.split(' ').slice(1);
  let [echoCheck, ...userStr] = cmd.split(' ')

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    ls(done);
  } else if (catCheck === "cat") {
    cat(done, fileName);
  } else if (echoCheck === 'echo') {
    echo(done, userStr)
  } else if(cmd === "date") {
    date(done);
  } else {
    done(cmd);
  }
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

module.exports = done;
