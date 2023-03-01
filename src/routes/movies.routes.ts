import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  listMovieController,
  updateMovieController,
} from "../controllers/movies.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureMovieIdExistsMiddleware from "../middlewares/ensureMovieIdExists.middleware";
import ensureMovieNameExistsMiddleware from "../middlewares/ensureMovieNameExists.middleware";
import { movieSchema, movieUpdateSchema } from "../schemas/movies.schemas";

const moviesRoutes: Router = Router();

moviesRoutes.post(
  "",
  ensureDataIsValidMiddleware(movieSchema),
  ensureMovieNameExistsMiddleware,
  createMovieController
);
moviesRoutes.get("", listMovieController);
moviesRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(movieUpdateSchema),
  ensureMovieIdExistsMiddleware,
  ensureMovieNameExistsMiddleware,
  updateMovieController
);
moviesRoutes.delete(
  "/:id",
  ensureMovieIdExistsMiddleware,
  deleteMovieController
);

export default moviesRoutes;
