/**
 * html-t ad ki magából
 * @param objRepo
 * @param view
 */
module.exports = (objRepo, view) => {
    return (req, res, next) => {
        res.render(view,{});
    }
}