const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');

//JSON Parser
app.use(express.json());

//
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Route file
const homeRoute = require('./routes/homeRoute');

dotenv.config({ path: './config/config.env' });

//
app.use('/v1/cv/api', homeRoute);

//
app.listen(process.env.PORT, () => {
  console.log('App running in the port no 5000');
});
