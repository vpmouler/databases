var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "plantlife",
  database: "chat"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("SELECT * FROM messages", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0]);
  });

var sql = "INSERT INTO messages (message, name, room) VALUES ('BRIAN WAS HERE!!!', 'brian','lobby')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });