import Store from '../store/store.js';
const store = new Store();

const main = document.getElementById('main');

function draw() {
  main.innerHTML = `
    <section class='homepage'>
      <div class='row'>
        <div class='col s3 flex flex-column p-3 grey lighten-5 categories'>
          <h5 align='center'>Categories</h5>
          <button class="btn-flat">Angular</button>
          <button class="btn-flat">Bootstrap</button>
          <button class="btn-flat">Cards</button>
          <button class="btn-flat">Classes</button>
          <button class="btn-flat">Command Line</button>
          <button class="btn-flat">CSS</button>
          <button class="btn-flat">Flexbox</button>
          <button class="btn-flat">Forms</button>
          <button class="btn-flat">HTML5</button>
          <button class="btn-flat">Inputs</button>
          <button class="btn-flat">JavaScript</button>
          <button class="btn-flat">Memes</button>
          <button class="btn-flat">Node.js</button>
          <button class="btn-flat">Pillars</button>
          <button class="btn-flat">React</button>
          <button class="btn-flat">Redux</button>
          <button class="btn-flat">Scrum</button>
          <button class="btn-flat">Syntax</button>
          <button class="btn-flat">Tables</button>
          <button class="btn-flat">Vue</button>
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
      <div class='fixed-action-btn'>
        <button class='btn-floating btn-large blue'>
          <i class='large material-icons'>add</i>
        </button>
      </div>
    </section>
  `;
}

export default class HomeController {
  constructor() {}
  draw() {
    app.controllers.headerFooter.draw();
    draw();
  }
}
