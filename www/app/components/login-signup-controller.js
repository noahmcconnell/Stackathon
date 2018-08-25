import Store from "../../store/store.js";
const store = new Store();

const app = document.getElementById("app");

function draw() {
  app.innerHTML = `
  <section class="login-signup container">
    <form>
      <div class="input-field theme fw-500">
        <input id="username" type="text" class="validate">
        <label for="username">Username</label>
      </div>
      <div class="input-field theme fw-500">
        <input id="password" type="password" class="validate">
        <label for="password">Password</label>
        <small class="show">show</small>
      </div>
      <button class="btn btn-theme waves-effect waves-light" type="submit">Login</button>
    </form>
  </section>
  `;
}

export default class Controller {
  constructor() {}
}
