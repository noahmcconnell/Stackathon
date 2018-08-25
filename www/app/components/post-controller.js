import Store from '../store/store.js';
const store = new Store();

const main = () => document.getElementById('main-content');

function draw() {
  main().innerHTML = `
    <section class='post container'>
      <header class='post-header flex'>
        <i class='material-icons favorite'>star</i>
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
            <div class='flex flex-column upvote-downvote vertical'>
              <i class='material-icons'>thumb_up_alt</i>
              <span align='center'>${cmt.voteCount}</span>
              <i class='material-icons'>thumb_down_alt</i>
            </div>
            <p>${marked(
              cmt.content || ''
            )}<span class="user-info">– <span class='blue-text'>${
                cmt.userId.username
              }</span>
                ${cmt.timestamp} ago</p>
          </article>`
            )
            .join('')}
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
              <p>${marked(comment.content) ||
                ''}<span class="user-info">– <span class='blue-text'>${
                  comment.userId.username
                }</span>
                ${comment.timestamp} ago</p>
            </article>`
              )
              .join('')}
          </div>
        </article>
      `
      )}
      <button class='btn-icon mt-1'>add comment <i class='material-icons'>add_comment</i></button>
    </section>
    <div class='fixed-action-btn'>
      <button class='btn-floating btn-large blue'>
        <i class='large material-icons'>add</i>
      </button>
    </div>
  `;
}

export default class PostController {
  constructor() {}
  async draw(id) {
    app.controllers.headerFooter.draw();
    await store.getPost(id);
    draw();
  }
}
