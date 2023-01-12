const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });
//JSON Parser
app.use(express.json());

//
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Route file
const homeRoute = require('./routes/homeRoute');

//
app.use('/v1/cv/api', homeRoute);

//
connectDB()
  .then(
    app.listen(process.env.PORT, () => {
      console.log('App running in the port no 5000');
    })
  )
  .catch((err) => {
    console.log(err);
  });
