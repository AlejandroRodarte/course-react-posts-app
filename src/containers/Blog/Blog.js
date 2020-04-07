import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

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
                                <NavLink 
                                    to="/"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={ { color: '#FA923F', textDecoration: 'underline' } }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Route 
                    path="/"
                    component={ Posts }
                    exact
                />

                <Route 
                    path="/new-post"
                    component={ NewPost }
                    exact
                />

            </div>
        );

    }

}

export default Blog;