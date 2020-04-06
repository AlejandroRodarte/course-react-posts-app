import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'token';
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.request.use((req) => {
    console.log(req);
    return req;
}, (err) => {
    console.log(err);
    return Promise.reject(err);
});

axios.interceptors.response.use((res) => {
    console.log(res);
    return res;
}, (err) => {
    console.log(err);
    return Promise.reject(err);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();