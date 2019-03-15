<template lang="pug">
  .myOrder
    el-card(shadow='never', :body-style='{background:"#eee"}')
      .tHeader
        //- span.tTitle 全部内容
        el-button.iconFont.icon-cancelSelectAll(size='small', type='primary', v-if='isSelectedAll', ref='selectAll', @click="selectAll()")
          span.f-m-l-5 全选
        el-button.iconFont.icon-selectAll( size='small', type='primary', v-if='!isSelectedAll', ref='selectAll', @click="selectAll()")
          span.f-m-l-5 全选
        el-button.iconFont.icon-deleteAll(size='small', type='primary')
          span.f-m-l-5 清空
        //- el-button.iconFont.icon-DataAnalysis(size='small', type='primary')
        //-   span.f-m-l-5 横向比对
        //- el-button.iconFont.icon-DataAnalysis(size='small', type='primary')
        //-   span.f-m-l-5 时间轴分析
      .tBody
        //- el-table(data="caseInfo", ref="caseMultipleTable", tooltip-effect="dark", @selection-change='handleSelectCase')
        //-   el-table-column(type='selection')
        //-   el-table-column(label='案件')
        //-     template(slot-scope='scope') {{ scope.row.caseName[0] }}
        //-   el-table-column(label='案件类型')
        //-     template(slot-scope='scope') {{ scope.row.caseType | filter('caseType')}}
        //-   el-table-column(label='关联人员数')
        //-     template(slot-scope='scope') {{ scope.row.personsInCase.length }}
        //-   el-table-column(label='关联设备数')
        //-     template(slot-scope='scope') {{ scope.row.devicesInCase.length }}
        //-   el-table-column(:label='caseInfo.length.toString()', width="90")
        //-     template(slot-scope='scope')
        //-     el-button.iconfont.icon-deleteAll(title='删除', type="text", size="small", @click='deleteCase(scope.row)')
      m-copyright
</template>
<script>
import copyright from '../public/copyright'
export default {
  data () {
    return {}
  },
  components: {
    'm-copyright': copyright
  }
}
</script>
<style lang="scss" scoped>

</style>

