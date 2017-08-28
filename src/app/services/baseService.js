import axios from 'axios'

export default class BaseService {
  
  static REMEMBER = true

  static get headers() {
    return {
      'Content-Type': 'application/json'
    }
  }

  static fetch(config) {
    return axios({ headers: {...config.headers }, ...config })
      .then((response) => {
        return response.data
      })
      .catch((e) => {
        alert(e)
      })
  }
}