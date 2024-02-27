import express, { json } from "express";
import cors from "cors";
import { PORT } from "./src/utils/config.js";
import { loginRoutes, userRoutes } from "./src/routes/userRoutes.js";
import { productRoutes } from "./src/routes/productRoutes.js";
import { favoriteRoutes } from "./src/routes/favoriteRoutes.js";
import { cartRoutes } from "./src/routes/cartRoutes.js";

const app = express();

app.use(json());
app.disable("x-powered-by");
app.use(cors());

app.listen(PORT, () =>
  console.log(`server listening on port http://localhost:${PORT}`)
);

app.use("/login", loginRoutes);
app.use("/user", userRoutes);
app.use("/products", productRoutes);
app.use("/favorites", favoriteRoutes);
app.use("/cart", cartRoutes);

export default app;
