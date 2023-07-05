const scheduler = require('node-schedule');
const rule = require('./configuration');
const fetchNewsData = require('./worker/newsWorker');
const cities = require('../data/cities.json');
const fetchWeatherData = require('./worker/weatherWorker');
let workerName = 'news'

console.log("scheduler intialised..")

scheduler.scheduleJob({minute : 38},()=>{
    if(workerName === 'news'){
        fetchNewsData(cities)
        workerName= 'weather'

    }else{
        fetchWeatherData(cities)
        workerName = 'news'
    }
})

// scheduler.scheduleJob(configuration.weatherJobConfiguration,()=>{
//     fetchWeatherData(cities)
// })