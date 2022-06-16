const request = require("request");
module.exports = (http, done) => {
  request(http, function (error, response, body) {
    if (error) {
      done(error);
    } else {
      done(body);
    }
  });
};
