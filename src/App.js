import React, { Component } from 'react';
import Login from './components/login/Login.js';
import { connect } from 'react-redux'; // connect is used to connect any component in our app to our Redux Store.
import { Route, Redirect } from 'react-router-dom'; // Route is used to define our URL, and decide which component is rendered based on the URL.
import Signup from './components/Signup/Signup';
import Home from './Containers/Home';
import Profile from './Containers/Profile.js';
import PostShow from './components/Posts/PostShow';
import PostEdit from './components/Posts/PostEdit';
import DestinationContainer from './Containers/DestinationContainer'
import { fetchPosts } from './actions/FetchPosts'; // fetchPosts is used to fetch all posts from our Rails API.
import { fetchUsers } from './actions/FetchUsers'; // fetchPosts is used to fetch all posts from our Rails API.
import { fetchLikes } from './actions/FetchLikes'; // fetchPosts is used to fetch all posts from our Rails API.
import { fetchComments } from './actions/FetchComments'; // fetchPosts is used to fetch all posts from our Rails API.
import { updatePost } from './actions/Actions' // updatePost is an action that dispatches UPDATE_POST to our rootReducers PostReducer.
import './css/App.css';

class App extends Component{ // We can also write this as class App extends React.Component.

  //componentDidMount is used for asynchronous processes. Everything inside of this function is from our actions folder, which
  componentDidMount(){ // dispatches an action for each resource to update state.
    this.props.fetchPosts()
    this.props.fetchUsers()
    this.props.fetchLikes()
    this.props.fetchComments()
  }

  render(){ // render is the only function that is required for a React Component to work properly. 
    console.log(this.props.currentUser)
    return ( // In this Component we are defining our routes.
      <div>
      {/* immediately when you start the React Router with npm start, it will always load the default URL at localhost:3000/ */}
            <Route exact path="/login" render={() => {return( 
              <div>
                <div id="container">
                  <h1 id="pre-logo">vacationMe</h1>
                </div>
                <Login/>
              </div>)
              }} 
            />
      {/* You have to set up a validator to run if there is no user logged in. Here we use the Redirect component if the validation */}
            {this.props.currentUser !== {} ? <Redirect to="/" /> : <Redirect to="/login" />}

            <Route exact path="/signup" component={Signup}/>

            <Route exact path="/" component={Home}/>

            {this.props.currentUser === {} ? <Redirect to="/" /> : <Redirect to="/login" />}

            <Route exact path="/profile" component={Profile}/>

            <Route exact path="/posts/:id" render={routerProps => {
            /* Here we use routerProps to send down information about the route to the component we are rendering. */
              return(
                <PostShow {...routerProps}  
              /* routerProps is used for the information in the URL, such as params. */
                currentUser={this.props.currentUser} 
                />
                )
              }}
            />

            <Route exact path="/posts/:id/edit" render={routerProps => { // since our component only renders this route when a route is clicked, we have to pass down props for when the URL matches.
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

export default connect(state => ({ // This will connect our component to the redux store. 
  posts: state.posts,   // The first argument is mapping our state to props for our component to use.
  currentUser: state.currentUser
}), { // the second argument is mapping our dispatch to props using these functions from our actions folder.
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