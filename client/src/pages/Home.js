import React from "react";
import API from "../utils/API";

import Search from "../components/Form";
import Results from "../components/Results";
import Details from "../components/Details"

class Home extends React.Component {
    state = {
        search: '',
        results: [],
        detailed: [],
        detailBool: false
    }

    componentDidMount() {
        API.Search('')
            .then((res) => this.setState({ results: res.data.items }))
            .then(() => console.log(this.state.results))
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = async event => {
        event.preventDefault();
        await API.Search(this.state.search)
            .then(res => this.setState({ results: res.data.items }))
            .then(() => this.setState({ detailBool: false }))
            .catch(err => console.log(err));
    }

    switch = async (event) => {
        event.preventDefault();
        await this.setState({ detailBool: false });
        console.log(this.state.search);
    }

    detail = async (id) => {
        await this.state.results.forEach(element => {
            if (id === element.etag) {
                this.setState({ detailed: element });
            }
        });
        this.setState({ detailBool: true })
        console.log(this.state.detailed);
    }

    render() {
        return (
            <div>
                <hr></hr>
                <Search
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                {this.state.detailBool ? <>
                    <Details 
                    card={this.state.detailed}
                    switch={this.switch}/> </> : ( <>
                        <Results
                            res={this.state.results}
                            details={this.detail}
                        /> </>

                    )}

            </div>
        )
    }
}

export default Home;