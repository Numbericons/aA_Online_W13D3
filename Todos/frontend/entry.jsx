import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store.js'

const Root = () => {
    return <h1>React is working</h1>;
};
document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Root/>, document.getElementById('root'));
});

window.store = configureStore;