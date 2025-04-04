const express = require('express');
const app = express();

const subscribeToRoutes = require('./routing/routes.js');

app.use(express.static('public'));
subscribeToRoutes(app);

app.listen(3000,()=>{console.log("Listening on port 3000")})