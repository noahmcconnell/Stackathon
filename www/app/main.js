import HomeController from "./components/home/home-controller"

class App {
    constructor() {
      this.controllers = {
        homeController: new HomeController(),
      }
    }
}

window.app = newApp()