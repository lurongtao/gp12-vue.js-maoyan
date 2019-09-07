<template>
  <router-view></router-view>
</template>

<script>
import store from 'store'
import 'styles/reset.css'
import 'styles/animate.css'
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
