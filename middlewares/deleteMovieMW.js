/**
 * törli a filmet az adatbázisból és átirányítja a usert a /-re
 * @param objRepo
 */
module.exports = (objRepo) => {
    const {MovieModel} = objRepo;
    return async (req, res, next) => {
        const {id} = req.params;
        await MovieModel.findByIdAndDelete(id);
        return res.redirect("/");
    }
}