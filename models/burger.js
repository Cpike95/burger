const orm = require("../config/orm.js");
// Also inside burger.js, create the code that will call the
//  ORM functions using burger specific input for the ORM.
// selects all the non devoured burgers. 

const burger = {
    all: function(cb) {
        orm.all("burger_name", res => {
            cb(res);
        });
    },
    // the burger name into the burger column.
    insertOne: function(burger_name, devoured, cb) {
        orm.insertOne(burger_name, devoured, function(res) {
            cb(res);
        });
    },
        
    //Updates the devoured to TRUE
    updateOne: function(devoured, id, cb) {
            orm.updateOne( id, function(res) {
                cb(res);
            });
    },

    delete: function(id, cb) {
        orm.delete(id, function(res) {
            cb(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;