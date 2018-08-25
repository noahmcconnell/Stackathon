import Store from '../store/store.js';
const store = new Store();

const app = document.getElementById('app');

function draw(isLogin = true) {
  if (store.state.user.username) {
    return;
  }
  app.innerHTML = `
  <section class="login-signup container">
    <form onclick='app.controllers.loginSignup.${
      isLogin ? 'login' : 'signup'
    }()'>
      <div class="input-field theme fw-500">
        <input id="username" type="text" class="validate">
        <label for="username">Username</label>
      </div>
      <div class="input-field theme fw-500">
        <input id="password" type="password" class="validate">
        <label for="password">Password</label>
        <small class="show">show</small>
      </div>
      <button class="btn btn-theme waves-effect waves-light" type="submit">${
        isLogin ? 'Login' : 'Signup'
      }</button>
    </form>
  </section>
  `;
}

export default class LoginSignupController {
  constructor() {}

  drawLogin() {
    draw(true);
  }
  drawSignUp() {
    draw(false);
  }
}
