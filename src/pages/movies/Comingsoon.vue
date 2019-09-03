<template>
  <MovieList>
    <MostExpected></MostExpected>
    <div class="coming-list">
      <div>
        <p class='group-date'>9月5日 周四</p>
        <MovieItem v-for="movie in movieList" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </MovieList>
</template>

<script>
import http from "utils/http"
import MostExpected from './MostExpected'
import MovieList from 'components/movie_list/MovieList'
import MovieItem from 'components/movie_list/MovieItem'
export default {
  data() {
    return {
      movieList: []
    }
  },

  async created() {
    let result = await http.get({ url: "/ajax/movieOnInfoList?token=" })
    this.movieList = result.movieList
  },

  components: {
    MostExpected,
    MovieList,
    MovieItem
  }
}
</script>