import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

// With ES6 destructuring, we can assign props.initialState to have a default value
// of {} if none is passed
export default ({ children, initialState = {}}) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}