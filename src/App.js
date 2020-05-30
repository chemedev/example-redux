import React from 'react';
import './App.css';
//
// Redux
//
import { Provider } from 'react-redux';
//
// Components
//
import Posts from './components/Posts.jsx';
import PostForm from './components/Postsform.jsx';

import store from './store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
