const mongoose = require('mongoose');

const config = require('config'); // library to help use global variables

const db = config.get('mongoURI'); //Get the Connection string  for the mongoDB cloud Database

mongoose.set('strictQuery', true); //T o suppress a warning when connecting to Db ( can be removed )
const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true }); //returns a promise

    console.log('MongoDb Database connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); //Exit when failed to connect
  }
};
module.exports = connectDB;
