DROP DATABASE IF EXISTS mysqlemployeetracker;
CREATE database mysqlemployeetracker;

USE mysqlemployeetracker;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    dep_name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE emp_role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL ,
    salary DECIMAL(10,4) NULL,
    department_id INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL, 
    PRIMARY KEY (id)
);

INSERT INTO department (dep_name)
VALUES ("Sales"), ("Marketing"), ("Enforcement");

INSERT INTO emp_role (title, salary, department_id)
VALUES ("CEO", 60, 1);

INSERT INTO emp_role (title, salary, department_id)
VALUES ("COO", 57, 2);

INSERT INTO emp_role (title, salary, department_id)
VALUES ("Intern", 5, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Aaron", "Hotchner", 1, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Derek", "Morgan", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Spencer", "Reid", 3, 1);

SELECT * FROM department;
SELECT * FROM emp_role;
SELECT * FROM employee; 