import ApiService from './ApiService'

class TvSearchService extends ApiService {

  /**
   * Make a get call to the search/tv endpoint
   * @param {string} query
   * @param {number} page
   * @returns {(Promise|bool)} bool on failure
   */
  getData = async (query, page) => {
      return await this.fetchData('search/tv', query, page)
    }
}

export default TvSearchService