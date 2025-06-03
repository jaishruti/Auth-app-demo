const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connection successful");
    })
    .catch((err) => {
      console.log("db connection issues");
      console.error(err);
      process.exit(1);
    });
};
