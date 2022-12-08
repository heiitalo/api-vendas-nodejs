import productsRouter from "@modules/products/routes/products.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import userRouter from "@modules/users/routes/users.routes";
import { response, Router } from "express";
import { request } from "http";

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', userRouter);
routes.use('/sessions',sessionsRouter);
export default routes;
