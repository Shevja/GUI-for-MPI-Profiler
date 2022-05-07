import React, {Component} from "react";
import Header from "./elements/header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import FirstGraph from "./charts/firstGraph";
import HomePage from "./elements/home";
import Heatmap from "./charts/Heatmap";

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
                        <Route path="/" element={ <HomePage isLoaded={ this.state.isLoaded } handleLoad={ this.handleLoad } /> } />
                        <Route path="/firstGraph" element={ <FirstGraph data={ this.state.loadedFile }/> } />
                        <Route path="/heatmap" element={ <Heatmap data={ this.state.loadedFile }/> } />
                </Routes>
            </div>
        )
    };
}

export default Body;