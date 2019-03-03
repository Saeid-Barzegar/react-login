import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import main Style
import './assets/scss/Style.scss'

import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from './store/reducers/'
import { devToolsEnhancer } from "redux-devtools-extension";

const Store = createStore(Reducer, devToolsEnhancer())



ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
