require("dotenv").config();

const mysql = require("mysql2/promise");
const Connection = require("mysql2/typings/mysql/lib/Connection");

const database = mysql.createPool({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the express app PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

database
  .getConnection()
  .then(() => {
    // eslint-disable-next-line no-restricted-syntax
    console.log("database connection successful");
  })
  .catch((err) => {
    console.error(err);
  });

Connection.query("SELECT * FROM numbers", (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

module.exports = database;
