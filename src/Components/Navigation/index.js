import React, { Component } from 'react';
import Navs from "./Navs";
import NavItem from "./NavItem";

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    {Navs.map((nav, index) => <NavItem key={index} {...nav} />)}
                </ul>
            </nav>
        );
    }
}

export default Navigation;