import Store from '../store/store.js';
const store = new Store();

const appElement = document.getElementById('app');

function draw(isLogin = true) {
  if (store.state.user.username) {
    return;
  }
  appElement.innerHTML = `
  <section class="login-signup container">
    <form onsubmit='app.controllers.loginSignup.${
      isLogin ? 'login' : 'signup'
    }(event)'>
      <div class="input-field theme fw-500">
        <input id="username" name='username' type="text" class="validate" required>
        <label for="username">Username</label>
      </div>
      <div class="input-field theme fw-500">
        <input id="password" type="password" name='password' class="validate" required>
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
  drawSignup() {
    draw(false);
  }
  async login(event) {
    event.preventDefault();
    try {
      await store.login({
        username: event.target.username.value,
        password: event.target.password.value
      });
      //if (store.state.user.username) {
      app.controllers.home.draw();
    } catch (error) {
      //} else {
      app.toastMessage('Unable to login');
      //}
    }
  }
}
