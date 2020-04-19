import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Post extends React.Component{

    findUser = searchedUser => {
        const user = this.props.users.find(user => user.id == searchedUser)
        if (user){
            return user.username
        } else {
            return null
        }
    }

    render(){
        return (
        <div id="posts">
            {this.props.posts.map((post, index) => { 
                return (<div key={index} id={'post_' + index}>
                    <h3>{post.location}</h3>
                    <h5><Link key={post.id} to={`/posts/${post.id}`}>{post.title}</Link></h5>
                    <h6>By: {this.findUser(post.userId)}</h6>
                    <p>{post.caption}</p>
                    </div>) 
                })}
        </div>
        )
    }
}

export default connect(state => ({posts: state.posts, users: state.users}))(Post)