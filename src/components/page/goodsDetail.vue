<template lang='pug'>
  .goodsDetail {{goodData.date}}
</template>

<script>
import { getSingleGood } from '../../http/user.js'
export default {
  name: 'goodsDetail',
  data () {
    return {
      goodData: {}
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      getSingleGood({id: this.$route.params.id}).then(res => {
        this.goodData = res.data.data
      })
    }
  }
}
</script>

<style lang='scss'>

</style>
