var db = require('../db');
//db.mysql.query

module.exports = {
  messages: {
    get: function () {
      // get the data from the database
      // 
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

