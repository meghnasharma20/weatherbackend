
const bodyParser = require('body-parser')
const methodOverride  = require('method-override')
module.exports = function (app, env) {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());
  // app.use(
  //   methodOverride(function (request, response) {
  //     if (
  //       request.body &&
  //       typeof request.body === "object" &&
  //       "_method" in request.body
  //     ) {
  //       // look in urlencoded POST bodies and delete it
  //       let method = request.body._method;
  //       delete request.body._method;
  //       return method;
  //     }
  //   })
  // );


  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, authorization, accessToken"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, OPTIONS"
    );
    if (req.method == "OPTIONS") {
      res.status(200).end();
    } else {
      next();
    }
  });
};
