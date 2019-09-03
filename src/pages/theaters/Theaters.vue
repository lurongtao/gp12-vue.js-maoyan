<template>
  <div>
    <div class="swiper">
      <img :src="swiper" alt="">
    </div>
    <div class="content">
      aa
    </div>
  </div>
</template>

<script>
import swiper from 'assets/swiper.png'
export default {
  data() {
    return {
      swiper
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  height 0
  font-size 0
  padding-bottom 48.8%
.content
  height 2rem !important
  background red !important
</style>