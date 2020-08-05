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

INSERT INTO emp_role (title)
VALUES ("CEO"), ("Janitor"), ("Police Officer");

INSERT INTO emp_role (salary)
VALUES (47.50), (5.23), (1.25);


SELECT * FROM department;
SELECT * FROM emp_role;
SELECT * FROM employee; 