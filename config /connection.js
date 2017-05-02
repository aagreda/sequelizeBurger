//require mysql package
var mysql = require("mysql");

// Setting up our connection information
var source = {
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burger_db"
  }
};

// Creating our connection
var connection = mysql.createConnection(source.localhost);

// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
