import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/header.css"

const Header = ({isLoaded}) => {
    let style = isLoaded ? "styled-link" : "styled-link disabled"
    return (
        <div className="header-container">
            <nav>
                <ul>
                    <li><NavLink to='/' className={({ isActive }) => isActive? "styled-link disabled" : "styled-link" }><div>Загрузить файл</div></NavLink></li>
                    <li><NavLink to='/heat' className={({ isActive }) => isActive? "styled-link disabled" : style }><div>Тепловая карта 1</div></NavLink></li>
                    <li><NavLink to='/heatmap' className={({ isActive }) => isActive? "styled-link disabled" : style }><div>Тепловая карта 2</div></NavLink></li>
                    <li><NavLink to='/timeline' className={({ isActive }) => isActive? "styled-link disabled" : style }><div>Временная шкала</div></NavLink></li>
                    {/* <li><NavLink to='/test' className={({ isActive }) => isActive? "styled-link disabled" : style }><div>test</div></NavLink></li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Header