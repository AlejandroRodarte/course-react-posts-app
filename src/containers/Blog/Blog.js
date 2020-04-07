import React, { Component } from 'react';


import axios from '../../axios';

import Post from '../../components/Post/Post'; 
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPost: null,
        error: false
    };

    componentDidMount() {
        axios
            .get('/posts')
            .then(({ data: posts }) => this.setState(() => ({ posts: posts.slice(0, 4).map(post => ({ ...post, author: 'Alex' })) })))
            .catch(() => this.setState(() => ({ error: true })));
    }

    postSelectedHandler = (id) => this.setState(() => ({ selectedPost: id }));

    render () {

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
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Post
                                </a>
                            </li>
                            <li>
                                <a href="/new-post">
                                    New Post
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    { postsJsx }
                </section>
            </div>
        );

    }

}

export default Blog;