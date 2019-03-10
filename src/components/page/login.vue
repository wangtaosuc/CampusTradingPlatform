<template lang='pug'>
  .wrapper
    .content
      .login-header
      .login-content
        .input-user
          input.user(type='text', placeholder='账号', v-model='userInfo.name')
        .input-password
          input.password(type='password', placeholder='密码', v-model='userInfo.password')
        .input-text
          .check-remember
            input(type='checkbox', id='remember')
            label(for='remember') 记住我
          .forget-password
            a(href='#忘记密码') 忘记密码？
        .input-submit
          button(@click='login') 登录
        
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      console.log(this.userInfo)
    }
  }
}
</script>

<style lang='scss'>
  .wrapper {
    width: 100%;
    height: 100%;
    background: rgb(19, 29, 41);
    .content {
      width: 400px;
      height: 450px;
      border: 1px solid #ffffff;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -200px;
      margin-top: -225px;
      .login-header {
        width: 100%;
        height: 160px;
        border-bottom: 1px solid #ffffff;
      }
      .login-content {
        .input-user,
        .input-password {
          width: 100%;
          height: 40px;
          // border: 1px solid black;
          padding: 0 auto;
          display: flex;
          justify-content: center;
          margin: 10px 0 37px;
          input {
            width: 380px;
            height: 100%;
            outline: none;
            box-sizing: border-box;
            padding: 2px 5px;
            border-radius: 5px;
          }
        }
        .input-password {
          margin-bottom: 15px;
        }
        .input-text {
          width: 380px;
          height: 40px;
          display: flex;
          margin: 0 auto 15px;
          line-height: 40px;
          .check-remember {
            width: 60%;
            height: 100%;
            box-sizing: border-box;
            color: #ffffff;
            input {
              margin-right: 10px;
              cursor: pointer;
            }
            label {
              cursor: pointer;
              line-height: 40px;
            }
          }
          .forget-password{
            width: 40%;
            height: 100%;
            box-sizing: border-box;
            text-align: right;
            a {
              color: rgb(211, 38, 47);
              text-decoration: underline;
            }
          }
        }
        .input-submit {
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: center;
          button {
            width: 380px;
            height: 100%;
            line-height: 40px;
            cursor: pointer;
            background: #d3262f;
            border: none;
            outline: none;
            border-radius: 5px;
            font-size: 18px;
            text-align: center;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>
