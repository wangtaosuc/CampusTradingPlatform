<template lang='pug'>
  .business
    .left-list
      .title 商家中心
      .menu-list
        router-link.menu-item(v-for='(ele, index) in menuList', :to="{name: ele.icon}", :key='index')
          //- span.icon
            span.iconfont(:class='{"icon-dianpu": ele.icon == "shop", "icon-shangpin": ele.icon == "goods", "icon-dingdan": ele.icon == "order", "icon-shouhou": ele.icon == "service"}')
          span.name {{ele.name}}
          //- span.right &gt;
    .right-content
      router-view
</template>

<script>
export default {
  data() {
    return {
      menuList: [{name: '我的店铺', icon: 'shop'}, {name: '商品管理', icon: 'goods'}, {name: '订单详情', icon: 'order'}, {name: '售后服务', icon: 'service'}]
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
      width: 220px;
      height: 100%;
      display: flex;
      flex-direction: column;
      .title {
        width: 100%;
        height: 60px;
        border-bottom: 1px solid rgb(237, 237, 237);
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
          color: #000;
          span {
            display: inline-block;
            height: 100%;
            width: 100%;
            line-height: 40px;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
          }
          .icon {
            width: 25px;
            span {
              width: 16px;
              height: 16px;
            }
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
          background: rgb(64, 158, 255);
          color: #ffffff;
        }
      }
    }
    .right-content {
      width: calc(100% - 180px);
      // background-color: red;
      background: rgb(240, 243, 239);
    }
  }
</style>
