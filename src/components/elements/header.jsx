import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/header.css"

const Header = (isLoaded) => {
    console.log(isLoaded)
    return (
        <div className="header-container">
            <nav>
                <ul>
                    <li><NavLink to='/' className="styled-link"><div>Home</div></NavLink></li>
                    <li><NavLink to='/firstGraph' className={ isLoaded ? "styled-link" : "styled-link disabled"}><div>1</div></NavLink></li>
                    <li><NavLink to='/firstGraph2' className={ isLoaded ? "styled-link" : "styled-link disabled"}><div>2</div></NavLink></li>
                    <li><NavLink to='#' className={ isLoaded ? "styled-link disabled" : "styled-link"}><div>4</div></NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header