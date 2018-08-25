import Store from '../store/store.js';
const store = new Store();

const main = () => document.getElementById('main-content');

async function draw() {
  const categories = (await store.getCategories())
    .map(
      category =>
        `<button class='btn-flat' onclick=''>${category.name}</button>`
    )
    .join();
  main().innerHTML = `
    <section class='homepage'>
      <div class='row'>
        <div class='col s3 flex flex-column p-3 grey lighten-5 categories'>
          <h5 align='center'>Categories</h5>
          ${categories}
        </div>
        <div class='col s9 flex flex-wrap'>
          <h1 class='title mt-1'>Questions</h1>
          <div class="card grey lighten-3 question-card">
            <div class="card-content black-text flex flex-column">
              <p class="title">Overlap columns in Bootstrap 4</p>
              <div class="flex stats">
                <p>0 <small>Votes</small></p>
                <p>10 <small>Answers</small></p>
              </div>
              <p class='time-stamp'>posted 2 days ago</p>
            </div>
          </div>
          <div class="card grey lighten-3 question-card">
            <div class="card-content black-text flex flex-column">
              <p class="title">Overlap columns in Bootstrap 4</p>
              <div class="flex stats">
                <p>0 <small>Votes</small></p>
                <p>10 <small>Answers</small></p>
              </div>
              <p class='time-stamp'>posted 2 days ago</p>
            </div>
          </div>
          <div class="card grey lighten-3 question-card">
            <div class="card-content black-text flex flex-column">
              <p class="title">Overlap columns in Bootstrap 4</p>
              <div class="flex stats">
                <p>0 <small>Votes</small></p>
                <p>10 <small>Answers</small></p>
              </div>
              <p class='time-stamp'>posted 2 days ago</p>
            </div>
          </div>
          <div class="card grey lighten-3 question-card">
            <div class="card-content black-text flex flex-column">
              <p class="title">Overlap columns in Bootstrap 4</p>
              <div class="flex stats">
                <p>0 <small>Votes</small></p>
                <p>10 <small>Answers</small></p>
              </div>
              <p class='time-stamp'>posted 2 days ago</p>
            </div>
          </div>
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
  draw() {
    if (app && app.controllers) {
      app.controllers.headerFooter.draw();
    }
    draw();
  }
}
