// Require burger.js and express
var burger = require("../models/burger.js");

var express = require("express");

var router = express.Router();

// Create routes and renders via handlebars
router.get("/", function (req, res) {
    burger.selectAll(function (result) {
        var hbsObject = {
            burgers: result
        }
        // console.log(burgerObject);
        res.render("index", hbsObject);
    });
});

// Posting a new burger
router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        "burger_name", req.body.burger_name, function (result) {
            res.redirect("/");
        });
});

// Updating a burger to devoured and back
router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id
    burger.updateOne(
        "devoured", 1,
        "id", id,
        function (result) {
            res.redirect("/");
        });
});

module.exports = router;