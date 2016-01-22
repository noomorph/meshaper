/// <reference path="../../typings/redux/redux.d.ts" />

declare var module: any;
declare var require: (modulePath: string) => any;

import { Store, Reducer, createStore } from 'redux';
import rootReducer from '../reducers/index'

export default function configureStore(initialState?: any): Store {
    const store = createStore(rootReducer, initialState);

     if (module.hot) {
         module.hot.accept('../reducers', () => {
             const nextReducer = require('../reducers') as Reducer;
             store.replaceReducer(nextReducer);
         });
     }

    return store;
}
