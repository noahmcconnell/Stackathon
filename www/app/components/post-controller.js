import Store from '../store/store.js';
const store = new Store();

const main = () => document.getElementById('main-content');

function draw() {
  main().innerHTML = `
    <section class='post container'>
      <header class='post-header flex'>
        <i class='material-icons favorite ${
          store.state.post._id === store.state.favorite.postId &&
          store.state.user._id === store.state.favorite.userId
            ? 'favorited'
            : ''
        }' onclick='app.controllers.post.toggleFavorite(event)'>star</i>
        <h3 class='title'>${store.state.post.title}</h3>
        <div class='upvote-downvote flex align-items-center'>
          <i class='material-icons'>thumb_up_alt</i>
          <span>${store.state.post.voteCount}</span>
          <i class='material-icons'>thumb_down_alt</i>
        </div>
      </header>
      <article class='article'>
        ${marked(store.state.post.content || '')}
        <button class='btn-icon'>edit <i class='material-icons'>edit</i></button>
        <div class='comments flex flex-column'>
          ${store.state.post.comments
            .map(
              cmt => `
          <article class="comment flex">
            <div class='flex upvote-downvote vertical'>
              <i class='material-icons'>thumb_up_alt</i>
              <span align='center'>${cmt.voteCount}</span>
              <i class='material-icons'>thumb_down_alt</i>
            </div>
            <p>${
              cmt.content
            }<span class="user-info">– <span class='blue-text'>${
                cmt.userId.username
              }</span>
                ${cmt.timestamp} ago</p>
          </article>`
            )
            .join('')}
          <button class='btn-icon mt-1' onclick='app.controllers.post.addComment(this, "post")'>add comment <i class='material-icons'>add_comment</i></button>
        </div>
      </article>
      ${store.state.answers.map(
        answer => `
        <article class='article'>
          ${marked(answer.content || '')}
          <button class='btn-icon'>edit <i class='material-icons'>edit</i></button>
          <div class='comments flex flex-column'>
            ${answer.comments
              .map(
                comment => `<article class='comment flex'>
              <div class='flex flex-column upvote-downvote vertical'>
                <i class='material-icons'>thumb_up_alt</i>
                <span align='center'>${comment.voteCount}</span>
                <i class='material-icons'>thumb_down_alt</i>
              </div>
              <p>${
                comment.content
              }<span class="user-info">– <span class='blue-text'>${
                  comment.userId.username
                }</span>
                ${comment.timestamp} ago</p>
            </article>`
              )
              .join('')}
          </div>
          <button class='btn-icon mt-1' onclick='app.controllers.post.addComment(this, "answer")'>add comment <i class='material-icons'>add_comment</i></button>
        </article>
      `
      )}
      <article id='new-answer'>
      </article>
    </section>
    <div class='fixed-action-btn' onclick='app.controllers.post.addAnswer()'>
      <button class='btn-floating btn-large blue'>
        <i class='large material-icons'>add</i>
      </button>
    </div>
  `;
}

export default class PostController {
  constructor() {
    this.counter = 0;
  }
  async draw(id) {
    app.controllers.headerFooter.draw();
    if (id) {
      await store.getPost(id);
    }
    draw();
  }
  toggleFavorite() {
    if (!store.state.user._id) {
      return app.toastMessage('You must be logged in to favorite a post');
    }
    if (
      store.state.post._id === store.state.favorite.postId &&
      store.state.user._id === store.state.favorite.userId
    ) {
      event.target.classList.remove('favorited');
      store.unfavoritePost();
    } else {
      event.target.classList.add('favorited');
      store.favoritePost();
    }
  }

  addAnswer() {
    document.getElementById('new-answer').innerHTML = `

    `;
  }

  addComment(node, type = 'post') {
    if (!store.state.user._id) {
      return app.toastMessage('You must be logged in to comment.');
    }

    const form = document.createElement('form');
    form.classList.add('flex', 'flex-column');
    form.innerHTML = `
      <div class='input-field theme fw-500'>
        <input id="comment-input-${
          this.counter
        }" name='comment' type="text" class="validate" required>
        <label for="comment-input-${this.counter++}">New comment</label>
      </div>
      <button type='submit' class='btn-flat'><i class='material-icons'>send</i></button>
    `;
    form.onsubmit = async event => {
      event.preventDefault();
      const cmt = await (type === 'post'
        ? store.createPostComment
        : store.createAnswerComment)(event.target.comment.value);

      const commentElement = document.createElement('article');
      commentElement.classList.add('comment', 'flex');
      commentElement.innerHTML = `
      <div class='flex upvote-downvote vertical'>
        <i class='material-icons'>thumb_up_alt</i>
        <span align='center'>${cmt.voteCount}</span>
        <i class='material-icons'>thumb_down_alt</i>
      </div>
      <p>${cmt.content}<span class="user-info">– <span class='blue-text'>${
        cmt.userId.username
      }</span>
        ${cmt.timestamp} ago</p>
      `;
      form.parentNode.insertBefore(commentElement, form);
      form.parentNode.replaceChild(node, form);
    };
    node.parentNode.replaceChild(form, node);
  }
}
