// Require ORM
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(col, values, cb) {
        orm.insertOne("burgers", col, values, function(res) {
            cb(res);
        });
    },

    updateOne: function(colChange, valueChange, col, value, cb) {
        orm.updateOne("burgers", colChange, valueChange, col, value, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;