const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'No user Added'],
    trim: true,
    maxlength: [30, 'Maximum length of name is 30'],
    unique: [true, 'User already exists'],
    required: [true, 'Please enter the name'],
  },
  jobTitle: {
    type: String,
    maxlength: [50, 'Length is more than 50'],
    trim: true,
  },
});

module.exports = mongoose.model('Home', HomeSchema);
