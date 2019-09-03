<template>
  <MovieList>
    <movieItem v-for="movie in movieList" :key="movie.id" :movie="movie" />
  </MovieList>
</template>

<script>
import http from "utils/http";
import MovieItem from "components/movie_list/MovieItem";
import MovieList from "components/movie_list/MovieList";
export default {
  components: {
    MovieList,
    MovieItem
  },

  data() {
    return {
      movieList: []
    };
  },

  async created() {
    let result = await http.get({ url: "/ajax/movieOnInfoList?token=" });
    this.movieList = result.movieList;
  }
};
</script>

<style lang="stylus" scoped></style>