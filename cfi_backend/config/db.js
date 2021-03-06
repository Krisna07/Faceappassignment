const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //creating a connection with mongodb
    const conn = await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    //error handling
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
