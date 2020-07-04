const mysql = require("mysql");
let connection;

// MySQL DB Connection Information (remember to change this with our specific credentials)
if (process.env.JAWSDB_URL) {
  connection = msql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Brownie#2013",
    database: "burgers"
  });
}


// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

