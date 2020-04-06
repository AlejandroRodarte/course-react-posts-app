import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPost: null
    };

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(({ data: posts }) => this.setState(() => ({ posts: posts.slice(0, 4).map(post => ({ ...post, author: 'Alex' })) })));
    }

    postSelectedHandler = (id) => this.setState(() => ({ selectedPost: id }));

    render () {

        const postsJsx = 
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

        return (
            <div>
                <section className="Posts">
                    { postsJsx }
                </section>
                <section>
                    <FullPost id={ this.state.selectedPost } />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );

    }

}

export default Blog;