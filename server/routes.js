var controller = require('./controllers');

var router = require('express').Router();

//Connect controller methods to their corresponding routes

router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);



var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

// router.options('/users', controller.users.options)
router.options('/messages', function(req, res) {
  res.set(defaultCorsHeaders);
  res.send();
})


module.exports = router;

