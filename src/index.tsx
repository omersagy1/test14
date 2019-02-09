import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, Dispatch } from 'redux';
import { Provider } from 'react-redux';

import { Model, Action, update, inc, dec } from './model';
import { connect } from 'react-redux';


const store = createStore(update, {
  count: 0,
});

export const mapStateToProps = (m: Model) => {
  return { model: m }
};

export const mapDispatchToProps = (dispatch: Dispatch<Action> ) => {
  return {
    increment: () => dispatch(inc()),
    decrement: () => dispatch(dec()),
  }
}

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
