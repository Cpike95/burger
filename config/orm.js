const connection = require("./connection.js");
// In the orm.js file, create the methods that 
// will execute the necessary MySQL commands in 
// the controllers. These are the methods you will 
// need to use in order to retrieve and store data 
// in your database.
const orm = {
    //Devours all burgers. 
        all: function(test, cb) {
            const queryString = "SELECT * FROM burgers ";
            
            connection.query(queryString, (err, result) => {
              if (err) throw err;

              cb(result);
            });
          },
    // a function to insert the burger_name, devo into the data base. 
        insertOne: function(burger_name, devoured, cb) {
            const queryString = `INSERT INTO burgers (burger_name, devoured) Values (?, ?) `;

            connection.query(queryString, [burger_name, devoured], function(err, result) {
              if (err) throw err;

              cb(result);
            });
          },
      // update the burger name. 
      // Must select the row in the burger table by id, selected by clicking the update button. 
        updateOne: function(id, cb) {
            const queryString = `UPDATE  burgers SET devoured = true WHERE id = ?`;
            
            connection.query(queryString, id, function(err, result) {
              if (err) throw err;

              cb(result);
            });
          },
        delete: function(id, cb) {
          const queryString = `DELETE FROM burgers Where id = ? `;
          
          connection.query(queryString, id, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          })
        },
};

// Export the ORM object in module.exports.
module.exports = orm; 