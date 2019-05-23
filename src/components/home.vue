<template lang='pug'>
  .homePage
    el-card(style='height:100%;', shadow='never')
      el-row
        el-col(:span='4', style='padding:10px;', v-for='(item, index) in goodsData', :key='index')
          .goods(style='border:1px solid #ccc;')
            .goodsPic(style='width:100%;height:240px;border-bottom:1px solid #ccc;', @click='clickDetail(item)') {{ item.goodsPic }}
            .goods-row-1.f-m-t-10.f-m-l-10
              span.goodsPrice(style='font-size:16px;color: #F40;font-weight:700;') ￥{{ item.goodsPrice }}
              span.seller(style='float:right;color:#888;font-size:14px;margin-right:10px;') {{ item.goodsNum }}人付款
            .goods-row-2.f-m-t-10.f-m-l-10
              span.goodsName(style='font-size:14px;font-weight:700;') {{ item.goodsName }}
              //- span.iconfont.iconcar(style='float:right;margin-right:10px;color:#f40;')
            .goods-row-3.f-m-10
              .storeName(style='color:#888;font-size:14px;') {{ item.storeName }}
              .storeLocation(style='margin-top:10px;color:#888;font-size:14px;') {{ item.storeLocation }}
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
  // height: 100%;
}
</style>