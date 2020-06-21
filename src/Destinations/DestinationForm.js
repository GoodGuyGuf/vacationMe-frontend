import React, { Component } from 'react';
import PostsList from '../components/Posts/PostsList';

export default class DestinationForm extends Component {

    state = {
        search: "",
        isSubmitted: false
    }

    handleOnChange = event => {
        this.setState({
            search: event.target.value,
            isSubmitted: false
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.setState(state => ({
            search: state.search,
            isSubmitted: true
        }))
    }

    filterPosts = () => {
        const filteredPosts = this.props.posts.filter(post => post.location.includes(this.state.search))
        return (<PostsList posts={filteredPosts} users={this.props.users}
            currentUser={this.props.currentUser}
            comments={this.props.comments}
            createComment={this.props.createComment}/>)
    }

    render(){
        return(
            <>
                <section>
                    <form id="destinationFilterForm" onSubmit={this.handleOnSubmit}>
                        <h3>Search For Destinations:</h3>
                        <input type="text" name="search" placeholder="Search" onChange={this.handleOnChange} value={this.state.search}/>
                        <input type="submit" value="Submit"/>
                    </form>
                </section>
                
                {this.state.isSubmitted && this.filterPosts()}
            </>
        )
    }
}