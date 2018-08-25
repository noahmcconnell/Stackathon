import Store from '../../store/store.js';
const store = new Store();

const app = document.getElementById('app');

function draw(isLoggedIn) {}

export default class HeaderFooterController {
  constructor() {}
  draw() {
    draw(store.state.user.username !== '');
  }
}
