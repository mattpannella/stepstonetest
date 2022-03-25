import ApiService from './ApiService'

class TvSearchService extends ApiService {

    getData = async (query, page) => {
        return await this.fetchData('search/tv', query, page)
      }
}

export default TvSearchService