import Vue from 'vue'

Vue.filter('wh', (value) => {
  return value.replace(/w\.h/, "170.230")
})