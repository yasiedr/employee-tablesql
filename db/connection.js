const mysql = require("mysql2");
const express = require('express');
// Import and require mysql2


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = (() => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aiden2022sep15",
    database: "office_db",
  },
  console.log(`Connected to the courses_db database.`)
  
  );
});

module.exports = db;
