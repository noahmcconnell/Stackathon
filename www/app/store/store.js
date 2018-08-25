import User from "../models/user.js";
import Post from "../models/post.js";
import Answer from "../models/answer.js";
import PostComment from "../models/post-comment.js";
import AnswerComment from "../models/answer-comment.js";
import Vote from "../models/vote.js";

let store;

let state = {
  user: {},
  post: {},
  answers: []
};

function setState(prop, data) {
  state[prop] = data;
  console.log(state);
}

const postJSON = (url, json) =>
  fetch(url, {
    method: "post",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });

export default class Store {
  getPost(id) {
    return fetch("/api/posts/by-id/" + id)
      .then(res => res.json())
      .then(postData => {
        fetch("/api/comments/by-post/" + id)
          .then(res => res.json())
          .then(commentsData => {
            setState(
              "post",
              new Post({
                ...postData,
                comments: commentsData.map(comment => new Comment(comment))
              })
            );

            return this.getAnswersByPost(id);
          });
      });
  }

  getAnswersByPost(id) {
    return fetch("/api/answer/by-id/" + id)
      .then(res => res.json())
      .then(answersData => {
        Promise.all(
          answersData.map(async answerData => {
            const comments = await fetch(
              "/api/comments/by-answer" + answerData._id
            ).then(res => res.json());
            return new Answer({
              ...answerData,
              comments: comments.map(comment => new Comment(comment))
            });
          })
        ).then(answerList => setState("answers", answerList));
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
        if (data.error) return data.error;
        setState("user", new User(data));
        return;
      })
      .catch(error => console.error(error));
  }

  getCategories(cate) {
    return fetch("/api/categories")
      .then(res => res.json())
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
