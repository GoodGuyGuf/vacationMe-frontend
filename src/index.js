import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import App from './App';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home.js';
import Profile from './components/Profile/Profile.js';
import PostShow from './components/Posts/PostShow';
import PostEdit from './components/Posts/PostEdit';
import rootReducer from './reducers/CombineReducer.js';
import './css/index.css';
import * as serviceWorker from './serviceWorker';

const config = {key: "my-storage", storage}

const persistedReducer = persistReducer(config, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <Router>

        <Route exact path="/" component={App}/>
          {localStorage.getItem('loggedIn') !== null ? <Redirect to="/home" /> : null}

          <Route exact path="/signup" component={Signup}/>

          <Route exact path="/home" component={Home}/>
            {localStorage.getItem('loggedIn') === null ? <Redirect to="/" /> : null}

          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/posts/:id" render={routerProps => <PostShow {...routerProps} />}/>
          <Route exact path="/posts/:id/edit" render={routerProps => <PostEdit {...routerProps} />}/>
      
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
