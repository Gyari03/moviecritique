const express = require('express');
const app = express();


const authMW = require('./middlewares/authMW');
const checkLoginMW = require('middlewares/checkLoginMW');
const deleteMovieMW = require('middlewares/deleteMovieMW');
const editprofileMW  = require('middlewares/editProfileMW');
const loadmMovieMW = require('middlewares/loadMovieMW');
const loadMoviesMW = require('middlewares/loadMoviesMW');
const loadProfileMW = require('middlewares/loadProfileMW');
const loginMW = require('middlewares/loginMW');
const logoutMW = require('middlewares/logoutMW');
const renderMW = require('middlewares/renderMW');
const saveCommentMW = require('middlewares/saveCommentMW');
const saveMovieMW = require('middlewares/saveMovieMW');

app.use(express.static('public'));
app.listen(3000,()=>{console.log("Listening on port 3000")})