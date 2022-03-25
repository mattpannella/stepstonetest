import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import Util from '../util'

class SearchPage extends Component {

    constructor(props) {
        super(props)

        this.service = props.service

        this.state = {
            searchText: '',
            results: []
        }
    }

    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setPage =(number) =>{
        if(number > 0 && number <= this.state.total_pages) {
            this.loadData(this.state.searchText, number)
        }
    }

    handleSubmit = async (e)=> {
        e.preventDefault()
        this.setState({
            error: false,
            error_message: ""
        })
        this.loadData(this.state.searchText, 1)
    }

    loadData = async (query, page) => {
        this.setState({
            error: false,
            error_message: ""
        })
        var response = await this.service.getData(query, page)
        if(response) {
            this.setState({
                results: response.data.results,
                page: response.data.page,
                total_pages: response.data.total_pages,
                total_results: response.data.total_results
            })
        } else {
            this.setState({
                error: true,
                error_message: "An error occured when loading the data."
            })
        }
    }

    //override to print nice results
    printResults = () => {
        var output = (
            <div className="container">
                <code className="pre-scrollable">
                    {JSON.stringify(this.state.results)}
                </code>
            </div>
        )

        return output
    }

    render() {
        const {searchText, page, total_pages, total_results, error, error_message} = this.state
        let pages = [];
        var output = "";
        if(error) {
            output = (
                <div>
                    <Alert variant="warning">{error_message}</Alert>
                </div>
            )
        } else {
            if(total_pages > 0) {
                pages.push(
                    <Pagination.First key="start" onClick={() => this.setPage(1)} />,
                    <Pagination.Prev key="-1" onClick={() => this.setPage(page-1)} />
                )
                var limit = Util.paginationHelper(total_pages, page, 8)
                limit.forEach((n,i) => {
                    if(n !== 0) {
                        pages.push(
                            <Pagination.Item data-page={n} key={n} active={n === page} onClick={() => this.setPage(n)}>
                            {n}
                            </Pagination.Item>
                        );
                    } else {
                        pages.push(
                            <Pagination.Ellipsis key={`...${i}`} disabled />
                        )
                    }
                });
                pages.push(
                    <Pagination.Next key="+1" onClick={() => this.setPage(page+1)}/>,
                    <Pagination.Last key="end" onClick={() => this.setPage(total_pages)}/>
                )
            }
            output = (
                <>
                    <div className="row mb-1">
                        <Pagination>{pages}</Pagination>
                    </div>
                    {this.printResults()}
                    <div className="row justify-content-center mb-1"> 
                        {
                            (total_results) ? "Total Results: " + total_results:""
                        }
                    </div>
                    <div className="row">
                        <Pagination>{pages}</Pagination>
                    </div>
                    
                </>
            )
        }
        return (
            <div className="container-xxl">
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="justify-content-center">
                            <Form.Group className="col-md-4 offset-md-4" controlId="searchField">
                                <Form.Control className="mb-1" type="text" name="searchText" value={searchText} 
                                    onChange= {this.handleChange} placeholder="Search Text">
                                </Form.Control>
                            </Form.Group>
                            <Button type="submit" variant="primary">Search</Button>
                        </div>
                    </form>
                </div>
                {output}
            </div>
        )
    }
}

export default SearchPage