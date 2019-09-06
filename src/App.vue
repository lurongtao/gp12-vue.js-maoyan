<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
import store from 'store'
import 'styles/reset.css'
import 'styles/maoyan.css'
import 'utils/filters.js'

export default {
  created() {
    if (store.get('city')) {
      this.$store.dispatch('changeCity', store.get('city'))
    }
  },
}
</script>
