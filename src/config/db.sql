CREATE DATABASE oregano;
\c oregano;

CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL, email VARCHAR(50) NOT NULL, password VARCHAR(25) NOT NULL, phone VARCHAR(11), rol VARCHAR(25));


INSERT INTO users VALUES(DEFAULT,'Bastian','bas.gutierrez@gmail.com','1234','56956092671','Administrador');
SELECT * FROM users;
UPDATE users SET name='Erik Silva',email='Erik@gmail.com',password='1234',phone='56973823469',rol='Administrador' WHERE id=3:
DROP TABLE users;

{  
  "id":"3",
  "name": "Erik Silva",
  "email": "Erik@gmail.com",
  "password":"1234",
  "phone": "56973823469",
  "rol": "Administrador"
}