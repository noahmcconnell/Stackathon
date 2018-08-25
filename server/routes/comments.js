const router = require('express').Router();
const PostComments = require('../models/post-comment');
const AnswerComments = require('../models/answer-comment');
const AnswerCommentVote = require('../models/a-comment-vote');
const PostCommentVote = require('../models/p-comment-vote');

router.get('/by-post/:postId', (req, res, next) =>
  PostComments.find({
    postId: req.params.postId
  })
    .populate({
      path: 'userId',
      select: 'username - _id'
    })
    .exec((error, commentsData) => {
      if (error) {
        return next(error);
      }
      Promise.all(
        commentsData.map(async comment => {
          const count = await PostCommentVote.find({
            postCommentId: comment._id
          });
          return { ...comment, voteCount: count };
        })
      )
        .then(comments => {
          res.send(comments);
        })
        .catch(next);
    })
);

router.get('/by-answer/:answerId', (req, res, next) =>
  AnswerComments.find({
    answerId: req.params.answerId
  })
    .populate({
      path: 'userId',
      select: 'username - _id'
    })
    .exec((error, commentsData) => {
      if (error) {
        return next(error);
      }
      Promise.all(
        commentsData.map(async comment => {
          const count = await AnswerCommentVote.find({
            answerCommentId: comment._id
          });
          return { ...comment, voteCount: count };
        })
      )
        .then(comments => {
          res.send(comments);
        })
        .catch(next);
    })
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
