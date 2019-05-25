<template lang='pug'>
  .shop
    .baseInfo
      .img
        i.el-icon-s-custom
      .email 1194992140@qq.com
      .credit
        span 个人信用：
        el-rate(v-model='credit', disabled, show-score, text-color='#ff9900')
    .baseForm
      el-row.row
        el-col.col(:span='12')
          .col-name 用户类型：
          .col-info 普通用户
        el-col.col(:span='12')
          .col-name 手机：
          .col-info 18392885097
      el-row
        el-col.col(:span='12')
          .col-name 用户ID：
          .col-info fasdafxxx
        el-col.col(:span='12')
          .col-name 邮箱：
          .col-info 1194992140@qq.com
    m-copyright
</template>

<script>
import Bus from '@/lib/bus.js'
import copyright from '@/components/public/copyright'
export default {
  data() {
    return {
      credit: 3.7,
      email: '',
      identity: '',
      isLogin: ''
    }
  },
  components: {
    'm-copyright': copyright
  },
  mounted () {
    Bus.$on('initData', () => {
      this.initData()
    })
  },
  methods: {
    initData () {
      this.email = this.$store.state.email
      this.identity = this.$store.state.identity
      this.isLogin = this.$store.state.isLogin
    },
  }
}
</script>

<style lang='scss'>
  .shop {
    width: 1372px;
    background: #dddddd;
    margin: 10px auto;
    padding: 10px 10px;
    .baseInfo {
      width: 1000px;
      height: 80px;
      margin: 10px auto;
      background: rgb(245, 248, 250);
      display: flex;
      align-items: center;
      .img {
        width: 60px;
        height: 60px;
        background: rgb(97, 195, 231);
        border-radius: 50%;
        margin-left: 20px;
        text-align: center;
        line-height: 60px;
        font-size: 40px;
        color: #dddddd;
      }
      .email {
        margin-left: 20px;
        width: 200px;
      }
      .credit {
        margin-left: 20px;
        display: flex;
        align-items: center;
      }
    }
    .baseForm {
      width: 1000px;
      height: 500px;
      margin: 0 auto;
      .col {
        display: flex;
        .col-name {
          width: 80px;
        }
      }
      .row {
        margin: 10px 0;
      }
    }
  }
</style>

