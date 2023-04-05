const inquirer = require("inquirer");
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Aiden2022sep15',
    database: 'office_db'
  },
  console.log(`Connected to the office_db database.`)
);

// Query database
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const firstprompt = () => {

    inquirer.prompt([
        {
          type: "list",
          name: "menu",
          message: "What would you like to do?",
          pageSize: 20,
          choices: [
            new inquirer.Separator("-----VIEW-----"),
            "View all departments",
            "View all roles",
            "View all employees",
            new inquirer.Separator("-----ADD-----"),
            "Add a department",
            "Add a role",
            "Add an employee",
            new inquirer.Separator("-----UPDATE-----"),
            "Update an employee",
            new inquirer.Separator("-----REMOVE-----"),
            "Remove a department",
            "Remove a role",
            "Remove an employee",
            new inquirer.Separator("----------------"),
            "Exit",
          ],
        },
      ]);
    
      let inputs;
      let managerId;
      let roleId;
      let result;
      let firstName;
      let lastName;
      let selectedEmployee;
      let selectedRole;
      let selectedDepartment;
