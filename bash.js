const pwd = require("./pwd.js");
const cat = require("./cat.js");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  let [catCheck, fileName] = cmd.split(" ");

  cmd === "pwd" ? pwd() : process.stdout.write(cmd);
  catCheck === "cat" ? cat(fileName) : process.stdout.write(cmd);
  process.stdout.write("\nprompt > ");
});
