var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
  
    port: 3306,
  
 
    user: "root",
  
    
    password: "sanctioned",
    database: "mysqlemployeetracker"
  });

  connection.connect(function(err) {
    if (err) throw err;
    displayOptions();
  });
  
function displayOptions() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Add departments, roles, employees",
          "View departments, roles, employees",
          "Update employee roles",
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Add departments, roles, employees":
          addInfo();
          break;
  
        case "View departments, roles, employees":
          viewWhich();
          break;
  
        case "Update employee roles":
          updateRoles();
          break;
        }
      });
  }

  // Code for "Add departments, roles, employees"

  function addInfo() {
    inquirer
      .prompt([
        {
          name: "addWhat",
          type: "list",
          choices: [
            "Add departments",
            "Add roles",
            "Add employees" ],
          message: "What would you like to add?"
        },
      ])
      .then(function(answer) {
        switch (answer.addWhat) {
        case "Add departments":
          addDep();
          break;
  
        case "Add roles":
          addRole();
          break;
  
        case "Add employees":
          addEmp();
          break;
        }
      });
    }

    function addDep () {
        inquirer
        .prompt([
        {
            name: "depName" ,
            type: "input" ,
            message: "What is the name of the new department?" ,
        },
        ])
        .then(function(answer){
            connection.query(
                "INSERT INTO department SET ?",
                {
                    dep_name: answer.depName
                },
                function(err) {
                    if (err) throw err;
                    console.log("Your new department was created successfully!");
                    
                    displayOptions();
                }
            )
        });
    }

    function addRole () {
        inquirer
        .prompt([
        {
            name: "title" ,
            type: "input" ,
            message: "What is the new role's title?" ,
        },
        {
            name: "salary" ,
            type: "input" ,
            message: "What is the salary of the new role?" ,
        },
        {
            name: "depId" ,
            type: "input" ,
            message: "What is the department ID of the new role?" ,
        },
        ])
        .then(function(answer){
            connection.query(
                "INSERT INTO emp_role SET ?",
                {
                    title: answer.title,
                    salary: answer.salary || 0, 
                    department_id: answer.depId
                },
                function(err) {
                    if (err) throw err;
                    console.log("Your new role was created successfully!");
                   
                    displayOptions();
                }
            )
        });
    }

    function addEmp () {
        inquirer
        .prompt([
        {
            name: "firstName" ,
            type: "input" ,
            message: "What is the new employee's first name?" ,
        },
        {
            name: "lastName" ,
            type: "input" ,
            message: "What is the new employee's last name?" ,
        },
        {
            name: "roleId" ,
            type: "input" ,
            message: "What is the role ID of the new employee?" ,
        },
        {
            name: "managerId" ,
            type: "input" ,
            message: "What is the manager ID of the new employee?" ,
        },
        ])
        .then(function(answer){
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName, 
                    role_id: answer.roleId || 0,
                    manager_id: answer.managerId || 0,
                },
                function(err) {
                    if (err) throw err;
                    console.log("Your new employee was created successfully!");
                    
                    displayOptions();
                }
            )
        });
    }

    // Code for "View departments, roles, employees"

    function viewWhich() {
        inquirer
          .prompt({
            name: "whichView",
            type: "list",
            message: "Which table would you like to view?",
            choices: [
              "Departments",
              "Roles",
              "Employees",
            ]
          })
          .then(function(answer) {
            switch (answer.whichView) {
            case "Departments":
              viewDep();
              break;
      
            case "Roles":
              viewRole();
              break;
      
            case "Employees":
              viewEmp();
              break;
            }
          });
      }
    
    function viewDep() {
        // query the database for all items being auctioned
        connection.query("SELECT * FROM department", function(err, results) {
            console.log(results);
            displayOptions();
          if (err) throw err})};

    function viewRole() {
    connection.query("SELECT * FROM emp_role", function(err, results) {
            console.log(results);
            displayOptions();
         if (err) throw err})};

    function viewEmp() {
    connection.query("SELECT * FROM employee", function(err, results) {
            console.log(results);
            displayOptions();
            if (err) throw err})};

// Code for updating departments, roles, employees 



