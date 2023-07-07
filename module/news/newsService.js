const newsModal = require("./newsModal");
const message = require("../../status_code.json");
const customException = require("../../customException");
const Pagination = require("../../modal/Pagination");
const moment = require('moment')

const addNews = async (params, callback) => {
  let result = undefined;
  let error = undefined;
  try {
    const news = await newsModal.create(params);
    if (news) {
      result = news;
    } else
      error = Exception(
        message.intrnlSrvrErr.code,
        message.intrnlSrvrErr.msg,
      );
  } catch (e) {
    console.log(e)
    error = Exception(
      e.message ? e.message : message.intrnlSrvrErr.msg,
      message.intrnlSrvrErr.code
    );
  } finally {
    if (!result && !error) {
      error = Exception(
        message.intrnlSrvrErr.msg,
        message.intrnlSrvrErr.code
      );
    }
    callback(result, error);
  }
};


 const getNews = async(params,callback)=>{
  let result = undefined;
  let error = undefined;
  /**
   * for pagination we require page no and limit(by default :10)
   * query :{} // filter object
   * projection : contains the field name need to be projected
   * option : will be used for pagination
   */

  let query = {}
  if(params.cityname)
  {
    query.cityname = {'$regex': params.cityname,$options:'i'}
  }
  try{
    const total = await newsModal.countDocuments(query).exec();
    const news = await newsModal.find(query,null,new Pagination(params.page,params.limit)).exec()
    result = {total,news,cityname:params.cityname};
  }catch(e){
    error = customException.intrnlSrvrErr(e)
  }finally{
    callback(result,error)
  }
 }

 const addNewsList = async (news,callback)=>{
  let error = undefined;
  try{
    await newsModal.insertMany(news,{ordered : false})
  }catch(e){
    error = customException.intrnlSrvrErr(e.message);
  }finally{
  callback(error)
  }
 }


module.exports = {
  addNews,
  getNews,
  addNewsList,
};
