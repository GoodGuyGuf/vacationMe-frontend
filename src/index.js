import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import Home from './components/Home/Home.js';
import Profile from './components/Profile/Profile.js';
import PostReducer from './reducers/PostReducer.js';
import './css/index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(PostReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>

      <Route exact path="/" component={App}/>
        {localStorage.getItem('loggedIn') !== null ? <Redirect to="/home" /> : null}

      <Route exact path="/home" component={Home}/>
        {localStorage.getItem('loggedIn') === null ? <Redirect to="/" /> : null}

      <Route exact path="/profile" component={Profile}/>
      
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
