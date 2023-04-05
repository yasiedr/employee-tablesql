INSERT INTO departments (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', 80000, 1),
('Sales Lead', 90000, 1),
('Engineer', 120000, 2),
('Lead Engineer', 110000, 2),
('Accountant', 115000, 3),
('Chief Financial Officer', 210000, 3),
('Lawyer', 110000, 4),
('Legal Team Lead', 190000, 4),
('Human Resources Employee', 80000, 5),
('Human Resources Director', 100000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Aiden', 'merabad', 1, null),
('Mike', 'smith', 2, null),
('yasaman', 'edrisian', 3, null),
('Kevin', 'chen', 4, null),
('Malia', 'rodrigo', 5, null),
('Sarah', 'Lourd', 6, null),
('jackie', 'Allen', 7, null),
('sally', 'Meyer', 8, null),
('Tyson', 'Mack', 9, null),
('Anna', 'jokovich', 10, null);