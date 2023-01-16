const Contact = require('../model/Contact');
const contactController = {
  // @Desc        Get contact details
  // @Route       GET v1/cv/api/contact
  // @Access      Private
  getContact: async (req, res, next) => {
    try {
      const data = await Contact.find();
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        data: '',
      });
    }
  },

  // @Desc        Post contact details
  // @Route       POST v1/cv/api/contact
  // @Access      Private
  postContact: async (req, res, next) => {
    const data = req.body;
    try {
      const contact = await Contact.create(data);
      res.status(200).json({
        success: true,
        data: contact,
      });
    } catch (error) {
      console.log(error);
      res.status(200).json({
        success: false,
        data: '',
      });
    }
  },
};
module.exports = contactController;
