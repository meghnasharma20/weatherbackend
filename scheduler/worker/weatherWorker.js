const axios = require('axios');
const { mapWeatherData } = require('./mapper');
const { addWeatherList } = require('../../module/weather/weatherService');
const moment = require('moment');
require("dotenv").config()

const fetchWeatherData = async(cities)=>{
  console.log("Syncronising weather data...")
  try{
  if(!cities){
    throw(new Error("cities not provided.."))
  }
  const weatherKey = process.env.WEATHER_API_KEY;
  if(!weatherKey){
    throw(new Error("Weather key is not provided.."))
  }
  const result = await axios.all(cities.map((city)=>axios(getWeatherOptions(city,weatherKey))))
  if(result){
  const weathers = result.map(({data})=>  mapWeatherData(data,data.address))

  await addWeatherList(weathers,(error)=>{
  if(error)
{    throw(new Error(error.message))
}    console.log("Weather data is syncronised.")
  }
  )
}else{
   throw(new Error("Third party is not working."))
}
}catch(e){
  console.log("Weather Worker Failed...",e.message)
}}

const getWeatherOptions = (cityname,weatherKey)=>{
    const today = Date.now();
    const date = moment(today).format('YYYY-M-D')
  return {
    'method': 'get',
    'url': `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}/${date}?key=${weatherKey}`,
    'headers': {
      'Content-Type': 'application/json'
    }
  };
}
module.exports = fetchWeatherData