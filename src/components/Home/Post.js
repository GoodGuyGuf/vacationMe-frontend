import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component{

    render(){
        return (
        <div id="posts">
            <div>{this.props.posts.map(post => { 
                return (<div>
                    <h3>{post.location}</h3>
                    <h5>{post.title}</h5>
                    <p>{post.caption}</p>
                    </div>) 
                })}
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Post)