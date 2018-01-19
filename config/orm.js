// Require the MySQL connection. 
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT*FROM ??";
        connection.query(queryString, [table], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },

    insertOne: function(table, col, values, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, values], function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },

    updateOne: function(table, colChange, valueChange, col, value, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, colChange, valueChange, col, value], function(err, data) {
            if (err) throw err;
            cb(data);
        })
    }
}

module.exports = orm;