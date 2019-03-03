import React, { Component } from 'react';
import { Route } from "react-router-dom";

class RouteItem extends Component {
    render() {
        let { path, component, exact } = this.props
        return (
            <Route path={path} component={component} {...exact ? "exact" : ""} />
        );
    }
}

export default RouteItem;