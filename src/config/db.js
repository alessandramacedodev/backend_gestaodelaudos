// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/laudos-periciais', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`🟢 MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`🔴 Erro ao conectar ao MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
