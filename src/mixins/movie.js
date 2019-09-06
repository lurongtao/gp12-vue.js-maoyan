import http from "utils/http"

const movieMixin = {
  beforeCreate() {
    this.page = 0
    this.movieIds = []
    this.chunkedMovieIds = []
    this.limit = 10
  },

  computed: {
    city() {
      return this.$store.state.city.id
    }
  },

  methods: {
    async handleMessage(bScroll) {
      if (this.chunkedMovieIds[this.page]) {
        let result = await http.get({
          url: "/ajax/moreComingList?ci=" + this.city + "&token=&limit=" + this.limit + "&movieIds=" + this.chunkedMovieIds[this.page].join(',')
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
    }
  },
}

export default movieMixin