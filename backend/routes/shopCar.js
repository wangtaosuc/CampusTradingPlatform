const express = require('express')
const router = express.Router()
const ShopCar = require("../schema/ShopCar");

// 添加商品
// POST     /shopcar 
// 参数
router.post('/', (req, res) => {
  ShopCar.findOne({name: req.body.name})
  .then(car => {
    if (car) {
      car.num++
      car.save().then(cash => {
        res.json({data: car, status: 200})
      })
    }else {
      let cars = {
        name: req.body.name,
        store: req.body.store,
        price: req.body.price,
        num: req.body.num
      }
      new ShopCar(cars).save()
      .then(shopcar => {
        res.json({data: shopcar, status: 200})
      })
    }
  })
})

// 获取购物车的商品
// GET      /shopcar
router.get("/",(req,res) => {
    ShopCar.find()
    .then(shopcar => {
      res.json({data: shopcar, status: 200});
    })
})

//删除单个数据
router.delete("/:id",(req,res) => {
    ShopCar.findByIdAndRemove(req.params.id)
        .then(shopcar => {
            shopcar.save().then(cash => {res.json({msg:"delete success"})})
        })
  })

//删除全部数据
router.delete("/",(req,res) => {
  ShopCar.remove()
  .then(shopcar => {
    res.json({msg:"delete all success"})
  })
})

module.exports = router