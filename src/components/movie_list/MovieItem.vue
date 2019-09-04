<template>
  <div class="item">
    <div class="main-block">
      <div class="avatar" sort-flag>
        <div class="default-img-bg">
          <img :src="movie.img | wh" onerror="this.style.visibility='hidden'" />
        </div>
      </div>
      <div class="mb-outline-b content-wrapper">
        <div class="column content">
          <div class="box-flex movie-title">
            <div class="title line-ellipsis v3dimax_title">{{movie.nm}}</div>
            <span class="version" :class="movie.version"></span>
          </div>
          <div class="detail column">
            <div class="score line-ellipsis" v-if="movie.showst===3">
              <span class="score-suffix">观众评</span>
              <span class="grade">{{movie.sc}}</span>
            </div>
            <div class="score line-ellipsis" v-else-if="movie.showst===4 || movie.showst===1">
              <span class="grade">{{movie.wish}}</span>
              <span class="score-suffix">人想看</span>
            </div>
            <div class="actor line-ellipsis">主演: {{movie.star}}</div>
            <div class="show-info line-ellipsis">{{movie.showInfo || movie.rt + '上映'}}</div>
          </div>
        </div>
        <MovieButton :showst="movie.showst" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieButton from "./MovieButton";
export default {
  props: ['movie'],
  
  components: {
    MovieButton
  }
}
</script>