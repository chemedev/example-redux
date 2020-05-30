import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => (dispatch) => {
  console.log('fetching');
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => dispatch({ type: FETCH_POSTS, payload: posts }))
    .catch((err) => console.error(err));
};

export const createPost = (post) => (dispatch) => {
  console.log('posting');
  dispatch({ type: NEW_POST, payload: post });
};
