import React, {Component} from "react";
import Header from "./elements/header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import FirstGraph from "./elements/firstGraph";
import HomePage from "./elements/home";

class Body extends Component {
    constructor() {
        super();
        this.state = {
            loadedFile: [],
            isLoaded: false
        }
    };

    handleLoad = (inputFile) => {
        this.setState({
            loadedFile: inputFile,
            isLoaded: true
        })
    };

    render() {
        return (
            <div>
                <Header isLoaded={ this.state.isLoaded } />
                <Routes>
                        <Route path="/" element={ <HomePage handleLoad={ this.handleLoad } /> } />
                        <Route path="/firstGraph" element={ <FirstGraph/> } />
                        <Route path="/firstGraph2" element={ <FirstGraph/> } />
                </Routes>
            </div>
        )
    };
}

export default Body;