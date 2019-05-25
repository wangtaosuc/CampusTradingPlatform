// 定义数据模型
const mongoose = require('mongoose')
const schema = mongoose.Schema;
const communitySchema = new schema({
  location:{
    type: Object,
    required: true
  },
  msg: {
    type: String,
    required: true
  },
  phoneNum: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = community = mongoose.model('community', communitySchema)