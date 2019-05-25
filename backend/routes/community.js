const express = require('express')
const router = express.Router()
const Community = require("../schema/Community")

// 添加社区求购信息
// post   /community
// @params
// 

router.post('/', (req, res) => {
  let community = {
    location: req.body.location,
    msg: req.body.msg,
    phoneNum: req.body.phoneNum
  }
  new Community(community).save()
    .then(communite => {
      res.json({
        data: communite,
        status: 200
      })
    })
})

//获取所有的社区信息
// get   /community/info
router.get('/info', (req, res) => {
  Community.find()
    .then(info => {
      res.json({data: info, status: 200})
    })
})

module.exports = router