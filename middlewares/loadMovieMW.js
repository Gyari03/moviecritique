/**
 * DB-ből movie ki + kommentjei, ha nemlétezik redirect /-re, next-et hívok
 * @param objRepo
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        return next();
    }
}