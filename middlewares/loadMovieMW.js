/**
 * DB-ből movie ki + kommentjei, ha nemlétezik redirect /-re, next-et hívok
 * @param objRepo
 */
module.exports = (objRepo) => {
    const {MovieModel} = objRepo;
    return async (req, res, next) => {
        const {id} = req.params;
        const movie = await MovieModel.findById(id);
        res.locals.movie = movie;
        return next();
    }
}