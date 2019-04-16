<template lang='pug'>
  .business
    .left-list
      .title 商家中心
      .menu-list
        router-link.menu-item(v-for='(ele, index) in menuList', :to="{name: ele.icon}", :key='index')
          span.icon ❤
          span.name {{ele.name}}
          span.right &gt;
    .right-content
      router-view
</template>

<script>
export default {
  data() {
    return {
      menuList: [{name: '基本资料', icon: 'shop'}, {name: '全部订单', icon: 'goods'}, {name: '已购买的商品', icon: 'order'}, {name: '我的收藏', icon: 'service'}]
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
      border-right: 1px solid black;
      display: flex;
      flex-direction: column;
      .title {
        width: 100%;
        height: 60px;
        border-bottom: 1px solid black;
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
          background: blue;
          color: #ffffff;
        }
      }
    }
    .right-content {
      width: calc(100% - 180px);
      // background-color: red;
    }
  }
</style>
