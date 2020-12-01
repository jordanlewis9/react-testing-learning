import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

// With ES6 destructuring, we can assign props.initialState to have a default value
// of {} if none is passed
export default ({ children, initialState = {}}) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}
    </Provider>
  )
}