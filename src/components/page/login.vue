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
            input(type='checkbox', id='remember', @change='changeRemember($event)', :checked='isRemember')
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
import Bus from '../../lib/bus'
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
      passwordIsBlank: false,
      isRemember: null
    }
  },
  methods: {
    login() {
      if (this.userInfo.email === '') this.nameIsBlank = true
      if (this.userInfo.password === '') this.passwordIsBlank = true
      if (!this.nameIsBlank && !this.passwordIsBlank) {
        login(this.userInfo).then((res) => {
          console.log(res)
          if (res.data.status === 'ok') {
            this.$router.push('/home')
            window.msgServices.success('登录成功！')
            this.$store.commit('setEmail', res.data.data.user.email)
            this.$store.commit('setIdentity', res.data.data.user.identity)
            this.$store.commit('setIsLogin', true)
            Bus.$emit('initData')
            Bus.$emit('getEmail')
          } else {
            window.msgServices.error('登录失败请重试！')
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
    },
    changeRemember (event){
      // console.log(event.target.checked)
      this.setIsRemember(event.target.checked)
    },
    getIsRemember () {
      this.isRemember = localStorage.getItem('isRemember')
      // console.log(this.isRemember)
    },
    setIsRemember (isRemeber) {
      // console.log(isRemeber)
      localStorage.setItem('isRemember', isRemeber)
    }
  },
  mounted () {
    this.getIsRemember()
  },
  watch: {
    router (to, from) {
      console.log(to, from)
      // 对路由变化作出响应...
    },
    isRemember (to, from) {
      console.log(to, from)
    }
  }
}
</script>

<style lang='scss'>
  .wrapper {
    width: 100vw;
    height: 100vh;
    background: url('../../assets/images/home.jpeg');
    background-size: 100% 100%;
    .content {
      width: 400px;
      height: 480px;
      background: rgb(224, 222, 222);
      border: 1px solid #ffffff;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -200px;
      margin-top: -225px;
      border-radius: 10px;
      .login-header {
        width: 208px;
        height: 172px;
        margin: 5px auto 0;
        background: url('../../assets/images/logo.png');
        background-size: 100% 100%;
        // border-bottom: 1px solid #ffffff;
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
            color: #000;
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
            color: #20a0ff;
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
