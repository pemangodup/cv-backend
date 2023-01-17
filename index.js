const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');
const Home = require('./model/Home');
// const colors = require('colors');

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://clever-ruby-raincoat.cyclic.app',
    ],
  })
);

dotenv.config({ path: './config/config.env' });
//JSON Parser
app.use(express.json());

//
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Route file
const homeRoute = require('./routes/homeRoute');
const aboutRoute = require('./routes/aboutRoutes');
const experienceRoute = require('./routes/experienceRoute');
const contactRoute = require('./routes/contactRoutes');
const educationRoute = require('./routes/educationRoutes');

//
app.use('/', async (req, res, next) => {
  res.send('Hello World');
  const h = await Home.find();
  res.send('Hello World');
  res.status(200).json({
    success: true,
  });
  console.log(h);
});
app.use('/v1/cv/api', homeRoute);
app.use('/v1/cv/api', aboutRoute);
app.use('/v1/cv/api', experienceRoute);
app.use('/v1/cv/api', contactRoute);
app.use('/v1/cv/api', educationRoute);
//
connectDB()
  .then(
    app.listen(process.env.PORT, () => {
      console.log('App running in the port no 5000'.cyan);
    })
  )
  .catch((err) => {
    console.log(err);
  });
