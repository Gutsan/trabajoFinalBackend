import request from "supertest";
import server from "../App.js";

describe("Operaciones CRUD de productos", () => {
  it("Obteniendo un status 200", async () => {
    const response = await request(server).get("/products").send();
    const status = response.statusCode;
    expect(status).toBe(200);
  });
  it("Obtener un producto por id", async () => {
    const id = 11;
    const response = await request(server).get(`/products/${id}`);
    const status = response.statusCode;
    expect(status).toBe(200);
  });
  it("Obtener productos por categoria", async () => {
    const id = 1;
    const response = await request(server).get(`/products/category/${id}`);
    const status = response.statusCode;
    expect(status).toBe(200);
  });
  it("Agregar un nuevo usuario", async () => {
    const usuario = {
      name: "prueba1",
      email: "prueba@gmail.com",
      password: "1234",
      phone: "987654321",
      rol: "cliente",
    };
    const response = await request(server).post("/user").send(usuario);
    expect(response.statusCode).toBe(201);
  });
  it("Modificar un usuario", async () => {
    const usuario = {
      id: 15,
      name: "pruebaModificado",
      email: "modificado@gmail.com",
      password: "1234",
      phone: "987654321",
      rol: "cliente",
    };
    const response = await request(server).put("/user").send(usuario);
    expect(response.statusCode).toBe(201);
  });
  it("Eliminar un usuario", async () => {
    const id = 15;
    const response = await request(server).delete(`/user/${id}`);
    expect(response.statusCode).toBe(201);
  });
  /* it("obtener status 400", async () => {
    const { body: cafe } = await request(server).get("/cafes/2").send();
    const response = await request(server).put("/cafes/3").send(cafe);
    expect(response.statusCode).toBe(400);
  }); */
});
