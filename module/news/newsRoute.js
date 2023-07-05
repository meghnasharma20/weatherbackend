const newsRoute = require("express").Router();
const newsValidation = require("./newsValidation");
const newsFacade = require("./newsFacade");
const responseHandler = require("../../responseHandler");
const message = require("../../status_code.json");

// newsRoute
//   .route("/add/:id")
//   .post(
//     [
//       newsValidation.newsAddValidation,
//     ],
//     (req, res) => {
//       newsFacade.addNews(req.body.news, (result, error) => {
//         responseHandler.sendResponse(
//           result,
//           error,
//           res,
//           req,
//           message.product_added
//         );
//       });
//     }
//   );
  newsRoute.route("/:cityname?").get((req,res)=>{
    newsFacade.getNews(req,(result,error)=>{
      responseHandler.sendResponse(
        result,
        error,
        res,
        req,
        "success")
    });
  });


module.exports = newsRoute;
