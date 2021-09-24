const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
//output prompt
process.stdout.write("prompt > ");

// the stdin 'data' event fires after a user types
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    process.stdout.write(pwd());
    process.stdout.write("\nprompt > ");
  } else if (cmd === "ls") {
    ls();
  } else if (cmd === "cat ") {
    cat();
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});