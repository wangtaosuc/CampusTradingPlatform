<template lang='pug'>
  .homePage
    el-card(style='height:100%;', shadow='never')
      el-row
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
        el-col(:span='4', style='padding:10px;')
          .goods(style='background:#ccc;height:380px') 1
      m-copyright
</template>

<script>
import copyright from './public/copyright'
export default {
  name: 'login',
  components: {
    'm-copyright': copyright
  },
  data () {
    return {
      logo: require('../assets/images/home.jpeg')
    }
  },
  methods: {
    login() {
      location.href = '/login'
    },
    register() {
      location.href = '/register'
    }
  }
}
</script>
<style lang='scss' scoped>
.homePage {
  width: 100%;
  height: 100vh;
  }
</style>