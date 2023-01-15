const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: [true, 'Subject is not added'],
    trim: true,
    maxlength: [30, 'Length is more than 20 character'],
  },
  aboutPerson: {
    type: String,
    required: [true, 'Person details is not added'],
    trim: true,
  },
});
module.exports = mongoose.model('About', AboutSchema);
