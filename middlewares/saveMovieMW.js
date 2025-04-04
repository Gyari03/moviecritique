/**
 * menti az adatokat az adatbázisba
 * Ha hiányzik az _id akkor új filmet ment le az adatbázisba mert az a /movie/new endpointból van
 * Ha nem hiányzik az _id akkor meglévő filmet módosítunk
 * @param objRepo
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        return next();
    }
}