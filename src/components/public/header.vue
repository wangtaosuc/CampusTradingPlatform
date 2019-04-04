<template lang="pug">
  .m-header.clearfix.f-fc-666.f-fs-18.f-toe
    .title.iconfont.iconshangcheng1(@click='returnHome') 校园交易平台
    .login(@click='login') 登录
    .register(@click='register') 注册
    .myOrder(@click='toMyOrder') 购物车
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    login() {
      this.$router.push({path:'/login'})
    },
    register() {
      this.$router.push({path:'/register'})
    },
    toMyOrder () {
      this.$router.push({path:'/myOrder'})
    },
    returnHome () {
      this.$router.push({path:'/home'})
    }
  }
}
</script>
<style lang="scss" scoped>
  .m-header {
    height: 64px;
    line-height: 64px;
    background-color: #00284d;
    width: 100%;
    .title {
      float: left;
      color: #fff;
      margin-left: 20px;
      cursor: pointer;
    //   display: inline-block;
    }
    .login, .register, .myOrder {
      float: right;
      color: #fff;
      margin-right: 20px;
      cursor: pointer;
      font-size: 16px;
    }
  }
</style>


