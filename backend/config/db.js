const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ken993',
  database: 'urmi',
});

module.exports = connection;
