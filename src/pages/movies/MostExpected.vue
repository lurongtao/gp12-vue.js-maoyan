<template>
  <div class="most-expected">
    <p class="title">近期最受期待</p>
    <div class="loading" v-if="!isLoaded">
      <van-loading type="spinner" />
    </div>
    <div class="most-expected-list">
      <div class="scroll-wrapper">
        <div class="expected-item"
          v-for="item in expectedList"
          :key="item.id"
        >
          <div class="poster default-img-bg">
            <img
              :src="item.img | wh"
              onerror="this.style.visibility='hidden'"
            />
            <span class="wish-bg"></span>
            <span class="wish">
              <span class="wish-num">{{item.wish}}</span>人想看
            </span>
            <div class="toggle-wish" data-wishst="0" data-movieid="1250700">
              <span></span>
            </div>
          </div>
          <h5 class="name line-ellipsis">{{item.nm}}</h5>
          <p class="date">{{item.comingTitle}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Loading } from 'vant'
Vue.use(Loading)

import http from 'utils/http.js'
import BScroll from 'better-scroll'
export default {
  beforeCreate() {
    this.limit = 10
    this.page = 0
    this.hasMore = true
  },

  data() {
    return {
      expectedList: [],
      isLoaded: false
    }
  },

  async mounted() {
    let result = await http.get({ url: `/ajax/mostExpected?ci=1&token=&limit=${this.limit}&offset=${this.page * this.limit}` })
    this.expectedList = result.coming
    this.isLoaded = true

    this.page++

    let bScroll = new BScroll('.most-expected-list', {
      scrollX: true,
      scrollY: false
    })

    bScroll.on('scrollEnd', async ({x, y}) => {
      if (this.page <= 3 && this.isLoaded) {
        let offset = this.page * this.limit
        if (x === bScroll.maxScrollX) {
          this.isLoaded = false
          let result = await http.get({ url: `/ajax/mostExpected?ci=1&token=&limit=${this.limit}&offset=${offset}` })
          this.expectedList = [ 
            ...this.expectedList,
            ...result.coming
          ]
          this.page++
          this.isLoaded = true
        }
      }
    })
  },
}
</script>

<style lang='stylus' scoped>
.most-expected
  padding-right .4rem !important
  height 2.3rem
  position relative
  // height 0 !important
  // font-size 0
  // margin-bottom 61.33333% !important

.most-expected-list
  overflow hidden !important
  > div
    width max-content

.loading
  position absolute
  left 50%
  top 50%
  z-index 9999
</style>