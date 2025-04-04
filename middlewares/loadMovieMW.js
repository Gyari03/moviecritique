/**
 * DB-ből movie ki + kommentjei, ha nemlétezik redirect /-re, next-et hívok
 * @param objRepo
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        res.locals.movie = {
            _id: '11111111111111',
            Title: 'Breaking bad',
            Genre: 'Cooking show',
            Director: 'Vince Gilligan',
            Score: 10
        }
        return next();
    }
}