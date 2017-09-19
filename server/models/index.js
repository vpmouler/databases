var db = require('../db');
//db.mysql.query

module.exports = {
  messages: {
    get: function (callback) {
      // get the data from the database
      db.con.query("SELECT * FROM messages", function (err, result, fields) {
        if (err) throw err;
        console.log('asdfsdaf',result)
        callback(result);
      });
    }, // a function which produces all the messages
    post: function (data) {
      db.con.query(data, function(err, result) {
        if (err) throw err;
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

// var sql = "INSERT INTO messages (message, name, room) VALUES ('BRIAN WAS HERE!!!', 'brian','lobby')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });