import User from "../models/user.js";
import Post from "../models/post.js";
import Answer from "../models/answer.js";
import Comment from "../models/comment.js";


let store;

let state = {
  user: {},
  currentPost: {}
};
function setState(prop, data) {
  state[prop] = data;
  console.log(state);
}

export default class Store {
  getPost(id) {
    return fetch("/api/post/by-id/" + id)
      .then(res => res.json())
      .then(data => {
        setState("post", data.map(post => new Post(post)));
        //get all comments
        //get all answers
        //<--- in
        //get method to get all comments for each answer
      });
  }

  login(creds) {
    return fetch("/auth/login", {
      method: "post",
      body: JSON.stringify(creds),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) return data;
        setState("user", new User(data));
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
