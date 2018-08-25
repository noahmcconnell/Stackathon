let express = require('express');
let bp = require('body-parser');
require('./db/db-config');
let server = express();
let port = 3000;

server.use(bp.json());
server.use(
  bp.urlencoded({
    extended: true
  })
);
server.use(express.static(__dirname + '/../www/'));

//ROUTES
let userRoutes = require('./routes/users');
let favRoutes = require('./models/favorite-post');
let postRoutes = require('./routes/posts');
let answerRoutes = require('./routes/answers');
let commentRoutes = require('./routes/posts');

server.use('/auth', userRoutes);
server.use('/api/favorite-posts', favRoutes);
server.use('/api/post', postRoutes);
server.use('/api/answer', answerRoutes);
server.use('/api/comment', commentRoutes);

//ERROR Handlers
server.use('/api/*', (err, req, res, next) => {
  res.status(400).send(err);
});
server.unsubscribe('*', (req, res, next) => {
  res.status(404).send('<h1>404 Error<h1>');
});

server.listen(port, () => console.log(`Server started: ${port}`));
