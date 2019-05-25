<template lang='pug'>
  .business
    .left-list
      .title 用户中心
      .menu-list
        router-link.menu-item(v-for='(ele, index) in menuList', :to="{name: ele.icon}", :key='index')
          //- span.icon ❤
          span.name {{ele.name}}
          //- span.right &gt;
    .right-content
      .topInfo
        .content
          .image
          .infoWrapper
            .top_info 您好！
              span.name {{email}},
              span.blessing  祝您新的一天里健康,快乐
            .bottom_info
              span.safe 账户安全：
                span.low 低
              span.renzheng 
                span.noRenzheng 未认证
              span.band 绑定
      router-view
</template>

<script>
import Bus from '@/lib/bus.js'
export default {
  data() {
    return {
      menuList: [{name: '基本资料', icon: 'baseInfo'}, {name: '全部订单', icon: 'myOrders'}, {name: '已购买的商品', icon: 'buyGoods'}, {name: '我的收藏', icon: 'myCollection'}],
      name: '汪涛',
      email: '123@qq.com',
      identity: '',
      isLogin: ''
    }
  },
  methods: {
    initData () {
      this.email = this.$store.state.email
      this.identity = this.$store.state.identity
      this.isLogin = this.$store.state.isLogin
      console.log(this.email, this.identity, this.isLogin)
    }
  },
  mounted() {
    Bus.$on('initData', () => {
      this.initData()
    })
  }
}
</script>

<style lang='scss'>
  .business {
    width: 100vw;
    height:  100vh;
    background-color: #ffffff;
    display: flex;
    .left-list {
      width: 220px;
      height: 100%;
      display: flex;
      flex-direction: column;
      .title {
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 30px;
        font-weight: bolder;
        border-bottom: 1px solid rgb(237, 237, 237);
      }
      .menu-list {
        font-size: 14px;
        font-weight: bold;
        .menu-item {
          width: 100%;
          height: 40px;
          display: flex;
          // border: 1px solid #ddd;
          // box-shadow: 2px 2px 2px #ddd;
          color: #000;
          span {
            display: inline-block;
            height: 100%;
            width: 100%;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            // text-align: center;
            cursor: pointer;
          }
          .icon {
            width: 25px;
          }
          .name {
            flex: 1;
            text-align: center;
            &:hover {
              color: rgb(243, 69, 53);
            }
          }
          .right {
            width: 25px;
            font-size: 23px;
          }
        }
        .menu-item.router-link-exact-active.router-link-active {
          background: rgb(5, 151, 219);
          color: #ffffff;
        }
      }
    }
    .right-content {
      width: calc(100% - 180px);
      background: rgb(240, 243, 239);
      .topInfo {
        width: 100%;
        height: 110px;
        // background-image: url('../../../assets/images/home.jpeg');
        margin: 0 auto;
        min-width: 850px;
        .content {
          width: 80%;
          min-width: 850px;
          height: 100%;
          // background: #ddd;
          margin: 0 auto;
          display:flex;
          align-items: center;
          .image {
            width: 100px;
            height:100px;
            margin: 5px 5px;
            // background: red;
          }
          .infoWrapper {
            width: calc(100% - 115px);
            height: 100px;
            // background: blue;
            box-sizing: border-box;
            padding: 5px 15px;
            .top_info, .bottom_info {
              width: 100%;
              height: 50%;
              line-height: 50px;
            }
            .top_info {
              border-bottom: 1px solid black;
              .name {
                font-size: 18px;
                font-weight: 400px;
                // color: #fff;
                color: rgb(75, 75, 241);
              }
            }
          }
        }
      }
      // background-color: red;
    }
  }
</style>
