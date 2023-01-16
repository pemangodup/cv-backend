const mongoose = require('mongoose');
const EducationSchema = new mongoose.Schema({
  degree: {
    type: String,
    trim: true,
    required: [true, 'Degree is not given'],
  },
  institute: {
    type: String,
    trim: true,
    required: [true, 'Institute name is not given'],
  },
  address: {
    type: String,
    trim: true,
    required: [true, 'Address is not given'],
  },
  website: {
    type: String,
    trim: true,
  },
});
module.exports = mongoose.model('Education', EducationSchema);
