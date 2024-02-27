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
    img_url VARCHAR(250)
);

CREATE TABLE cart(
    carrito_id SERIAL PRIMARY KEY,
    cantidad integer NOT NULL,
    opcion character varying(20) NOT NULL,
    precio bigint NOT NULL,
    user_id INT REFERENCES users(id),
    product_id INT REFERENCES products(id)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(250) NOT NULL, 
    description VARCHAR(250) NOT NULL,
    img_url_url VARCHAR(250),
    price INT NOT NULL, 
    stock INT, 
    category_id INT REFERENCES category(id),
    img_url VARCHAR(250)
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


--Pruebas usuarios
INSERT INTO users VALUES(DEFAULT,'Bastian','bas.gutierrez@gmail.com','1234','56956092671','Administrador');
SELECT * FROM users;
SELECT * FROM products;
ALTER TABLE products RENAME COLUMN img TO img_url;
UPDATE users SET name='Erik Silva',email='erik@gmail.com',password='1234',phone='56973823469',rol='Administrador' WHERE id=3;
UPDATE users SET email='roberto@carlos.cl',password='1234',phone='56973823469',rol='client' WHERE id=7;


DROP TABLE users;
DROP TABLE products;

--INSERTAR DATO DE CATEGORIAS Y PRODUCTOS
INSERT INTO category (id,name,img_url) VALUES
(DEFAULT,'FrutosSecos','../../../public/FRUTOS_SECOS_500x200.png'),
(DEFAULT,'Cacao','../../../public/Cacao_500x200.png'),
(DEFAULT,'BarradeProteinas','../../../public/BARRA_500x200.png'),
(DEFAULT,'Infusiones','../../../public/te_500x200.png');
(DEFAULT,'Infusiones','../../../public/te_500x200.png'),
(DEFAULT,'Semillas','../../../public/Semillas.jpg'),
(DEFAULT,'Mixes','../../../public/Mixes.webp'),
(DEFAULT,'Cereales','../../../public/Cereales.jpg'),
(DEFAULT,'Harinas','../../../public/Harinas.jpg');

INSERT INTO products (id,name,description,price,stock,category_id,img_url) VALUES
(DEFAULT, 'Almendra Entera', 'Almendras tostadas y listas para consumir.', 500, 50, 1, 'https://www.emporio4m.cl/cdn/shop/products/3AALMENDRAENTERA_360x360.jpg?v=1681138458'),
(DEFAULT, 'Cacao en Polvo Orgánico', 'Cacao en polvo orgánico, perfecto para batidos y postres.', 200, 40, 2, 'https://www.brotavida.cl/cdn/shop/files/cacao-brota-frente_grande.png?v=1700835984'),
(DEFAULT, 'Barra de Proteínas de Chocolate', 'Barra de proteínas sabor chocolate, ideal como snack después del ejercicio.', 300, 30, 3, 'https://tienda.estasenlinea.cl/713-large_default/barras-de-proteina-chocolate.jpg'),
(DEFAULT, 'Infusión de Manzanilla', 'Infusión de manzanilla, relajante y reconfortante.', 400, 60, 4, 'https://http2.mlstatic.com/D_NQ_NP_692170-MLA73809761655_012024-O.webp'),
(DEFAULT, 'Semillas de Chía', 'Semillas de chía, ricas en omega-3 y fibra.', 600, 45, 1, 'https://www.emporio4m.cl/cdn/shop/products/22ASEMILLADECHIA_360x360.jpg?v=1681145687'),
(DEFAULT, 'Mix Almendra, Maní y Pasas con sal', 'Mezcla de frutos secos y pasas, ideal para picar entre horas.', 250, 35, 1, 'https://www.emporio4m.cl/cdn/shop/products/59AMIXALMENDRASMANIYPASAS_720x720.jpg?v=1681145073'),
(DEFAULT, 'Cereal de Avena con Miel', 'Cereal de avena con miel, delicioso y nutritivo.', 350, 25, 1, 'https://www.emporio4m.cl/cdn/shop/products/58AARROZ_720x720.jpg?v=1681144053'),
(DEFAULT, 'Nueces Naturales', 'Nueces naturales, ricas en ácidos grasos saludables.', 450, 50, 1, 'https://www.emporio4m.cl/cdn/shop/products/25ANUEZMARIPOSACLARA_720x720.jpg?v=1681145215'),
(DEFAULT, 'Polvo de Cacao Amargo', 'Polvo de cacao amargo, perfecto para repostería.', 550, 40, 2, 'https://www.emporio4m.cl/cdn/shop/products/15-2APASAFLAMEV2_720x720.jpg?v=1681145288'),
(DEFAULT, 'Barra de Proteínas de Vainilla', 'Barra de proteínas sabor vainilla, una opción deliciosa y saludable.', 650, 30, 3, 'https://www.mermoz.cl/wp-content/uploads/2023/12/5425002401948.png'),
(DEFAULT, 'Infusión de Té Verde', 'Infusión de té verde, antioxidante y revitalizante.', 750, 60, 4, 'https://cdn.tremus.cl/wp-content/uploads/2020/08/TE_VERDE_100_bolsitas.jpg'),
(DEFAULT, 'Semillas de Girasol', 'Semillas de girasol, perfectas para añadir a ensaladas y yogures.', 320, 45, 1, 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREHRVCcWDuxCJFItq1KxsucOOkpkBLJrifp5QsFEPjCHv4mFKHQhLZtPuQUvbXQJn6oc_6naSauN5N4V-liWLn-rqWyZ4Qf4CaYlT3_HvO_ea7Z7weJc9H&usqp=CAE'),
(DEFAULT, 'Mix de Frutos Secos y Chocolate', 'Mezcla de frutos secos y chocolate, un snack irresistible.', 280, 35, 1, 'https://www.emporio4m.cl/cdn/shop/products/79AMIXDESEMILLAS_360x360.jpg?v=1681145177'),
(DEFAULT, 'Cereal de Maíz con Miel', 'Cereal de maíz con miel, un desayuno crujiente y delicioso.', 720, 25, 1, 'https://www.emporio4m.cl/cdn/shop/products/41AQUINOAPOP_360x360.jpg?v=1681145658'),
(DEFAULT, 'Avellanas Tostadas', 'Avellanas tostadas, ideales para picar entre horas.', 380, 50, 1, 'https://www.emporio4m.cl/cdn/shop/products/43ASESAMONEGRO_360x360.jpg?v=1681145794'),
(DEFAULT, 'Semilla de Linaza', 'Las semillas de lino, más conocidas como linaza', 420, 40, 1, 'https://www.emporio4m.cl/cdn/shop/products/27ASEMILLASDELINAZA_360x360.jpg?v=1681145703'),
(DEFAULT, 'Quinoa Negra', 'La quinoa negra está considerada como una proteína completa', 630, 30, 1, 'https://www.emporio4m.cl/cdn/shop/products/43ASESAMONEGRO_360x360.jpg?v=1681145794'),
(DEFAULT, 'Maní Tostado Sin Sal', 'Ideal para un snack entre comidas o un aperitivo con mix de frutos secos', 800, 60, 1, 'https://www.emporio4m.cl/cdn/shop/products/20AMANITOSTADOSINSAL_360x360.jpg?v=1681145050');
