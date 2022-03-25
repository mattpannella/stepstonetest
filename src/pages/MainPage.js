import React, { Component } from 'react'
import SearchPageFactory from '../factory/SearchPageFactory'
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Util from '../util'

class MainPage extends Component {

    /**
     * Main page for hosting search pages
     * @constructor
     */
    constructor(props) {
        super(props)

        this.state = {
            searchType: Util.MOVIE_SEARCH
        }
    }

    /**
     * Handle change on select element for choosing search page
     * @param e - The event
     */
    handleChange = (e) => {
        this.setState({
            searchType: e.target.value
        })
    }

    /**
     * Render the page
     */
    render() {
        var page = SearchPageFactory.getSearchPage(this.state.searchType)
        return (
            <>
            <Navbar className="tmdb-header mb-4">
                <Container >
                    <Navbar.Brand href="#">
                        <img alt="TMDB Logo" src="logo.svg" height="36" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className="container-xxl">
                <div className="row mb-2">
                    <div className="justify-content-center">
                        <Form.Group className="col-md-4 offset-md-4">
                            <Form.Select value={this.state.searchType} onChange={this.handleChange} aria-label="Search Endpoint">
                                <option value={Util.MOVIE_SEARCH}>Movie Search</option>
                                <option value={Util.TV_SEARCH}>TV Search</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
            </div>
            {page}
            </>
        )
    }
}

export default MainPage