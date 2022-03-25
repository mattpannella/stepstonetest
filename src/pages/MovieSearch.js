import React from 'react'
import SearchPage from './SearchPage'
import MovieList from './renderers/MovieList'

class MovieSearch extends SearchPage {

    printResults = () => {
        var output = (
            <div className="row mb-1">
                <MovieList movies={this.state.results}></MovieList>
            </div>
        )

        return output
    }
}

export default MovieSearch