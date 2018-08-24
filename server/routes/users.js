const router = require('express').Router();
const Collection = require('../models/user');

router.get('/', (req, res, next) =>
  Collection.find({
    userId: req.params.userId
  })
    .then(items => res.send(items))
    .catch(next)
);

router.get('/:id', (req, res, next) =>
  Collection.findById(req.params.id)
    .then(item => res.send(item))
    .catch(next)
);

router.post('/longin', (req, res, next) =>
  Collection.findOne({
    username: req.body.username,
    password: req.body.password})
      .then(user => 
        {if(user){
          res.send(user)
        }
        return res.status(401).send({
          error:"Invaild login"
        })
      })
    
);

router.post('/register', (req, res, next) => {
    Collection.create(req.body).then(user => {
      res.send(user)
    }).catch(next)

});

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