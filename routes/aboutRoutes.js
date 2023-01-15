const express = require('express');
const router = express.Router();
const { getAbout, postAbout } = require('../controller/aboutController');

router.route('/about').get(getAbout).post(postAbout);

module.exports = router;
