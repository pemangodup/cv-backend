const Home = require('../model/Home');
const home = {
  // @ Desc     Get the data for the home page
  // @ Route:   Get /v1/cv/api/home
  // @access    Public
  getHome: async (req, res, next) => {
    res.send('hello world');
    // const data = await Home.find();
    // console.log(data);
    // res.status(200).json({
    //   success: true,
    //   data,
    // });
  },

  // @ Desc     Add home page detaials
  // @Route     POST /v1/cv/api/home
  // @Access    Private
  postHome: async (req, res, next) => {
    const data = req.body;
    try {
      const detail = await Home.create(data);
      console.log(detail);
      response(res, 200, true, detail);
    } catch (error) {
      console.log(error.code);
      errorResponse(res, 400, false, error.code);
    }
  },
};

const response = (res, statusCode, success, data) => {
  res.status(statusCode).json({
    success,
    data,
  });
};
const errorResponse = (res, statusCode, success, data) => {
  res.status(statusCode).json({
    success,
    data,
  });
};

module.exports = home;
