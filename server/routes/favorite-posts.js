const router = require('express').Router();
const Collection = require('../models/answer');

router.get('/:userId/:postId', (req, res, next) =>
  Collection.find({
    userId: req.params.userId,
    postId: req.params.postId
  })
    .then(userId => res.send(userId))
    .catch(() => res.send({}))
);

router.post('/', (req, res, next) =>
  Collection.create(req.body)
    .then(item => res.send(item))
    .catch(next)
);

router.delete('/:id', (req, res, next) =>
  Collection.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully deleted item.' }))
    .catch(next)
);

module.exports = router;
