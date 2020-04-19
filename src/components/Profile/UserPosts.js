import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deletePost } from '../../actions/DeletePost'

class UserPosts extends React.Component{

    findPosts = user => {
        const posts = this.props.posts.filter(post => post.userId == user)
        if (posts){
            return posts
        } else {
            return null
        }
    }

    deleter = post => {
        const postMarkedForDeletion = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(post.id)
        }

        fetch(`http://localhost:3000/posts/${post.id}`, postMarkedForDeletion)
        .then(response => response.json())
        .then(json => {
            if (json.message === "Unable to delete"){
                alert("Unable to Delete.")
            } else {
                console.log(json)
                this.props.deletePost(post)
                this.props.history.push("/profile")
            }
        })
    }

    render(){
        const currentUser = JSON.parse(localStorage.getItem("loggedIn")).userData
        return(
            <div>
            {this.findPosts(currentUser.id).reverse().map((post, index) => {
                return (
                    <div key={index} id="UserPost">
                        <h4>{post.title}</h4>
                        <p>{post.caption}</p>
                        <h4><Link key={index} to={`/posts/${post.id}/edit`}>Edit</Link></h4>
                        <span>Created at: {post.createdAt}</span><br/>
                        <span>Updated at: {post.updatedAt}</span>
                        <button onClick={() => {this.deleter(post)}}>Delete</button>
                    </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default compose(withRouter, connect(null, { deletePost }))(UserPosts)