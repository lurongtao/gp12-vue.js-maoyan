<template>
  <MovieList @onmessage="handleMessage">
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

  computed: {
    comingList() {
      let groupedList = _.groupBy(this.movieList, (value) => {
        return value.comingTitle
      })
      return groupedList
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