import React from 'react'
import SearchPage from './SearchPage'
import TvList from './renderers/TvList'

class TvSearch extends SearchPage {

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