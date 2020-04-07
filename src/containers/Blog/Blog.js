import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Posts from './Posts/Posts';

import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPost: null,
        error: false
    };

    render () {

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

                <Route 
                    path="/"
                    render={ () => <h1>Home</h1> }
                    exact
                />

                <Route 
                    path="/"
                    render={ () => <h1>Home 2</h1> }
                    exact
                />

            </div>
        );

    }

}

export default Blog;