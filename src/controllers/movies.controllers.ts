import { Request, Response } from "express";
import {
  IAllMoviesPaginationReturn,
  IMovie,
} from "../interfaces/movies.interfaces";
import createMovieService from "../services/movies/createMovies.service";
import deleteMovieService from "../services/movies/deleteMovies.service";
import listMovieService from "../services/movies/listMovies.service";
import updateMovieService from "../services/movies/updateMovies.service";

const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieData: IMovie = req.body;

  const newMovie = await createMovieService(movieData);

  return res.status(201).json(newMovie);
};

const listMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let { perPage, page, sort, order } = req.query;
  if (!sort) order = "asc";
  if (sort !== "price" && sort !== "duration") sort = "id";
  if (!sort) {
    sort = "id";
  }
  if (!order) order = "asc";

  const listMovies: IAllMoviesPaginationReturn = await listMovieService(
    perPage,
    page,
    sort,
    order
  );
  return res.json(listMovies);
};

const updateMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieData = req.body;
  const idMovie = parseInt(req.params.id);
  const updatedMovie = await updateMovieService(movieData, idMovie);

  return res.json(updatedMovie);
};

const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteMovieService(parseInt(req.params.id));

  return res.status(204).send();
};

export {
  createMovieController,
  listMovieController,
  updateMovieController,
  deleteMovieController,
};
