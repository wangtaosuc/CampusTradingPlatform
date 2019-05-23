<template lang='pug'>
  .transferStation
    .station-left(@click='isShow')
      .station-left-content
        .station-left-text 购物车
        .allNum
          el-badge(v-if='email', :value='allNum')
    .station-right(:class='{rightVisible:sideVisible}')
      .right-content
        .right-top
          el-button.iconFont.icon-deleteAll(:disabled='allNum === 0', size='small', type='primary', @click="deleteAll()")
            span.f-m-l-5 清空
          el-button.iconFont(size='small', type='primary', @click='seeAll()')
            span.f-m-l-5 查看全部
        el-table(:data="data", @select='handleSelect', ref="allMultipleTable", tooltip-effect="dark", height='calc(100% - 140px)')
          el-table-column(type='selection')
          el-table-column(label='保罗的小店')
            template(slot-scope='scope')
              .table-left(style='width:40%;float:left')
                .name {{scope.row.name}}
                span.price(style='font-size:13px;color:#f40') ￥{{scope.row.price}}
              .table-right(style='width:60%;float:right')
                el-button(@click='decline(scope.row._id)', size='mini') -
                span(style='margin:0 2px;') {{scope.row.num}}
                el-button(@click='increase(scope.row._id)', size='mini') +
                span(@click='del(scope.row._id)', style='cursor: pointer;font-size:12px;color:#1890ff;margin-left:20px;') 删除
      .dataAnalysis
        .ddd(style='margin:10px 20px')
          span.f-fl 已选 {{selectLen}} 件
          span.f-fr(style='font-size:13px;color:#f40') ￥{{totalMoney}}
        el-button(style='width:90%;margin-top:10px;',size='small', type='primary')
          span.f-m-l-5(@click='submitOrder') 结算
</template>
<script>
import { getShopCar, delShopCar, delAll } from '../../http/user.js'
import Bus from '../../lib/bus'
import _ from 'lodash'
export default {
//   inject: ['reload'],
  name: 'transferStation',
  data () {
    return {
      data: [],
      sideVisible: true,
      selectLen: 0,
      totalMoney: 0,
      email: ''
    }
  },
  mounted () {
    this.getShopCar()
    Bus.$on('getShopCar', () => {
      this.getShopCar()
    })
    Bus.$on('getEmail', () => {
      this.getEmail()
    })
  },
  computed: {
    allNum () {
      return this.data.length
    }
  },
  methods: {
    increase (id) {

    },
    getEmail () {
      this.email = this.$store.state.email
    },
    submitOrder () {
      window.msgServices.success('订单结算成功！')
    },
    getShopCar () {
      getShopCar().then(res => {
        this.data = res.data.data
      })
    },
    del (id) {
      delShopCar(id).then(res => {
        this.getShopCar()
        Bus.$emit('getShopCarBrowse')
      })
    },
    deleteAll () {
      this.$confirm('确认清空购物车？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      })
        .then(() => {
          delAll().then(res => {
          })
          this.getShopCar()
          window.msgServices.success('清空购物车成功！')
          Bus.$emit('getShopCarBrowse')
        })
        .catch(action => {
          window.msgServices.info('您已取消清空购物车！')
        })
    },
    seeAll () {
      this.$router.push({path: '/myOrder'})
      this.sideVisible = true
    },
    handleSelect (select) {
      this.selectLen = select.length
      let total = 0
      _.forEach(select, item => {
        total += Number(item.price)
      })
      this.totalMoney = total
    },
    isShow () {
      if (this.$store.state.email) {
        this.sideVisible = !this.sideVisible
      } else {
        this.$router.push('/login')
        window.msgServices.info('请先登录！')
      }
    },
  }
}
</script>
<style lang='scss' scoped>
.transferStation {
    position: fixed;
    right:0;
    top:64px;
    height: calc(100% - 64px);
    z-index: 999;
    .station-left {
      float: left;
      width: 30px;
      height: 100%;
      background: rgb(25, 25, 25);
      font-size: 14px;
      text-align: center;
      cursor: pointer;
      .station-left-content {
        &:hover {
          background: #FF0036;
        }
        box-sizing: border-box;
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        width: 30px;
        padding:16px 5px;
        background: rgb(51, 51, 51);
        .station-left-text {
          color: #fff;
          width: 20px;
        }
        .allNum {
          width:30px;
          margin-top:6px;
          margin-left: -5px;
        }
      }
    }
    .station-right {
      float: right;
      width:320px;
      height:100%;
      transition: width 0.6s;
      overflow: hidden;
      .right-content {
        height: 100%;
        overflow-y: auto;
        overflow-x:hidden;
        background: #eee;
        .right-top {
          width:320px;
          height:60px;
          background:rgb(189, 214, 236);
          line-height:60px;
          text-align:center;
          .iconFont {
          font-family: "iconfont" !important;
          font-size: 12px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          }
        }
        .case, .person, .phone, .device{
          position: relative;
          margin-bottom: 20px;
          .moreInfo {
            position: absolute;
            top: 14px;
            right:8px;
            color:#409EFF;
            z-index: 99;
            cursor: pointer;
          }
        }
      }
      .right-content::-webkit-scrollbar {
          width: 8px;
          background-color: #eee;
        }
        .right-content::-webkit-scrollbar-track {
          background-color: #eee;
        }
        .right-content::-webkit-scrollbar-thumb {
          background: #ccc;
        }
      .dataAnalysis {
        position: absolute;
        bottom:0;
        width:320px;
        height:80px;
        background:rgb(188, 217, 245);
        // line-height:60px;
        text-align:center;
        .iconFont {
          font-family: "iconfont" !important;
          font-size: 14px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      }
      .handle {
        width: 100px;
        height: 100px;
      }
    }
    .rightVisible {
      width: 0;
      overflow: hidden;
    }
}
</style>
