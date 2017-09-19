var controller = require('./controllers');
// var express = require('express');
// var app = express();
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

// app.use(function(req, res, next) {
//   if (req.method === 'OPTIONS') {
//     console.log('KLDAJFLKJLKJLKAJ')
//   }
// })

// router.options('/users', controller.users.options)
// router.options('/messages', controller.users.options)


module.exports = router;

