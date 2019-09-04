import http from "utils/http"

const movieMixin = {
  beforeCreate() {
    this.page = 0
    this.movieIds = []
    this.chunkedMovieIds = []
    this.limit = 10
  },

  methods: {
    async handleMessage(bScroll) {
      let result = await http.get({
        url: "/ajax/moreComingList?ci=1&token=&limit=" + this.limit + "&movieIds=" + this.chunkedMovieIds[this.page].join(',')
      })

      this.movieList = [
        ...this.movieList,
        ...result.coming
      ]

      this.$nextTick(() => {
        bScroll.refresh()
        bScroll.finishPullUp()
        this.page++
      })
    }
  },
}

export default movieMixin