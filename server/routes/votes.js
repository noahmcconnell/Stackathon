const router = require('express').Router();
const PostVote = require('../models/post-vote.js');
const PCommentVote = require('../models/p-comment-vote.js')
const AnswerVote = require('../models/answer-vote.js');
const ACommentVote = require('../models/a-comment-vote.js');


router.put('/post/:postId', (req, res, next) =>
  PostVote.findByIdAndUpdate(req.params.id, req.body, {
      upsert: true
  })
    .then(() => res.send({ message: 'Successfully updated item.' }))
    .catch(next)
);

router.delete('/post/:postId', (req, res, next) =>
  PostVote.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully deleted item.' }))
    .catch(next)
);

router.put('/comments/post/:postId', (req, res, next) =>
  PCommentVote.findByIdAndUpdate(req.params.id, req.body, {
      upsert: true
  })
    .then(() => res.send({ message: 'Successfully updated item.' }))
    .catch(next)
);

router.delete('/comments/post/:postId', (req, res, next) =>
  PCommentVote.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully deleted item.' }))
    .catch(next)
);

router.put('answer/:postId', (req, res, next) =>
  AnswerVote.findByIdAndUpdate(req.params.id, req.body, {
      upsert: true
  })
    .then(() => res.send({ message: 'Successfully updated item.' }))
    .catch(next)
);

router.delete('answer/:postId', (req, res, next) =>
  AnswerVote.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully deleted item.' }))
    .catch(next)
);

router.put('/comment/answer/:postId', (req, res, next) =>
  ACommentVote.findByIdAndUpdate(req.params.id, req.body, {
      upsert: true
  })
    .then(() => res.send({ message: 'Successfully updated item.' }))
    .catch(next)
);

router.delete('/comment/answer/:postId', (req, res, next) =>
  ACommentVote.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully deleted item.' }))
    .catch(next)
);

module.exports = router;