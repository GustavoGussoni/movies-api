import { z } from "zod";

const movieSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().optional(),
  duration: z.number(),
  price: z.number(),
});

const returnMovieSchema = movieSchema.extend({
  id: z.number(),
});

const returnAllMoviesSchema = returnMovieSchema.array();

export { movieSchema, returnMovieSchema, returnAllMoviesSchema };
