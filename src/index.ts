import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import recipeRoutes from "./routes/recipeRoutes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/recipes", recipeRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
