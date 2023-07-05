const customException = require("../../customException");
const Exception = require("../../modal/Exception");

const newsAddValidation = (req, res, next) => {
  console.log(req.body)
  const errors = [];
  const news = {};
  if (!req.body.title) {
    errors.push(customException.fieldErrorObject("title","Please provide news title."));
  } else news.title = req.body.title;

  if (!req.body.id ) {
    errors.push(customException.fieldErrorObject("id","Please provide news id."));
  } else news.id = req.body.id;
  if (!req.body.cityname) {
    errors.push(customException.fieldErrorObject("cityname","Please provide cityname"));
  } else news.cityname = req.body.cityname;

  if (errors.length > 0) {
    return next(customException.parameterMissingException(errors));
  }
  req.body.news = news;
  next();
};

const getNewsValidation = (req,res,next)=>{
  let errors = [];
  if(!req.params.cityname){
    errors.push(customException.fieldErrorObject("cityname","Please provide cityname."))
  }
  if (errors.length > 0) {
    return next(customException.parameterMissingException(errors));
  }
  next()
}

module.exports = {
  newsAddValidation,
  getNewsValidation
};
