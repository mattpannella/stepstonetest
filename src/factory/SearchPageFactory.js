import React from 'react'
import MovieSearch from '../pages/MovieSearch';
import ServiceFactory from './ServiceFactory'
import TvSearch from '../pages/TvSearch';
import Util from '../util'

class SearchPageFactory {

    static getSearchPage(key) {
        var page=""
        switch(key) {
            case Util.MOVIE_SEARCH:
                page = (
                    <MovieSearch service={ServiceFactory.getService(key)}></MovieSearch>
                )
                break
            case Util.TV_SEARCH:
                page = (
                    <TvSearch service={ServiceFactory.getService(key)}></TvSearch>
                )
                break
            default:
                throw new Error("Unknown Page")
        }
        return page
    }
}

export default SearchPageFactory