//定义数据模型
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const CarSchema = new schema({
  name:{
    type:String,
    required:true
  },
  store:{
    type:String,
    required:true
  },
  num:{
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
})

module.exports = ShopCar = mongoose.model("cars",CarSchema);