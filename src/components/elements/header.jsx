import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/header.css"

const Header = ({isLoaded}) => {
    let style = isLoaded ? "styled-link" : "styled-link disabled"
    return (
        <div className="header-container">
            <nav>
                <ul>
                    <li><NavLink to='/' className="styled-link"><div>Загрузить файл</div></NavLink></li>
                    <li><NavLink to='/heat' className={ style }><div>Тепловая карта 1</div></NavLink></li>
                    <li><NavLink to='/heatmap' className={ style }><div>Тепловая карта 2</div></NavLink></li>
                    <li><NavLink to='/bullet' className={ style }><div>-</div></NavLink></li>
                    <li><NavLink to='/line' className={ style }><div>-</div></NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header