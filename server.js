const http = require('http');

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const logger = require('logger').createLogger('server.log');

var app = express();

var leagues = require('./routes/leagues');
var teams = require('./routes/teams');

// register hbs partials
hbs.registerPartials(__dirname + '/views/partials');
// set view engine
app.set('view engine', 'hbs');

// partials
hbs.registerHelper('getCurrentYear', () =>
{
    return new Date().getFullYear();
});

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// custom middleware
app.use((request, response, next) =>
{
    var now = new Date().toString();
    logger.info(`${now}: ${request.method} ${request.url}`);
    next();
});

// use routes
app.get('/', (request, response) => 
{
    response.render('index.hbs', { pageTitle: 'Index' });
});

app.use('/leagues', leagues);

app.use('/teams', teams);

// Error-handling middleware 
// Handle http 404 response
app.use((request, response, next) =>
{
    response.status(404).redirect('/404.html');
});

const port = 3000;
const server = http.createServer(app).listen(port);

server.on('listening', () =>
{
    console.log(`Server Listening on ${server.address().port}`);
});