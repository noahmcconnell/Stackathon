import User from '../models/user.js';
import Post from '../models/post.js';
import Answer from '../models/answer.js';
import Comment from '../models/comment.js';

let store;
let answers = [];
let postComments = [];
let answerComments = [];

let state = {
  user: {},
  currentPost: {},
  answers: []
};

function setState(prop, data) {
  state[prop] = data;
  console.log(state);
}

const postJSON = (url, json) =>
  fetch(url, {
    method: 'post',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
  
export default class Store {
  getPost(id) {
    return fetch('/api/posts/by-id/' + id)
      .then(res => res.json())
      .then(data => {
        setState('post', new Post(data));
        fetch('/api/comments/by-post/' + id)
            .then(posts => posts.json())
        // newComment.get('') {
        // return fetch("/api/comment/by-id/" + id)
        // .then(res => res.json())
        // .then(data => {
        // }
        //     .then((res) => {
        //         postComments = (res.data.data)
        //         return
        //     }
        // )
        //get all comments
        //get all answers
        //<--- in
        //get method to get all comments for each answer
      });
  }

  getAnswer(id) {
    return fetch('/api/answer/by-id/' + id)
      .then(res => res.json())
      .then(data => {
        setState('answer', data.map(answer => new Answer(answer)));
        // Comment.get('')
        // .then((res) => {
        // answerComments = (res.data.data)
        // return
        // }
        // )
      });
  }

  login(creds) {
    return fetch('/auth/login', {
      method: 'post',
      body: JSON.stringify(creds),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) return data.error;
        setState('user', new User(data));
        return;
      })
      .catch(error => console.error(error));
  }

  //dis dat SINGLETON

  constructor() {
    if (store) {
      return store;
    }
    store = this;
  }
  get state() {
    return {
      ...state
    };
  }
}
