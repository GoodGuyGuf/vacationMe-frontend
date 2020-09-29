import React, { Component } from 'react';
import moment from 'moment';
import Comment from '../Comment/Comment';
import CommentForm from '../Comment/CommentForm';
import Like from '../Like/LikeButton'
import { Link } from 'react-router-dom';

/* Post component is a presentational component. It only renders one post with the posts attributes. I used moment.js
to easily format the createdAt & updatedAt timestamps of a post instance. Then the post houses all of the likes, the Like component
(which is just a button creating new like instances for the rails API), a Comment Component which renders all of the comments and below
the comments is the Commentform that allows any user to comment on the post.*/

export default class Post extends Component {

    render(){
        let edit;
        if (this.props.post.userId == this.props.currentUser.id){
            edit = <h3><Link to={`/posts/${this.props.post.id}/edit`}>Edit Post</Link></h3>
        }
        return (
            <>
                <section className='postData'>
                    <h2 className="postTitle">{this.props.user}: <Link key={this.props.index} to={`/posts/${this.props.post.id}`}>{this.props.post.title}</Link></h2>

                    <div className="images">
                        {this.props.post.images.map((image, index) => {
                            return (
                                <div className="imgFlex" key={index}>
                                    <img className="img" src={`http://localhost:3000/` + image} alt="user image" />
                                </div>
                            )
                        })}
                    </div>

                    <div className="postInfo">
                        <div className="authorLocation">
                            <p>Location: {this.props.post.location}</p>
                        </div>

                        <div className="postCaption">
                            <p>{this.props.post.caption}</p>
                        </div>

                        <div className="createdUpdated">
                            <p>Created at: {moment(this.props.post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p>Updated at: {moment(this.props.post.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        </div>
                    </div>

                    {edit}
                </section>

                <section className='likes'>
                    <p>Likes: {this.props.post.likesCount}</p>
                    <Like post={this.props.post} />
                </section>

                <section className='comments'>
                    <p>Comments:</p>
                    <Comment post={this.props.post} comments={this.props.comments} currentUser={this.props.currentUser} deleteComment={this.props.deleteComment}/>
                </section>
                
                <CommentForm currentUser={this.props.currentUser} postId={this.props.post.id} createComment={this.props.createComment}/>
            </>
        )
    }
}