const express = require('express');
const router = express.Router();

const { getHome, postHome } = require('../controller/homeController');

router.route('/home').get(getHome).post(postHome);

module.exports = router;
