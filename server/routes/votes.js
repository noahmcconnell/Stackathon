const router = require('express').Router();
const Vote = require('../models/vote.js');

router.get('/by-user/:userId', (req, res, next) =>
  Vote.find({
    userId: req.params.userId
  })
    .then(items => res.send(items))
    .catch(next)
);

router.get('/:id', (req, res, next) =>
  Vote.findById(req.params.id)
    .then(item => res.send(item))
    .catch(next)
);


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