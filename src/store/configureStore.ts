/// <reference path="../../typings/redux/redux.d.ts" />

import { Store, createStore } from 'redux';
import rootReducer from '../reducers/index'

export default function configureStore(initialState: any): Store {
    const store = createStore(rootReducer, initialState);

    // function HMR(hot: any, require: Function) {
    //     if (hot) {
    //         // Enable Webpack hot module replacement for reducers
    //         hot.accept('../reducers', () => {
    //             const nextReducer = require('../reducers')
    //             store.replaceReducer(nextReducer)
    //         })
    //     }
    // }

    // HMR(eval('module && module.hot'), eval('require'));

    return store;
}
