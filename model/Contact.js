const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  contactMedium: {
    type: String,
    required: [true, 'medium is empty'],
    trim: true,
  },
  contactId: {
    type: String,
    required: [true, 'contactId is empty'],
    trim: true,
  },
});
module.exports = mongoose.model('Contact', ContactSchema);
