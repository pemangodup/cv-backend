const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');
const colors = require('colors');

app.use(
  cors({
    origin: 'http://localhost:3000',
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

//
app.use('/v1/cv/api', homeRoute);
app.use('/v1/cv/api', aboutRoute);
app.use('/v1/cv/api', experienceRoute);
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
