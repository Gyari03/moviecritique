const authMW = require('../middlewares/authMW');
const checkLoginMW = require('../middlewares/checkLoginMW');
const deleteMovieMW = require('../middlewares/deleteMovieMW');
const editprofileMW  = require('../middlewares/editProfileMW');
const registerProfileMW = require('../middlewares/registerProfileMW');
const loadMovieMW = require('../middlewares/loadMovieMW');
const loadMoviesMW = require('../middlewares/loadMoviesMW');
const loadProfileMW = require('../middlewares/loadProfileMW');
const loginMW = require('../middlewares/loginMW');
const logoutMW = require('../middlewares/logoutMW');
const renderMW = require('../middlewares/renderMW');
const saveCommentMW = require('../middlewares/saveCommentMW');
const saveMovieMW = require('../middlewares/saveMovieMW');
const forgotPasswordMW = require('../middlewares/forgotPasswordMW');

const MovieModel = require("../models/movie");
const ReviewModel = require("../models/review");
const UserModel = require("../models/user");

function subscribeToRoutes(app){
    const objRepo = {
        MovieModel,
        ReviewModel,
        UserModel,
    };

    app.get('/login',checkLoginMW(objRepo),renderMW(objRepo,'login'));
    app.post('/login',loginMW(objRepo));

    app.get('/register',checkLoginMW(objRepo),renderMW(objRepo,'register')); //kész
    app.post('/register',registerProfileMW(objRepo)); //kész

    app.get('/forgot-password',checkLoginMW(), renderMW(objRepo,'forgotpassword')); //kész
    app.post('/forgot-password',forgotPasswordMW()); //kész

    app.get('/movie/new',authMW(objRepo),renderMW(objRepo,'createmovie')); //kész
    app.post('/movie/new',authMW(objRepo),saveMovieMW(objRepo))  //kész

    app.get('/movie/:id/edit',authMW(objRepo),loadMovieMW(objRepo),renderMW(objRepo,'modifymovie'));
    app.post('/movie/:id/edit',authMW(objRepo),saveMovieMW(objRepo));
    app.post('/movie/:id/comment',authMW(objRepo),saveCommentMW(objRepo));
    app.post('/movie/:id/delete',authMW(objRepo),deleteMovieMW(objRepo));
    app.get('/movie/:id',authMW(objRepo),renderMW(objRepo,'movie'));

    app.post('/logout',authMW(objRepo),logoutMW(objRepo));
    app.get('/profile',authMW(objRepo),loadProfileMW(objRepo),renderMW(objRepo,'profile'));
    app.post('/profile/edit',authMW(objRepo),editprofileMW(objRepo));

    app.get('/',authMW(objRepo),loadMoviesMW(objRepo),renderMW(objRepo,'tables'));

    app.use((req, res, next) => {
        res.status(404);
        return res.status(404).send(`<img src="https://http.cat/404.jpg" alt="404 Not Found">`);
    });

    // Error handling
    app.use((err,req,res,next) => {
       console.log(err);
        return res.status(500).send(`<img src="https://http.cat/500.jpg" alt="500 Internal Server Error">`);
    });
}

module.exports = subscribeToRoutes;