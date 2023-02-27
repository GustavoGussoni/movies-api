import express, { Application } from "express";
import moviesRoutes from "./routes/movies.routes";

const app: Application = express();
app.use(express.json());

app.use("/movies", moviesRoutes);
export default app;
