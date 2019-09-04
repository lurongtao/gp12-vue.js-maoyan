<template>
  <MovieList>
    <van-list 
      v-model="loading" 
      :finished="finished" 
      finished-text="没有更多了" 
      @load="onLoad"
      direction="up"
    >
      <MostExpected></MostExpected>
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <div class="coming-list">
        <van-cell>
          <p class="group-date">9月5日 周四</p>
          <MovieItem v-for="movie in movieList" :key="movie.id" :movie="movie" />
        </van-cell>
      </div>
    </van-list>
  </MovieList>
</template>

<script>
import Vue from "vue"
import { List, Cell } from "vant"
Vue.use(List).use(Cell)

import _ from "lodash";
import http from "utils/http";
import MostExpected from "./MostExpected";
import MovieList from "components/movie_list/MovieList";
import MovieItem from "components/movie_list/MovieItem";

export default {
  beforeCreate() {
    this.movieIds = [];
    this.chunkedMovieIds = [];
    this.limit = 10;
  },

  data() {
    return {
      movieList: [],
      finished: false,
      loading: false
    }
  },

  methods: {
    onLoad() {

    }
  },

  async created() {
    let result = await http.get({
      url: "/ajax/comingList?ci=1&token=&limit=" + this.limit
    });
    this.movieList = result.coming;
    this.movieIds = result.movieIds.slice(this.limit - 1);
    this.chunkedMovieIds = _.chunk(this.movieIds, this.limit);
  },

  components: {
    MostExpected,
    MovieList,
    MovieItem
  }
};
</script>