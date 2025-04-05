/**
 * elfelejtett jelszó emailjét logolja a szerveren
 * @param objRepo
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        const {Email} = req.body;
        console.log(`Elfelejtett jelszo emailje: ${Email}`);
        return res.redirect('/login');
    }
}