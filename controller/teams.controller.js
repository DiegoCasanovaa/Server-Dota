const axios = require('axios');
const { response } = require('express')


const API = process.env.API_URL;


const getTeams = (req, res) =>{ 

    axios.get(`${API}/teams`)
    .then( teams => { 

        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(teams.data);

    })

}

const getTeamsById =  (req, res) => { 

    console.log(req.params.team_id)
    
    const team_id = req.params.team_id

    axios.get(`${API}/teams/${team_id}`)
    .then( team => { 
        
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(team.data);

    })

}

const getPlayersByTeamId =  (req, res) => { 

    console.log(req.params.team_id)
    
    const team_id = req.params.team_id

    axios.get(`${API}/teams/${team_id}/players`)
    .then( team_player => { 
        
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(team_player.data);

    })

}

module.exports = { getTeams , getTeamsById, getPlayersByTeamId }

