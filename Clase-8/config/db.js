const mongoose = require("mongoose");
require("dotenv").config(); // Carga las variables de entorno desde un archivo .env
const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
