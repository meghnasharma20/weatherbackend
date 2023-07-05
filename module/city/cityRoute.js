const cityRoute = require("express").Router();
const responseHandler = require("../../responseHandler");
const message = require("../../status_code.json");
const cities = require('../../data/cities.json')

cityRoute
  .route("/")
  .get(
    (req, res) => {
        responseHandler.sendResponse(
            cities,
            undefined,
            res,
            req,
            message.product_added
          );
    }
  );


module.exports = cityRoute;
