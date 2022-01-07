const express = require('express');
const loginController = require('./loginController');

const router = express.Router();

router.post('/', loginController);

module.exports = router;
