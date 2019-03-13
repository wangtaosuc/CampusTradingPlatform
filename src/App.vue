<template lang='pug'>
  #app
    m-header
    router-view
</template>

<script>
import header from './components/public/header'
export default {
  name: 'App',
  components: {
    'm-header': header
  }
}
</script>

<style lang='scss'>
@import url('./assets/style/reset.css');
#app {
  width: 100vw;
  height:100vh;
  overflow:hidden;
  background: #ccc;
}
</style>
