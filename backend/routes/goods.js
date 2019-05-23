const express = require('express')
const router = express.Router()
const Goods = require("../schema/Goods");

// 添加商品
// POST     /goods 
// 参数
// userId: req.body.userId,
// goodsName: req.body.goodsName,
// goodsPrice: req.body.goodsPrice,
// goodsPic: req.body.goodsPic,
// storeName: req.body.storeName,
// storeLocation: req.body.storeLocation,
// goodsNum: req.body.goodsNum
router.post('/', (req, res) => {
  let goods = {
              userId: req.body.userId,
              goodsName: req.body.goodsName,
              goodsPrice: req.body.goodsPrice,
              goodsPic: req.body.goodsPic,
              storeName: req.body.storeName,
              storeLocation: req.body.storeLocation,
              goodsNum: req.body.goodsNum,
              isPullOff: false
            }
  new Goods(goods).save()
    .then(good => {
        res.json({data: good, status: 200})
    })
})

// 获取店铺的所有商品
// POST     /goods/store
// 参数
// userId:req.body.userId
router.post('/store', (req, res) => {
  Goods.find({userId:req.body.userId})
    .then(goods => {
      res.json({data: goods, status: 200})
    })
})

// 获取所有店铺的商品
// GET      /goods
router.get("/",(req,res) => {
  Goods.find()
    .then(goods => {
      res.json({data: goods, status: 200});
    })
})

// 获取单个商品详情
router.get('/:_id', (req, res) => {
  Goods.findById(req.params._id)
    .then(good => {
      res.json({data: good, status: 200})
    })
})

// 编辑单个商品
// POST     /goods/:id
router.post('/:id', (req, res) => {
  let goods = {
    userId: req.body.userId,
    goodsName: req.body.goodsName,
    goodsPrice: req.body.goodsPrice,
    goodsPic: req.body.goodsPic,
    storeName: req.body.storeName,
    storeLocation: req.body.storeLocation,
    goodsNum: req.body.goodsNum
  }
  Goods.findByIdAndUpdate(
    {_id:req.params.id},
    {$set:goods},
    {new:true}).then(goods => {
        res.json({data: goods, status: 200})
      })
})
// 下架单个商品
// POST /goods/pullOff/:id
router.post('/pullOff/:id', (req, res) => {
    Goods.findByIdAndUpdate(req.params.id)
      .then(good => {
          good.isPullOff = true
          res.json({data: good, status: 200})
      })
})
module.exports = router