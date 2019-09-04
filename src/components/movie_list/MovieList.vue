<template>
  <div class="page-wrap">
    <div class="tab-block">
      <div class="tab-content">
        <div class="page n-hot active">
          <van-list
            v-model="loaded"
            :finished="finished"
            :finished-text="'到底了'"
            @load="onLoad()"
            class="list-wrap"
            :immediate-check="false"
             style="margin-top: 0px;"
          >
            <slot></slot>
          </van-list>
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
  data() {
    return {
      loaded: false,
      finished: false
    }
  },

  methods: {
    onLoad() {
      this.loaded = true
      this.$emit('onmessage', this)
    }
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
.van-list
  height 100%
  overflow-y scroll
</style>