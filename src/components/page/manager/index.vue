<template lang='pug'>
  .manager
    .mainTitle 用户管理中心
    template
      el-row.title-line
        el-col(:span='4')
          .title 邮箱
        el-col(:span='4')
          .title 角色
        el-col(:span='4')
          .title 是/否可用
        el-col(:span='4')
          .title 创建时间
        el-col(:span='4')
          .title 重置密码
        el-col(:span='4')
          .title 删除
      el-row.content-info(v-for='(user, index) in usersInfo', :key='index')
        el-col(:span='4')
          .content {{user.email}}
        el-col(:span='4')
          .content {{user.identity}}
        el-col(:span='4')
          .content 是
        el-col(:span='4')
          .content {{new Date(user.date).toLocaleString()}}
        el-col(:span='4')
          .content
            el-button(type='warning', size='small', @click='resetPassWord(user)') 重置
        el-col(:span='4')
          .content
            el-button(type='danger', size='small', @click="removeUser(user)") 删除
</template>

<script>
import {getAllUser, resetPW, deleteUser} from '@/http/user.js'
export default {
  data() {
    return {
      usersInfo: []
    }
  },
  methods: {
    getUser() {
      getAllUser().then(res => {
        this.usersInfo = res.data
      })
    },
    resetPassWord (ele) {
      resetPW(ele._id).then(res => {
        if(res.status === 200) {
          window.msgServices.success('重置密码成功！')
        } else {
          window.msgServices.error('重置密码失败，请重试！')
        }
      })
    },
    removeUser(user) {
      deleteUser(user._id).then(res => {
        if (res.status === 200) {
          this.getUser()
          window.msgServices.success('已成功删除！')
        } else {
          window.msgServices.error('删除操作失败,请重试！')
        }
      })
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>

<style lang='scss'>
  .manager {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 20px;
    .mainTitle {
      width: 100%;
      height: 50px;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
    }
    .title-line {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      .title {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        background: rgb(245, 245, 245);
        border-right: 1px solid #dddddd;
        box-sizing: border-box;
      }
    }
    .content-info {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      &:hover {
        background: #eeeeee;
        .content {
          font-size: 16px;
          font-weight: bold;
        }
      }
      .content {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        box-sizing: border-box;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
      }
    }
  }
</style>
