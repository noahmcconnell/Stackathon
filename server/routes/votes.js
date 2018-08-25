const router = require('express').Router();
const PostVote = require('../models/post-vote.js');
const PCommentVote = require('../models/p-comment-vote.js')
const AnswerVote = require('../models/answer-vote.js');
const ACommentVote = require('../models/a-comment-vote.js');


router.put('/:id', (req, res, next) =>
  Vote.findByIdAndUpdate(req.params.id, req.body, {
      upsert: true
  })
    .then(() => res.send({ message: 'Successfully updated item.' }))
    .catch(next)
);

router.delete('/:id', (req, res, next) =>
  Vote.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully deleted item.' }))
    .catch(next)
);

module.exports = router;