const mongoose = require('mongoose');

const connectDB = async () => {
  if (process.env.NODE_ENV === 'development') {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.9wgye.mongodb.net/${process.env.MONGO_DATABASE_NAME}`
    );
  }
};
module.exports = connectDB;
