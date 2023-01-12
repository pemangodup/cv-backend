const express = require('express');
const router = express.Router();

const homeController = require('../controller/homeController');

router.route('/home').get(homeController);

module.exports = router;
