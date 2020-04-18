import React from 'react';
import { connect } from 'react-redux';

class UserPosts extends React.Component{

    findPosts = user => {
        const posts = this.props.posts.filter(post => post.userId == user)
        if (posts){
            return posts
        } else {
            return null
        }
    }

    render(){
        const currentUser = JSON.parse(localStorage.getItem("loggedIn")).userData
        return(
            <div>
            {this.findPosts(currentUser.id).map(post => {
                return (
                    <div>
                        <h4>{post.title}</h4>
                        <p>{post.caption}</p>
                    </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(state => ({posts: state.posts}))(UserPosts)