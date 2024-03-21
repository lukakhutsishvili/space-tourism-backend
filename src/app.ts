import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./config/mongo.js";
import Router from "./routes/destinationRouter.js";
import SwaggerMiddleware from "./middlewares/swagger-middleware.js";

dotenv.config();
connect();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", Router);
app.use("/", ...SwaggerMiddleware());

app.listen(process.env.PORT || 3000, () => {
  console.log("listening to" + process.env.PORT || 3000);
});
