import express from "express";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";
import orderItemRoutes from "./routes/order.item.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import imageRoutes from "./routes/image.routes.js";
import loginRoutes from "./routes/login.routes.js";
import cartRoutes from "./routes/order.routes.js";
import cartItemRoutes from "./routes/cart.item.routes.js";
import logeadoRoutes from "./routes/logeado.routes.js" 

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.static("./backend/imagesProduct/"));

app.use(indexRoutes);
app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);
app.use(orderItemRoutes);
app.use(transactionRoutes);
app.use(imageRoutes);
app.use(loginRoutes);
app.use(cartRoutes);
app.use(cartItemRoutes);
app.use(logeadoRoutes);

app.listen(PORT);
console.log(`Server corriendo en puerto ${PORT}`);
