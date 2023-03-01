import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { IAllMoviesPaginationReturn } from "../../interfaces/movies.interfaces";
import { returnAllMoviesSchema } from "../../schemas/movies.schemas";

const listMovieService = async (
  perPage: any,
  page: any,
  sort: any,
  order: any
): Promise<IAllMoviesPaginationReturn> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  const countMovies = await movieRepository.count();

  let take: number = Number(perPage) || 5;
  let skip: number = Number(page) || 1;
  if (take > 5 || take <= 0) take = 5;
  if (skip <= 0) skip = 1;

  const findMovies = await movieRepository.find({
    take,
    skip: take * (skip - 1),
    order: { [sort!]: order },
  });

  const prevPage =
    skip > 1
      ? `http://localhost:3000/movies?page=${skip - 1}&perPage=${take}`
      : null;
  const nextPage =
    countMovies / take > skip
      ? `http://localhost:3000/movies?page=${skip + 1}&perPage=${take}`
      : null;

  const movies = returnAllMoviesSchema.parse(findMovies);

  const moviesReturn = {
    prevPage: prevPage,
    nextPage: nextPage,
    count: countMovies,
    data: movies,
  };

  return moviesReturn;
};

export default listMovieService;
