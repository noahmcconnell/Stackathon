import Store from '../store/store.js';
const store = new Store();

const main = () => document.getElementById('main-content');

async function draw(questions) {
  const categories = (await store.getCategories())
    .map(
      categoryObj =>
        `<button class='btn-flat ${
          store.state.categoryId === categoryObj._id ? 'active' : ''
        }' onclick='app.controllers.home.filterByCategory("${
          categoryObj._id
        }")'>${categoryObj.name}</button>`
    )
    .join('');

  questions = questions
    .map(
      question => `
      <div class="card grey lighten-3 question-card" onclick='app.controllers.post.draw("${
        question._id
      }")'>
        <div class="card-content black-text flex flex-column">
          <p class="title">${question.title}</p>
          <div class="flex stats">
            <p>${question.voteCount} <small>Votes</small></p>
            <p>0 <small>Answers</small></p>
          </div>
          <p class='time-stamp'>posted ${question.timestamp} ago</p>
        </div>
      </div>
    `
    )
    .join('');

  main().innerHTML = `
    <section class='homepage'>
      <div class='row'>
        <div class='col s3 flex flex-column p-3 grey lighten-5 categories'>
          <h5 align='center'>Categories</h5>
          <button class='btn-flat ${
            !store.state.categoryId ? 'active' : ''
          }' onclick='app.controllers.home.filterByCategory()'>Any</button>
          ${categories}
        </div>
        <div class='col s9 flex flex-wrap'>
          <h1 class='title mt-1'>Questions</h1>
          ${questions}
        </div>
      </div>
      <div class='fixed-action-btn' onclick='app.controllers.newPost.draw()'>
        <button class='btn-floating btn-large blue'>
          <i class='large material-icons'>add</i>
        </button>
      </div>
    </section>
  `;
}

export default class HomeController {
  constructor() {
    this.draw();
  }
  async draw() {
    if (app && app.controllers) {
      app.controllers.headerFooter.draw();
    }

    let questions;
    if (store.state.categoryId) {
      questions = await store.getPostsByCategory(store.state.categoryId);
    } else {
      questions = await store.getPosts();
    }

    if (store.state.search) {
      questions = new Fuse(questions, { keys: ['title'] }).search(
        store.state.search
      );
    }

    draw(questions);
  }

  filterByTitle(title) {
    store.saveSearch(title);
    this.draw();
  }

  filterByCategory(categoryId) {
    store.saveCategoryId(categoryId);
    this.draw();
  }
}
