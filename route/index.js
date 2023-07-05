const cityRoute = require("../module/city/cityRoute")
const newsRoute = require("../module/news/newsRoute")
const weatherRoute=require("../module/weather/weatherRoute")
const { sendError } = require("../responseHandler")

module.exports = (app)=>{
   app.use('/api/v1/news/',newsRoute)
   app.use('/api/v1/city/',cityRoute)
   app.use('/api/v1/weather/',weatherRoute)
   app.use((err,req,res,next)=>{
    sendError(res,err)
   })
}