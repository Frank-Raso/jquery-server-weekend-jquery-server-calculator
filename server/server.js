// require
const express = require( 'express');
const app = express();
const bodyParser = require('body-parser');
const equation = require('./modules/calcs/calc');
// app use
app.use( express.static ('./server/public'));
app.use( bodyParser.urlencoded( { extended: true}));
app.use ('/calc', equation);
// global
const port = 5001;
app.listen( port,() => {
    console.log('server is up on', port);
});
