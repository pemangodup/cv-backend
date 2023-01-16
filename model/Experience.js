const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: [true, 'Title is not given'],
    trim: true,
  },
  employerName: {
    type: String,
    required: [true, 'Comany name is not given'],
    trim: true,
  },
  imgUrl: {
    type: String,
    required: [true, 'Image url is required'],
    trim: true,
  },
  jobDescription: {
    type: String,
    required: [true, 'Job description is required'],
    trim: true,
    maxlength: [500, 'More than 200 characters'],
  },
});
module.exports = mongoose.model('Experience', ExperienceSchema);
