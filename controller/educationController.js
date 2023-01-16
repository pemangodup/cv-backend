const Education = require('../model/Education');
const educationController = {
  // @Desc        Get the detail of education
  // @Route       GET /v1/cv/api/education
  // @Access      Private
  getEducation: async (req, res, next) => {
    try {
      const data = await Education.find();
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(200).json({
        success: false,
        data: '',
      });
    }
  },

  // @Desc        Post the detail of education
  // @Route       POST /v1/cv/api/education
  // @Access      Private
  postEducation: async (req, res, next) => {
    const data = req.body;
    try {
      const education = await Education.create(data);
      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      console.log(error);
      res.send({
        success: false,
        data: '',
      });
    }
  },
};
module.exports = educationController;
