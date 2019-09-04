<template>
  <div class="page-wrap">
    <div class="tab-block">
      <div class="tab-content">
        <div class="page n-hot active">
          <div class="list-wrap" style="margin-top: 0px;">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "utils/http"
import MovieItem from "./MovieItem"
import BScroll from 'better-scroll'
export default {
  mounted() {
    let bScroll = new BScroll('.page', {
      pullUpLoad: {
        threshold: 50
      }
    })

    bScroll.on('pullingUp', () => {
      this.$emit('onmessage', bScroll)
    })
  },
}
</script>

<style lang='stylus' scoped>
.page-wrap
  height 100%
  .tab-block
    height 100%
    .tab-content
      overflow hidden
      position relative
      height 100%
      .page
        height 100%
</style>