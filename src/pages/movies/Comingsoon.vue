<template>
  <MovieList @onmessage="handleMessage" @onreceivescroll="handleReceiveScroll">
    <MostExpected></MostExpected>
    <div class="coming-list">
      <div v-for="(list, key) in comingList" :key="key">
        <p class="group-date">{{key}}</p>
        <MovieItem v-for="movie in list" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </MovieList>
</template>

<script>
import _ from "lodash"
import http from "utils/http"
import movieMixin from 'mixins/movie'
import MostExpected from "./MostExpected"
import MovieList from "components/movie_list/MovieList"
import MovieItem from "components/movie_list/MovieItem"

export default {
  mixins: [movieMixin],
  
  data() {
    return {
      movieList: [],
      finished: false,
      loading: false
    }
  },

  computed: {
    comingList() {
      let groupedList = _.groupBy(this.movieList, (value) => {
        return value.comingTitle
      })
      return groupedList
    }
  },

  async mounted() {
    if (this.$store.state.comingsoon.page === 0) {
      await this.$store.dispatch('loadComingsoonData', this.limit)
    }

    let result = this.$store.state.comingsoon.data
    this.movieList = result.coming

    this.movieIds = result.movieIds.slice(this.limit)
    this.chunkedMovieIds = _.chunk(this.movieIds, this.limit)

    this.$nextTick(() => {
      this.bScroll.refresh()
      this.bScroll.scrollTo(0, this.$store.state.position, 0)
    })
  },

  components: {
    MostExpected,
    MovieList,
    MovieItem
  }
}
</script>