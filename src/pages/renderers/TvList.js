import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import format from 'date-fns/format'

class TvList extends Component {

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
        const shows = this.props.shows
        if(shows === undefined || shows.length === 0) {
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
                                <th className="col-md-3">Name</th>
                                <th className="col-md-6">Overview</th>
                                <th className="col-md-2">First Air Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            shows.map(show => 
                                <tr key={show.id}>
                                    <td className="col-md-1">
                                    <Form.Check 
                                        type='checkbox'
                                        id={`owned-${show.id}`}
                                        data-id={show.id}
                                        onChange={this.toggleOwned}
                                        checked={!!this.state.owned[show.id]}
                                    />
                                    </td>
                                    <td className="col-md-3">{show.name}</td>
                                    <td className="col-md-6">{show.overview}</td>
                                    <td className="col-md-2">
                                        {
                                            (!show.first_air_date || show.first_air_date==="") ? "-":format(new Date(show.first_air_date), "PP")
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

export default TvList