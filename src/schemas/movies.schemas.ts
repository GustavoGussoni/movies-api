import { z } from "zod";

const movieSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().nullable().optional(),
  duration: z.number().positive(),
  price: z.number().positive().int(),
});

const returnMovieSchema = movieSchema.extend({
  id: z.number(),
});

const movieUpdateSchema = movieSchema.partial();

const returnAllMoviesSchema = returnMovieSchema.array();

const returnAllMoviesPaginationSchema = z.object({
  prevPage: z.string().nullable(),
  nextPage: z.string().nullable(),
  count: z.number(),
  data: returnAllMoviesSchema,
});
export {
  movieSchema,
  returnMovieSchema,
  returnAllMoviesSchema,
  movieUpdateSchema,
  returnAllMoviesPaginationSchema,
};
