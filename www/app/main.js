import HomeController from './components/home-controller.js';
import LoginSignupController from './components/login-signup-controller.js';
import HeaderFooterController from './components/header-footer-controller.js';
import PostController from './components/post-controller.js';
import NewPostController from './components/new-post-controller.js';

class App {
  constructor() {
    this.controllers = {
      headerFooter: new HeaderFooterController(),
      home: new HomeController(),
      loginSignup: new LoginSignupController(),
      post: new PostController(),
      newPost: new NewPostController()
    };
    this.toasts = document.getElementById('toasts');
  }
  toastMessage(string) {
    this.toasts.innerHTML += `<toast-message>${string}</toast-message>`;
  }
}

window.app = new App();
