import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

import dashboardRoutes from "./Routes/dashboardRoutes";
import productRoutes from "./Routes/ProductRoutes";
import userRoutes from "./Routes/userRoutes";
import expenseRoutes from "./Routes/expenseRoutes";
// Route Import

// Congfiguration
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/dashboard", dashboardRoutes); //http://localhost:8000/dashboard
app.use("/products", productRoutes); //http://localhost:8000/products
app.use("/users", userRoutes);
app.use("/expenses", expenseRoutes);

// Server
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
