import React from 'react';
import Login from './components/login/Login.js';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
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
import { createComment } from './actions/CreateComment'
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
            <Route exact path="/login" render={() => {return(
              <div>
                <div id="container">
                  <h1 id="pre-logo">vacationMe</h1>
                </div>
                <Login/>
              </div>)
              }} 
            />

            {localStorage.getItem('loggedIn') !== null ? <Redirect to="/" /> : null}

            <Route exact path="/signup" component={Signup}/>

            <Route exact path="/" 
              render={routerProps => { 
                return (
                  <Home {...routerProps} 
                  currentUser={this.currentUser} 
                  posts={this.props.posts} 
                  createComment={this.props.createComment} 
                  users={this.props.users} 
                  comments={this.props.comments} 
                  likes={this.props.likes} 
                  createPost={this.props.createPost} 
                  findUser={this.findUser}/>
                )
              }}
            />
              {localStorage.getItem('loggedIn') === null ? <Redirect to="/login" /> : null}

            <Route exact path="/profile" render={routerProps => {
              return (
                <Profile {...routerProps} 
                posts={this.props.posts} 
                currentUser={this.currentUser} />
                )
              }} 
            />

            <Route exact path="/posts/:id" render={routerProps => {
              return(
                <PostShow {...routerProps} 
                findPost={this.findPost} 
                currentUser={this.currentUser} />
                )
              }}
            />

            <Route exact path="/posts/:id/edit" render={routerProps => {
              return(
                <PostEdit {...routerProps} 
                posts={this.props.posts} 
                updatePost={this.props.updatePost} />
                )
              }}
            />

      </div>
    );
  }
}

export default connect(state => ({posts: state.posts, users: state.users, currentUser: state.currentUser, likes: state.likes, comments: state.comments}), {fetchPosts, fetchUsers, fetchLikes, fetchComments, createPost, updatePost, createComment})(App);

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