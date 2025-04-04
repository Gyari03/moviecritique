/**
 * ha nincs belépve a user, akkor átírányítom /login-ra, ha be van lépve next-et hívok
 * @param objRepo
 */
module.exports = (objRepo) => {
    (req, res, next) => {
        return next();
    }
}