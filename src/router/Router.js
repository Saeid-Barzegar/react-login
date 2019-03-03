import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Routes from "./Routes";
import RouteItem from "./RouteItem";

class Router extends Component {
    render() {
        return (
            <Switch>
                {Routes.map((route, index) => <RouteItem key={index} {...route} />)}
            </Switch>
        );
    }
}

export default Router;