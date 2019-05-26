<template lang="pug">
  .m-header.f-fc-666.f-fs-18.f-toe
    .title.iconfont.iconshangcheng1(@click='returnHome') 校园交易平台
    span.btn-login(v-if='!isLogin', @click='login') 登录
    span.btn-register(v-if='!isLogin', @click='register') 注册
    span.btn-myOrder(v-if='isLogin && identity === "user"', @click='toMyOrder') 购物车
    spanb.btn-business(v-if='isLogin && identity === "seller"', @click='toBusiness') 商家中心
    span.btn-user(v-if='isLogin && identity !== "seller" && identity !== "admin"', @click='toUser') 用户中心
    span.btn-manager(v-if='isLogin && identity === "admin"' @click='toManager') 管理中心
    span.btn-community(v-if='isLogin && identity !== "admin"', @click='toCommunity') 社区
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
    if (this.isLogin === "" || this.isLogin === false) {
      this.$router.push({path: '/home'})
    }
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
    },
    toUser() {
      this.$router.push({path: '/user'})
    },
    toCommunity() {
      this.$router.push({path: '/community'})
    },
    toManager() {
      this.$router.push({path: '/manager'})
    }
  },
  watch: {
    email(newV, oldV) {
      if (newV !== oldV) {
        this.$forceUpdate()
      }
    },
    isLogin(newV, oldV) {
      if (newV === false) {
        this.$router.push({path: '/home'})
        console.log(newV, oldV)
      }
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
    .btn-login, .btn-register, .btn-myOrder, .btn-business, .btn-community, .btn-user, .btn-manager {
      float: right;
      color: #fff;
      margin-right: 20px;
      cursor: pointer;
      font-size: 16px;
      // height: 64px;
      // line-height: 64px;
    }
  }
</style>


