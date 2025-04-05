const express = require('express');
const app = express();
const session = require("express-session");
require('dotenv').config({path:'example.env'});

app.use(session({
    secret:process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie:{
        secure: false,
        maxAge: 3200000,
    }
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const subscribeToRoutes = require('./routing/routes.js');
const {connectDB} = require('./config/db');

//app.use(express.static('public'));
app.use(express.static('static'));
subscribeToRoutes(app);

const PORT = process.env.PORT;

connectDB();
app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)})