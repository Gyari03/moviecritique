/**
 * DB-ből profilt betölt
 * @param objRepo
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        res.locals.profile = {
            _id: 12321847,
            Email: "Józsi@bme.hu",
            Username: "Jozsika123",
            Password: "rockyou"
        }
        return next();
    }
}