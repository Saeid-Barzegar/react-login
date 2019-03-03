import React, { Component } from 'react';
import Router from './router/Router'
import Navigation from './Components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
