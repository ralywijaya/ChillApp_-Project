const axios = require("axios");
require('dotenv').config();

const tmdb = axios.create({

    baseURL:"https://api.themoviedb.org/3",

    headers:{
        Authorization:
        `Bearer ${process.env.TMDB_TOKEN}`
    }

});


module.exports = tmdb;