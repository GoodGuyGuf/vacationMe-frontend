import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../Home/NavBar';
// this component is rendering more than once after each link click. Needs fix.
class Profile extends React.Component{

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
                <NavBar/>
                <h1>{currentUser.username}</h1>
                <p>{currentUser.name}</p>
                <p>{currentUser.email}</p>
                <h5>Posts:</h5>
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

export default connect(state => ({posts: state.posts}))(Profile)