import Store from '../store/store.js';
const store = new Store();

const main = document.getElementById('main');

function draw() {
  const post = {
    title: 'Why am i here?',
    userId: 'users name',
    correctAnswerId: 'the correct ansswer will go yonder',
    content:
      'i am here because i want to have a great life and career i am here because i want to have a great life and career i am here because i want to have a great life and career i am here because i want to have a great life and career',
    timestamp: 'August 24 12:00',
    category: {
      name: 'Javascript'
    },
    comments: [
      {
        timestamp: 'August 24 12:00',
        postId: 'post id',
        userId: 'users name',
        content: 'Here is the comment'
      }
    ]
  };

  main.innerHTML = `
    <section class='post container'>
      <header class='post-header flex'>
        <i class='material-icons favorite'>star</i>
        <h3 class='title'>Overlap columns in bootstrap 4</h3>
        <div class='upvote-downvote flex align-items-center'>
          <i class='material-icons'>thumb_up_alt</i>
          <span>0</span>
          <i class='material-icons'>thumb_down_alt</i>
        </div>
      </header>
      <article class='article'>
        <a href='#'>https://atom.io/packages/data-atom</a>
        <p>I have a MySQL connection through SSH that I have configured on Sequel Pro but like the idea of using this Atom
          package, data-atom, instead. My issue is that I cannot seem to figure out the js behind it to determine if it
          supports an SSH connection and if so how I can accomplish it with the configuration.</p>
        <button class='btn-icon'>edit <i class='material-icons'>edit</i></button>
        <div class='comments flex flex-column'>
          <article class="comment flex">
            <div class='flex flex-column upvote-downvote vertical'>
              <i class='material-icons'>thumb_up_alt</i>
              <span align='center'>0</span>
              <i class='material-icons'>thumb_down_alt</i>
            </div>
            <p>You will notice that the basic controllers and html structure has been setup for you. You will be responsible
              to connect each of the controllers to their appropiate service. Every Service is a class so be sure to invoke
              the service inside the controller and save it to a variable in the controller to gain access to the needed
              methods. Take a look at the weather controller for an example of newing up the services. Also don't forget
              to instantiate your controllers and add them to the app object.<span class="user-info">– <span class='blue-text'>Username</span>
                3 hrs ago</p>
          </article>
        </div>
      </article>
      <button class='btn-icon mt-1'>add comment <i class='material-icons'>add_comment</i></button>
    </section>
  `;
}

export default class PostController {
  constructor() {}
  async draw(id) {
    await state.store.getPost(id);
    draw();
  }
}
