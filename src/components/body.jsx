import React, {Component} from "react";
import Header from "./elements/header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import FirstGraph from "./elements/firstGraph";

class Body extends Component {
    constructor() {
        super();
        this.state = {}
    };

    render() {
        return (
            <div>
                <Header/>
                <Routes>
                        <Route path="/firstGraph" element={ <FirstGraph/> } />
                        <Route path="/firstGraph2" element={ <FirstGraph/> } />
                </Routes>
            </div>
        )
    };
}

export default Body;