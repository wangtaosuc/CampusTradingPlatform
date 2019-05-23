<template lang='pug'>
  #app
    m-shopcar
    .g-content
      .g-hd
        m-header
      .g-bd
        router-view
</template>

<script>
import header from './components/public/header'
import shopCar from './components/public/shopCar'
export default {
  name: 'App',
  components: {
    'm-header': header,
    'm-shopcar': shopCar
  }
}
</script>

<style lang='scss'>
@import url('./assets/style/reset.css');
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  .g-content{
    flex: auto;
    background-color: #fff;
    .g-bd {
      height: calc(100% - 64px);
      width: calc(100% - 30px);
      overflow-y: auto;
    }
  }
}
</style>
