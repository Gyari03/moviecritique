/**
 * ha a user be van lépve, ne tudjon a /login oldalra menni, hanem /-re kerül
 * @param objRepo
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        return next();
    }
}