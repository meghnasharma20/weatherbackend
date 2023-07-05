const { getWeatherService } = require("./weatherService")

const getWeather = (params,callback)=>{
    getWeatherService(params,callback)
}

module.exports = {
    getWeather
}