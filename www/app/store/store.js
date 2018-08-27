import User from '../models/user.js';
import Post from '../models/post.js';
import Answer from '../models/answer.js';
import PostComment from '../models/post-comment.js';
import AnswerComment from '../models/answer-comment.js';
import Vote from '../models/vote.js';

let store;

let state = {
  user: {},
  post: {},
  answers: [],
  search: '',
  categoryId: '',
  favorite: {}
};

function setState(prop, data) {
  state[prop] = data;
  console.log(state);
}

export default class Store {
  getPost(id) {
    return fetch('/api/posts/' + id)
      .then(res => res.json())
      .then(postData => {
        return Promise.all([
          fetch('/api/comments/by-post/' + id)
            .then(res => res.json())
            .then(commentsData => {
              setState(
                'post',
                new Post({
                  ...postData,
                  comments: commentsData.map(
                    comment => new PostComment(comment)
                  )
                })
              );

              return this.getAnswersByPost(id);
            }),
          fetch('/api/favorite-posts/' + state.user._id + '/' + id)
            .then(res => res.json())
            .then(favorite => setState('favorite', favorite))
            .catch(error => console.error(error))
        ]);
      });
  }

  getAnswersByPost(id) {
    return fetch('/api/answers/by-post/' + id)
      .then(res => res.json())
      .then(answersData => {
        Promise.all(
          answersData.map(async answerData => {
            const comments = await fetch(
              '/api/comments/by-answer' + answerData._id
            ).then(res => res.json());
            return new Answer({
              ...answerData,
              comments: comments.map(comment => new AnswerComment(comment))
            });
          })
        ).then(answerList => setState('answers', answerList));
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

  register(creds) {
    return fetch('/auth/register', {
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

  getCategories() {
    return fetch('/api/categories')
      .then(res => res.json())
      .catch(error => console.error(error));
  }

  getPosts() {
    return fetch('/api/posts')
      .then(res => res.json())
      .catch(error => console.error(error));
  }

  getPostsByCategory(categoryId) {
    return fetch('/api/posts/category/' + categoryId)
      .then(res => res.json())
      .catch(error => console.error(error));
  }

  createPost(postData) {
    return fetch('/api/posts', {
      method: 'post',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then(res => res.json())
      .then(data => {
        setState(
          'post',
          new Post({ ...postData, timestamp: data.timestamp, _id: data._id })
        );
      })
      .catch(error => console.error(error));
  }

  favoritePost() {
    return fetch('/api/favorite-posts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ postId: state.post._id, userId: state.user._id })
    })
      .then(res => res.json())
      .then(favorite => setState('favorite', favorite))
      .catch(error => console.error(error));
  }
  unfavoritePost() {
    return fetch('/api/favorite-posts/' + state.favorite._id, {
      method: 'delete'
    })
      .then(() => setState('favorite', {}))
      .catch(error => console.error(error));
  }

  saveSearch(search) {
    setState('search', search);
  }
  saveCategoryId(categoryId) {
    setState('categoryId', categoryId);
  }

  createPostComment(content) {
    return fetch('/api/comments/post', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        content,
        userId: state.user._id,
        postId: state.post._id
      })
    })
      .then(res => res.json())
      .catch(error => console.error(error));
  }
  createAnswerComment(content) {
    return fetch('/api/comments/answer', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        content,
        userId: state.user._id,
        postId: state.post._id
      })
    })
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
