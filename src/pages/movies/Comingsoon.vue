<template>
  <MovieList @onmessage="handleMessage">
    <MostExpected></MostExpected>
    <div class="coming-list">
      <div>
        <p class="group-date">9月5日 周四</p>
        <MovieItem v-for="movie in movieList" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </MovieList>
</template>

<script>
import _ from "lodash";
import http from "utils/http";
import movieMixin from 'mixins/movie'
import MostExpected from "./MostExpected";
import MovieList from "components/movie_list/MovieList";
import MovieItem from "components/movie_list/MovieItem";

export default {
  mixins: [movieMixin],
  
  data() {
    return {
      movieList: [],
      finished: false,
      loading: false
    }
  },

  async created() {
    let result = await http.get({
      url: "/ajax/comingList?ci=1&token=&limit=" + this.limit
    })
    this.movieList = result.coming
    this.movieIds = result.movieIds.slice(this.limit)
    this.chunkedMovieIds = _.chunk(this.movieIds, this.limit)
  },

  components: {
    MostExpected,
    MovieList,
    MovieItem
  }
}
</script>