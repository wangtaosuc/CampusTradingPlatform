<template lang='pug'>
  .transferStation
    .station-left(@click='isShow')
      .station-left-content
        .station-left-text 购物车
        //- .allNum
        //-   el-badge
    .station-right(:class='{rightVisible:sideVisible}')
      .right-content
        .right-top
          el-button.iconFont.icon-cancelSelectAll(size='small', type='primary', v-if='isSelectedAll', ref='selectAll', @click="selectAll()")
            span.f-m-l-5 全选
          el-button.iconFont.icon-selectAll( size='small', type='primary', v-if='!isSelectedAll', ref='selectAll', @click="selectAll()")
            span.f-m-l-5 全选
          el-button.iconFont.icon-deleteAll(:disabled='allNum === 0', size='small', type='primary', @click="deleteAllTransferStation()")
            span.f-m-l-5 清空
          el-button.iconFont(size='small', type='primary', @click='seeAll()')
            span.f-m-l-5 查看全部
        el-table(:data="data", ref="allMultipleTable", tooltip-effect="dark")
          el-table-column(type='selection')
          //- el-table-column(label='大白兔小店')
          //-   template(slot-scope='scope') {{ scope.row.name }}
          el-table-column(label='保罗的小店')
            template(slot-scope='scope')
              .table-left(style='width:40%;float:left')
                span.name {{scope.row.name}}
              .table-right(style='width:60%;float:right')
                el-button(size='mini') -
                span(style='margin:0 2px;') {{scope.row.num}}
                el-button(size='mini') +
                span(style='font-size:12px;color:#1890ff;margin-left:20px;') 删除
        //-       template(slot-scope='scope') {{ scope.row.caseName[0] }}
        //- .case(v-if='caseInfo.length > 0')
        //-   .moreInfo(v-if='caseInfoAll.length > 5', @click='clickDetail()') 更多
        //-   el-table(:data="caseInfo", ref="caseMultipleTable", tooltip-effect="dark", @selection-change='handleSelectCase')
        //-     el-table-column(type='selection', align='center', width='30px')
        //-     el-table-column(:label='"案件("+caseInfo.length.toString()+")"')
        //-       template(slot-scope='scope') {{ scope.row.caseName[0] }}
        //-     el-table-column(width="90", align='center')
        //-       template(slot-scope='scope')
        //-         el-button.iconfont.icon-deleteAll(title='删除', type="text", size="small", @click='deleteCase(scope.row)')
        //- .person(v-if='personInfo.length > 0')
        //-   .moreInfo(v-if='personInfoAll.length > 5', @click='clickDetail()') 更多
        //-   el-table(:data="personInfo", ref="personMultipleTable", tooltip-effect="dark", @selection-change='handleSelectPerson')
        //-     el-table-column(type='selection', align='center', width='30px')
        //-     el-table-column(:label='"人员("+personInfo.length.toString()+")"')
        //-       template(slot-scope='scope') {{ scope.row.NAME}}
        //-     el-table-column(align='center', width="90")
        //-       template(slot-scope='scope')
        //-         el-button.iconfont.icon-deleteAll(title='删除', type="text", size="small", @click='deletePerson(scope.row)')
        //- .phone(v-if='accountInfo.length > 0')
        //-   .moreInfo(v-if='accountInfoAll.length > 5', @click='clickDetail()') 更多
        //-   el-table(:data="accountInfo", ref="accountMultipleTable", tooltip-effect="dark", @selection-change='handleSelectAccount')
        //-     el-table-column(type='selection', align='center', width='30px')
        //-     el-table-column(:label='"手机号("+accountInfo.length.toString()+")"')
        //-         template(slot-scope='scope') {{ scope.row }}
        //-     el-table-column(align='center', width="90")
        //-       template(slot-scope='scope')
        //-         el-button.iconfont.icon-deleteAll(title='删除', type="text", size="small", @click='deletePhone(scope.row)')
        //- .device(v-if='deviceInfo.length > 0')
        //-   .moreInfo(v-if='deviceInfoAll.length > 5', @click='clickDetail()') 更多
        //-   el-table(:data="deviceInfo", ref="deviceMultipleTable", tooltip-effect="dark", @selection-change='handleSelectDevice')
        //-     el-table-column(type='selection', align='center', width='30px')
        //-     el-table-column(:label='"设备("+deviceInfo.length.toString()+")"')
        //-       template(slot-scope='scope') {{ scope.row.MODEL }}
        //-     el-table-column(align='center', width="90")
        //-       template(slot-scope='scope')
        //-         el-button.iconfont.icon-deleteAll(title='删除', type="text", size="small", @click='deleteDevice(scope.row)')
        //- .nothing(style='font-size:26px;margin:10px;color:#409EFF', v-if='(caseInfo.length + personInfo.length + accountInfo.length + deviceInfo.length) <= 0') 购物车空空如也哦！
      .dataAnalysis
        .ddd(style='margin:10px 20px')
          span.f-fl 已选 6 件
          span.f-fr(style='font-size:13px;color:red') ￥1945 
        el-button(style='width:90%;margin-top:10px;',size='small', type='primary')
          span.f-m-l-5 结算
        //- el-button(size='small', type='primary')
        //-   span.f-m-l-5 时间轴分析
</template>
<script>
// import { showTransferStation, deleteTransferStation, deleteAllTransferStation, getTimeLineMenu, getTimeRange, getRelationStatistics, getTransferContent } from '@/service/user'
import Bus from '@/lib/bus'
import _ from 'lodash'
// import moment from 'moment'
export default {
//   inject: ['reload'],
  name: 'transferStation',
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
      }],
      sideVisible: true,
      caseInfo: [],
      personInfo: [],
      accountInfo: [],
      deviceInfo: [],
      isSelectedAll: true,
      caseInfoAll: [],
      personInfoAll: [],
      accountInfoAll: [],
      deviceInfoAll: [],
      caseSelectInfo: [],
      personSelectInfo: [],
      accountSelectInfo: [],
      deviceSelectInfo: [],
      caseSelect: false,
      personSelect: false,
      accountSelect: false,
      deviceSelect: false
    }
  },
  mounted () {
    Bus.$on('getTransferStationInfo', (type) => {
      this.getTransferStationInfo(type)
    })
  },
  computed: {
    allNum () {
      return this.caseInfoAll.length + this.personInfoAll.length + this.accountInfoAll.length + this.deviceInfoAll.length
    }
  },
  methods: {
    clickDetail () {
      this.$router.push({path: '/browse/transferStation'})
      this.sideVisible = true
    },
    seeAll () {
      this.$router.push({path: '/browse/transferStation'})
      this.sideVisible = true
    },
    selectAll () {
      if (this.caseInfo) {
        this.caseInfo.forEach(row => {
          this.$refs.caseMultipleTable.toggleRowSelection(row, !this.caseSelect)
        })
        this.caseSelect = !this.caseSelect
      } else {
        this.$refs.caseMultipleTables.clearSelection()
      }
      if (this.personInfo) {
        this.personInfo.forEach(row => {
          this.$refs.personMultipleTable.toggleRowSelection(row, !this.personSelect)
        })
        this.personSelect = !this.personSelect
      } else {
        this.$refs.personMultipleTables.clearSelection()
      }
      if (this.accountInfo) {
        this.accountInfo.forEach(row => {
          this.$refs.accountMultipleTable.toggleRowSelection(row, !this.accountSelect)
        })
        this.accountSelect = !this.accountSelect
      } else {
        this.$refs.accountMultipleTable.clearSelection()
      }
      if (this.deviceInfo) {
        this.deviceInfo.forEach(row => {
          this.$refs.deviceMultipleTable.toggleRowSelection(row, !this.deviceSelect)
        })
        this.deviceSelect = !this.deviceSelect
      } else {
        this.$refs.deviceMultipleTable.clearSelection()
      }
      this.isSelectedAll = !this.isSelectedAll
    },
    // deleteAllTransferStation () {
    //   this.$confirm('确认清空中转站？', '确认信息', {
    //     distinguishCancelAndClose: true,
    //     confirmButtonText: '确认',
    //     cancelButtonText: '取消'
    //   })
    //     .then(() => {
    //       deleteAllTransferStation({USER_ID: this.$store.state.user.email})
    //       this.getTransferStationInfo()
    //       window.msgServices.success('清空中转站成功！')
    //     })
    //     .catch(action => {
    //       window.msgServices.info('您已取消清空中转站！')
    //     })
    // },
    // async getTransferStationInfo (type) {
    //   if (type === 'case') {
    //     this.getCaseInfo()
    //   } else if (type === 'person') {
    //     this.getPersonInfo()
    //   } else if (type === 'phone') {
    //     this.getAccountInfo()
    //   } else if (type === 'device') {
    //     this.getDeviceInfo()
    //   } else {
    //     this.getCaseInfo()
    //     this.getPersonInfo()
    //     this.getAccountInfo()
    //     this.getDeviceInfo()
    //   }
    // },
    // // 横向比对
    // lateralAlignment () {
    //   let caseLen = this.caseSelectInfo.length
    //   let personLen = this.personSelectInfo.length
    //   let accountLen = this.accountSelectInfo.length
    //   let deviceLen = this.deviceSelectInfo.length
    //   _.forEach(this.caseSelectInfo, (item) => {
    //     item.pIndex = 0
    //     item.dIndex = 0
    //   })
    //   if (caseLen > 0 && caseLen <= 4 && personLen === 0 && accountLen === 0 && deviceLen === 0) {
    //     this.$router.push({path: '/browse/case/lateralAlignment/detail', query: {crumb: '横向比对'}})
    //     this.$store.dispatch('getSelectInfo', this.caseSelectInfo)
    //     this.sideVisible = true
    //   } else {
    //     window.msgServices.warn('仅限1~4个案件')
    //   }
    // },
    // // 时间轴分析
    // async timeAxis () {
    //   let len = this.caseSelectInfo.length + this.personSelectInfo.length + this.accountSelectInfo.length + this.deviceSelectInfo.length
    //   if (len <= 3 && len >= 1) {
    //     // 获取分析数据类型
    //     let analysisTypeArrRes = await getTimeLineMenu()
    //     let analysisTypeArr = analysisTypeArrRes.data.data
    //     let arrTemp = []
    //     let analysisType = []
    //     analysisTypeArr.forEach(item => {
    //       arrTemp.push(item.id)
    //       analysisType.push(item.c_name)
    //     })
    //     arrTemp = arrTemp.join(',')
    //     // 遍历每种类型取出需要的值
    //     let caseTemp = []
    //     let personTemp = []
    //     // let accountTemp = []
    //     let deviceTemp = []
    //     _.forEach(this.caseSelectInfo, (item) => {
    //       let objTemp = {}
    //       objTemp.name = item.caseName[0]
    //       objTemp.type = 'case'
    //       objTemp.title = '案件'
    //       objTemp.id = item.id
    //       objTemp.captureYearMonth = moment(moment(item.caseCaptureTime * 1000).format('YYYY-MM')).valueOf()
    //       caseTemp.push(objTemp)
    //     })
    //     _.forEach(this.personSelectInfo, (item) => {
    //       let objTemp = {}
    //       objTemp.name = item.NAME
    //       objTemp.type = 'person'
    //       objTemp.title = '人员'
    //       objTemp.id = item.CERTIFICATE_CODE
    //       objTemp.captureYearMonth = moment(moment(item.CAPTURE_TIME * 1000).format('YYYY-MM')).valueOf()
    //       personTemp.push(objTemp)
    //     })
    //     // _.forEach(this.accountSelectInfo, (item) => {
    //     //   let objTemp = {}
    //     //   objTemp.type = 'account'
    //     //   objTemp.id = item.id
    //     //   objTemp.captureYearMonth = moment(moment(item.account * 1000).format('YYYY-MM')).valueOf()
    //     //   account.push(objTemp)
    //     // })
    //     _.forEach(this.deviceSelectInfo, (item) => {
    //       let objTemp = {}
    //       objTemp.name = item.MODEL
    //       objTemp.type = 'device'
    //       objTemp.title = '设备'
    //       objTemp.id = item.IMEI_ESN_MEID
    //       objTemp.captureYearMonth = moment(moment(item.CAPTURE_TIME * 1000).format('YYYY-MM')).valueOf()
    //       deviceTemp.push(objTemp)
    //     })
    //     let allSelectInfo = _.concat(caseTemp, personTemp, deviceTemp)
    //     let maxTime = []
    //     let minTime = []
    //     let timeTemp = []
    //     let relationStatistics = []
    //     allSelectInfo.forEach(item => {
    //       let params = {title: item.title, name: item.name, type: item.type, analysisTypeArr: arrTemp, id: item.id, captureYearMonth: item.captureYearMonth}
    //       timeTemp.push(params)
    //     })
    //     // 同步  获取最大时间与最小时间
    //     try {
    //       if (timeTemp.length > 0) {
    //         for (let i of timeTemp) {
    //           let timeRes = await this.getTimeRange({type: i.type, analysisTypeArr: arrTemp, id: i.id, captureYearMonth: i.captureYearMonth})
    //           let maxTimeRes = timeRes.data.data.max
    //           let minTimeRes = timeRes.data.data.min
    //           let relationRes = await this.getRelationStatistics({type: i.type, id: i.id})
    //           let relationStatisticsTemp = relationRes.data.data
    //           relationStatisticsTemp.name = i.name
    //           relationStatisticsTemp.type = i.type
    //           relationStatisticsTemp.title = i.title
    //           let timelineTemp = await getTransferContent({type: i.type, id: i.id, analysisTypeArr: arrTemp, captureYearMonth: i.captureYearMonth, scroll: '5m', size: 50, sort: 'asc'})
    //           relationStatisticsTemp.data = timelineTemp.data
    //           relationStatisticsTemp.chatWorking = true
    //           relationStatisticsTemp.isSortActive = ''
    //           if (timelineTemp.data.data.length > 0) {
    //             maxTime.push(maxTimeRes)
    //             minTime.push(minTimeRes)
    //           }
    //           relationStatistics.push(relationStatisticsTemp)
    //         }
    //       }
    //     } catch (err) {
    //       window.msgServices.err('时间轴分析失败!')
    //     }
    //     let timeObj = {}
    //     timeObj.maxTime = _.max(maxTime)
    //     timeObj.minTime = _.min(minTime)
    //     this.$store.commit('getTimeRange', timeObj)
    //     // 获取时间轴分析的关联统计数据
    //     this.$store.commit('getRelationStatistics', relationStatistics)
    //     this.$store.commit('getAnalysisType', analysisType)
    //     this.$store.commit('getSelectInfoParams', allSelectInfo)
    //     this.$router.push({path: '/browse/timeAxis/detail', query: {crumb: '时间轴分析'}})
    //     this.sideVisible = true
    //     this.reload()
    //   } else {
    //     window.msgServices.warn('仅限1~3个类型')
    //   }
    // },
    // async getRelationStatistics (params) {
    //   return new Promise((resolve, reject) => {
    //     getRelationStatistics(params).then(data => resolve(data)).catch(err => {
    //       if (err) {
    //         reject(err)
    //       }
    //     })
    //   })
    // },
    // async getTimeRange (params) {
    //   return new Promise((resolve, reject) => {
    //     getTimeRange(params).then(data => resolve(data)).catch(err => {
    //       if (err) {
    //         reject(err)
    //       }
    //     })
    //   })
    // },
    // handleSelectCase (select) {
    //   this.caseSelectInfo = select
    // },
    // handleSelectPerson (select) {
    //   this.personSelectInfo = select
    // },
    // handleSelectAccount (select) {
    //   this.accountSelectInfo = select
    // },
    // handleSelectDevice (select) {
    //   this.deviceSelectInfo = select
    // },
    // async deleteCase (row) {
    //   await deleteTransferStation({USER_ID: this.$store.state.user.email, TYPE: 'case', ID: row.id})
    //   this.getCaseInfo()
    //   window.msgServices.success('该案件删除成功！')
    // },
    // async deletePerson (row) {
    //   await deleteTransferStation({USER_ID: this.$store.state.user.email, TYPE: 'person', ID: row.CERTIFICATE_CODE})
    //   this.getPersonInfo()
    //   window.msgServices.success('该人员删除成功！')
    // },
    // async deletePhone (row) {
    //   await deleteTransferStation({USER_ID: this.$store.state.user.email, TYPE: 'phone', ID: row})
    //   this.getAccountInfo()
    //   window.msgServices.success('该手机号删除成功！')
    // },
    // async deleteDevice (row) {
    //   await deleteTransferStation({USER_ID: this.$store.state.user.email, TYPE: 'device', ID: row.IMEI_ESN_MEID})
    //   this.getDeviceInfo()
    //   window.msgServices.success('该设备删除成功！')
    // },
    async isShow () {
      this.sideVisible = !this.sideVisible
    },
  }
}
</script>
<style lang='scss' scoped>
.transferStation {
    position: absolute;
    right:10px;
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
