var models = require('../models');
// var express = require('express');


module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('get messages',req, res )
    }, // a function which handles a get request for all messages
    post: function (req, res) {
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


