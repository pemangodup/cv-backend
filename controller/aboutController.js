const About = require('../model/About');

const aboutController = {
  // @desc         Get about details
  // @route        GET v1/cv/api/about
  // @access       Private
  getAbout: async (req, res, next) => {
    console.log('Get data'.magenta);
    let data;
    try {
      data = await About.find();
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

  // @desc          Post about data
  // @route         POST v1/cv/api/about
  // @access        Private
  postAbout: async (req, res, next) => {
    console.log('Get data'.magenta);
    const data = req.body;
    try {
      const h = await About.create(data);
      res.status(200).json({
        success: true,
        data: h,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = aboutController;
