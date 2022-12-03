import React from 'react';
import {NavLink} from "react-router-dom";
import './navbar.css'

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <NavLink to="/">
                        <li><a>	Dashboard &#127968;</a></li>
                    </NavLink>
                    <NavLink to="/api">
                        <li><a>	API &#9881;</a></li>
                    </NavLink>
                </ul>
                
            </div>);
    }
}