import React, { Component } from 'react';

import Post from '../../../components/Post/Post';

import './Posts.css';

import axios from '../../../axios';

import makeCancelable from '../../../utils/promises/make-cancelable';

class Posts extends Component {

    state = {
        posts: []
    };

    componentDidMount() {

        console.log(this.props);

        this.cancellablePromise = 
            makeCancelable(
                axios
                    .get('/posts')
            );

        this.cancellablePromise
            .promise
            .then(({ data: posts }) => this.setState(() => ({ posts: posts.slice(0, 4).map(post => ({ ...post, author: 'Alex' })) })))
            .catch(console.log);

    }

    postSelectedHandler = (id) => this.setState(() => ({ selectedPost: id }));

    render() {

        const noPostsStyles = {
            textAlign: 'center'
        };

        let postsJsx = <p style={ noPostsStyles }>Something went wrong!</p>;

        if (!this.state.error) {

            postsJsx = 
                this
                    .state
                    .posts
                    .map(
                        ({ id, title, author }) => 
                            <Post 
                                key={ id } 
                                title={ title } 
                                author={ author }
                                clicked={ () => this.postSelectedHandler(id) }
                            />
                    );

        }

        return (
            <section className="Posts">
                { postsJsx }
            </section>
        );

    }

    componentWillUnmount() {
        this.cancellablePromise.cancel();
    }

}

export default Posts;
