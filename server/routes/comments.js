const router = require('express').Router();
const PostComments = require('../models/post-comment');
const AnswerComments = require('../models/answer-comment');

router.get('/by-post/:postId', (req, res, next) =>
  PostComments.find({
    postId: req.params.postId
  })
    .then(comments => res.send(comments))
    .catch(next)
);
router.get('/by-answer/:answerId', (req, res, next) =>
  AnswerComments.find({
    answerId: req.params.answerId
  })
    .then(comments => res.send(comments))
    .catch(next)
);

router.get('/post/:id', (req, res, next) =>
  PostComments.findById(req.params.id)
    .then(item => res.send(item))
    .catch(next)
);

router.post('/post', (req, res, next) =>
  PostComments.create(req.body)
    .then(item => res.send(item))
    .catch(next)
);

router.put('/post/:id', (req, res, next) =>
  PostComments.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({ message: 'Successfully updated comment.' }))
    .catch(next)
);

router.delete('/post/:id', (req, res, next) =>
  PostComments.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully deleted item.' }))
    .catch(next)
);

module.exports = router;
