<template lang='pug'>
  .myCollection
    .row
      span.name-title 商品
      span.price-title 价格
      span.num-title 数量
      span.total-title 小计
      span.operation-title 操作
    .collection-item(v-for='(collect, index) in collections')
      .column
        .img 暂无图片
        .goodsInfo
          p.name {{collect.name}}
          p.color 颜色：
            span 红
          p.size 尺寸：
            span {{collect.color}}
        .price ￥
          span {{collect.price}}
        .num
          template
            el-input-number(v-model='collect.num', @change='handleChange(collect.price, $event)', size='small', :min='1')
        .total ￥
          span {{collect.price * collect.num}}
        .operation
          .btn.btn-buy
            i.el-icon-circle-plus
            span [加入购物车]
          .btn.btn-delete
            i.el-icon-remove
            span [删除]
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      collections: [{
        name: '加绒羽绒服（雪中飞）',
        price: 888,
        num: 1,
        color: '酒红色'
      },{
        name: '加绒羽绒服（雪中飞）',
        price: 888,
        num: 1,
        color: '天蓝色'
      },{
        name: '加绒羽绒服（雪中飞）',
        price: 888,
        num: 1,
        color: '曼巴黑'
      },{
        name: '加绒羽绒服（雪中飞）',
        price: 888,
        num: 1,
        color: '曼巴黑'
      },{
        name: '加绒羽绒服（雪中飞）',
        price: 888,
        num: 1,
        color: '曼巴黑'
      },{
        name: '加绒羽绒服（雪中飞）',
        price: 888,
        num: 1,
        color: '曼巴黑'
      }]
    }
  },
  methods: {
    handleChange(value, $event) {
      console.log(value, $event)
    }
  }
}
</script>

<style lang='scss'>
  .myCollection {
    width: 1392px;
    height: 100%;
    background: #dddddd;
    margin: 10px auto;
    overflow:auto;
    .row {
      width: calc(100% - 20px);
      height: 40px;
      background: #dddddd;
      margin: 0 10px;
      padding: 10px 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .name-title {
        width: 585px;
      }
      .price-title, .num-title, .total-title {
        width: 190px;
      }
      .operation-title {
        flex: 1;
      }
      span {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }
    }
    .collection-item {
      width: 100%;
      height: 200px;
      border-bottom: 1px solid #eeeeee;
      .column {
        width: calc(100% - 20px);
        height: 100%;
        // background: red;
        margin: 0 10px;
        padding-right: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .img {
          width: 180px;
          height: 180px;
          background: #fff;
          margin: 10px 10px;
          line-height: 180px;
          text-align: center;
        }
        .goodsInfo {
          width: 380px;
          height: 180px;
          background: #fff;
          margin-right: 10px;
          p {
            width: 100%;
            box-sizing: border-box;
            padding: 0 10px;
            font-size: 14px;
          }
          .name {
            min-height: 30px;
            max-height: 60px;
            line-height: 30px;
            word-break: break-all;
            overflow: hidden;
          }
          .color, .size {
            height: 30px;
            line-height: 30px;
          }
        }
        .price {
          width: 200px;
          height: 180px;
          background: #ffffff;
          line-height: 180px;
          text-align: center;
          font-size: 18px;
        }
        .num {
          width: 180px;
          height: 180px;
          margin: 0 10px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .total {
          width: 200px;
          height: 180px;
          background: #ffffff;
          margin-right: 10px;
          line-height: 180px;
          text-align: center;
          font-size: 18px;
        }
        .operation {
          flex: 1;
          height: 180px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .btn {
            cursor: pointer;
            display: block;
            width: 107px;
            margin: 7px 0;
          }
          i {
            color: rgb(207, 7, 7);
          }
        }
      }
    }
  }
</style>
