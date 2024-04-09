// connect mysql2
const mysql = require("mysql2");

// fill in the necessary data to connect to the database
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "mysmarthome",
  password: "fjlDJ93-dkadh$"
});


// export the connection outside
module.exports = pool;