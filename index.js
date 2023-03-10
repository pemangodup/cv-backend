const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');
const colors = require('colors');

app.use(
  cors({
    origin: [
      'https://colorful-hare-cape.cyclic.app',
      'http://localhost:3000',
      'https://pemangodup.github.io',
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
const sendMailRoute = require('./routes/sendMailRoute');

//

app.use('/v1/cv/api', homeRoute);
app.use('/v1/cv/api', aboutRoute);
app.use('/v1/cv/api', experienceRoute);
app.use('/v1/cv/api', contactRoute);
app.use('/v1/cv/api', educationRoute);
app.use('/v1/cv/api', sendMailRoute);
//
connectDB()
  .then(
    app.listen(process.env.PORT, () => {
      console.log('App running in the port no 5000'.rainbow);
    })
  )
  .catch((err) => {
    console.log(err);
  });
