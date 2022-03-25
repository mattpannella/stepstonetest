import React from 'react'
import SearchPage from './SearchPage'
import MovieList from './renderers/MovieList'

class MovieSearch extends SearchPage {

    /**
     * Generate output for displaying the results of the api service call
     * @returns {JSX}
     */
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