/**
 * Kell egy pontszámnak lennie 1-10-ig és egy nem-üres szövegnek lennie + lementi a db-be
 * @param objRepo
 */
module.exports = (objRepo) => {
    const {ReviewModel} = objRepo;
    return async (req, res, next) => {
        const {id:movieId} = req.params;
        const userId= req.session.user.id;
        const {Comment,score} = req.body;

        if(!movieId || !userId || !Comment || !score){
            return res.status(400).send(`<img src="https://http.cat/400.jpg" alt="400 Bad Request">`);
        }

        const newreview = new ReviewModel;
        newreview.user=userId;
        newreview.movie=movieId;
        newreview.comment=Comment;
        newreview.score = score;
        await newreview.save();

        return next();


    }
}