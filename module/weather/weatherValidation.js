const Constants = require("../../Constants");

const getWeatherValidation = (req,res,next)=>
{
    const params = {"page" : 0,"limit": Constants.PAGINATION.PAGE_LIMIT}
    if(req?.query?.cityname){
      params.cityname= req.query.cityname;
    }
    if(req.query.page){
      params.page = req.query.page;
    }
    if(req.query.limit){
      params.limit = req.query.limit;
    }
    if(req.query.date){
      params.date = req.query.date
    }
    console.log(req.params.weather)
    req.params.weather = params
    next()
}

module.exports = {
    getWeatherValidation
}