import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//import the main App
import App from './components/App';
import reducers from './reducers';
//create the data store to hold the state of application
const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  //hook up the data store by placing the provider tag
  //provider reads from the data store and updates the state in the App component
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
