import React from 'react'
import SearchPage from './SearchPage'
import TvList from './renderers/TvList'

class TvSearch extends SearchPage {

    /**
     * Generate output for displaying the results of the api service call
     * @returns {JSX}
     */
    printResults = () => {
        var output = (
            <div className="row mb-1">
                <TvList shows={this.state.results}></TvList>
            </div>
        )

        return output
    }
}

export default TvSearch