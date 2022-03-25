import ApiService from './ApiService'

class MovieSearchService extends ApiService {

    getData = async (query, page) => {
        return await this.fetchData('search/movie', query, page)
      }
}

export default MovieSearchService