/**
 * DB-ből minden movie-t betölt
 * @param objRepo
 */
module.exports = (objRepo) => {
    const {ReviewModel} = objRepo;
    return async (req, res, next) => {
        const comments = await ReviewModel.find({});

        res.locals.comments = comments;
        return next();
    }
}