import React from 'react';
import { connect } from 'react-redux';

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
            <div>{this.props.posts.map((post, index) => { 
                return (<div key={index} id={'post_' + index}>
                    <h3>{post.location}</h3>
                    <h5>{post.title}</h5>
                    <h6>By: {this.findUser(post.userId)}</h6>
                    <p>{post.caption}</p>
                    </div>) 
                })}
            </div>
        </div>
        )
    }
}

export default connect(state => ({posts: state.posts, users: state.users}))(Post)