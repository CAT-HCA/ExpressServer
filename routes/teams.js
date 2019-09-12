const express = require('express');
const teamsRouter = express.Router();
const fs = require('fs');
const dataPath = './data/';

teamsRouter.get('/', function(request, response) {
    response.end(fs.readFileSync(dataPath + 'teams.json'));
    }
);

module.exports = teamsRouter;