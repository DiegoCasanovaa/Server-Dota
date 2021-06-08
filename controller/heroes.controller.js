
// declare axios for making http requests
const axios = require('axios');


const API = process.env.API_URL;

const getHeroes = (req, res) =>{ 

    axios.get(`${API}/heroStats`)
        .then( heroes => { 
    
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json(heroes.data);

    })

}

module.exports ={ getHeroes }