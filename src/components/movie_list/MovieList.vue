<template>
  <div class="page-wrap">
    <div class="tab-block">
      <div class="tab-content">
        <div class="page n-hot active">
          <div class="list-wrap" style="margin-top: 0px;">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "utils/http";
import MovieItem from "./MovieItem";
export default {
  data() {
    return {
      movieList: []
    };
  },

  async created() {
    let result = await http.get({ url: "/ajax/movieOnInfoList?token=" });
    this.movieList = result.movieList;
  },

  components: {
    MovieItem
  }
};
</script>

<style lang='stylus' scoped>
.page-wrap
  height 100%
  .tab-block
    height 100%
    .tab-content
      overflow-y scroll
      position relative
      height 100%
      .page
        height 100%
</style>