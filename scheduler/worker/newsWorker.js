const axios = require('axios');
const { mapNewsData } = require('./mapper');
const { addNewsList } = require('../../module/news/newsService');
const fetchNewsData = async(cities)=>{
  console.log("Syncronising News data...")
  try{
  if(!cities){
    throw(new Error("cities not provided.."))
  }
  const result = await axios.all(cities.map((city)=>axios(getNewsOptions(city))))
  if(result){
  let newsList = [];
  result.forEach(i=>{const  list = mapNewsData(i.data?.hits,i.data?.query)
  newsList = [...newsList,...list]})
  console.log("newsList length",newsList.length)
  await addNewsList(newsList,(error)=>{
  if(error)
    {throw(new Error(error.message))}
     console.log("News data is syncronised.")
  }
  )
}else{
   throw(new Error("Third party is not working."))
}
}catch(e){
  console.log("News Worker Failed...",e.message)
}}

const getNewsOptions = (cityname)=>{
  return {
    'method': 'get',
    'url': `https://hn.algolia.com/api/v1/search?query=${cityname}`,
    'headers': {
      'X-API-KEY': 'E6xwOg2BY4RbmiJogfyegrt746r7te',

      'Content-Type': 'application/json'
    }
  };
}
module.exports = fetchNewsData