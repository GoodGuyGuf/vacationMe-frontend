import React from 'react';

export default class PostForm extends React.Component{

    state = {
        title: "",
        location: "",
        caption: "",
        user_id: "",
        images: []
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            user_id: parseInt(this.props.currentUser.id)
        })
    }

    handleImageChange = event => {
        var images = [...this.state.images];
        images.push(...event.target.files);
        this.setState({
            ...this.state,
            images: images
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        var formData = new FormData();
        var stateKeys = Object.keys(this.state);
        stateKeys.pop();

        for (let i = 0; i < stateKeys.length; i++){
            formData.append(stateKeys[i], this.state[`${stateKeys[i]}`])
        }

        for (let i = 0; i < this.state.images.length; i++){
            formData.append("images[]", this.state.images[i])
        }
        const post = {
            method: "POST",
            body: formData
        }

        fetch("http://localhost:3000/posts", post)
        .then(response => response.json())
        .then(json => {
            if (json.message === "Unable to save."){
                alert("Unable to save.")
            } else {
                const postData = {
                    id: json.data.id,
                    title: json.data.attributes.title, 
                    location: json.data.attributes.location, 
                    caption: json.data.attributes.caption,
                    userId: json.data.attributes.user_id,
                    createdAt: json.data.attributes.created_at,
                    updatedAt: json.data.attributes.updated_at,
                    likesCount: json.data.attributes.likes_count
                }
                console.log(`This is post form userId: ${postData.userId}`)
                this.props.createPost(postData)
            }
        })
    }

    render(){
        return (
            <section id="PostForm">
                <h3>Write a new post: </h3>
                <div id="imagesContainer"></div>
                <div id="postContainer">
                    <form onSubmit={this.handleOnSubmit}>

                        <div id="uploadformContainer">
                            <label htmlFor="images"><u>Select Images</u></label>
                            <input id="images" onChange={this.handleImageChange} type="file" name="images" accept="image/png, image/jpeg" multiple/>
                        </div>

                        <div>
                            <label htmlFor="title">Title:</label>
                            <input id="title" onChange={this.handleOnChange} type="text" name="title" value={this.state.title} placeholder="Title" />
                        </div>

                        <div>
                            <label htmlFor="title">Location:</label>
                            <input id="title" onChange={this.handleOnChange} type="text" name="location" value={this.state.location} placeholder="Location"/>
                        </div>

                        <div>
                            <label htmlFor="caption">Caption:</label>
                            <textarea onChange={this.handleOnChange} type="text" name="caption" value={this.state.caption} placeholder="Caption"/>
                        </div>

                        <div>
                            <input type="submit" value="Post"/>
                        </div>

                    </form>
                </div>
            </section>
        )
    }
}