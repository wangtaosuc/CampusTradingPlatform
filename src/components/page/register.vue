<template lang='pug'>
  .login-wrapper
    .login-content
      .login-logo
      .login-form
        el-form(:model="ruleForm2", status-icon, :rules="rules2", ref="ruleForm2", label-width="100px", class="demo-ruleForm")
          el-form-item(label="邮箱:" prop="userName", placeholder='请输入用户名')
            el-input(v-model="ruleForm2.userName", type='email')
          el-form-item(label="密码:" prop="pass", placeholder='请输入密码')
            el-input(type="password" v-model="ruleForm2.pass" autocomplete="off")
          el-form-item(label="确认密码:" prop="checkPass", placeholder='请再次输入密码')
            el-input(type="password" v-model="ruleForm2.checkPass" autocomplete="off")
          el-form-item(label='注册类型:')
            .radio
              el-radio(v-model="ruleForm2.radio", label="seller") 商家
              el-radio(v-model='ruleForm2.radio', label='user') 用户
          el-form-item(label="验证码:").disFlex
            input.input-code(type='text', v-model='inputCode')
            .code(@click='createCode')
              canvas#canvas(ref='canvas', width='100px', height='40px')
          el-form-item
            el-button(type="primary" @click="submitForm('ruleForm2')") 注册
            el-button(type="primary" @click="resetForm('ruleForm2')") 取消
    .login-footer
    .footer
</template>

<script>
import {Message} from 'element-ui'
import {register} from '@/http/user.js'
export default {
  name: 'App',
  data() {
    // var checkAge = (rule, value, callback) => {
    //   if (!value) {
    //     return callback(new Error('用户名不能为空'));
    //   }
    // };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        userName: '',
        radio: 'user'
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        userName: [
          { required: true, trigger: 'blur' }
        ]
      },
      inputCode: '',
      canvStr: '',
    }
  },
  methods: {
    submitForm(formName) {
     if (this.canvStr === this.inputCode.toUpperCase()) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.inputCode = ''
          let params = {
            email: this.ruleForm2.userName,
            password: this.ruleForm2.pass,
            identity: this.ruleForm2.radio
          }
          register(params)
          .then((res) => {
            if (res.status === 200) {
              Message.success('注册成功')
              this.$router.push('/login')
            }
          })
          .catch((err) => { console.log(err)})
        } else {
          console.log('error submit!!');
          return false;
        }
      })
     } else {
      alert("验证码错误")
      this.createCode();
      this.inputCode = ''
     }
      
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.inputCode = ''
    },
    createCode() {
      let codeArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1',
      '2','3','4','5','6','7','8','9','0']
      var canvas = this.$refs.canvas
      this.canvStr = ''
      for (let i = 0; i < 4; i ++) {
        let index = this.randomIndex()
        this.canvStr += codeArr[index]
      }
      if (canvas) {
        var ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, 100, 40)
        ctx.fillStyle = 'blue'
        ctx.font = '30px orial'
        ctx.fillText (this.canvStr, 9, 30)
      }
    },
    randomIndex() {
      return Math.floor(Math.random() * 36)
    }
  },
  mounted() {
    this.createCode()
  }
}
</script>

<style lang='scss'>
  .login-wrapper {
    width: 100vw;
    height: 100vh;
    // background:linear-gradient(to bottom right, rgb(0, 0, 0) , rgb(255, 255, 233));
    background: url('../../assets/images/home.jpeg');
    background-size: 100% 100%;
    .login-content {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -240px;
      margin-top: -247px;
      width: 480px;
      height: 555px;
      // border: 1px solid black;
      border-radius: 10px;
      background: white;
      .login-logo {
        width: 268px;
        height: 172px;
        // border: 1px solid black;
        margin: 5px auto 0;
        background: url('../../assets/images/logo.png');
        background-size: 100% 100%;
      }
      .login-form {
        width: 100%;
        height: 308px;
        // border: 1px solid black;
        margin: 5px auto;
        padding: 10px 30px;
        box-sizing: border-box;
        position: relative;
        .demo-ruleForm {
          // margin: 40px auto;
          .el-form-item__content {
            display: flex !important;
          }
          .input-code {
            display: inline-block;
            border: 1px solid black;
            outline: none;
            border-radius: 5px;
            padding: 3px 10px;
            width: 100px;
            height: 40px;
            font-size: 20px;
            line-height: 40px;
            box-sizing: border-box;
            margin-left: 27px;
          }
          .code {
            display: inline-block;
            width: 100px;
            height: 40px;
            margin-left: 60px;
            border: 1px solid black;
            border-radius: 5px;
          }
        }
      }
    }
  }
</style>
