/**
 * ha nincs belépve a user, akkor átírányítom /login-ra, ha be van lépve next-et hívok
 * @param objRepo
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        return next();
    }
}