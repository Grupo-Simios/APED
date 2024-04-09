import express from "express";
import paymentRoutes from "./routes/payment.routes.js";
import { PORT } from "./config.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(cors);
app.use(express.json());

app.use(paymentRoutes);

app.listen(PORT);
