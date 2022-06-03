import React, {Component} from "react";
import Header from "./elements/header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./elements/home";
import Heat from "./charts/Heat";
import Heatmap from "./charts/Heatmap";
import Timeline from "./charts/Timeline";
import Test from "./charts/testScroll";

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
                        <Route path="/heat" element={ <Heat data={ this.state.loadedFile }/> } />
                        <Route path="/heatmap" element={ <Heatmap data={ this.state.loadedFile }/> } />
                        <Route path="/timeline" element={ <Timeline data={ this.state.loadedFile }/> } />
                        <Route path="/test" element={ <Test data={ this.state.loadedFile }/> } />
                </Routes>
            </div>
        )
    };
}
export default Body;