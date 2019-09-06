<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
import http from 'utils/http'
import Vue from 'vue'
import { NavBar } from 'vant'
Vue.use(NavBar)

export default {
  data() {
    return {
      title: ''
    }
  },

  // async created() {
  //   let result = await http.get({url: '/ajax/detailmovie?movieId=' + this.$route.params.id})
  //   this.title = result.detailMovie.nm
  // },

  async activated() {
    let result = await http.get({url: '/ajax/detailmovie?movieId=' + this.$route.params.id})
    this.title = result.detailMovie.nm
  },

  deactivated() {
    // console.log('deactivated')
  },
  
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
</script>

<style lang="stylus" scoped>
.van-nav-bar
  background #e54847
  color #fff
.van-nav-bar__text
  color #fff
.van-nav-bar__title
  color #fff
.van-nav-bar .van-icon
  color #fff
</style>