<template lang="pug">
  .myOrder
    el-card(shadow='never', :body-style='{background:"#eee"}')
      .tHeader
        el-button.iconFont.icon-deleteAll(@click="deleteAll()", size='small', type='primary')
          span.f-m-l-5 清空
      .tBody
        el-table(:data="data", ref="allMultipleTable", tooltip-effect="dark")
          el-table-column(type='selection')
          el-table-column
            template(slot-scope='scope')
              .caseLeft
                .caseLeft-top
                  el-tooltip(transition='linear', effect="dark", content="案件名称", placement="top", :open-delay='400')
                    span.caseName {{ scope.row.name }}
                  el-tooltip(transition='linear', effect="dark", content="案件类型", placement="top", :open-delay='400')
                    span.caseType (￥{{ scope.row.price}})
                .caseLeft-bottom
                  el-tooltip(transition='linear', effect="dark", content="采集时间", placement="top", :open-delay='400')
                    span.cupTime {{ scope.row.store }}
              .caseRight
                el-button(@click='del(scope.row._id)', type="text", size="small") 删除
</template>
<script>
import Bus from '../../lib/bus'
import { getShopCar, delShopCar, delAll } from '../../http/user.js'
import copyright from '../public/copyright'
export default {
  data () {
    return {
      data: []
    }
  },
  components: {
    'm-copyright': copyright
  },
  mounted () {
    this.getShopCar()
    Bus.$on('getShopCarBrowse', () => {
      this.getShopCar()
    })
  },
  methods: {
    getShopCar () {
      getShopCar().then(res => {
        this.data = res.data.data
      })
    },
    del (id) {
      delShopCar(id).then(res => {
        this.getShopCar()
        Bus.$emit('getShopCar')
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
            console.log(res)
          })
          this.getShopCar()
          window.msgServices.success('清空购物车成功！')
          Bus.$emit('getShopCar')
        })
        .catch(action => {
          window.msgServices.info('您已取消清空购物车！')
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.caseLeft{
        float: left;
        .caseLeft-top {
          .caseName {
            font-size: 16px;
            color: #2e2e2e;
            font-weight: 600;
          }
          .caseType {
            margin-left: 20px;
            font-size: 13px;
            color: #f40;
            font-weight: bold;
          }
        }
        .caseLeft-bottom {
          .cupTime {
            font-size: 13px;
            color: rgb(165, 164, 164);
          }
          .relaPerson, .relaDevice {
            font-size: 12px;
            margin-left: 12px;
            padding: 2px 3px;
            background: rgb(107, 165, 255);
            color: rgb(255, 255, 255);
            border-radius: 4px;
          }
        }
      }
      .caseRight {
        margin-right:30px;
        width:48px;
        height: 48px;
        line-height: 48px;
        float: right;
      }
</style>

