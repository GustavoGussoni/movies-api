import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";

const ensureMovieNameExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  if (req.body.name) {
    const verifyName = await movieRepository.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (verifyName) {
      throw new AppError("Movie already exists.", 409);
    }
  }
  return next();
};

export default ensureMovieNameExistsMiddleware;
