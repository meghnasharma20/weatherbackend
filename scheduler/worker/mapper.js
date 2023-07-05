const mapNewsData = (news,cityname)=>{
    if(news && news.length>0 && cityname){
        return news.map((i)=>{
            return {
                "id" :  i.objectID,
                cityname,
                "title" : i.title
            }
        })

    }else{
        throw(new Error("Details provided are not correct!"))
    }
   }

const mapWeatherData = (weather, cityname)=>{
    console.log(weather.currentConditions)
    if(weather?.currentConditions&&cityname){
       return {
        "temp" : weather.currentConditions.temp,
        "feelslike" : weather.currentConditions.feelslike,
        "humidity":weather.currentConditions.humidity,
        "conditions" : weather.currentConditions.conditions,
        cityname,
       }

    }else{
        throw(new Error("Mapping details provided are not correct!"))
    }
}
module.exports = {
    mapNewsData,
    mapWeatherData
}