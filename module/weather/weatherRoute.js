const { sendResponse } = require('../../responseHandler');
const { getWeather } = require('./weatherFacade');
const { getWeatherValidation } = require('./weatherValidation');

const weatherRouter = require('express').Router();

weatherRouter.route("/").get([getWeatherValidation],(req,res)=>{
getWeather(req.params.weather,(result,error)=>{
    sendResponse(result,error,res,req,"Success")
})
})

module.exports = weatherRouter