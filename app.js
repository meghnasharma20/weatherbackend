const config = require("./config");
require('./scheduler/scheduler')
require('./server')
config.dbConfig(config.envConfig, (error) => {
  if (error) {
    console.log(error);

    return;
  }
  const express = require("express");
  const app = express();
  const port = process.env.PORT || 3010;
  config.expressConfig(app, config.envConfig.environment);
  app.use(express.json())
  require("./route")(app);
   app.listen(port, (error, result) => {
    if (error) {
      return console.log(error);
    }
    console.log("server is up and running on port..." + port);
  });

});
