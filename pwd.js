module.exports = function () {
  process.stdin.on("data", (data) => {
    const pwd = process.cwd();

    process.stdout.write(pwd);
  });
  process.stdout.write("\nprompt > ");
};
