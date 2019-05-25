const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")//获取token
const keys = require("../config/keys")
const User = require("../schema/User")

// POST /users/register
//public
router.post("/register",(req,res) => {
  User.findOne({email:req.body.email})
    .then((user)=>{
      if(user){
        return res.status(400).json('邮箱已被注册!');
      }else{
        const newUser = new User({
        // name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        identity: req.body.identity
      })
      newUser.save()
        .then((user) => res.json(user))
        .catch((err) =>{
          console.log(err);
        })
      }
    })
})
// POST /users/login
//public
router.post("/login",(req,res) => {
  User.findOne({email:req.body.email})
  .then((user) => {
    if(!user){
      return res.status(404).json('用户不存在!');
    }else{
      //定义token规则
      const rule = {id: user.id, name: user.name, identity: user.identity}
      //第一个参数:规则；第二个参数：加密名字；第三个参数：有效期；第四个：回调函数
      jwt.sign(rule,keys.secretName,{expiresIn:3600000},(err,token) =>{
        if(err) throw err
        res.json({
          status:"ok",
          data: {
            token:"Bearer " + token,
            msg: '登录成功',
            user: user
          }
        })
      })
    }
  })
})
//获取全部用户信息
router.get("/",(req,res) => {
  User.find()
    .then(users => {
      res.json(users)
    })
})

// 重置账号密码
router.get('/resetPW/:id', (req, res) => {
  console.info(req.params.id)
  User.findByIdAndUpdate({_id: req.params.id}, { $set: {"password": 999}}, false, false)
    .then((user) => {
      if (!user) {
        return res.status(404).json('用户名不存在!')
      } else {
        res.json({
          status: 200,
          data: {
            msg: '重置成功'
          }
        })
      }
    })
    .catch(err => {
      return res.status(404).json(err)
    })
})
module.exports = router;