const express = require('express');
const router = express.Router();
const { getContact, postContact } = require('../controller/contactController');

router.route('/contact').get(getContact).post(postContact);

module.exports = router;
