/**
 * DB-ből minden movie-t betölt
 * @param objRepo
 */
module.exports = (objRepo) => {
    const {MovieModel} = objRepo;
    return async (req, res, next) => {
        const movies = await MovieModel.find({});

        res.locals.movies = movies;
        return next();
    }
}