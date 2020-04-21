import React from 'react';
import Login from './components/login/Login.js';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home.js';
import Profile from './components/Profile/Profile.js';
import PostShow from './components/Posts/PostShow';
import PostEdit from './components/Posts/PostEdit';
import { fetchPosts } from './actions/FetchPosts';
import { fetchUsers } from './actions/FetchUsers';
import { fetchLikes } from './actions/FetchLikes';
import { fetchComments } from './actions/FetchComments';
import { createPost } from './actions/CreatePost.js'
import { updatePost } from './actions/UpdatePost.js'
import './css/App.css';

class App extends React.Component{

  currentUser = () => {
    const currentUser = JSON.parse(localStorage.getItem("loggedIn")).userData
    return currentUser
  }

  findUser = searchedUser => {
    const user = this.props.users.find(user => user.id == searchedUser)
    if (user){
        return user.username
    } else {
        return null
    }
  }

  findPost = postId => {
    const post = this.props.posts.find(post => post.id == postId)
    const user = this.props.users.find(user => user.id == post.userId)
      if (post || user){
        return {post: post, user: user}
      } else {
        return {post: "none", user: "none"}
    }
  }

  componentDidMount(){
    this.props.fetchPosts()
    this.props.fetchUsers()
    this.props.fetchLikes()
    this.props.fetchComments()
  }

  render(){
    return (
      <div>
        <Router>

            <Route exact path="/login" render={() => <div><h1 id="pre-logo">vacationMe</h1><Login/></div>} />
              {localStorage.getItem('loggedIn') !== null ? <Redirect to="/" /> : null}

            <Route exact path="/signup" component={Signup}/>

            <Route exact path="/" render={routerProps => <Home {...routerProps} posts={this.props.posts} users={this.props.users} createPost={this.props.createPost} findUser={this.findUser} persistor={this.props.persistor} />}/>
              {localStorage.getItem('loggedIn') === null ? <Redirect to="/login" /> : null}

            <Route exact path="/profile" render={routerProps => <Profile {...routerProps} posts={this.props.posts} currentUser={this.currentUser} />} />

            <Route exact path="/posts/:id" render={routerProps => <PostShow {...routerProps} findPost={this.findPost} currentUser={this.currentUser} />}/>

            <Route exact path="/posts/:id/edit" render={routerProps => <PostEdit {...routerProps} posts={this.props.posts} updatePost={this.props.updatePost} />}/>

        </Router>
      </div>
    );
  }
}

export default connect(state => ({posts: state.posts, users: state.users}), {fetchPosts, fetchUsers, fetchLikes, fetchComments, createPost, updatePost})(App);
