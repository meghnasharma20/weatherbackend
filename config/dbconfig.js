const { mongoose } = require("mongoose");


const connectDB = (env,callback) =>{
const dbname = env.mongo.dbName;
const url = env.mongo.dbUrl;
const dburl = url + dbname;
const dockerurl ="mongodb://mongo:27017/docker-node-mongo";
mongoose.connect(dockerurl).then((res)=>{
    console.log("db connected successfully..")
    callback();
}).catch((e)=>{
    callback(e)
    console.log("db connection failed..")
})
}
module.exports= connectDB;