<template lang="pug">
  .myOrder
    el-card(shadow='never', :body-style='{background:"#eee"}')
      .tHeader
        el-button.iconFont.icon-cancelSelectAll(size='small', type='primary', ref='selectAll')
          span.f-m-l-5 全选
        el-button.iconFont.icon-deleteAll(size='small', type='primary')
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
                el-button(type="text", size="small") 删除
</template>
<script>
import copyright from '../public/copyright'
export default {
  data () {
    return {
      data: [{
        name: '9成新山地自行车',
        store: '大白兔小店',
        price: 399,
        num: 1
      },{
        name: '华为荣耀 10',
        store: '大白兔小店',
        price: 1299,
        num: 1
      },{
        name: 'ipad',
        store: '大白兔小店',
        price: 16,
        num: 1
      },{
        name: '西湖龙井茶叶',
        store: '大白兔小店',
        price: 16,
        num: 2
      },{
        name: '大白兔牛奶糖',
        store: '大白兔小店',
        price: 16,
        num: 1
      },{
        name: '傲风电竞椅',
        store: '大白兔小店',
        price: 199,
        num: 1
      }]
    }
  },
  components: {
    'm-copyright': copyright
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

