var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
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
          viewInfo();
          break;
  
        case "Update employee roles":
          updateRoles();
          break;
        }
      });
  }

  function addInfo() {
    // prompt for info about the item being put up for auction
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
                    console.log("Your department was created successfully!");
                    // re-prompt the user for if they want to bid or post
                    displayOptions();
                }
            )
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
                    console.log("Your department was created successfully!");
                    // re-prompt the user for if they want to bid or post
                    displayOptions();
                }
            )
        });
    }
  