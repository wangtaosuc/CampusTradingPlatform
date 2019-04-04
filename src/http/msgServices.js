import Vue from 'vue'
const msgServices = {
  success (message) {
    Vue.prototype.$notify.success({message, position: 'bottom-right'})
  },
  err (message) {
    Vue.prototype.$notify.error({message, position: 'bottom-right'})
  },
  warn (message) {
    Vue.prototype.$notify.warning({message, position: 'bottom-right'})
  },
  info (message) {
    Vue.prototype.$notify.info({message, position: 'bottom-right'})
  }
}
export default msgServices
