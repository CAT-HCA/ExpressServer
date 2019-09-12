const express = require('express');
const leaguesRouter = express.Router();
const fs = require('fs');
const dataPath = './data/';

leaguesRouter.get('/', function(request, response) {
    response.end(fs.readFileSync(dataPath + 'leagues.json'));
    }
);

module.exports = leaguesRouter;