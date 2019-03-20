//定义数据模型
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const GoodsSchema = new schema({
  user:{
    type:schema.Types.ObjectId,
    ref:"users"
  },
  userId:{
    type:String,
    required:true
  },
  goodsName:{
    type:String,
    required:true
  },
  goodsPrice:{
    type:String,
    required:true
  },
  goodsNum:{
    type:Number,
    required:true
  },
  goodsPic:{
    type:String,
    required:true
  },
  storeName:{
    type:String,
    required:true
  },
  storeLocation:{
    type:String,
    required:true
  },
  isPullOff:{
    type:Boolean
  },
  date:{
    type:Date,
    default:Date.now
  }
})

module.exports = Goods = mongoose.model("goods",GoodsSchema);