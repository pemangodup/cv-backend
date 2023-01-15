const Experience = require('../model/Experience');
const experiencesController = {
  // @Desc          Get experieces details
  // @Route         GET v1/cv/api/experience
  // @Access        Private
  getExperiences: (req, res, next) => {},
  // @Desc          Get experieces details
  // @Route         GET v1/cv/api/experience
  // @Access        Private
  postExperiences: async (req, res, next) => {
    const data = req.body;
    console.log(data);
    try {
      const experience = await Experience.create(data);
      res.status(200).json({
        success: true,
        data: experience,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        data: '',
      });
    }
  },
};
module.exports = experiencesController;
