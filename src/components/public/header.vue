<template lang="pug">
  .m-header.f-fc-666.f-fs-18.f-toe
    .title.iconfont.iconshangcheng1(@click='returnHome') 校园交易平台
    .login(v-if='!isLogin', @click='login') 登录
    .register(v-if='!isLogin', @click='register') 注册
    .myOrder(v-if='isLogin && identity === "user"', @click='toMyOrder') 购物车
    .business(v-if='isLogin && identity === "seller"', @click='toBusiness') 商家中心
    span.exit.s-fc-link(v-if='isLogin', @click='exit') 退出登录
    span.email(v-if='isLogin') {{email}}
</template>
<script>
import Bus from '../../lib/bus'
export default {
  data () {
    return {
      email: '',
      identity: '',
      isLogin: ''
    }
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
    exit () {
      this.$store.commit('setEmail', '')
      this.$store.commit('setIsLogin', false)
      this.$router.push({path: '/login'})
      Bus.$emit('initData')
      Bus.$emit('getEmail')
      window.msgServices.success('退出登录成功！')
    },
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
    },
    toBusiness() {
      this.$router.push({path: '/business'})
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
     .email {
      float: right;
      font-size: 16px;
      margin-right:20px;
      color: #fff;
    }
    .exit {
      float: right;
      font-size: 14px;
      margin-right:20px;
      cursor: pointer;
    }
    .title {
      float: left;
      color: #fff;
      margin-left: 20px;
      cursor: pointer;
    //   display: inline-block;
    }
    .login, .register, .myOrder, .business {
      float: right;
      color: #fff;
      margin-right: 20px;
      cursor: pointer;
      font-size: 16px;
    }
  }
</style>


