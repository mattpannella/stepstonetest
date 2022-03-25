import axios from 'axios'

class ApiService {

  /**
   * Base class for the api service
   * @constructor
   */
  constructor(api_key) {
    if(api_key === undefined || api_key.length === 0) {
      throw new Error("Missing api key!")
    }
    this.api_key = api_key
    this.base_url = "https://api.themoviedb.org/3/"
  }

  /**
   * Make a get call to the given endpoint
   * @param {string} endpoint
   * @param {string} query
   * @param {number} page
   * @returns {(Promise|bool)} bool on failure
   */
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