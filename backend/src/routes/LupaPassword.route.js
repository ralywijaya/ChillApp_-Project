const express = require('express');
const router = express.Router();

const { LupaPassword } = require('../controllers/LupaPassword.controller');

router.post('/', LupaPassword);

module.exports = router;
