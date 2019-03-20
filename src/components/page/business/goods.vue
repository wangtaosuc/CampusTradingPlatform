<template lang='pug'>
  .goods
    .goods-left
      .goods-header
         el-button.f-m-l-10(type="primary", size='small') 添加商品
      .goods-content
        li.goods-item(v-for='(ele, index) in goodList', :key='index')
          .item-img
            img
          .item-info
            .goods-info
              .goods-name 商品名称：
                span iphone
              .goods-price 商品价格：
                span 8000
              .goods-stock 库存:
                span 1
            .btn-menu
              el-button(type="primary", size='mini') 编辑商品
              el-button.f-m-l-10(type="primary", size='mini') 下架商品
              el-button.f-m-l-10(type="primary", size='mini') 删除商品
    .goods-right
      .pieChart 饼图
      .lineChart 折线图
</template>

<script>
export default {
  data() {
    return {
      goodList: [{}, {}, {}, {}, {}, {}, {}]
    }
  }
}
</script>

<style lang='scss'>
  .goods {
    width: 100%;
    height: 100%;
    display: flex;
    .goods-left {
      width: 75%;
      height: 100%;
      border-right: 1px solid black;
      .goods-header {
        width: 100%;
        height: 40px;
        background: pink;
        display: flex;
        align-items: center;
      }
      .goods-content {
        width: 100%;
        height: calc(100% - 40px);
        box-sizing: border-box;
        padding: 16px;
        overflow-y: auto;
        .goods-item {
          float: left;
          min-width: 240px;
          width: 24%;
          height: 315px;
          border: 1px solid black;
          margin: 10px 5px;
          box-sizing: border-box;
          padding: 10px;
          display: flex;
          flex-direction: column;
          .item-img{
            width: 100%;
            height: 200px;
            // background-color: red;
            border: 1px solid black;
          }
          .item-info {
            width: 100%;
            height: calc(100% - 200px);
            border: 1px solid black;
            .goods-info,
            .btn-menu {
              width: 100%;
              height: 50%;
              display: flex;
              justify-content: center;
            }
            .goods-info {
              background: #ddd;
              line-height: 46px;
              font-size: 13px;
              .goods-name,
              .goods-price {
                box-sizing: border-box;
                padding-right: 5px;
                font-weight: bolder;
              }
            }
            .btn-menu {
              box-sizing: border-box;
              padding: 5px 0px;
            }
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
    .goods-right {
      width: 25%;
      height: 100%;
      background: #ddd;
      display: flex;
      flex-direction: column;
      .pieChart,
      .lineChart {
        width: 100%;
        height: 50%;
        // background: red;
      }
    }
  }
</style>
