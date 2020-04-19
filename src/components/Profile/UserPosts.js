import React from 'react';
import { Link } from 'react-router-dom';

export default class UserPosts extends React.Component{

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
            {this.findPosts(currentUser.id).map((post, index) => {
                return (
                    <div key={index} id="UserPost">
                        <h4>{post.title}</h4>
                        <p>{post.caption}</p>
                        <h4><Link key={index} to={`/posts/${post.id}/edit`}>Edit</Link></h4>
                    </div>
                        )
                    })
                }
            </div>
        )
    }
}