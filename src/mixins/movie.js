const movieMixin = {
  beforeCreate() {
    let from = this.$route.name === 'intheater' ? 'intheaters' : 'comingsoon'
    this.page = this.$store.state[from].page
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

        await this.$store.dispatch('loadMoreData', { 
          limit: this.limit, 
          movieIds: this.chunkedMovieIds[this.page].join(','),
          page: this.page + 1,
          from: this.$route.name
        })

        let from
        let type
        if (this.$route.name === 'intheater') {
          from = 'intheaters'
          type = 'movieList'
        } else {
          from = 'comingsoon'
          type = 'coming'
        }
        
        let result = this.$store.state[from].data
  
        this.movieList = result[type]
  
        this.$nextTick(() => {
          bScroll.refresh()
          bScroll.finishPullUp()
          this.page++
        })
      }
    },
    
    handleReceiveScroll(bScroll) {
      this.bScroll = bScroll
    }
  },
}

export default movieMixin