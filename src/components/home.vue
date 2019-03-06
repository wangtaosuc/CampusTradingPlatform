<template lang='pug'>
  .homePage
    .homeContent
      .title 校园二手交易平台
        .titleDetail 你想要的这儿都有
      .login
        el-button.loginBtn(size='medium', type='primary', @click='login') 登录
      .register
        el-button.registerBtn(size='medium', type='primary', @click='register') 注册
</template>

<script>
export default {
  name: 'login',
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
  background: url('../assets/images/home.jpeg') center center no-repeat;
  background-size: 100% 100%;
  .homeContent {
    width: 100%;
    height: 100vh;
    background: #000;
    opacity: 0.7;
    text-align: center;
    padding-top:10vh;
    // line-height: 100vh;
    .title {
      color: #fff;
      font-size: 60px;
      font-weight: bolder;
      .titleDetail {
        color: #409EFF;
        font-size: 30px;
      }
    }
    .loginBtn, .registerBtn {
      margin-top: 10vh;
      font-size: 20px;
      padding: 16px;
      width: 50%;
      max-width: 350px;
      border-radius: 12px;
    }
  }
}
</style>