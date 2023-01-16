const express = require('express');
const router = express.Router();
const {
  getEducation,
  postEducation,
} = require('../controller/educationController');
router.route('/education').get(getEducation).post(postEducation);
module.exports = router;
