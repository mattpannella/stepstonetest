import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import format from 'date-fns/format'

class MovieList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            owned: []
        }
    }

    toggleOwned = (e)=> {
        const owned = this.state.owned
        const id = e.target.dataset.id;
        owned[id] = e.target.checked
        this.setState({
            owned: owned
        })
    }

    render() {
        const movies = this.props.movies
        if(movies === undefined || movies.length === 0) {
            return (
                <div>No Results</div>
            )
        } else {
            return (
                <div className="container-fluid">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="col-md-1">Owned</th>
                                <th className="col-md-3">Title</th>
                                <th className="col-md-6">Overview</th>
                                <th className="col-md-2">Release Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            movies.map(movie => 
                                <tr key={movie.id}>
                                    <td className="col-md-1">
                                    <Form.Check 
                                        type='checkbox'
                                        id={`owned-${movie.id}`}
                                        data-id={movie.id}
                                        onChange={this.toggleOwned}
                                        checked={!!this.state.owned[movie.id]}
                                    />
                                    </td>
                                    <td className="col-md-3">{movie.title}</td>
                                    <td className="col-md-6">{movie.overview}</td>
                                    <td className="col-md-2">
                                        {
                                            (!movie.release_date || movie.release_date==="") ? "-":format(new Date(movie.release_date), "PP")
                                        }
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

export default MovieList