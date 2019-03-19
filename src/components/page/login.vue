<template lang='pug'>
  .wrapper
    .content
      .login-header
      .login-content
        .input-user
          input.user(type='text', placeholder='账号', v-model='userInfo.email', @blur='isBlank($event, "nameIsBlank")')
          span(:class='{"error": nameIsBlank}') 账号不能为空
        .input-password
          input.password(type='password', placeholder='密码', v-model='userInfo.password', @blur='isBlank($event, "passwordIsBlank")')
          span(:class='{"error": passwordIsBlank}') 密码不能为空
        .input-text
          .check-remember
            input(type='checkbox', id='remember')
            label(for='remember') 记住我
          .forget-password
            a(href='#忘记密码') 忘记密码？
        .input-submit
          button(@click='login') 登录
        .input-toRegister
          a(href='/register') 没有账号？免费注册
    //- m-copyright     
</template>

<script>
import copyright from '../public/copyright'
import {login} from '@/http/user.js'
export default {
  components: {
    'm-copyright': copyright
  },
  data() {
    return {
      userInfo: {
        email: '',
        password: ''
      },
      nameIsBlank: false,
      passwordIsBlank: false
    }
  },
  methods: {
    login() {
      if (this.userInfo.email === '') this.nameIsBlank = true
      if (this.userInfo.password === '') this.passwordIsBlank = true
      if (!this.nameIsBlank && !this.passwordIsBlank) {
        login(this.userInfo).then((res) => {
          if (res.data.status === 'ok') {
            this.$router.push('/home')
          }
        })
      }
    },
    isBlank($event, isBlank) {
      if ($event.target.value === '') {
        this[isBlank] = true
      } else {
        this[isBlank] = false
      }
    }
  }
}
</script>

<style lang='scss'>
  .wrapper {
    width: 100%;
    height: calc(100% - 64px);
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
          height: 52px;
          // border: 1px solid black;
          padding: 0 10px;
          // display: flex;
          // justify-content: center;
          margin: 10px 0 37px;
          input {
            width: 380px;
            height: 40px;
            outline: none;
            box-sizing: border-box;
            padding: 2px 5px;
            border-radius: 5px;
          }
          span {
            display: none;
            // display: block;
            width: 380px;
            height: 10px;
            font-size: 10px;
            color: red;
            margin-top: 2px;
          }
          span.error {
            display: block;
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
        .input-toRegister {
          width: 100%;
          height: 30px;
          line-height: 30px;
          text-align: right;
          box-sizing: border-box;
          padding-right: 10px;
          a {
            color: #eeeeee;
            font-size: 12px;
            &:hover {
              text-decoration: underline;
              color: #f40;
            }
          }
          
        }
      }
    }
  }
</style>
