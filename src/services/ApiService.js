import axios from 'axios'

class ApiService {

  constructor(api_key) {
    if(api_key === undefined || api_key.length === 0) {
      throw new Error("Missing api key!")
    }
    this.api_key = api_key
    this.base_url = "https://api.themoviedb.org/3/"
  }

  fetchData = async (endpoint, query, page) => {
      try {
          const url = this.base_url + endpoint + '?api_key=' + this.api_key + '&query=' + query + '&page=' + page;
          return await axios.get(url)
      } catch (error) {
          return false
      }
  }
}

export default ApiService