const router = require('express').Router();
const Collection = require('../models/answer');
const Votes = require('../models/answer-vote');

router.get('/by-post/:postId', (req, res, next) =>
  Collection.find({
    postId: req.params.postId
  })
    .populate({
      path: 'userId',
      select: 'username -_id'
    })
    .exec((err, items) => {
      if (err) {
        return next(err);
      }
      Promise.all(
        items.map(item => {
          return Votes.find({ answerId: item._id })
            .then(votes => {
              count = votes.reduce(
                (total, vote) => total + (vote.direction ? 1 : -1),
                0
              );
              item._doc.voteCount = count;
              return item;
            })
            .catch(next);
        })
      )
        .then(answers => res.send(answers))
        .catch(next);
    })
);

router.get('/:id', (req, res, next) =>
  Collection.findById(req.params.id)
    .then(item => res.send(item))
    .catch(next)
);

router.post('/', (req, res, next) =>
  Collection.create(req.body)
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
