const express = require('express');
const app = express();

require('dotenv').config({path:'example.env'});

const subscribeToRoutes = require('./routing/routes.js');
const connectDB = require('./config/db');

app.use(express.static('public'));
subscribeToRoutes(app);

const PORT = process.env.PORT;

connectDB();
app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)})