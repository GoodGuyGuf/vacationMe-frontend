import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import UserPosts from '../components/Profile/UserPosts';
import { connect } from 'react-redux';
import { deletePost } from '../actions/Actions';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component{

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
        return(
            <>
                <NavBar />

                <main>
                    <section>
                        <h1 id="userInfo">{this.props.currentUser.username}</h1>
                        <p id="userInfo">{this.props.currentUser.name}</p>
                        <p id="userInfo">{this.props.currentUser.email}</p>
                        <h5 id="userposts">Posts:</h5>
                    </section>
                    
                    <UserPosts 
                        currentUser={this.props.currentUser}
                        deletePost={this.props.deletePost} 
                        deleter={this.deleter}
                        findPosts={this.findPosts}
                    />
                 </main>
            </>
        )
    }
}

export default compose(withRouter, connect(state => ({currentUser: state.currentUser, posts: state.posts}), { deletePost }))(Profile)