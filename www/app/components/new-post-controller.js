import Store from '../../store/store.js';
const store = new Store();

const main = document.getElementById('main-content');

function draw() {
  main.innerHTML = `
  <section class='create-post flex flex-column'>
    <form onsubmit='app.controllers.fill.meIn()'>
      <!-- Fill in onsubmit -->
      <div class="input-field theme fw-500 title-input">
        <input id="question-title-input" type="text">
        <label for="question-title-input">Title</label>
      </div>
      <div class='input-field textarea fw-500'>
        <textarea id='question-content' resize='false'></textarea>
        <label for='question-content'>What's your question?</label>
      </div>
      <button class="btn btn-theme waves-effect waves-light" onclick="">Submit</button>
      <button class="btn-flat blue-text waves-effect waves-dark" onclick="">Cancel</button>
    </form>
  </section>
  `;
}

export default class NewPostController {
  constructor() {}
}
