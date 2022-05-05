import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/header.css"

const Header = ({isLoaded}) => {
    let style = isLoaded ? "styled-link" : "styled-link disabled"
    return (
        <div className="header-container">
            <nav>
                <ul>
                    <li><NavLink to='/' className="styled-link"><div>Home</div></NavLink></li>
                    <li><NavLink to='/firstGraph' className={ style }><div>1</div></NavLink></li>
                    <li><NavLink to='/firstGraph2' className={ style }><div>2</div></NavLink></li>
                    <li><NavLink to='#' className={ style }><div>4</div></NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header