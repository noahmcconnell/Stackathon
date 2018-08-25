const router = require('express').Router();
const Collection = require('../models/post');
const Votes = require('../models/post-vote');

router.get('/', (req, res, next) => {
  Collection.find({})
    .then(items => {
      Promise.all(
        items.map(item => {
          return Votes.find({ postId: item._id })
            .then(votes => {
              const count = votes.reduce(
                (total, vote) => total + (vote.direction ? 1 : -1),
                0
              );
              item._doc.voteCount = count;
              return item;
            })
            .catch(next);
        })
      ).then(posts => res.send(posts));
    })
    .catch(next);
});

router.get('/category/:categoryId', (req, res, next) => [
  Collection.find({
    categoryId: req.params.categoryId
  })
    .then(items => {
      Promise.all(
        items.map(item => {
          return Votes.find({ postId: item._id })
            .then(votes => {
              const count = votes.reduce(
                (total, vote) => total + (vote.direction ? 1 : -1),
                0
              );
              item._doc.voteCount = count;
              return item;
            })
            .catch(next);
        })
      ).then(posts => res.send(posts));
    })
    .catch(next)
]);

router.get('/by-user/:userId', (req, res, next) =>
  Collection.find({
    userId: req.params.userId
  })
    .then(items => res.send(items))
    .catch(next)
);

router.get('/:id', (req, res, next) =>
  Collection.findById(req.params.id)
    .populate({ path: 'userId', select: 'username -_id' })
    .exec((err, item) => {
      if (err) {
        return next(err);
      }
      Votes.find({ postId: item._id })
        .then(votes => {
          const count = votes.reduce(
            (total, vote) => total + (vote.direction ? 1 : -1),
            0
          );
          item._doc.voteCount = count;
          res.send(item);
        })
        .catch(next);
    })
);

router.post('/', (req, res, next) =>
  Collection.create(req.body)
    .then(item => res.send(item))
    .catch(next)
);

router.put('/:id', (req, res, next) =>
  Votes.findByIdAndUpdate(req.params.id, req.body)
    .then(item => res.send(item))
    .catch(next)
);

router.put('/:id', (req, res, next) =>
  Collection.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({ message: 'Successfully updated item.' }))
    .catch(next)
);

router.delete('/:id', (req, res, next) =>
  Collection.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully deleted item.' }))
    .catch(next)
);

module.exports = router;
