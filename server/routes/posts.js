const router = require('express').Router();
const Collection = require('../models/post');
const Votes = require('../models/post-vote');

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
      Votes.find({ postId: id })
        .then(votes => {
          count = votes.reduce(
            (total, vote) => total + (vote.direction ? 1 : -1),
            0
          );
          res.send({ ...item, voteCount: count });
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
  Vote.findByIdAndUpdate(req.params.id, req.body)
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
