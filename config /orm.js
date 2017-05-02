// Dependencies
var connection = require("./connection.js");

// ORM
var tableName = "getBurgers";

var orm = {

  //selectAll() burgers
  getBurgers: function(tableName, callback){
      connection.query('SELECT * FROM burgers', function(err, result){
            if(err)throw err;
            callback(result);
      });
  },
  //insertOne() burger
  addBurgers: function(burger, callback){
    var burgerName = burger;
    var mySQLQuery = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + " ')";
        connection.query(mySQLQuery, function(err, result){
        if(err) throw err; 
        callback(result);
    });
  },
  //updateOne() burger
  updateBurger: function(burgerId, callback){
    var id = burgerId;
    connection.query("UPDATE burgers Set devoured=1 WHERE id=?", [id], function(err, result){
          if(err) throw err; 
          callback(result);
  });
  //deleteOne() burger
  deleteBurge: function() {}
  },


//use modele.export to export ORM
module.exports = orm;