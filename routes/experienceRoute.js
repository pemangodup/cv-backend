const express = require('express');
const router = express.Router();
const {
  getExperiences,
  postExperiences,
} = require('../controller/experiencesController');

router.route('/experience').get(getExperiences).post(postExperiences);
module.exports = router;
