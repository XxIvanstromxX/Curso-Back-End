const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:cursobackend123@cluster0.b1idthj.mongodb.net/crud_db";

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión a la base de datos fue exitosa");
  } catch (error) {
    console.log("Error en la conexión de mongodb", error);
    process.exit(1); //Opcional: Terminar la aplicación si la conexión falla
  }
}

module.exports = connectDB;
