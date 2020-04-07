import React from 'react';
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = ({ title, author, clicked, history, location, match }) => {

    console.log(history, location, match);

    return (
        <article 
            className="Post"
            onClick={ clicked }
        >
            <h1>{ title }</h1>
            <div className="Info">
                <div className="Author">{ author }</div>
            </div>
        </article>
    );

}

export default withRouter(post);