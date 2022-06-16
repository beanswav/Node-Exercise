const fs = require("fs");

module.exports = (done) => {
  fs.readFile(done, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
