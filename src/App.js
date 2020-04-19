import React from 'react';
import Login from './components/login/Login.js';
import { fetchPosts } from './actions/FetchPosts';
import { fetchUsers } from './actions/FetchUsers';
import { connect } from 'react-redux';
import './css/App.css';

class App extends React.Component{

  componentDidMount(){
    this.props.fetchPosts()
    this.props.fetchUsers()
  }

  render(){
    return (
      <div>
          <h1 id="pre-logo">vacationMe</h1>
          <Login/>
      </div>
    );
  }
}

export default connect(null, {fetchPosts, fetchUsers})(App);
