/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/redux/redux.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />
/// <reference path="../typings/history/history.d.ts" />

import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import configureStore from './utils/store';
import 'main.css';

import WordTrainingPage from './pages/TrainingPage';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={createHistory()}>
            <Route path="/" component={WordTrainingPage} />
            <Route path="/training" component={WordTrainingPage} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
