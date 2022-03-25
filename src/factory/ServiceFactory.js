import MovieSearchService from "../services/MovieSearchService"
import TvSearchService from "../services/TvSearchService"
import Util from '../util'

class ServiceFactory {

    static api_key = process.env.REACT_APP_APIKEY

    static getService(key) {
        switch(key) {
            case Util.MOVIE_SEARCH:
                return new MovieSearchService(this.api_key)
            case Util.TV_SEARCH:
                return new TvSearchService(this.api_key)
            default:
                throw new Error("Unknown Service")
        }
    }
}

export default ServiceFactory