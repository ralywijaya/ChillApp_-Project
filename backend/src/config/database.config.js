const knexconfig = require('../config/knexfile');
const knex = require('knex');

const config = knexconfig.development;

module.exports = knex(config);
