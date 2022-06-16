const done = (output) => {
  console.log(output);
  process.stdout.write("\nprompt>");
};

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ")[0];
  const arg = data.toString().trim().split(" ")[1];
  switch (cmd) {
    case "pwd":
      require("./pwd")(done);
      break;
    case "ls":
      require("./ls")(done);
      break;
    case "cat":
      require("./cat")(done(arg));
      break;
    case "curl":
      require("./curl")(arg, done);
      break;
    default:
      process.stdout.write("not found\n");
  }
});
