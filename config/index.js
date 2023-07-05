const dbConfig = require("./dbconfig");
const expressConfig = require("./expressConfig");
require("dotenv").config();

let envConfig = {};

const environment = process.env.NODE_ENV; //If no env given then by default local env is chosen
//ENV Config
switch (environment) {
  case "dev":
  case "development":
    envConfig = require("./env/development");
    break;
  case "prod":
  case "production":
    envConfig = require("./env/production");
    break;
  case "local":
  case"localhost":
    envConfig = require("./env/localhost");
    break;
}
console.log(envConfig)

module.exports = {
  envConfig,
  dbConfig,
  expressConfig,
};
