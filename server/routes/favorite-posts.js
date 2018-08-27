const router = require('express').Router();
const Collection = require('../models/favorite-post');

router.get('/', (req, res, next) =>
  Collection.find({})
    .then(items => res.send(items))
    .catch(next)
);
router.get('/:userId/:postId', (req, res, next) =>
  Collection.find({
    userId: req.params.userId,
    postId: req.params.postId
  })
    .then(items => res.send(items.length ? items[0] : {}))
    .catch(() => res.send({}))
);

router.post('/', (req, res, next) =>
  Collection.create(req.body)
    .then(item => res.send(item))
    .catch(next)
);

router.delete('/delete-all', (req, res, next) =>
  Collection.find({})
    .remove()
    .then(() => res.send({ message: 'Successfully deleted all favorites' }))
    .catch(next)
);
router.delete('/:id', (req, res, next) =>
  Collection.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully deleted item.' }))
    .catch(next)
);

module.exports = router;
