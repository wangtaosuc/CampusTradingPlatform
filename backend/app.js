const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const port = 5500

const mongo = require("./config/keys")
mongoose.connect(mongo.mongoURI, () => {
    console.log('mongoDB connected')
})
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const user = require("./routes/user")
const goods = require('./routes/goods')
const shopCar = require('./routes/shopCar')
const community = require('./routes/community')
app.use("/users",user)
app.use('/goods',goods)
app.use('/shopCar',shopCar)
app.use('/community', community)

app.listen(port,() =>{
    console.log(`server is running on ${port}`)
})