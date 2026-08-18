const express = require('express');
const router = express.Router();

const { GantiPassword } = require('../controllers/GantiPassword.controller');

router.post('/', GantiPassword);

module.exports = router;
