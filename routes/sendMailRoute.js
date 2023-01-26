const express = require('express');
const router = express.Router();
const { sendMail } = require('../controller/sendMail');

router.route('/sendMail').post(sendMail);

module.exports = router;
