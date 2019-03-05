<template lang='pug'>
  el-row.login-page
    el-col.f-h-full.side-left(:span='12')
      .mainTitle
        img.logo(:src='logo')
        .title 关联分析
          span.titleDetial 系统
        .desc 以点概面，线索就在一键之间
      el-button.login-btn(size='medium' type='primary' @click='login') 用户中心登录
      .help
        span 没有用户中心账号？
        a(href='http://www.forensix.cn/', target='_blank') 联系我们
      .footer  Copyright © 2018 上海弘连网络科技有限公司, All Rights Reserved.
    el-col.f-h-full.side-img(:span='12')
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
    login () {
      location.href = '/auth/honglian'
    }
  }
}
</script>
<style lang='scss' scoped>
  .login-page {
    width: 100%;
    height: 100%;
    background: url('../assets/images/home.jpeg') center center no-repeat;
    background-size: 100% 100%;
    min-width: 900px;
    min-height: 600px;
    text-align: center;
    overflow: hidden;
    .side-left{
      height: 100%;
      position: relative;
      .mainTitle{

        .logo{
        margin-top: 18vh;
        margin-left: -56vh;
        width:300px;
        height:300px;
        }
        .title{
          font-size: 70px;
          position: absolute;
          top:28vh;
          right: 10vh;
          .titleDetial{
            color:red;
          }
        }
        .desc{
          position: absolute;
          top:38vh;
          right:16vh;
          font-size: 24px;
          color: rgb(73, 72, 72);
          font-weight: 320;
        }
      }
      
      .login-btn{
        margin-top: 18vh;
        font-size: 20px;
        padding: 16px;
        width: 50%;
        max-width: 350px;
        border-radius: 12px;
      }
      .help{
        margin-top: 18px;
        color: #888;
        font-size: 16px;
        a{
          color: #7ea2cc;
        }
      }
      .footer{
        font-size: 14px;
        color: #ccc;
        width: 100%;
        position: absolute;
        left: 0;
        bottom:10px;
      }
    }
    .side-img {
      height: 100%;
      background-position: top right;
      background-size: cover;
      box-shadow: -3px 0px 20px 2px #ccc;
      overflow: hidden;
    }
   
  }
</style>