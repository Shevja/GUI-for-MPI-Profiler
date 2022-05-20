import React, {Component} from "react";
import Header from "./elements/header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./elements/home";
import Bullet from "./charts/Bullet";
import Heat from "./charts/Heat";
import Heatmap from "./charts/Heatmap";
import Bar from "./charts/Bar";
import Line from "./charts/Line";

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
                        <Route path="/bullet" element={ <Bullet data={ this.state.loadedFile }/> } />
                        <Route path="/line" element={ <Line data={ this.state.loadedFile }/> } />
                </Routes>
            </div>
        )
    };
}

export default Body;