<template>
  <section id="city-list" class="city-list-container" style="display: block;">
    <section>
      <div id="locate" class="city-title">定位城市</div>
      <div class="city-list city-list-inline clearfix">
        <div class="location-city">定位失败，请点击重试</div>
      </div>
    </section>

    <section class="history-city-list"></section>

    <section>
      <div id="hot" class="city-title">热门城市</div>
      <div class="city-list city-list-inline clearfix">
        <div class="city-item" data-nm="上海" data-id="10">上海</div>
      </div>
    </section>

    <section>
      <div id="A" class="city-title city-title-letter">A</div>
      <div class="city-list city-list-block clearfix">
        <div class="city-item" data-nm="阿拉善盟" data-id="150">阿拉善盟</div>

        <div class="city-item" data-nm="鞍山" data-id="151">鞍山</div>

      </div>
    </section>

    <section class="nav">
      <div class="nav-item" data-id="locate">定位</div>
      <div class="nav-item" data-id="hot">热门</div>
      <div class="nav-letter nav-item" data-id="A"
        v-for="(letter, key) in cities"
        :key="key"
      >{{key}}</div>
    </section>
  </section>
</template>

<script>
import http from 'utils/http'
import _ from 'lodash'
export default {
  data() {
    return {
      cities: {}
    }
  },

  async created() {
    let result = await http.get({ url: '/dianying/cities.json' })
    
    let cities = _.groupBy(result.cts, (value) => {
      return value.py.substring(0, 1).toUpperCase()
    })

    let newCities = Object.keys(cities).sort().reduce((obj, value) => {
      obj[value] = cities[value]
      return obj
    }, {})

    this.cities = newCities
  },


}
</script>