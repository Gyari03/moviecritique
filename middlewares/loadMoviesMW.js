/**
 * DB-ből minden movie-t betölt
 * @param objRepo
 */
module.exports = (objRepo) => {
    return (req, res, next) => {
        res.locals.movies = [{
            _id: '11111111111111',
            Title: 'Breaking bad',
            Genre: 'Cooking show',
            Director: 'Vince Gilligan',
            Score: 10
        },{
            _id: '2222222222222222',
            Title: 'Breaking good',
            Genre: 'Slice of life',
            Director: 'Gingan Villice',
            Score: 7
        }]
        return next();
    }
}