import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/header.css"

const Header = () => {
    return (
        <div className="header-container">
            <nav>
                <ul>
                    <li><NavLink to='/firstGraph' className="styled-link"><div>1</div></NavLink></li>
                    <li><NavLink to='/firstGraph2' className="styled-link"><div>2</div></NavLink></li>
                    <li><NavLink to='/' className="styled-link"><div>3</div></NavLink></li>
                    <li><NavLink to='#' className="styled-link"><div>4</div></NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header