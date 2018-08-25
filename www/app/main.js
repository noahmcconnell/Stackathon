import HomeController from './components/home-controller.js';
import LoginSignupController from './components/login-signup-controller.js';

class App {
  constructor() {
    this.controllers = {
      home: new HomeController(),
      loginSignup: new LoginSignupController()
    };
    this.toasts = document.getElementById('toasts');
  }
  toastMessage(string) {
    this.toasts.innerHTML += `<toast-message>${string}</toast-message>`;
  }
}

window.app = new App();
