const express = require('express');
const router = express.Router();

const { AunthLogin } = require('../controllers/LoginAuth.controoler');

router.post('/', AunthLogin);

module.exports = router;
