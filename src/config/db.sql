CREATE DATABASE oregano;
\c oregano;

CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL, email VARCHAR(50) NOT NULL, password VARCHAR(25) NOT NULL, phone VARCHAR(11), rol VARCHAR(25));


INSERT INTO users VALUES(DEFAULT,'Bastian','bas.gutierrez@gmail.com','1234','56956092671','Administrador');
SELECT * FROM users;

DROP TABLE users;