import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';


const Store = createStore(
   allReducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

ReactDOM.render(
 
  <React.StrictMode>
     <Provider store={Store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

