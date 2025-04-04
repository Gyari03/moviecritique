/**
 * DB-ből movie ki + kommentjei, ha nemlétezik redirect /-re, next-et hívok
 * @param objRepo
 */
module.exports = (objRepo) => {
    (req, res, next) => {
        return next();
    }
}