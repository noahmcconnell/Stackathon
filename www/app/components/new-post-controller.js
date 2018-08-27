import Store from '../store/store.js';
const store = new Store();

const main = () => document.getElementById('main-content');

async function draw() {
  const options = (await store.getCategories()).map(
    category => `<option value='${category._id}'>${category.name}</option>`
  );

  main().innerHTML = `
  <section class='create-post flex flex-column'>
    <form onsubmit='app.controllers.newPost.createNewPost(event)'>
      <!-- Fill in onsubmit -->
      <div class="input-field theme fw-500 title-input">
        <input id="question-title-input" name='title' type="text">
        <label for="question-title-input">Title</label>
      </div>
      <div class="select">
        <label>Category</label>
        <select name='category' required>
          <option value='' disabled selected>Choose your option</option>
          ${options}
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg>
      </div>
      <div class='input-field textarea fw-500'>
        <textarea id='question-content' resize='false' name='content'></textarea>
        <label for='question-content'>What's your question?</label>
      </div>
      <button class="btn btn-theme waves-effect waves-light" type='submit'>Submit</button>
      <button class="btn-flat blue-text waves-effect waves-dark" onclick='app.controllers.home.draw()'>Cancel</button>
    </form>
  </section>
  `;
}

export default class NewPostController {
  constructor() {}
  draw() {
    app.controllers.headerFooter.draw();
    draw();
  }
  async createNewPost(event) {
    event.preventDefault();
    if (!store.state.user.username) {
      return app.toastMessage('You must be logged in to create a post.');
    }
    await store.createPost({
      title: event.target.title.value,
      content: event.target.content.value,
      categoryId: event.target.category.value,
      userId: store.state.user._id
    });
    app.controllers.post.draw();
  }
}
