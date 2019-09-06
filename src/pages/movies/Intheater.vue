<template>
  <MovieList @onmessage="handleMessage">
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

  async created() {
    let result = await http.get({ url: "/ajax/movieOnInfoList?token=&ci=" + this.city })
    if (result.movieList.length > 0) {
      this.movieList = result.movieList
  
      this.movieIds = result.movieIds.slice(this.limit + 2)
      this.chunkedMovieIds = _.chunk(this.movieIds, this.limit)
    }
  }
};
</script>

<style lang="stylus" scoped></style>