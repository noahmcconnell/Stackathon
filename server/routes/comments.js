const router = require('express').Router();
const Collection = require('../models/post-comment');

router.get('/by-post/:postId', (req, res, next) =>
  Collection.find({
    postId: req.params.postId
  })
    .then(comments => res.send(comments))
    .catch(next)
);
router.get('/by-answer/:answerId', (req, res, next) =>
  Collection.find({
    answerId: req.params.answerId
  })
    .then(comments => res.send(comments))
    .catch(next)
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
    .then(() => res.send({ message: 'Successfully updated comment.' }))
    .catch(next)
);

router.delete('/:id', (req, res, next) =>
  Collection.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully deleted item.' }))
    .catch(next)
);

module.exports = router;
