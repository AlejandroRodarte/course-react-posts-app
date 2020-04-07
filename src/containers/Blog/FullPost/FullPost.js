import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        post: null
    };

    componentDidMount() {

        if (this.props.match.params.id) {

            if (!this.state.post || (this.state.post && this.state.post.id !== this.props.match.params.id)) {
                axios
                    .get(`/posts/${this.props.match.params.id}`)
                    .then(({ data: post }) => this.setState(() => ({ post })));
            }

        }

    }

    deletePostHandler = () => 
        axios
            .delete(`/posts/${this.props.match.params.id}`)
            .then(console.log);

    render () {
        
        const noPostStyles = {
            textAlign: 'center'
        };

        let post = <p style={ noPostStyles }>Please select a Post!</p>;

        if (this.props.match.params.id) {
            post = <p style={ noPostStyles }>Loading...!</p>; 
        }

        if (this.state.post) {

            post = (
                <div className="FullPost">
                    <h1>{ this.state.post.title }</h1>
                    <p>{ this.state.post.body }</p>
                    <div className="Edit">
                        <button 
                            className="Delete"
                            onClick={ this.deletePostHandler }
                        >
                            Delete
                        </button>
                    </div>
                </div>
            );

        }

        return post;

    }
}

export default FullPost;