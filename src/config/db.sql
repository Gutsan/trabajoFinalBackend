CREATE DATABASE oregano;
\c oregano;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(250) NOT NULL, 
    email VARCHAR(50) NOT NULL, 
    password VARCHAR(25) NOT NULL, 
    phone VARCHAR(11), 
    rol VARCHAR(25)
    );
CREATE TABLE region (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250)
);
CREATE TABLE comuna(
    id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    region_id INT REFERENCES region(id)
);
CREATE TABLE adress(
    id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    calle VARCHAR(250),
    number VARCHAR(250),
    comuna_id INT REFERENCES comuna(id),
    user_id INT REFERENCES users(id)
);
CREATE TABLE category(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(250) NOT NULL, 
    description VARCHAR(250) NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(250) NOT NULL, 
    description VARCHAR(250) NOT NULL,
    img VARCHAR(250) ,
    price INT NOT NULL, 
    stock INT, 
    category_id INT REFERENCES category(id)
    );

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    product_id INT REFERENCES products(id)
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    date VARCHAR(250),
    price INT,
    user_id INT REFERENCES users(id)
);
CREATE TABLE ordersDetails(
    id SERIAL PRIMARY KEY,
    quanty INT,
    price INT,
    product_id INT REFERENCES products(id),
    orders_id INT REFERENCES orders(id)
);


--Pruebas
INSERT INTO users VALUES(DEFAULT,'Bastian','bas.gutierrez@gmail.com','1234','56956092671','Administrador');
SELECT * FROM users;
UPDATE users SET name='Erik Silva',email='Erik@gmail.com',password='1234',phone='56973823469',rol='Administrador' WHERE id=3:
DROP TABLE users;

