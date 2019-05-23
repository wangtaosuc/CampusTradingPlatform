<template lang='pug'>
  .goods
    .goods-left
      .goods-header
         el-button.f-m-l-10(type="primary", size='small', @click='showGoodsList = true') 添加商品
         el-dialog(width='40%', :visible.sync='showGoodsList')
          .grounding
            el-form(:model='groundingInfo', :rules='rules', ref='ruleForm', class='demo-ruleForm')
              el-form-item(label='商品名称', prop='name')
                el-input(v-model='groundingInfo.name')
              el-form-item(label='商品价格', prop='price')
                el-input(v-model='groundingInfo.price')
              el-form-item(label='商品数量', prop='num')
                el-input(v-model='groundingInfo.num')
              el-form-item(label='商品图片')
                el-input(type='file')
          span(slot='footer', class='dialog-footer')
            el-button(@click='showGoodsList = false') 取消
            el-button(type='primary', @click='showGoodsList = false')  添加
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
      .pieChart#pieChart 饼图
      .lineChart#lineChart 折线图
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      goodList: [{}, {}, {}, {}, {}, {}, {}],
      showGoodsList: false,
      groundingInfo: {
        name: '',
        price: null,
        num: null
      },
      rules: {
        name: [
          { required: true, message: '商品名称不能为空', trigger: 'blur'}
        ],
        price: [
          { required: true, message: '商品价格不能为空', trigger: 'blur'}
        ],
        num: [
          { required: true, message: '商品数量不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    initPieChart() {
      let options = {
          title : {
              text: '某站点用户访问来源',
              subtext: '纯属虚构',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                      {value:335, name:'直接访问'},
                      {value:310, name:'邮件营销'},
                      {value:234, name:'联盟广告'},
                      {value:135, name:'视频广告'},
                      {value:1548, name:'搜索引擎'}
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };

      let myChart = echarts.init(document.getElementById('pieChart'))
      myChart.setOption(options)
    },
    initLinechart() {
      let options = {
          color: ['#3398DB'],
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  axisTick: {
                      alignWithLabel: true
                  }
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'直接访问',
                  type:'bar',
                  barWidth: '60%',
                  data:[10, 52, 200, 334, 390, 330, 220]
              }
          ]
      };
      let mychart = echarts.init(document.getElementById('lineChart'))
      mychart.setOption(options)
    }
  },
  mounted () {
    this.initPieChart()
    this.initLinechart()
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
        background: #eeeeee;
        display: flex;
        align-items: center;
        .grounding {
          width: 100%;
          height: 500px;
        }
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
      display: flex;
      flex-direction: column;
      .pieChart,
      .lineChart {
        width: 100%;
        height: 50%;
      }
      .pieChart {
        border-bottom: 1px solid black;
      }
    }
  }
</style>
