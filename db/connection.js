const mysql = require("mysql2/promise");

const db = (() => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aiden2022sep15",
    database: "office_db",
  });
})();

module.exports = db;
