<template lang='pug'>
  .community
    .title 社区服务中心
    .content
      .communityInfo
        .btn-wrapper
          el-button.btn(type="primary", size='small', @click='dialogFormVisible = true') 发布求购信息
          el-dialog(title='发布求购信息', :visible.sync = "dialogFormVisible", width='40%')
            el-form(:model='form')
              el-form-item(label='求购信息', label-width='120px')
                el-input(v-model='form.msg', autocomplete='off')
              el-form-item(label='电话', label-width='120px')
                el-input(v-model='form.phoneNum', autocomplete='off')
            div(slot='footer', class='dialog-footer')
              el-button(@click='dialogFormVisible = false')  取消
              el-button(type='primary', @click='submitCommunity')  发布
        .infoList
          el-table(:data="infoList", style='width: 100%')
            el-table-column(prop='msg', label='求购信息', width='160')
            el-table-column(prop='phoneNum', label='电话', width='120')
            el-table-column(prop='date', label='日期', width='120')
      .communityMap
        baidu-map(class='map', :center='centerPoint', :zoom='zoom', @ready='handler', :scroll-wheel-zoom='true', @click='getCurPoint')
          bm-geolocation(anchor="BMAP_ANCHOR_BOTTOM_RIGHT", :showAddressBar="true", :autoLocation="true", @locationSuccess='getLocation')
          bm-navigation(anchor="BMAP_ANCHOR_TOP_RIGHT")
          bm-marker(v-for="(info, index) in infoList", :key='index', :position='info.location', :draggin='true', animation='BMAP_ANIMATION_BOUNCE', @click="infoWindowOpen(info)")
            bm-info-window(:show='!info.show', @close='infoWindowClose(info)') {{info.msg}}
</template>

<script>
import {addCommunity, getCommunity} from '@/http/user.js'
export default {
  data() {
    return {
      center: "西安科技大学临潼校区图书馆",
      centerPoint: {
        lng: '109.199936',
        lat: '34.375032'
      },
      zoom: 18,
      infoList: [{
        location: {
          lng: '109.199936',
          lat: '34.375032'
        },
        msg: '求购《计算机网络》',
        phoneNum: 1839288888,
        show: true
      }],
      form: {
        msg: '',
        phoneNum: ''
      },
      dialogFormVisible: false,
      nowLocation: {
        lng: 0,
        lat: 0
      }
    }
  },
  methods: {
    handler ({BMap, map}){
      this.zoom = this.zoom
      this.nowLocation.lng = map.BC.lng
      this.nowLocation.lat = map.BC.lat
    },
    getClickInfo(e) {
    },
    getLocation(point) {
      // console.log(point.Ka)
    },
    infoWindowClose (info) {
      info.show = false
    },
    infoWindowOpen (info) {
      info.show = true

    },
    getCurPoint(type) {
      // console.log(type.point)
    },
    getCommunity() {
      getCommunity().then(res => {
        if (res.data.status === 200) {
          let infoArr = res.data.data
          infoArr.forEach((ele) => {
            ele.show = false
            ele.date = new Date(ele.date).toLocaleDateString()
          })
          this.infoList = infoArr
        }
      })
    },
    AddCommunity() {
      let params = {
        location: this.nowLocation,
        msg: this.form.msg,
        phoneNum: this.form.phoneNum
      }
      addCommunity(params).then(res => {
        if (res.data.status === 200) {
          window.msgServices.success('发布成功！')
          this.getCommunity()
        } else {
          window.msgServices.error('发布失败请重试！')
        }
      })
    },
    submitCommunity() {
      this.dialogFormVisible = false
      this.AddCommunity()
    }
  },
  mounted() {
    this.getCommunity()
  }
}
</script>

<style lang='scss'>
  .community {
    width: 100%;
    height: 100%;
    .title {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: rgb(245, 245, 245);
      font-size: 28px;
      font-weight: bold;
    }
    .content {
      width: 100%;
      height: calc(100% - 50px);
      display: flex;
    }
    .communityInfo {
      width: 400px;
      height: 100%;
      display: inline-block;
      .btn-wrapper {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        .btn {
          margin: 0 10px;
        }
      }
    }
    .communityMap {
      display: inline-block;
      width: calc(100% - 400px);
      height: 100%;
      display: inline-block;
      // background: blue;
    }
  }
  .map {
    width: 100%;
    height: 100%;
  }
</style>
