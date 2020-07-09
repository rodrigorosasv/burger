var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    console.log("_________________");
    console.log("objColVals: "+ objColVals);
    console.log("condition: " + condition);
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

module.exports = burger;
