import ApiService from './ApiService'

class MovieSearchService extends ApiService {

  /**
   * Make a get call to the search/movie endpoint
   * @param {string} query
   * @param {number} page
   * @returns {(Promise|bool)} bool on failure
   */
  getData = async (query, page) => {
      return await this.fetchData('search/movie', query, page)
    }
}

export default MovieSearchService