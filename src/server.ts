import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/users", usersRoutes);

app.listen(3333, () => console.log("Server is running!"));
