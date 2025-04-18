/**
 * DB-ben egy új értékelésnél updateli a movie score-ját
 * Természetesen nem optimális ez a módszer hogy minden alkalommal az elejéről kiszámoljuk a scoret.
 */

module.exports = (objRepo) => {
    const {MovieModel, ReviewModel} = objRepo;
    return async (req,res,next) => {
        const {id} = req.params;
        const movie = await MovieModel.findById(id);
        res.locals.movie = movie;

        const reviews = await ReviewModel.find({movie: id});
        if(reviews.length > 0){
            let totalScore = 0;

            for(let i=0;i<reviews.length;i++){
                totalScore += reviews[i].score;
            }

            const averageScore = totalScore / reviews.length;

            movie.Score = averageScore;
            await movie.save();
        }

        return res.redirect('/movie/' + id);
    }
}