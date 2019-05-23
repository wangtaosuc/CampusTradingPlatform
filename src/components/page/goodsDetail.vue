<template lang='pug'>
  .goodsDetail
    .store
      span.title 欢迎光临
      span.name {{goodData.storeName}}
    .detail
      .pic {{goodData.goodsPic}}
      .right
        .name {{goodData.goodsName}}
        .content.c-price
          span.common 价格
          span.price ￥{{goodData.goodsPrice}}
        .content
          span.common 地址
          span.location {{goodData.storeLocation}}
        .content
          span.common 月销量
          span.sell {{goodData.goodsNum}}
        .content
          span.common 上线时间
          span.time {{goodData.date}}
        .content
          span.common 数量
          el-input(style='width:40px;margin-left:40px;', size='small', value='1')
        el-button.f-m-l-20(type='primary') 立即购买
        el-button(type='primary', @click='addToCar') 加入购物车
    .comment
      .c-title 网友评论
</template>

<script>
import { getSingleGood, addShopCar, delShopCar } from '../../http/user.js'
import Bus from '../../lib/bus'
export default {
  name: 'goodsDetail',
  data () {
    return {
      goodData: {}
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      getSingleGood({id: this.$route.params.id}).then(res => {
        this.goodData = res.data.data
      })
    },
    addToCar () {
      if (this.$store.state.email) {
        let params = {
          name: this.goodData.goodsName,
          num: 1,
          store: this.goodData.storeName,
          price: this.goodData.goodsPrice
        }
        addShopCar(params).then(res => {
          console.log(res)
        })
        Bus.$emit('getShopCar')
        // console.log(params)
      } else {
         this.$router.push('/login')
        window.msgServices.info('请先登录！')
      }
    }
  }
}
</script>

<style lang='scss'>
 .goodsDetail {
   width: 100%;
   .store {
     margin: 20px auto;
     width:960px;
     height: 30px;
     .title {
       font-size: 18px;
       font-weight: 700;
       color:rgb(128, 126, 126);
     }
     .name {
       font-size: 20px;
       font-weight: 700;
       margin-left: 20px;
     }
   }
   .detail {
     margin: 20px auto;
     width:960px;
     height: 400px;
     border:1px solid #ccc;
    .pic {
      float: left;
      width: 400px;
      height: 400px;
      background: #ccc;
    }
    .right {
      float: right;
      width: calc(100% - 400px);
      .name {
        font-size: 16px;
        font-weight: 700;
        margin-left:30px;
        margin-top:20px;
      }
      .c-price {
        background: #e9e9e9;
      }
      .content {
        margin:20px;
        height: 36px;
        line-height: 36px;
        border-bottom: 1px solid #ccc;
        // border-top: 1px solid #ccc;
        .common {
          display: inline-block;
          width:60px;
          margin-left: 10px;
          font-size: 13px;
          color:#999;
        }
        .price {
          font-size: 24px;
          color: #ff0036;
          font-weight: bolder;
          margin-left: 40px;
        }
        .location, .time, .sell {
          margin-left: 40px;
        }
      }
    }
   }
  .comment {
    width:960px;
    margin:20px auto;
    .c-title {
      font-size: 20px;
      font-weight: 700;
    }
  }
 }
</style>
