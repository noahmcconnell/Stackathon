const router = require("express").Router();
const PostComments = require("../models/post-comment");
const AnswerComments = require("../models/answer-comment");
const AnswerCommentVote = require('../models/a-comment-vote');
const PostCommentVote = require('../models/p-comment-vote');

router.get("/by-post/:postId", (req, res, next) =>
  PostComments.find({
    postId: req.params.postId
  })
  .populate({
    path: "userId",
    select: "username - _id"
  })
  .exec((error, comments) => {
    if (error) {
      return next(error);
    }
    comments = comments.map(comment => {
      const count = 
    })
  })
);

router.get(
  "/by-answer/:answerId",
  (req, res, next) =>
    AnswerComments.find({
      answerId: req.params.answerId
    })
      .populate({
        path: "userId",
        select: "username - _id"
      })
      .exec((error, comments) => {
        if (error) {
          return next(error);
        }
        res.send(comments);
      })
  // Collection.findById(req.params.id).populate({ path: 'userId', select: "username -_id" })
  // .exec((err, item) => {
  //   if (err) { return next(err) }
  //   res.send(item)
  // })
);

router.get("/post/:id", (req, res, next) =>
  PostComments.findById(req.params.id)
    .then(item => res.send(item))
    .catch(next)
);

router.post("/post", (req, res, next) =>
  PostComments.create(req.body)
    .then(item => res.send(item))
    .catch(next)
);

router.put("/post/:id", (req, res, next) =>
  PostComments.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({ message: "Successfully updated comment." }))
    .catch(next)
);

router.delete("/post/:id", (req, res, next) =>
  PostComments.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: "Successfully deleted item." }))
    .catch(next)
);

module.exports = router;
