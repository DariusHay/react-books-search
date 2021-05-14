import React from "react";
import API from "../utils/API";
import Nav from "../components/Nav"
import Search from "../components/Form"
import Results from "../components/Results"

class Home extends React.Component {
    state = {
        search: '',
        results: [],
        chosen: [],
    }

    componentDidMount() {
        API.Search('destiny')
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
            .catch(err => console.log(err));    
    }

    render() {
        return (
            <div>
                <Nav />
                <hr></hr>
                <Search 
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
                <Results 
                res={this.state.results}/>
            </div>
        )
    }
}

export default Home;