var models = require('../models');
// var express = require('express');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

var objectId = 0;

module.exports = {
  messages: {
    get: function (req, res) {
      res.set(defaultCorsHeaders)
      var obj = {results:[]};
      models.messages.get(function(data) {
        obj.results = data;
        res.send(JSON.stringify(obj));
      });
      // console.log('get messages',req, res )
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.set(defaultCorsHeaders)
      console.log('this is mAH bodaaaah',req); 
      var message = req.body.text || 'This is a default message'
      var name = req.body.username || 'Default name'
      var room = req.body.roomname || 'lobby'      
      // var obj = {message: message, name: name, room: room}
      var sql = `INSERT INTO messages (roomname, username, text) VALUES ("${room}","${name}","${message}")`;
      // models.messages.post(`INSERT INTO messages (message, name, room) VALUES (:message,:name,:room)`)
      models.messages.post(sql)
      res.send(JSON.stringify({results:[{username:name,roomname:room,text:message}]}));
      // res.send(JSON.stringify({butt:'me'}))
      // get req body info and put it inside of our db (using models)
      // potentially use
      // console.log('post messages', req, res)
    }, // a function which handles posting a message to the database
    // options: function (req, res) {
    //   console.log('options', req, res);
    // } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('get users',req.body);
    },
    post: function (req, res) {
      console.log('post users',req.body)
    },
    // options: function (req, res) {
    //   console.log('options', req, res);
    // }
  }
  
  
};

