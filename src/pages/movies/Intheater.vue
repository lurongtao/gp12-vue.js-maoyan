<template>
  <MovieList @onmessage="handleMessage" @onreceivescroll="handleReceiveScroll">
    <movieItem v-for="movie in movieList" :key="movie.id" :movie="movie" />
  </MovieList>
</template>

<script>
import _ from 'lodash'
import http from "utils/http";
import movieMixin from 'mixins/movie'
import MovieItem from "components/movie_list/MovieItem";
import MovieList from "components/movie_list/MovieList";
export default {
  mixins: [movieMixin],

  components: {
    MovieList,
    MovieItem
  },

  data() {
    return {
      movieList: []
    }
  },

  render() {

  },

  async created() {
    if (this.$store.state.intheaters.page === 0) {
      await this.$store.dispatch('loadIntheaterData')
    }

    let result = this.$store.state.intheaters.data

    if (result.movieList.length > 0) {
      this.movieList = result.movieList
  
      this.movieIds = result.movieIds.slice(this.limit + 2)
      this.chunkedMovieIds = _.chunk(this.movieIds, this.limit)

      this.$nextTick(() => {
        this.bScroll.refresh()
        this.bScroll.scrollTo(0, this.$store.state.position, 0)
      })
    }
  }
};
</script>

<style lang="stylus" scoped></style>