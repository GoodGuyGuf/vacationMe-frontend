import React from 'react';
import Post from './Post';

/* PostsList acts as the holder of the logic for all of the posts. It connects posts to users with the findUser function.
To reverse the posts without mutating state, I set a new variable containing the array of posts, reversed it, then mapped over
it to return a new Post component where I pass down props. */
export default class Posts extends React.Component{

    findUser = searchedUser => {
        const user = this.props.users.find(user => user.id == searchedUser)
        console.log(user)
        if (user){
            return user.username
        } else {
            return null
        }
      }

    render(){
        const recentPosts = this.props.posts.slice()
        return (
        <div id="posts">
                {recentPosts.reverse().map((post, index) => { 
                    return (
                        <div key={index} id={'post_' + post.id}>
                        <Post 
                        currentUser={this.props.currentUser}
                        user={this.findUser(post.userId)} 
                        post={post} 
                        index={index} 
                        comments={this.props.comments}
                        createComment={this.props.createComment}
                        />
                    </div>) 
                })}
        </div>
        )
    }
}

/*  1. Posts.js should be a container component responsible for rendering a Post component for each post
    and it should be responsible for rendering the comments component & the comment form component.
    2. Post should send down props to comment component since comment component should be a functional stateless component.
    3. Post should pass down props to commentForm for the current user, the post id and the createComment Dispatcher.
    4. Posts should be the component that defines the dynamic routes that are defined in App.js.
    5. To show most recent posts, you have to create a variable, slice state and then reverse the array so that you don't mutate state.
    6. Post.js Should have defaultProps.
*/