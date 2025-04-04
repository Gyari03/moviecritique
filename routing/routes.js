const authMW = require('../middlewares/authMW');
const checkLoginMW = require('../middlewares/checkLoginMW');
const deleteMovieMW = require('../middlewares/deleteMovieMW');
const editprofileMW  = require('../middlewares/editProfileMW');
const loadMovieMW = require('../middlewares/loadMovieMW');
const loadMoviesMW = require('../middlewares/loadMoviesMW');
const loadProfileMW = require('../middlewares/loadProfileMW');
const loginMW = require('../middlewares/loginMW');
const logoutMW = require('../middlewares/logoutMW');
const renderMW = require('../middlewares/renderMW');
const saveCommentMW = require('../middlewares/saveCommentMW');
const saveMovieMW = require('../middlewares/saveMovieMW');

function subscribeToRoutes(app){
    const objRepo = {};
    app.get('/',authMW(objRepo),loadMoviesMW(objRepo),renderMW(objRepo,'tables'));


    app.get('/login',checkLoginMW(objRepo),renderMW(objRepo,'login'));
    app.post('/login',loginMW(objRepo));

    app.get('/movie/new',authMW(objRepo),renderMW(objRepo,'createmovie'));
    app.get('/movie/:id/edit',authMW(objRepo),renderMW(objRepo,'modifymovie'));
    app.post('/movie/:id/edit',authMW(objRepo),saveMovieMW(objRepo));
    app.post('/movie/:id/comment',authMW(objRepo),saveCommentMW(objRepo));
    app.post('/movie/:id/delete',authMW(objRepo),deleteMovieMW(objRepo));
    app.get('/movie/:id',authMW(objRepo),renderMW(objRepo,'movie'));

    app.post('/logout',authMW(objRepo),logoutMW(objRepo));
    app.get('/profile',authMW(objRepo),renderMW(objRepo,'profile'));
    app.post('/profile/edit',authMW(objRepo),editprofileMW(objRepo));
}

module.exports = subscribeToRoutes;