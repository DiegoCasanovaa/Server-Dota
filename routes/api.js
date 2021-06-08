const express = require('express');
const { getHeroes } = require('../controller/heroes.controller');
const { getTeams, getTeamsById, getPlayersByTeamId } = require('../controller/teams.controller');

const router = express.Router();


router.get('/', (req, res) =>{

    res.send('api works');

});

router.get('/heroes', getHeroes)

router.get('/teams', getTeams )

router.get('/teams/:team_id', getTeamsById )

router.get('/teams/:team_id/players', getPlayersByTeamId )

module.exports = router;