import React from 'react';
import Login from './components/login/Login.js';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Home from './components/NavBar/Home.js.js';
import Profile from './Containers/Profile.js';
import PostShow from './components/Posts/PostShow';
import PostEdit from './components/Posts/PostEdit';
import DestinationContainer from './Containers/DestinationContainer'
import { fetchPosts } from './actions/FetchPosts';
import { fetchUsers } from './actions/FetchUsers';
import { fetchLikes } from './actions/FetchLikes';
import { fetchComments } from './actions/FetchComments';
import { updatePost } from './actions/Actions'
import './css/App.css';

class App extends React.Component{


  componentDidMount(){
    this.props.fetchPosts()
    this.props.fetchUsers()
    this.props.fetchLikes()
    this.props.fetchComments()
  }

  render(){
    return (
      <div>
            <Route exact path="/login" render={() => {return(
              <div>
                <div id="container">
                  <h1 id="pre-logo">vacationMe</h1>
                </div>
                <Login/>
              </div>)
              }} 
            />

            {/* {localStorage.getItem('loggedIn') !== null ? <Redirect to="/" /> : null} */}

            <Route exact path="/signup" component={Signup}/>

            <Route exact path="/" component={Home}/>
              {/* {localStorage.getItem('loggedIn') === null ? <Redirect to="/login" /> : null} */}

            <Route exact path="/profile" component={Profile}/>

            <Route exact path="/posts/:id" render={routerProps => {
              return(
                <PostShow {...routerProps} 
                currentUser={this.props.currentUser} 
                />
                )
              }}
            />

            <Route exact path="/posts/:id/edit" render={routerProps => {
              return(
                <PostEdit {...routerProps} 
                posts={this.props.posts} 
                updatePost={this.props.updatePost}
                currentUser={this.props.currentUser}  />
                )
              }}
            />

            <Route exact path="/destinations" component={DestinationContainer}/>

      </div>
    );
  }
}

export default connect(state => ({
  posts: state.posts,  
  currentUser: state.currentUser
}), {
  fetchPosts, 
  fetchUsers, 
  fetchLikes, 
  fetchComments, 
  updatePost
})(App);

/*
  1. App should not be responsible for everything in state nor every dispatch function. Each container component should be responsible
  For their own logic and state. Passing props like this makes it more difficult to organize and see what exactly is happening
  if something goes wrong.
  2. App should also define a posts route that has all posts
  3. RESTful routing should be simple.
    1. index page for posts
    2. Show page for posts ✅
    3. Edit show page for posts ✅
    4. We don't have a new route because making a new post just happens on the front page. ✅
    5. Should have a show page instead of a '/profile' route. It should be '/users/1'
    6. I think this is as restful as I want to make it. The only thing left is an index page for posts and even then I might not want it. ✅
*/