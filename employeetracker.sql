DROP DATABASE IF EXISTS mysqlemployeetracker;
CREATE database mysqlemployeetracker;

USE mysqlemployeetracker;

CREATE TABLE department (
    id INT NOT NULL ,
    dep_name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE emp_role (
    id INT NOT NULL ,
    title VARCHAR(30) NULL ,
    salary DECIMAL(10,4) NULL,
    -- department INT,
    -- FOREIGN KEY (dep_name) REFERENCES department(dep_name),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL ,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    -- emp_role INT,
    PRIMARY KEY (id) 
    -- FOREIGN KEY (title) REFERENCES emp_role(title)
   -- FOREIGN KEY (title) REFERENCES emp_role(title) NULLIF(title,manager) --
);

SELECT * FROM department;
SELECT * FROM emp_role;
SELECT * FROM employee; 