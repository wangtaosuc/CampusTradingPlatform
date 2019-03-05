<template lang='pug'>
  .login-wrapper
    .login-content
      .login-logo
      .login-form
        el-form(:model="ruleForm2", status-icon, :rules="rules2", ref="ruleForm2", label-width="100px", class="demo-ruleForm")
          el-form-item(label="用户名:" prop="age", placeholder='请输入用户名')
            el-input(v-model.number="ruleForm2.age")
          el-form-item(label="密码:" prop="pass", placeholder='请输入密码')
            el-input(type="password" v-model="ruleForm2.pass" autocomplete="off")
          el-form-item(label="确认密码:" prop="checkPass", placeholder='请再次输入密码')
            el-input(type="password" v-model="ruleForm2.checkPass" autocomplete="off")
          el-form-item
            input.input-code(type='text')
            .code 验证码
          el-form-item
            el-button(type="primary" @click="submitForm('ruleForm2')") 提交
            el-button(@click="resetForm('ruleForm2')") 重置
    .login-footer
    .footer
</template>

<script>
export default {
  name: 'App',
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }
    };
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
        age: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang='scss'>
  .login-wrapper {
    width: 100vw;
    height: 100vh;
    background:linear-gradient(to bottom right, rgb(233, 162, 176) , rgb(254, 202, 165));
    .login-content {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -430px;
      margin-top: -275px;
      width: 860px;
      height: 550px;
      // border: 1px solid black;
      border-radius: 10px;
      background: white;
      .login-logo {
        width: 312px;
        height: 172px;
        // border: 1px solid black;
        margin: 5px auto 0;
        background: url('../../assets/images/logo.png');
        background-size: 100% 100%;
      }
      .login-form {
        width: 650px;
        height: 360px;
        // border: 1px solid black;
        margin: 5px auto;
        padding: 10px 30px;
        box-sizing: border-box;
        position: relative;
        .demo-ruleForm {
          margin: 40px auto;
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
            margin-left: 80px;
          }
          .code {
            display: inline-block;
            width: 100px;
            height: 40px;
            margin-left: 100px;
            border: 1px solid black;
          }
        }
      }
    }
  }
</style>
