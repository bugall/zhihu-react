import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory, createHistory } from 'history';
import { Router, Route, RouterContext } from 'react-router';

import App from './components';

const getComponentA = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./components/componentB'));
    });
}

const getComponentB = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./components/componentB'));
    });
}

const history = createHistory();

const Root = function() {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
              
                <Route path="cb" getComponent={getComponentB} />
            </Route>
        </Router>
    )
};  

const wrap = document.createElement('div');
document.body.appendChild(wrap);

ReactDOM.render(
    <Root/>,
    document.body
);