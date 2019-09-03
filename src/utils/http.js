import axios from 'axios'

export default {
  get({url}) {
    return axios({
      url
    })
    .then((result) => {
      return result.data
    })
  }
}