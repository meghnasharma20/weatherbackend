const Constants = require("../../Constants");
const customException = require("../../customException");
const weatherModal = require("./weatherModal");
const Pagination = require("../../modal/Pagination")
const moment = require('moment')

const addWeatherList = async (weather,callback)=>{
    let error = undefined;
    try{
      await weatherModal.insertMany(weather,{ordered : false})
    }catch(e){
      error = customException.intrnlSrvrErr(e.message);
    }finally{
    callback(error)
    }
   }

   const getWeatherService = async (params,callback) =>{
    let result = undefined;
  let error = undefined;
  /**
   * for pagination we require page no and limit(by default :10)
   * query :{} // filter object
   * projection : contains the field name need to be projected
   * option : will be used for pagination
   */

  const options = new Pagination(params.page,params.limit)
  let query = {}
  if(params.cityname)
  {
    query.cityname = {'$regex': params.cityname,$options:'i'}
  }
  if(params.date)
  {
    query.createdAt = {'$gte': moment(params.date).startOf('day').toDate() ,  $lte: moment(params.date).endOf('day').toDate()
}
  }
  console.log(query,options)

  try{
    const total = await weatherModal.countDocuments(query).exec();
    const weather = await weatherModal.find(query,null,new Pagination(params.page,params.limit)).sort('-createdAt').exec()
    result = {total,weather};
  }catch(e){
    error = customException.intrnlSrvrErr(e)
  }finally{
    callback(result,error)
  }
   }
   module.exports = {addWeatherList,
    getWeatherService}