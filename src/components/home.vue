<template lang='pug'>
  .homePage
    el-card(style='height:100%;', shadow='never')
      el-row
        el-col(:span='4', style='padding:10px;', v-for='(item, index) in goodsData', :key='index')
          .goods(style='background:#ccc;height:380px')
            .goodsPic(style='width:100%;height:240px;border:1px solid red;', @click='clickDetail(item)') {{ item.goodsPic }}图片
            .goods-row-1
              span.goodsPrice(style='font-size:18px;color: #F40;font-weight:700;') ￥{{ item.goodsPrice }}
              span.seller(style='float:right') 1000人付款
            .goods-row-2
              .goodsName {{ item.goodsName }}(商品名)
            .goods-row-3
              span.storeName {{ item.storeName }}(店铺名)
              span.storeLocation {{ item.storeLocation }}(地址)
            .goodsNum {{ item.goodsNum }}
      m-copyright
</template>

<script>
import copyright from './public/copyright'
import { getAllGoods } from '../http/user.js'
export default {
  name: 'home',
  components: {
    'm-copyright': copyright
  },
  data () {
    return {
      logo: require('../assets/images/home.jpeg'),
      goodsData: []
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    clickDetail (item) {
      this.$router.push({path:`/goodsDetail/${item._id}`})
    },
    initData () {
      getAllGoods().then(res => {
        this.goodsData = res.data.data
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.homePage {
  width: 100%;
  height: 100%;
}
</style>