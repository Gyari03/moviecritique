const express = require('express');
const app = express();

require('dotenv').config({path:'example.env'});

app.set('view engine', 'ejs');

const subscribeToRoutes = require('./routing/routes.js');
const {connectDB} = require('./config/db');

//app.use(express.static('public'));
app.use(express.static('static'));
subscribeToRoutes(app);

const PORT = process.env.PORT;

connectDB();
app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)})