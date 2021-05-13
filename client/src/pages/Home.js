import React from "react";
// import API from "../utils/API";
import Nav from "../components/Nav"

class Home extends React.Component {
    state = {
        search: '',
        results: [],
        chosen: [],
    }

    componentDidMount() {
        // API.Search('destiny')
        //     .then((res) => this.setState({ results: res.data.items }))
        //     .then(() => console.log(this.state.results))
        console.log('hello')
    }

    render() {
        return (
            <div>
                <Nav />
                <hr></hr>
                <Home />
            </div>
        )
    }
}

export default Home;