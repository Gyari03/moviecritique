/**
 * DB-ből minden movie-t betölt
 * @param objRepo
 */
module.exports = (objRepo) => {
    const {ReviewModel} = objRepo;
    return async (req, res, next) => {
        const movieId = req.params.id;
        const comments = await ReviewModel.find({movie:movieId}).populate("user");

        res.locals.comments = comments;
        return next();
    }
}