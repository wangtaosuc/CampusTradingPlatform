<template lang='pug'>
  .business
    .left-list
      .title 用户中心
      .menu-list
        router-link.menu-item(v-for='(ele, index) in menuList', :to="{name: ele.icon}", :key='index')
          span.icon ❤
          span.name {{ele.name}}
          span.right &gt;
    .right-content
      .topInfo
        .content
          .image
          .infoWrapper
            .top_info 您好！
              span.name {{name}},
              span.blessing  祝您新的一天里健康，快乐
            .bottom_info
              span.safe 账户安全：
                span.low 低
              span.renzheng 
                span.noRenzheng 未认证
              span.band 绑定
      router-view
</template>

<script>
export default {
  data() {
    return {
      menuList: [{name: '基本资料', icon: 'baseInfo'}, {name: '全部订单', icon: 'myOrders'}, {name: '已购买的商品', icon: 'buyGoods'}, {name: '我的收藏', icon: 'myCollection'}],
      name: '汪涛',
    }
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
      width: 180px;
      height: 100%;
      // border-right: 1px solid black;
      display: flex;
      flex-direction: column;
      .title {
        width: 100%;
        height: 60px;
        // border-bottom: 1px solid black;
        text-align: center;
        line-height: 60px;
        font-size: 30px;
        font-weight: bolder;
      }
      .menu-list {
        font-size: 14px;
        font-weight: bold;
        .menu-item {
          width: 100%;
          height: 40px;
          display: flex;
          border: 1px solid #ddd;
          box-shadow: 2px 2px 2px #ddd;
          color: #000;
          span {
            display: inline-block;
            height: 100%;
            line-height: 40px;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
          }
          .icon {
            width: 25px;
          }
          .name {
            flex: 1;
            text-align: left;
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
          background: #ddd;
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
                color: #fff;
              }
            }
          }
        }
      }
      // background-color: red;
    }
  }
</style>
