const Constants = require("../../Constants");
const newsService = require("./newsService");

const addNews = async (productInfo, callback) => {
   newsService.addNews(productInfo, callback);
};
const getNews = async (req, callback) => {
  const params = {"page" : 0,"limit": Constants.PAGINATION.PAGE_LIMIT}
  if(req?.params?.cityname){
    params.cityname= req.params.cityname;
  }
  if(req.query.page){
    params.page = req.query.page;
  }
  if(req.query.limit){
    params.limit = req.query.limit;
  }
  newsService.getNews(params, callback);
};

module.exports = {
  addNews,
  getNews,
};
