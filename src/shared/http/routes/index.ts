import customerRouter from "@modules/customers/routes/customers.routes";
import ordersRouter from "@modules/orders/routes/orders.routes";
import productsRouter from "@modules/products/routes/products.routes";
import passwordRouter from "@modules/users/routes/password.routes";
import profileRouter from "@modules/users/routes/profile.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import userRouter from "@modules/users/routes/users.routes";
import { response, Router } from "express";


const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', userRouter);
routes.use('/sessions',sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/customers', customerRouter)
routes.use('/orders', ordersRouter)
export default routes;
