/**
 * menti az adatokat az adatbázisba
 * Ha hiányzik az _id akkor új filmet ment le az adatbázisba mert az a /movie/new endpointból van
 * Ha nem hiányzik az _id akkor meglévő filmet módosítunk
 * @param objRepo
 */
module.exports = (objRepo) => {
    const {MovieModel} = objRepo;

    return async (req, res, next) => {
        const {Title, Genre, Director } = req.body;
        const movieId = req.params.id;

        if(!Title || !Genre || !Director){
            return res.status(400).send(`<img src="https://http.cat/400.jpg" alt="400 Bad Request">`);
        }
        try{
            if(movieId){
                await MovieModel.findByIdAndUpdate(movieId,{Title,Genre,Director});
            }else{
                const newMovie = new MovieModel({Title,Genre,Director});
                await newMovie.save();
            }
        }catch(error){
            console.error(error);
            return res.status(500).send(`<img src="https://http.cat/500.jpg" alt="500 Internal Server Error">`);
        }

        return res.redirect('/');
    }
}