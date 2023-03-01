import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  movieSchema,
  returnAllMoviesPaginationSchema,
  returnAllMoviesSchema,
  returnMovieSchema,
} from "../schemas/movies.schemas";

type IMovie = z.infer<typeof movieSchema>;
type IMovieReturn = z.infer<typeof returnMovieSchema>;
type IMovieUpdate = DeepPartial<IMovie>;
type IAllMoviesReturn = z.infer<typeof returnAllMoviesSchema>;
type IAllMoviesPaginationReturn = z.infer<
  typeof returnAllMoviesPaginationSchema
>;
export {
  IMovie,
  IMovieReturn,
  IAllMoviesReturn,
  IMovieUpdate,
  IAllMoviesPaginationReturn,
};
