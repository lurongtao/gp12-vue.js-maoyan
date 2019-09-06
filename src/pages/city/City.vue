<template>
<div>
  <section id="city-list" class="city-list-container" style="display: block;">
    <div>
      <section>
        <div ref="locate" class="city-title">定位城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="location-city">定位失败，请点击重试</div>
        </div>
      </section>

      <section class="history-city-list"></section>

      <section>
        <div ref="hot" class="city-title">热门城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item"
            v-for="hotcity in hotcities.slice(0, 10)"
            :key="hotcity.id"
            @click="pickCity(hotcity)"
          >{{hotcity.nm}}</div>
        </div>
      </section>

      <section
        v-for="(item, key) in cities"
        :key="key"
      >
        <div :ref="key" class="city-title city-title-letter">{{key}}</div>
        <div class="city-list city-list-block clearfix">
          <div class="city-item"
            v-for="city in item"
            :key="city.id"
            @click="pickCity(city)"
          >{{city.nm}}</div>
        </div>
      </section>

    </div>
  </section>
  <section class="nav">
    <div class="nav-item"
      @click="scrollToElement('locate')"
    >定位</div>
    <div class="nav-item"
      @click="scrollToElement('hot')"
      ref="navhot"
    >热门</div>
    <div class="nav-letter nav-item"
      v-for="(city, key) in cities"
      :key="key"
      @click="scrollToElement(key)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{key}}</div>
  </section>
</div>
</template>

<script>
import http from 'utils/http'
import _ from 'lodash'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      cities: {},
      hotcities: []
    }
  },

  async created() {
    let result = await http.get({ url: '/dianying/cities.json' })

    this.hotcities = result.cts

    let cities = _.groupBy(result.cts, (value) => {
      return value.py.substring(0, 1).toUpperCase()
    })

    let newCities = Object.keys(cities).sort().reduce((obj, value) => {
      obj[value] = cities[value]
      return obj
    }, {})

    this.cities = newCities

    this.letterArray = Object.keys(this.cities)
    this.size = this.letterArray.length
  },

  methods: {
    pickCity({id, nm}) {
      this.$store.dispatch('changeCity', {
        id,
        nm
      })
      this.$router.push('/home')
    },

    scrollToElement(key) {
      this.bScroll.scrollToElement(this.$refs[key][0] || this.$refs[key])
    },

    handleTouchStart() {
      // console.log('start')
    },

    // handleTouchMove(e) {
    //   return _.throttle(() => {
    //     console.log(0)
    //   }, 1000)
    // },
    handleTouchMove: _.throttle(function(e) {
      let clientY = e.touches[0].clientY
      let pos = clientY - this.navHotPos - 35
      let index = Math.ceil(pos/this.letterHeight)
      
      if (index < this.size && index >= 0) {
        let letter = this.letterArray[index]
        this.bScroll.scrollToElement(this.$refs[letter][0])
      }
    }, 100),

    handleTouchEnd() {
      // console.log('end')
    }
  },

  mounted() {
    this.bScroll = new BScroll('#city-list', {
      click: true
    })
    this.navHotPos = this.$refs['navhot'].getBoundingClientRect().top
    this.letterHeight = this.$refs['navhot'].offsetHeight
  },
}
</script>

<style lang="stylus" scoped>
#city-list
  padding-right .2rem
.nav
  z-index 10000
</style>