import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {

    render () {
        
        const noPostStyles = {
            textAlign: 'center'
        };

        let post = <p style={ noPostStyles }>Please select a Post!</p>;

        if (this.props.id) {

            post = (
                <div className="FullPost">
                    <h1>Title</h1>
                    <p>Content</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );

        }

        return post;

    }
}

export default FullPost;