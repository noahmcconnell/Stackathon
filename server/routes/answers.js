const router = require('express').Router()
let Answers = require('../models/answer')


router.get('/by-user/:userId', (req, res, next) =>
  Answers.find({
      userId: req.params.userId
  })
    .then(userId => res.send(userId))
    .catch(next)
);

router.get('/:id', (req, res, next) =>
  Answers.findById(req.params.id)
    .then(item => res.send(item))
    .catch(next)
);

router.post('/', (req, res, next) =>
  Answers.create(req.body)
    .then(item => res.send(item))
    .catch(next)
);

router.put('/:id', (req, res, next) =>
  Answers.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({ message: 'Successfully updated item.' }))
    .catch(next)
);

router.delete('/:id', (req, res, next) =>
  Answers.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'Successfully deleted item.' }))
    .catch(next)
);

module.exports = router;