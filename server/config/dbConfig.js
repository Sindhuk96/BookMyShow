const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("connected", () => {
    console.log("Connection successful");
});


