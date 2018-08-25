import HomeController from './components/home-controller.js';
import LoginSignupController from './components/login-signup-controller.js';

class App {
  constructor() {
    this.controllers = {
      home: new HomeController(),
      loginSignup: new LoginSignupController()
    };
  }
}

window.app = new App();
