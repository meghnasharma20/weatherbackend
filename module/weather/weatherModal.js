const mongoose = require('mongoose')
let constants = require("../../Constants");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    "temp":{
        type : String,
        required : true,
    },
    "feelslike":{
        type : String,
        required:true,
    },
    "humidity":{
        type : String,
        required : true,
    },
    "conditions":{
        type : String,
        required : true,
    },
    "cityname" :{
        type : String,
        required : true,
    }
    },
    { timestamps: true, versionKey: false }
)
weatherSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj._id;
    delete obj.updatedAt;
    return obj;
  };
  module.exports = mongoose.model(constants.DB_MODEL_REF.WEATHER, weatherSchema);
