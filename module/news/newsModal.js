// Importing mongoose
const mongoose = require("mongoose");
let constants = require("../../Constants");

const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    "id": {
      type: String,
      lowercase: true,
      unique : true,
      required : true,

    },
    "title": {
      type: String,
      required : true,
    },
    "cityname" : {
      type : String,
      required : true,
    }
  },
  { timestamps: true, versionKey: false }
);

newsSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj._id;
  delete obj.updatedAt;
  delete obj.createdAt;
  return obj;
};

module.exports = mongoose.model(constants.DB_MODEL_REF.NEWS, newsSchema);
