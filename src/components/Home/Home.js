import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import {fetchPosts} from '../../actions/FetchPosts';
import NavBar from './NavBar';

class Home extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        return(
            <div>
                <NavBar/>
                <Post/>
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(Home)